import { FaLinkedin , FaXTwitter , FaGithub, FaEnvelope } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import  ProjectArray from './ProjectArray'
import  Cards from './Specials'




const Myworks = () => {

  const Cadd = ProjectArray.map(item => (
    <Cards
      key={item.id}
      id={item.id}  // Pass the id as a prop
      img={item.img}
      menu={item.menu}
      link={item.link}
      title={item.title}
      description={item.description}

    />
  ))

  return (
    < div className = "bg-slate-200">
    <Navbar className />
     <main className='  lg:-mt-6 lg:px-16 py-10 lg:py-10'>
       <h2 className='text-customBlue font-extrabold md:text-xl lg:text-3xl text-center'>Selection of the works I&apos;ve previously completed.</h2> 
       <div className='mt-6 grid  grid-rows-1  px-6 lg:grid-cols-3 gap-6 lg:gap-8 '>
        {Cadd}  
        </div>  
       
      </main>
      <footer className=' grid grid-rows-4 px-20 py-10 text-xl bg-slate-950 footer-height'>


                <section className='row-span-3 grid grid-cols-2 border-b-4 border-rose-600 '>
                  <span className="text-xl lg:text-3xl inline-block font-extrabold  text-rose-600 justify-self-start cursor-pointer">Gbénga</span>

                <div className="  grid grid-cols-1 gap-4 h-12 menu">
                  <span href="#" className="font-bold"><Link  to ="/">Home</Link></span>
                  <span href="#" className="font-bold"><Link to= "/resume">Résumé</Link></span>
                </div>
                </section>
                
                
                <section className='grid  grid-rows-2 place-items-center gap-4  md:grid-cols-2 lg:grid-cols-2  p-2 lg:p-4 h-20 text-md'>                        
                        
                   <span className='text-sm lg:place-self-start'>&copy; Gbenga Oluwadahunsi 2023 </span>           
                        
                    <div className=" flex flex-row space-x-4 text-lg menuClass lg:place-self-end">
                          <span className=" cursor-pointer lg:text-2xl hover:text-rose-600">< FaLinkedin  /></span>
                          <span className=" cursor-pointer lg:text-2xl hover:text-rose-600" ><FaXTwitter/></span>
                          <span className="cursor-pointer lg:text-2xl hover:text-rose-600"><FaGithub /></span>
                          <span className=" cursor-pointer lg:text-2xl hover:text-rose-600">< FaEnvelope /></span>
                    </div>  
                         
                </section>


          </footer>
   
    </div>
  )
}

export default Myworks