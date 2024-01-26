import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import Sidebar from "./Sidebar";

export default function Navbar({ currentUser }) {
  const [showSideBar, setShowSideBar] = useState();
  const [showDropList, setShowDropList] = useState(false);
  const navigate = useNavigate();

  const links = [
    {
      name: "Home",
      path: "#booking-section",
      key: "booking-section",
    },
    {
      name: "Pricing",
      path: "#prices-section",
      key: "prices-section",
    },
    {
      name: "About",
      path: "#aboutus-section",
      key: "aboutus-section",
    },
    {
      name: "Contact",
      path: "#contact-section",
      key: "contact-section",
    },
  ];
  function closeSideBar() {
    setShowSideBar(false);
  }
  return (
    <>
      <div className=" bg-[#808080] sticky top-0 z-10 shadow-md shadow-[#808080]">
        <section className="flex items-center justify-between max-w-5xl p-4 mx-auto">
          <a href="/" key="logo" className="text-xl font-extrabold">
            CAR<span className="text-orange-400">SPEEDYRENTAL</span>
          </a>
          <button
            id="mobile-open"
            className="text-3xl md:hidden focus:outline-none"
            onClick={() => setShowSideBar(true)}
          >
            &#9776;
          </button>

          <div className="hidden space-x-4 md:flex">
            {links.map((link, index) => (
              //<button onClick={() => navigate(link.path)}>{link.name}</button>
              <button
                onClick={() => {
                  navigate("/");
                }}
                key={link.name}
              >
                {link.name}
              </button>
            ))}
            {currentUser ? (
              <>
                <div className="relative inline-block text-left">
                  <button
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setShowDropList(!showDropList)}
                  >
                    {currentUser.username}
                  </button>
                  <div
                    className={`absolute right-0.5 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg 
                      ring-1 ring-black ring-opacity-5 focus:outline-none ${
                        !showDropList && "hidden"
                      }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <button
                        className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-200"
                        onClick={() => {
                          navigate("/profile");
                          window.location.reload();
                        }}
                      >
                        My Account
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-200"
                        onClick={() => {
                          navigate("/myreservations");
                          window.location.reload();
                        }}
                      >
                        My Reservations
                      </button>

                      <button
                        className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-200"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                        onClick={() => {
                          AuthService.logout();
                          navigate("/signin");
                          window.location.reload();
                        }}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to={"/signin"} className="nav-link">
                  Sign In
                </Link>
              </>
            )}
          </div>
        </section>
      </div>
      {showSideBar && (
        <Sidebar close={closeSideBar} links={links} currentUser={currentUser} />
      )}
    </>
  );
}
