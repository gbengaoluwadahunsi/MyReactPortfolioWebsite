import {  faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link, animateScroll as scroll } from 'react-scroll';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import image from  '../assets/Images/software-codes.jpg'
import imageApi  from  '../assets/Images/Api.png'
import imageHTML  from  '../assets/Images/HTML.png'
import imageCSS  from  '../assets/Images/styler.png'
import imageJscript  from  '../assets/Images/Javascript.png'
import imageGit  from  '../assets/Images/Githubb.png'
import imageReactty  from  '../assets/Images/React.png'
import imageNodeJS  from  '../assets/Images/NodeJS.png'
import imagePython  from  '../assets/Images/Python.png'
import imageTailwind  from  '../assets/Images/tailwind.png'

import Footer from './Footer';
import ContactForm from './Contact-form';






const Homepage = () => {
   
  
  return (
    <>

     <Navbar id='top' />
    
     <main className=" lg:row-span-3  grid  grid-rows-2 lg:-mt-12 place-items-center" >
            <div className=" text-2xl md:text-6xl lg:text-8xl text-center">
              <div className="lg:my-6 text-rose-600">
                <span className=" text-slate-100 key">F</span>
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
                <span className="key text-slate-100">R</span>
              </div>
            </div>

            <div className='p-4 lg:-mt-16'>
              
                  <h3 className="font-semibold  lg:w-2/3   mx-auto  text-center lg:text-xl ">
                    I flourish at building and shipping innovative digital products that solve real-time world problems.
                  </h3>
              

                <div className="flex  justify-center items-center  mt-4 space-x-2">
                  <Link to="/myworks" className="p-3 text-customBlue  lg:w-1/4 font-bold text-sm lg:text-xl flex flex-row gap-2 place-items-center justify-around rounded bg-rose-600 hover:text-slate-100 cursor-pointer">
                  
                        <span  className="font-bold">My Works</span>
                        <FontAwesomeIcon icon={faArrowRightLong} size='lg'/>
                  
                  </Link>
                 <div className="p-3 text-customBlue lg:w-1/4 font-bold text-sm lg:text-xl flex flex-row  gap-2 place-items-center justify-around rounded bg-rose-600 hover:text-slate-100 cursor-pointer"> 
                    <span >Résumé </span>
                    <FontAwesomeIcon icon={faArrowRightLong} size='lg' />
                  
                 
                 </div>
                </div>
              
            </div>
            
          </main>
          <section className=' bg-slate-200 text-customBlue grid  lg:grid-cols-2'>
            
            <div className=' py-4 px-8 lg:px-16 text-justify '>
              <h2 className=' text-center  font-extrabold md:text-2xl lg:text-5xl'>My Coding Xperience</h2>
              <div className='grid grid-rows-3 lg:text-xl  mt-4 lg:mt-14'>
                <p>With about ten years of experience as a university lecturer, I began my career in the field of biochemistry. </p>
                <p>I took some bioinformatics courses because I was interested in the field, after realizing I wanted to create web and mobile applications, that&apos;s when I decided to go into software development.</p>           
                <p>I went on a learning binge and picked up the skills that helped me become a sharp front-end developer. I&apos;m committed to completing projects that are easy to work on and satisfy clients and employers, and I&apos;m currently learning databases and back-end technologies.</p>
                  
              
              </div>
            </div>
            <img src={image} alt="software codes" />
          </section>

          <section className='grid  grid-rows-1 lg:grid-rows-3  px-16  py-10'>
          
             <div> 
               <h2 className='font-extrabold md:text-2xl lg:text-5xl  text-rose-600 text-center'>My Tech Stack</h2>
            
                <p className='hidden md:block lg:block lg:text-xl w-3/4 mx-auto font-semibold  pt-6 text-rose-400 text-center'>For my projects, I have leveraged a combination of HTML5, CSS3, vanilla JavaScript, Python, Tailwind CSS, GitHub, REST API, Node.js, MongoDB, and React.js to develop robust and dynamic web applications.</p>
              </div>
           
              <div className=' row-span-2 grid grid-cols-3 place-items-center mt-6 gap-10'>
                  <img src={imageHTML} alt="HTML5 icon" className=' hover:rounded-full hover:bg-white p-2'/>
                  <img src={imageCSS} alt="CSS3 icon" className=' hover:rounded-full hover:bg-white p-2'/>
                  <img src={imageJscript} alt="Javascript icon" className=' hover:rounded-full hover:bg-white p-2'/>
                  <img src={imagePython} alt="Python icon" className=' hover:rounded-full hover:bg-white p-2'/>
                  <img src={imageGit} alt="GitHub icon" className=' hover:rounded-full hover:bg-white p-2'/>
                  <img src={imageReactty} alt="React.jsicon" className=' hover:rounded-full hover:bg-white p-2'/>
                  <img src={imageNodeJS} alt="nodeJS icon" className=' hover:rounded-full hover:bg-white p-2'/>
                  <img src={imageTailwind} alt="Tailwindcss icon" className=' hover:rounded-full hover:bg-white p-2'/>
                  <img src={imageApi} alt="API icon" className=' hover:rounded-full hover:bg-white p-2'/>
                
             </div>
          </section>              

          <ContactForm  />
          <Footer />

  
          
    </>
  )
}

export default Homepage 