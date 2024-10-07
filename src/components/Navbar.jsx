import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/NavLogo.svg";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { TbMenuDeep } from "react-icons/tb";

const Navbar = () => {
  const [isCourseOpen, setCourseOpen] = useState(false);
  const [isResourseOpen, setResourceOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const courseRef = useRef(null);
  const resourceRef = useRef(null);

  const toggleCourse = () => {
    setCourseOpen(!isCourseOpen);
    setResourceOpen(false);
  };

  const toggleResource = () => {
    setResourceOpen(!isResourseOpen);
    setCourseOpen(false);
  };

  // Handle outside clicks for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        courseRef.current &&
        !courseRef.current.contains(event.target) &&
        resourceRef.current &&
        !resourceRef.current.contains(event.target)
      ) {
        setCourseOpen(false);
        setResourceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full bg-white shadow-lg">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <Image
                src={Logo}
                width={169}
                height={42}
                sizes="100vw"
                alt="Logo"
                className="w-40 md:w-48 lg:w-52"
              />
            </a>
          </div>

          {/* Nav Items for desktop */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="relative" ref={courseRef}>
              <button
                onClick={toggleCourse}
                className={`inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 py-2 font-semibold ${
                  isCourseOpen ? "text-[#e6a123]" : "text-black"
                }`}
              >
                Courses
                <IoIosArrowDown
                  className={`-mr-1 h-5 w-5 ${
                    isCourseOpen ? "text-[#e6a123]" : "text-gray-400"
                  }`}
                />
              </button>

              {isCourseOpen && (
                <div className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <a
                    href="#"
                    className="block py-4 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Target 2025
                  </a>
                  <a
                    href="#"
                    className="block py-4 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Target 2026
                  </a>
                  <a
                    href="#"
                    className="block py-4 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Classroom Test Series
                  </a>
                  <a
                    href="#"
                    className="block py-4 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    High Yield Test Series
                  </a>
                  <a
                    href="#"
                    className="block py-4 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Masterclass in Biology
                  </a>
                  <a
                    href="#"
                    className="block py-4 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Books
                  </a>
                  <a
                    href="#"
                    className="block py-4 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    All Courses
                  </a>
                </div>
              )}
            </div>

            <div className="relative" ref={resourceRef}>
              <button
                onClick={toggleResource}
                className={`inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 py-2 font-semibold ${
                  isResourseOpen ? "text-[#e6a123]" : "text-black"
                }`}
              >
                Resources
                <IoIosArrowDown
                  className={`-mr-1 h-5 w-5 ${
                    isResourseOpen ? "text-[#e6a123]" : "text-gray-400"
                  }`}
                />
              </button>

              {isResourseOpen && (
                <div className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    MCQ Books (NEW)
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Video Lectures
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    NCERT ebooks
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Question practice
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Tests
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Chapter Journey
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Mindmaps
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    PYQ Marked NCERT
                  </a>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Bridge (X to XI)
                  </a>
                </div>
              )}
            </div>

            <Link
              className="inline-flex justify-center px-3 py-2 font-semibold text-black"
              href="#"
            >
              Login/Register
            </Link>
          </div>

          {/* Call to action */}
          <div className="hidden lg:flex items-center border border-gray-300 rounded-md h-[80px] w-[320px] lg:w-[400px] justify-around">
            <div className="text-3xl">
              <FaWhatsapp />
            </div>
            <FiPhone className="text-3xl" />
            <div>
              <p className="font-bold">+91-8527521718</p>
              <p className="text-sm">(Mon - Sun | 10 AM - 8 PM)</p>
            </div>
          </div>

          {/* mobile menu for small screens */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-4xl">
            <TbMenuDeep />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, shown conditionally */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col space-y-4">
            <div ref={courseRef}>
            <button   
              onClick={toggleCourse}
                className={`inline-flex w-full justify-end gap-x-1.5 rounded-md px-1 py-2 font-semibold ${
                  isCourseOpen ? "text-[#e6a123]" : "text-black"
                }`}>
              Courses
              <IoIosArrowDown
                  className={`-mr-1 h-5 w-5 ${
                    isCourseOpen ? "text-[#e6a123]" : "text-gray-400"
                  }`}
                />
            </button>

            {isCourseOpen && (
                <div className="flex flex-col text-end mt-2 origin-top-right rounded-md bg-white shadow-lg">
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Target 2025
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Target 2026
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Classroom Test Series
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    High Yield Test Series
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Masterclass in Biology
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Books
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    All Courses
                  </a>
                </div>
              )}

            </div>

            <div ref={resourceRef}>
            <button 
              onClick={toggleResource}
                className={`inline-flex w-full justify-end gap-x-1.5 rounded-md px-1 py-2 font-semibold ${
                  isResourseOpen ? "text-[#e6a123]" : "text-black"
                }`}>
              Resources
              <IoIosArrowDown
                  className={`-mr-1 h-5 w-5 ${
                    isResourseOpen ? "text-[#e6a123]" : "text-gray-400"
                  }`}
                />
            </button>

            {isResourseOpen && (
                <div className="flex flex-col text-end mt-2 rounded-md bg-white shadow-lg">
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    MCQ Books (NEW)
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Video Lectures
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    NCERT ebooks
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Question practice
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Tests
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Chapter Journey
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Mindmaps
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    PYQ Marked NCERT
                  </a>
                  <a
                    href="#"
                    className="block py-1 px-1 text-sm text-gray-700 hover:text-gray-100"
                  >
                    Bridge (X to XI)
                  </a>
                </div>
              )}

            </div>
            <Link href="#" className=" inline-flex justify-end text-lg px-1 py-2 font-semibold">
              Login/Register
            </Link>

            <div className="inline-flex justify-end items-end  py-2 space-x-4 mt-4">
              <FaWhatsapp className="text-3xl" />
              <FiPhone className="text-3xl" />
              <div>
                <p className="font-bold">+91-8527521718</p>
                <p className="text-sm">(Mon - Sun | 10 AM - 8 PM)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
