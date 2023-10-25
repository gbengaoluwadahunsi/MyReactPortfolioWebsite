import { FaLinkedin , FaXTwitter , FaGithub, FaEnvelope } from 'react-icons/fa6'
import { Link } from 'react-router-dom'




const Myworks = () => {
  return (
    <>
      <div>Myworks</div>
      <footer className=' grid grid-rows-4 px-20 py-10 text-xl bg-slate-950 footer-height'>


                <section className='row-span-3 grid grid-cols-2 border-b-4 border-rose-600 '>
                  <span className="text-3xl inline-block font-extrabold  text-rose-600 justify-self-start cursor-pointer">Gbénga</span>

                  <div className="  grid grid-cols-1 gap-4 h-12 menu">
                  <span href="#" className="font-bold"><Link  to ="/">Home</Link></span>
              <span href="#" className="font-bold"><Link to= "/resume">Résumé</Link></span>
              <span href="#" className="font-bold"><Link to= "/mySkillset">My Skillset</Link></span>
                  </div>
                </section>
                
                
                <section className='grid grid-cols-2 p-4 h-4 text-md'>
                        <span className=' '>&copy; Gbenga Oluwadahunsi 2023 </span>
                        <div className=" flex flex-row space-x-4 text-lg menuClass justify-end">
                          <span className="self-end cursor-pointer text-2xl  hover:text-rose-600">< FaLinkedin  /></span>
                          <span className="self-end cursor-pointer text-2xl hover:text-rose-600" ><FaXTwitter/></span>
                          <span className="self-end cursor-pointer text-2xl hover:text-rose-600"><FaGithub /></span>
                          <span className="self-end cursor-pointer text-2xl hover:text-rose-600">< FaEnvelope /></span>
                        </div>               
                </section>

          </footer>
   
    </>
  )
}

export default Myworks