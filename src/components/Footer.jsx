import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Logo2 from "../assets/Logo2.svg";
import { LuInstagram } from "react-icons/lu";
import { CiBasketball } from "react-icons/ci";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

const MyFooter = () => {
  return (
    <Footer >
      <div className="w-full bg-gray900 py-8 px-8 text-white" >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={Logo2}
                alt="Logo"
                className="w-full inline-block items-center"
              />
            </a>
            <div>
              <p className="mb-1">Copyright &#169; 2024 Nexcent Ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex items-center gap-5">
              <i className="bg-[#38474d] p-2 rounded-full text-white text-lg">
                <LuInstagram />
              </i>
              <i className="bg-[#38474d] p-2 rounded-full text-white text-lg">
                <CiBasketball />
              </i>
              <i className="bg-[#38474d] p-2 rounded-full text-white text-lg">
                <FaTwitter />
              </i>
              <i className="bg-[#38474d] p-2 rounded-full text-white text-lg">
                <FaYoutube />
              </i>
            </div>
          </div>

          <div>
            <Footer.Title title="Company" className="text-2xl text-white" />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
              <Footer.Link href="#">Services</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
              <Footer.Link href="#">Testimonials</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Support" className="text-2xl text-white" />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">Help Center</Footer.Link>
              <Footer.Link href="#">Legal</Footer.Link>
              <Footer.Link href="#">Status</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Get in Touch" className="text-2xl text-white mb-10" />
            <div className="bg-black text-white flex items-center p-2 rounded-lg my-2">
              <input
                placeholder="Your email address"
                className="bg-transparent outline-none flex-grow"
              />
              <i className="text-white flex-shrink-0">
                <FiSend />
              </i>
            </div>
          </div>
        </div>

        <div className="w-full py-4 mt-8">
          <Footer.Divider />
        </div>

        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="NEXCENT™" year={2024}/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-white"/>
            <Footer.Icon href="#" icon={BsGithub} className="text-white" />
            <Footer.Icon href="#" icon={BsDribbble} className="text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
