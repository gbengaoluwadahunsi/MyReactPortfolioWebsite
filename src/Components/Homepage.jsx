import {  faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link, animateScroll as scroll } from 'react-scroll';
import { Link } from "react-router-dom";
import { FaLinkedin , FaXTwitter , FaGithub, FaEnvelope } from 'react-icons/fa6';
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






const Homepage = () => {

  

  return (
    <>

     <Navbar id='top' />
    
     <main className=" row-span-3 grid -mt-12 grid-rows-2 place-items-center" >
            <div className="text-8xl text-center">
              <div className="my-6 text-rose-600">
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

            <div className='-mt-16'>
              
                  <h3 className="font-semibold  w-2/3   mx-auto  text-center text-xl ">
                    I flourish at building and shipping innovative digital products that solve real-time world problems.
                  </h3>
              

                <div className="flex justify-center items-center  mt-4 space-x-2">
                  <div className="p-3 color  w-1/4 font-bold text-xl flex flex-row place-items-center justify-around rounded bg-rose-600 hover:text-slate-100 cursor-pointer">
                  <span href="#" className="font-bold"><Link  to ="/myWorks">My Works</Link></span>
                        <FontAwesomeIcon icon={faArrowRightLong} size='lg'/>
                  </div>
                 <div className="p-3 color w-1/4 font-bold text-xl  flex flex-row place-items-center justify-around rounded bg-rose-600 hover:text-slate-100 cursor-pointer"> 
                    <span >Résumé </span>
                    <FontAwesomeIcon icon={faArrowRightLong} size='lg' />
                  
                 
                 </div>
                </div>
              
            </div>
            
          </main>
          <section className='bg-white color grid grid-cols-2'>
            
             <div className=' py-8 px-16 text-justify '>
              <h2 className='font-extrabold text-5xl '>My Coding Xperience</h2>
             <div className='grid grid-rows-1  text-xl gap-6 mt-16'>
             <p>
              I started out in my career in  the  field of Biochemistry with over 8 years of experience as a university lecturer, I was interested in Bioinformatics and starting taking some courses on it unitl I discovered that I had a flair  for building web and mobile applications, it was at that moment I decided to pursue the software development route.                
              </p>
              <p>I went on  a learning spree and  acquired the skills that shaped me into an astute frontend developer,I&apos;m dedicated to delivering seamless projects that meet the needs of employers and their clients and currently learning backend technologies  and databases.</p>
              
              
             </div>
            </div>
            <img src={image} alt="software codes" />
          </section>

          <section className='techStack bg-background  grid grid-rows-3 px-16  py-10'>
          <section className=''>
            <h2 className='font-extrabold text-5xl text-rose-600  '>My Tech Stack</h2>
            
            <p className='text-xl pt-6'>For my projects, I have leveraged a combination of HTML5, CSS3, vanilla JavaScript, Python, Tailwind CSS, GitHub, REST API, Node.js, MongoDB, and React.js to develop robust and dynamic web applications.</p>
          
          </section>
          
          <div className=' row-span-2 grid grid-cols-3 place-items-center gap-16'>
                <img src={imageHTML} alt="HTML5 icon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
                <img src={imageCSS} alt="CSS3 icon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
                <img src={imageJscript} alt="Javascript icon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
                <img src={imagePython} alt="Python icon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
                <img src={imageGit} alt="GitHub icon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
                <img src={imageReactty} alt="React.jsicon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
                <img src={imageNodeJS} alt="nodeJS icon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
                <img src={imageTailwind} alt="Tailwindcss icon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
                <img src={imageApi} alt="API icon" className=' hover:rounded-full hover:bg-white hover:p-2'/>
               
          </div>
              
        
          
          
          </section>
  
          <footer className=' grid grid-rows-4 px-20 py-10 text-xl bg-slate-950 footer-height'>


                <section className='row-span-3 grid grid-cols-2 border-b-4 border-rose-600 '>
                  <span className="text-3xl inline-block font-extrabold  text-rose-600 justify-self-start cursor-pointer"><Link>Gbénga</Link></span>
                  {/* <span className="text-3xl inline-block font-extrabold  text-rose-600 justify-self-start cursor-pointer"><Link className="" to="top" smooth={true} duration={500} onClick={() => scroll.scrollToTop()}>Gbénga</Link></span> */}
                  <div className="  grid grid-cols-1 gap-4 h-12 menu">
                    <span className="font-bold"><Link to = "/myworks">My Works</Link></span>
                    <span  className="font-bold">Résumé</span>
                    <span  className="font-bold">My Skillset</span>
                  </div>
                </section>
                
                
                <section className='grid grid-cols-2 p-4 h-4 text-md'>
                        <span className=' '>&copy; Gbenga Oluwadahunsi 2023 </span>
                        <div className=" flex flex-row space-x-4 text-lg menuClass justify-end">
                          <span className="self-end cursor-pointer text-2xl hover:text-rose-600">< FaLinkedin  /></span>
                          <span className="self-end cursor-pointer text-2xl hover:text-rose-600" ><FaXTwitter/></span>
                          <span className="self-end cursor-pointer text-2xl hover:text-rose-600"><FaGithub /></span>
                          <span className="self-end cursor-pointer text-2xl hover:text-rose-600">< FaEnvelope /></span>
                        </div>               
                </section>

          </footer>
   
    </>
  )
}

export default Homepage 