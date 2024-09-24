import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/NavLogo.svg";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {

    //state to manage dropdown 

    const [ isCourseOpen, setCourseOpen ] = useState(false);
    const [ isResourseOpen, setResourceOpen ] = useState(false);

    //Refs for dropdowns
    const courseRef = useRef<HTMLDivElement>(null);
    const resourceRef = useRef<HTMLDivElement>(null);

    const toggleCourse = () => {
      setCourseOpen(!isCourseOpen);
      setResourceOpen(false); //close other dropdown if open
    };

    const toggleResource = () => {
      setResourceOpen(!isResourseOpen);
      setCourseOpen(false);  //close other dropdown if open
    };

    //close dropdown if clicked outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if(
          courseRef.current && !courseRef.current.contains(event.target as Node) &&
          resourceRef.current && !resourceRef.current.contains(event.target as Node) 
        )  {
          setCourseOpen(false);
          setResourceOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return() => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-around">
          <div className="flex items-center py-[39px] pl-16 pr-16">
            <a href="#">
              <Image
                src={Logo}
                width={169}
                height={42}
                sizes="200x200"
                alt="Logo"
                className="w-full inline-block items-center"
              />
            </a>
          </div>

          {/* Nav Items */}

          <div className="flex items-center gap-10 relative text-left">
              <div className="relative" ref={courseRef}>
                <button 
                  onClick={toggleCourse}
                  className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 font-semibold 
                    ${isCourseOpen ? 'text-[#e6a123]' : 'text:black'}`
                  }
                  >
                    Courses
                  <IoIosArrowDown className={`-mr-1 h-5 w-5 text-gray-400"
                    ${isCourseOpen ? 'text-[#e6a123]' : 'text:gray-400'}`
                    }
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
                  className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 font-semibold 
                    ${isResourseOpen ? 'text-[#e6a123]' : 'text:black'}`
                  }
                  >
                  Resources
                  <IoIosArrowDown className={`-mr-1 h-5 w-5 text-gray-400"
                  ${isResourseOpen ? 'text-[#e6a123]' : 'text:gray-400'}`
                }
                />
                </button>

                {isResourseOpen && (
                  <div className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <a
                      href="#"
                      className="block py-1 px-4 text-sm text-gray-700 hover:text-gray-100"
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

            <Link className="inline-flex w-full justify-center bg-white px-1 py-2 font-semibold" href="#" >
              Login/Register
            </Link>
          </div>

          {/* Call to action box */}

          <div className=" border border-3 rounded-md flex flex-row items-center border-gray-300 h-[80px] w-[400px] mr-20 ml-16 justify-around">
            <div className="text-3xl">
              <FaWhatsapp />
            </div>
            <FiPhone className="text-3xl" />
            <div>
              <div>
                <p>
                  <strong>+91-8527521718</strong>
                </p>
                <p>(Mon - Sunday | 10 AM - 8 PM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-white" />
        
    </div>
  );
};

export default Navbar;
