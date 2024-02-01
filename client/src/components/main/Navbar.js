import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import Sidebar from "./Sidebar";

export default function Navbar({ currentUser, onSectionClick }) {
  const [showSideBar, setShowSideBar] = useState();
  const [showDropList, setShowDropList] = useState(false);
  const navigate = useNavigate();
  const user_links = [
    {
      name: "Home",
      path: "/",
      key: "booking-section",
      pos: onSectionClick.section1,
    },
    {
      name: "Pricing",
      path: "/",
      key: "prices-section",
      pos: onSectionClick.section2,
    },
    {
      name: "About",
      path: "/",
      key: "aboutus-section",
      pos: onSectionClick.section3,
    },
    {
      name: "Contact",
      path: "/",
      key: "contact-section",
      pos: onSectionClick.section4,
    },
  ];

  const admin_links = [
    {
      name: "Users",
      path: "/users",
      key: "admin_users",
    },
    {
      name: "Cars",
      path: "/cars",
      key: "admin_cars",
    },
  ];
  function closeSideBar() {
    setShowSideBar(false);
  }

  const scrollToSection = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className=" bg-blue-100 sticky top-0 z-10 shadow-md shadow-[#808080]">
        <section className="flex items-center justify-between max-w-5xl px-4 mx-auto">
          <a href="/" key="logo" className="py-4 text-xl font-extrabold">
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
            {(currentUser && currentUser.role === "admin"
              ? admin_links
              : window.location.hash === ""
              ? user_links
              : []
            ).map((link, index) => (
              //<button onClick={() => navigate(link.path)}>{link.name}</button>
              <button
                onClick={() => {
                  if (link.path === "/") {
                    scrollToSection(link.pos);
                  } else navigate(link.path);
                }}
                key={link.name}
                className="inline-block h-full text-gray-600 "
              >
                {link.name}
              </button>
            ))}
            {currentUser && currentUser.email ? (
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
        <Sidebar
          close={closeSideBar}
          links={
            currentUser && currentUser.role === "admin"
              ? admin_links
              : user_links
          }
          currentUser={currentUser}
        />
      )}
    </>
  );
}
