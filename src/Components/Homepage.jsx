import {  faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function Homepage() {

  

  return (
    <>
    
     <main className=" grid  grid-rows-2 place-items-center">
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
                  <div className="p-3 text-slate-950  w-1/4 font-bold text-xl flex flex-row place-items-center justify-around rounded bg-rose-600 hover:text-slate-100 cursor-pointer">
                        <span >My Works </span>
                        <FontAwesomeIcon icon={faArrowRightLong} size='lg'/>
                  </div>
                 <div className="p-3 text-slate-950 w-1/4 font-bold text-xl  flex flex-row place-items-center justify-around rounded bg-rose-600 hover:text-slate-100 cursor-pointer"> 
                    <span >Résumé </span>
                    <FontAwesomeIcon icon={faArrowRightLong} size='lg' />
                  
                 
                 </div>
                </div>
              
            </div>
          </main>
   
    </>
  )
}

export default Homepage