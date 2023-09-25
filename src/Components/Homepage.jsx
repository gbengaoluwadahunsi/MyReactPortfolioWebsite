// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faLaptopCode , faFileLines} from '@fortawesome/free-solid-svg-icons';
import '../styles.css'
import image from '../assets/Images/Oluwadahunsi.jpg'



function Homepage() {
  return (
          <>
            <main className='bg-slate-950  grid  mx-auto text-center  md:grid-cols-2 lg:grid-cols-2  h-screen place-items-center'>
                <div className='' >

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

                   <div>
                   <div>
                    <h3 className='w-3/4  mx-auto  pl-4 text-center font-semibold text-xl text-white'>
                        I flourish at building and shipping innovative  digital products  that solve real-time world problems.
                    </h3>
                    </div>
                    <div className='bg-black'>
                      <button className='p-2  text-slate-950 font-bold text-xl rounded bg-rose-800 hover:text-white' >My Works </button> 
                      <button className='p-2  text-slate-950 font-bold text-xl rounded bg-rose-800 hover:text-white'> Résumé </button>
                    </div>

                   </div>

                

                  

                   
                </div>

                <div className='justify-self-start '>
                    <img src= {image} className='rounded-full'  alt=" Gbenga Oluwadahunsi picture" />
                   
                </div>
               
            </main>    
          </>
  )
}

export default Homepage;