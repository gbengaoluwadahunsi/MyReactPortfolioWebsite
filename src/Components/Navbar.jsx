

import { useState, useEffect, useRef } from "react";
import Image from "../assets/Images/Oluwadahunsi.png";
import { FaLinkedin , FaXTwitter , FaGithub, FaEnvelope } from 'react-icons/fa6'
import { Link } from "react-router-dom";




function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <header className="">
      <div className="grid grid-cols-2 lg:px-16 lg:p-10">
        <span className=" text-xl lg:text-3xl inline-block font-extrabold p-6 text-rose-600 justify-self-start  cursor-pointer">Gbénga</span>

        <div ref={navigationRef} className={`grid grid-rows-6 fixed bg-slate-100 justify-self-end lg:w-1/4 z-50 pr-6 py-6 toggle-section ${isMenuOpen ? 'show' : 'hide'}`}>
          <div className={`grid grid-cols-1 gap-1 lg:text-3xl h-4 w-10 font-extrabold justify-self-end cursor-pointer toggleBar ${isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
            <span className="w-10 h-1 bg-rose-600"></span>
            <span className="w-6 h-1 justify-self-end bg-rose-600"></span>
          </div>

          <div className={`row-span-5 grid grid-rows-7 gap-2 text-customBlue font-bold  navigation ${isMenuOpen ? 'menuShow' : 'menuHide'}`}>

           <div className=" row-span-1">
           <img src={Image}  className=" w-2/5 rounded-full  cursor-pointer bg-customBlue hover:border-rose-600 border-4"  alt="Gbenga Oluwadahunsi picture" />
           </div>

            <div className=" row-span-4    menu">
              <span  className=" block mb-4 font-bold"><Link  to ="/myworks">My Works</Link></span>
              <span  className="font-bold"><Link to= "/resume">Résumé</Link></span>
            </div>

            <div className=" row-span-2  flex flex-row space-x-4 text-lg menuClass">
              <span className=" cursor-pointer text-2xl hover:text-rose-600">< FaLinkedin  /></span>
              <span className=" cursor-pointer text-2xl hover:text-rose-600" ><FaXTwitter/></span>
              <span className=" cursor-pointer text-2xl hover:text-rose-600"><FaGithub /></span>
              <span className=" cursor-pointer text-2xl hover:text-rose-600">< FaEnvelope /></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar
