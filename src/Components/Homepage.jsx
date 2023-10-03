import { faArrowAltCircleRight, faArrowRight, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { useState } from 'react';


function Homepage() {

  const [showNav, setShowNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <div className=" h-screen bg-slate-950">
      <header>
      <div className="grid grid-cols-2  px-16 py-10">
        <span className="text-3xl inline-block font-extrabold text-rose-600 justify-self-start">Pollécode</span>
        <div className="text-3xl inline-block font-extrabold text-rose-600 justify-self-end" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="w-6 h-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <div className='grid grid-rows-2 gap-2'>
              <div className="w-10 h-1 mb-1 bg-rose-600"></div>
              <div className="w-6 h-1 justify-self-end bg-rose-600"></div>
            </div>
          )}
        </div>
      </div>

      {showNav && (
        <nav className="grid grid-cols-1 bg-slate-50 w-2/3 p-8">
          <a href="#" className="text-rose-600">Home</a>
          <a href="#" className="text-rose-600">About</a>
          <a href="#" className="text-rose-600">Projects</a>
          <a href="#" className="text-rose-600">Resume</a>
          <a href="#" className="text-rose-600">Contact</a>
        </nav>
      )}
    </header>


  
      <main className=" grid  grid-rows-2 mt-4 place-items-center   ">
            <div className="text-8xl text-center">
              <div className="my-6 text-rose-600">
                <span className=" text-white key">F</span>
                <span className="key">R</span>
                <span className="key">O</span>
                <span className="key">N</span>
                <span className="key">T</span>
                <span className="key">E</span>
                <span className="key">N</span>
                <span className="key">D</span>
              </div>

              <div className="text-rose-600">
                <span className=" key">D</span>
                <span className="key">E</span>
                <span className="key">V</span>
                <span className="key">E</span>
                <span className="key">L</span>
                <span className="key">O</span>
                <span className="key">P</span>
                <span className="key">E</span>
                <span className="key text-white">R</span>
              </div>
            </div>

            <div className='-mt-16'>
              
                  <h3 className="font-semibold  w-2/3   mx-auto  text-center text-xl ">
                    I flourish at building and shipping innovative digital products that solve real-time world problems.
                  </h3>
              

                <div className="flex justify-center items-center  mt-4 space-x-2">
                  <div className="p-3 text-slate-950  w-1/4 font-bold text-xl inline-block rounded bg-rose-600 hover:text-white cursor-pointer">
                        <span >My Projects </span>
                        <FontAwesomeIcon icon={faLongArrowAltRight}/>
                  </div>
                 <div className="p-3 text-slate-950 w-1/4 font-bold text-xl inline-block  rounded bg-rose-600 hover:text-white cursor-pointer"> 
                    <span >Résumé </span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                 
                 </div>
                </div>
              
            </div>
          </main>
        



      </div>

      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus explicabo, tempore dolores exercitationem temporibus laudantium iste beatae! Iusto, doloribus magni asperiores dolores fuga nam iste labore reiciendis accusantium porro reprehenderit recusandae ullam itaque architecto corporis illum ducimus eveniet pariatur.</div>
    
    
    </>
  )
}

export default Homepage