import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  /* set toggle Menu */
  const toggleMenu = () => {
    setIsMenuOpen(!ismenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  /* nav items array */

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className=" w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? "sticky top-0 right-0 border-b bg-white duration-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src="" alt="/" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">Nexcent</span>
          </a>
          {/* nav items for large devices*/}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>
          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
              Sign Up
            </button>
          </div>
          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
             onClick={toggleMenu}
            className="text-neutralDGray focus:outline-none focus:text-gray-500">
              {ismenuOpen ? (
                <FaXmark className="h-6 text-neutralDGray" />
              ) : (
                <FaBars className="h-6 text-neutralDGray" />
              )}
            </button>
          </div>
        </div>
        {/* nav items for mobile */}
      </nav>
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ ismenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'} `}>
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-white hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
            </div>

    </header>
  );
};

export default Navbar;
