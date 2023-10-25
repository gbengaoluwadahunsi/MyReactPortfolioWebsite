import {  faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { FaLinkedin , FaXTwitter , FaGithub, FaEnvelope } from 'react-icons/fa6';
import Navbar from './Navbar';





const Homepage = () => {

  

  return (
    <>

     <Navbar />
    
     <main className=" row-span-3 grid -mt-12 grid-rows-2 place-items-center">
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
          <section className='h-96 bg-white'>LETS CONNECT</section>
  
          <footer className=' grid grid-rows-4 px-20 py-10 text-xl bg-slate-950 footer-height'>


                <section className='row-span-3 grid grid-cols-2 border-b-4 border-rose-600 '>
                  <span className="text-3xl inline-block font-extrabold  text-rose-600 justify-self-start cursor-pointer">Gbénga</span>

                  <div className="  grid grid-cols-1 gap-4 h-12 menu">
                  <span href="#" className="font-bold"><Link  to ="/myWorks">My Works</Link></span>
                  <span href="#" className="font-bold">Résumé</span>
                  <span href="#" className="font-bold">My Skillset</span>
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