import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLaptopCode , faFileLines} from '@fortawesome/free-solid-svg-icons';
import '../styles.css'
import image from '../assets/Images/Oluwadahunsi.jpeg'



function Homepage() {
  return (
          <>
            <main className='bg-slate-950 grid lg:py-10 lg:px-14  grid-cols-2 '>
                <div  >
                    <div className='text-rose-700'>
                    <span className="key">F</span>
                    <span className="key">R</span>
                    <span className="key">O</span>
                    <span className="key">N</span>
                    <span className="key">T</span>
                    <span className="key">E</span>
                    <span className="key">N</span>
                    <span className="key">D</span>
                    </div>

                    <div className=' text-rose-700'>
                    <span className="key">D</span>
                    <span className="key">E</span>
                    <span className="key">V</span>
                    <span className="key">E</span>
                    <span className="key">L</span>
                    <span className="key">O</span>
                    <span className="key">P</span>
                    <span className="key">E</span>
                    <span className="key">R</span>
                    </div>

                    <h3 className='w-3/4 font-semibold text-xl text-white'>
                        I flourish at building and shipping innovative  digital products  that solve real-time world problems.
                    </h3>
                    <div className='mt-2 flex flex-row gap-2 font-sans'>
                      <button className='p-2  text-slate-950 font-bold text-xl rounded-md bg-rose-800 hover:text-white' >My Works <FontAwesomeIcon icon={faLaptopCode}  size='lg'/></button> 
                      <button className='p-2  text-slate-950 font-bold text-xl rounded-md bg-rose-800 hover:text-white'> Résumé <FontAwesomeIcon icon={faFileLines } size='lg'/></button>
                    </div>
                </div>

                <div className='justify-self-start  w-3/4 border-2  rounded-full'>
                    <img src= {image} className=' hover:translate-x-12 transition delay-150 duration-300 ease-in-out w-3/4 rounded-full ' alt=" Gbenga Oluwadahunsi picture" />
                   
                </div>
               
            </main>    
          </>
  )
}

export default Homepage;