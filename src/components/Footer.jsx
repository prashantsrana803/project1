import React from "react";
import { Footer } from "flowbite-react";
import Logo from "../../public/logo.svg";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import { LiaTelegramPlane } from "react-icons/lia";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import Logo2 from "../../public/downloadapp.svg";

const MyFooter = () => {
  return (
    <Footer>
      <div className="w-full bg-brandPrimary pt-16 pb-4 px-8 lg:px-28 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 -center gap-8">
          <div className="space-y-4">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <Image
                src={Logo}
                width={169}
                height={42}
                sizes="200x200"
                alt="Logo"
                className="w-full inline-block items-center"
              />
            </a>
            <div>
              <p>
                S-15, 2nd floor Uphar Cinema Market, above Red Chilli
                Restaurant, Green Park Extension, New Delhi, 110016
              </p>
            </div>
            <div className="flex items-center gap-5 sm:w-[60px]">
              <a
                href="https://www.youtube.com/c/NEETprep"
                className="bg-[#ffffff] p-2 rounded-full text-[#b27a14] text-lg"
              >
                <FaYoutube />
              </a>
              <a
                href="https://t.me/NEETprep"
                className="bg-[#ffffff] p-2 rounded-full text-[#b27a14] text-lg"
              >
                <LiaTelegramPlane />
              </a>
              <a
                href="https://www.facebook.com/NEETprep"
                className="bg-[#ffffff] p-2 rounded-full text-[#b27a14] text-lg"
              >
                <TiSocialFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/neetprep/"
                className="bg-[#ffffff] p-2 rounded-full text-[#b27a14] text-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <Footer.Title
              title="NEET Information"
              className=" text-xl text-white"
            />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">NEET 2025</Footer.Link>
              <Footer.Link href="#">NEET Syllabus</Footer.Link>
              <Footer.Link href="#">NEET Application Process</Footer.Link>
              <Footer.Link href="#">NEET Seat Intake</Footer.Link>
              <Footer.Link href="#">NEET Previous Year Papers</Footer.Link>
              <Footer.Link href="#">AIIMS Previous Year Papers</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Courses" className="text-xl text-white" />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">NEET Course</Footer.Link>
              <Footer.Link href="#">NEET Course (English)</Footer.Link>
              <Footer.Link href="#">Bio Masterclass</Footer.Link>
              <Footer.Link href="#">NEET Test Series</Footer.Link>
              <Footer.Link href="#">All Courses</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title
              title="Partnerships"
              className="text-xl text-white mb-10"
            />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">
                Become a Mentor (MBBS Students only)
              </Footer.Link>
              <Footer.Link href="#">Join as Teacher</Footer.Link>
              <Footer.Link href="#">School Partnership</Footer.Link>
              <Footer.Link href="#">NEET Test Series</Footer.Link>
              <Footer.Link href="#">All Courses</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <div className="flex items-start font-bold text-3xl">
                <FiPhone />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white mb-2 ">
                  91-8527521718
                </h1>
                <h1 className="text-sm">(Mon - Sunday | 10 AM - 8 PM)</h1>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <TfiEmail className=" mt-2 font-bold text-3xl" />
              </div>
              <div className="ms-2 mt-2 cursor-pointer">
                <a href="mailto:support@neetprep.com" className="lg-0 lg:w-48">
                  <strong>support@neetprep.com</strong>
                </a>
              </div>
            </div>

            <div className=" mt-8">
              <div className="text-xl font-bold px-1 py-2 items-end">
                <p>Download App</p>
              </div>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.lernr.app&hl=en_IN&gl=US">
                  <Image src={Logo2} width={150} height={150} alt="Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-10 gap-8">
          <div>
            <Footer.Title
              title="Botany Questions"
              className="text-xl text-white mb-10"
            />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">Living World</Footer.Link>
              <Footer.Link href="#">Biological Classification</Footer.Link>
              <Footer.Link href="#">Plant Kingdom</Footer.Link>
              <Footer.Link href="#">Morphology of Flowering Plants</Footer.Link>
              <Footer.Link href="#">Anatomy of Flowering Plants</Footer.Link>
              <Footer.Link href="#">Cell-unit of Life</Footer.Link>
              <Footer.Link href="#">Cell Cycle and Cell Division</Footer.Link>
              <Footer.Link href="#">Transport in Plants</Footer.Link>
              <Footer.Link href="#">Mineral Nutrition</Footer.Link>
              <Footer.Link href="#">
                Photosynthesis in Higher Plants
              </Footer.Link>
              <Footer.Link href="#">Respiration in Plants</Footer.Link>
              <Footer.Link href="#">Plant Growth and Development</Footer.Link>
              <Footer.Link href="#">Reproduction in Organisms</Footer.Link>
              <Footer.Link href="#">
                Sexual Reproduction in Flowering Plants
              </Footer.Link>
              <Footer.Link href="#">
                Principles of Inheritance and Variation
              </Footer.Link>
              <Footer.Link href="#">Molecular Basis of Inheritance</Footer.Link>
              <Footer.Link href="#">
                Strategies for Enhancement in Food Production
              </Footer.Link>
              <Footer.Link href="#">Microbes in Human Welfare</Footer.Link>
              <Footer.Link href="#">Organisms and Populations</Footer.Link>
              <Footer.Link href="#">Ecosystem</Footer.Link>
              <Footer.Link href="#">Biodiversity and Conservation</Footer.Link>
              <Footer.Link href="#">Environmental Issues</Footer.Link>
            </Footer.LinkGroup>

            <Footer.Title
              title="Company"
              className="text-xl text-white mb-10 mt-10"
            />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Terms of Use</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Refund Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title
              title="Chemistry Questions"
              className="text-xl text-white mb-10"
            />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">
                Some Basic Concepts of Chemistry
              </Footer.Link>
              <Footer.Link href="#">Structure of Atom</Footer.Link>
              <Footer.Link href="#">
                Classification of Elements and Periodicity in Properties
              </Footer.Link>
              <Footer.Link href="#">
                Chemical Bonding and Molecular Structure
              </Footer.Link>
              <Footer.Link href="#">States of Matter</Footer.Link>
              <Footer.Link href="#">Thermodynamics</Footer.Link>
              <Footer.Link href="#">Equilibrium</Footer.Link>
              <Footer.Link href="#">Redox Reactions</Footer.Link>
              <Footer.Link href="#">Hydrogen</Footer.Link>
              <Footer.Link href="#">The s-Block Elements</Footer.Link>
              <Footer.Link href="#">The p-Block Elements-XI</Footer.Link>
              <Footer.Link href="#">
                Organic Chemistry - Some Basic Principles and Techniques
              </Footer.Link>
              <Footer.Link href="#">Hydrocarbons</Footer.Link>
              <Footer.Link href="#">Environmental Chemistry</Footer.Link>
              <Footer.Link href="#">The Solid State</Footer.Link>
              <Footer.Link href="#">Solutions</Footer.Link>
              <Footer.Link href="#">Electrochemistry</Footer.Link>
              <Footer.Link href="#">Chemical Kinetics</Footer.Link>
              <Footer.Link href="#">Surface Chemistry</Footer.Link>
              <Footer.Link href="#">
                General Principles and Processes of Isolation of Elements
              </Footer.Link>
              <Footer.Link href="#">The p-Block Elements-XII</Footer.Link>
              <Footer.Link href="#">The d and f Block Elements</Footer.Link>
              <Footer.Link href="#">Coordination Compounds</Footer.Link>
              <Footer.Link href="#">Haloalkanes and Haloarenes</Footer.Link>
              <Footer.Link href="#">Alcohols, Phenols and Ethers</Footer.Link>
              <Footer.Link href="#">
                Aldehydes, Ketones and Carboxylic Acids
              </Footer.Link>
              <Footer.Link href="#">Amines</Footer.Link>
              <Footer.Link href="#">Biomolecules</Footer.Link>
              <Footer.Link href="#">Polymers</Footer.Link>
              <Footer.Link href="#">Chemistry in Everyday Life</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title
              title="Physics Questions"
              className="text-xl text-white mb-10"
            />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">Units and Measurement</Footer.Link>
              <Footer.Link href="#">Mathematical Tools</Footer.Link>
              <Footer.Link href="#">Motion in A Straight Line</Footer.Link>
              <Footer.Link href="#">Motion in A Plane</Footer.Link>
              <Footer.Link href="#">Laws of Motion</Footer.Link>
              <Footer.Link href="#">Work, Energy and Power</Footer.Link>
              <Footer.Link href="#">
                Systems of Particles and Rotational Motion
              </Footer.Link>
              <Footer.Link href="#">Gravitation</Footer.Link>
              <Footer.Link href="#">
                Mechanical Properties of Solids
              </Footer.Link>
              <Footer.Link href="#">
                Mechanical Properties of Fluids
              </Footer.Link>
              <Footer.Link href="#">Thermal Properties of Matter</Footer.Link>
              <Footer.Link href="#">Thermodynamics</Footer.Link>
              <Footer.Link href="#">Kinetic Theory of Gases</Footer.Link>
              <Footer.Link href="#">Oscillations</Footer.Link>
              <Footer.Link href="#">Waves</Footer.Link>
              <Footer.Link href="#">Electric Charges and Fields</Footer.Link>
              <Footer.Link href="#">
                Electrostatic Potential and Capacitance
              </Footer.Link>
              <Footer.Link href="#">Current Electricity</Footer.Link>
              <Footer.Link href="#">Moving Charges and Magnetism</Footer.Link>
              <Footer.Link href="#">Magnetism and Matter</Footer.Link>
              <Footer.Link href="#">Electromagnetic Induction</Footer.Link>
              <Footer.Link href="#">Alternating Current</Footer.Link>
              <Footer.Link href="#">Electromagnetic Waves</Footer.Link>
              <Footer.Link href="#">
                Ray Optics and Optical Instruments
              </Footer.Link>
              <Footer.Link href="#">Wave Optics</Footer.Link>
              <Footer.Link href="#">
                Dual Nature of Radiation and Matter
              </Footer.Link>
              <Footer.Link href="#">Atoms</Footer.Link>
              <Footer.Link href="#">Nuclei</Footer.Link>
              <Footer.Link href="#">Semiconductor Electronics</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title
              title="Zoology Questions"
              className="text-xl text-white mb-10"
            />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link href="#">Animal Kingdom</Footer.Link>
              <Footer.Link href="#">
                Structural Organisation in Animals
              </Footer.Link>
              <Footer.Link href="#">Biomolecules</Footer.Link>
              <Footer.Link href="#">Digestion and Absorption</Footer.Link>
              <Footer.Link href="#">
                Breathing and Exchange of Gases
              </Footer.Link>
              <Footer.Link href="#">Body Fluids and Circulation</Footer.Link>
              <Footer.Link href="#">
                Excretory Products and their Elimination
              </Footer.Link>
              <Footer.Link href="#">Locomotion and Movement</Footer.Link>
              <Footer.Link href="#">
                Neural Control and Coordination
              </Footer.Link>
              <Footer.Link href="#">
                Chemical Coordination and Integration
              </Footer.Link>
              <Footer.Link href="#">Human Reproduction</Footer.Link>
              <Footer.Link href="#">Reproductive Health</Footer.Link>
              <Footer.Link href="#">Evolution</Footer.Link>
              <Footer.Link href="#">Human Health and Disease</Footer.Link>
              <Footer.Link href="#">
                Biotechnology Principles and Processes
              </Footer.Link>
              <Footer.Link href="#">
                Biotechnology and its Application
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <div className="w-full pt-4 mt-8">
          <Footer.Divider />
        </div>

        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright &#169; 2024 neetprep.com</p>
          <div className="hidden md:block mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
