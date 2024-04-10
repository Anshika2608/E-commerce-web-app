import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

import { CiHeart } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
function Navbar() {
  const [dropdownState, setDropdownState] = useState({
    isMenuOpen: false,
    isSubMenuOpen: false,
    isWomenMenuOpen: false,
    isKidsMenuOpen: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownState({
      ...dropdownState,
      [dropdown]: !dropdownState[dropdown],
    });
  };
  return (
    <>
      <nav className="flex  justify-around items-center w-full h-24 bg-white shadow-2xl fixed z-50 top-0 ">
        <div>
          <img src={Logo} alt="Logo" className="h-16 w-48 left-4 ml-4 " />
        </div>
        <div className="md:hidden order-last">
          <button
            onClick={() => toggleDropdown("isMenuOpen")}
            className="p-4 focus:outline-none "
          >
            {dropdownState.isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex md:justify-center md:gap-10 md:items-center md:w-full">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-4 text-lg ${isActive ? "underline decoration-2" : ""}`
              }
            >
              Home
            </NavLink>
          </div>

          <div className="relative inline-block group">
            <div className="p-4 text-lg flex items-center">Men </div>
            <div className="absolute  bg-white pt-2 w-36 border border-gray-200 border-t-0 shadow-lg hidden group-hover:block">
              <NavLink
                to="/MenTopwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Topwear
              </NavLink>
              <NavLink
                to="/MenBottomwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Bottomwear
              </NavLink>
              <NavLink
                to="/MenFootwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Footwear
              </NavLink>
            </div>
          </div>
          <div className="relative inline-block group">
            <div className="p-4 text-lg flex items-center">Women </div>
            <div className="absolute  bg-white pt-2 w-36 border border-gray-200 border-t-0 shadow-lg hidden group-hover:block">
              <NavLink
                to="/WomenTopwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Topwear
              </NavLink>
              <NavLink
                to="/WomenBottomwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Bottomwear
              </NavLink>
              <NavLink
                to="/Womenfootwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Footwear
              </NavLink>
            </div>
          </div>
          <div className="relative inline-block group">
            <div className="p-4 text-lg flex items-center">Kids</div>
            <div className="absolute  bg-white pt-2 w-36 border border-gray-200 border-t-0 shadow-lg hidden group-hover:block">
              <NavLink
                to="/topwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Topwear
              </NavLink>
              <NavLink
                to="/bottomwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Bottomwear
              </NavLink>
              <NavLink
                to="/footwear"
                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Footwear
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <NavLink
            to="/Wishlist"
            className={({ isActive }) =>
              `p-2 text-red-500  h-8 block text-3xl mb-3 order-1 ${
                isActive ? "underline decoration-2" : ""
              }`
            }
          >
            <CiHeart />
          </NavLink>
        </div>
      </nav>

      <div
        className={`fixed top-24 left-0 transform transition-transform duration-300 ${
          dropdownState.isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-2/4 h-full bg-white border-b border-gray-200 shadow-lg z-50`}
      >
        <div className=" flex flex-col">
          <div>
            <NavLink
              to="/"
              className="block text-lg p-4 pb-0 text-gray-800 hover:bg-gray-200"
            >
              Home
            </NavLink>
          </div>

          <div className="relative inline-block group">
            <div className="p-4 pb-0 text-lg flex  items-center">
              Men
              <button
                onClick={() => toggleDropdown("isSubMenuOpen")}
                className="text-sm mt-1 ml-1"
              >
                {dropdownState.isSubMenuOpen ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>{" "}
            </div>
            <div
              className={`relative bg-white ${
                dropdownState.isSubMenuOpen ? "block" : "hidden"
              }`}
            >
              <NavLink
                to="/MenTopwear"
                className="block px-8 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Topwear
              </NavLink>
              <NavLink
                to="/MenBottomwear"
                className="block px-8 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Bottomwear
              </NavLink>
              <NavLink
                to="/MenFootwear"
                className="block px-8 py-2  text-gray-800 hover:bg-black hover:text-white"
              >
                Footwear
              </NavLink>
            </div>
          </div>
          <div className="relative inline-block group">
            <div className="p-4 pb-0 text-lg flex items-center">
              Women
              <button
                onClick={() => toggleDropdown("isWomenMenuOpen")}
                className="text-sm mt-1 ml-1"
              >
                {dropdownState.isWomenMenuOpen ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>{" "}
            </div>
            <div
              className={`relative bg-white ${
                dropdownState.isWomenMenuOpen ? "block" : "hidden"
              }`}
            >
              <NavLink
                to="/bottomwear"
                className="block px-8 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Topwear
              </NavLink>
              <NavLink
                to="/topwear"
                className="block px-8 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Bottomwear
              </NavLink>
              <NavLink
                to="/footwear"
                className="block px-8 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Footwear
              </NavLink>
            </div>
          </div>
          <div className="relative inline-block group">
            <div className="p-4 pb-0 text-lg flex items-center">
              Kids
              <button
                onClick={() => toggleDropdown("isKidsMenuOpen")}
                className="text-sm mt-1 ml-1"
              >
                {dropdownState.isKidsMenuOpen ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>{" "}
            </div>
            <div
              className={`relative bg-white ${
                dropdownState.isKidsMenuOpen ? "block" : "hidden"
              }`}
            >
              <NavLink
                to="/topwear"
                className="block px-8 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Topwear
              </NavLink>
              <NavLink
                to="/bottomwear"
                className="block px-8 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Bottomwear
              </NavLink>
              <NavLink
                to="/footwear"
                className="block px-8 py-2 text-gray-800 hover:bg-black hover:text-white"
              >
                Footwear
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
