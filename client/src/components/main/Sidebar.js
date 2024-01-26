//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
export default function Sidebar({ links, close, currentUser }) {
  const navigate = useNavigate();
  return (
    <div
      className="fixed top-0 left-0 h-full w-56 bg-white shadow-sm z-50 md:hidden animate-[slideInLeft_.5s_ease-in-out_forwards]"
      onClick={close}
    >
      {links.map((link) => (
        <button
          className="block py-3 text-xl text-center hover:border-l-4 border-l-orange-400 hover:bg-slate-100"
          onClick={() => {
            navigate("/");
          }}
        >
          {link.name}
        </button>
      ))}

      {currentUser ? (
        <button
          className="block w-full py-3 mx-auto text-xl text-center hover:border-l-4 border-l-orange-400 hover:bg-slate-100"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-3"
          onClick={() => {
            AuthService.logout();
            navigate("/sign");
            window.location.reload();
          }}
        >
          Sign out
        </button>
      ) : (
        <Link
          to={"/signin"}
          className="block py-3 text-xl text-center hover:border-l-4 border-l-orange-400 hover:bg-slate-100"
        >
          Sign In
        </Link>
      )}
    </div>
  );
}
