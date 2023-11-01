import { FaLinkedin, FaXTwitter, FaGithub, FaEnvelope } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);

  return (
    <footer className='grid grid-rows-4 px-20 py-10 text-sm lg:text-xl bg-slate-950 h-64 lg:h-footer-height'>
      <section className='row-span-3 grid grid-cols-2 border-b-4 border-rose-600 '>
        <Link className="text-xl lg:text-3xl inline-block font-extrabold  text-rose-600 justify-self-start cursor-pointer">Gbénga</Link>
        {currentPage === "" && (
          <div  className= "grid grid-cols-1 gap-4 h-12  font-bold menu">
            
              <Link to="/myworks" className='link'>My Works</Link>
              <Link to="/resume" className='link'>Résumé</Link>
          </div>
        )}
        {currentPage === "myworks" && (
          <div  className= "grid grid-cols-1 gap-4 h-12  font-bold menu">
           
              <Link to="/" className='link'>Home</Link>
              <Link to="/resume" className='link'>Résumé</Link>
          </div>
        )}
        {currentPage === "resume" && (
          <div  className= "grid grid-cols-1 gap-4 h-12  font-bold menu">
            
              <Link to="/" className='link'> Home</Link>
              <Link to="/myworks" className='link'>My Works</Link>
           
          </div>
        )}
      </section>

      <section className='grid  grid-rows-2 place-items-center gap-4  md:grid-cols-2 lg:grid-cols-2  p-2 lg:p-4 h-20 text-md'>
        <span className='text:xs md:text-sm lg:text-sm lg:place-self-start'>&copy; Gbenga Oluwadahunsi 2023 </span>
        <div className="flex flex-row space-x-4 text-lg menuClass lg:place-self-end">
          <span className="cursor-pointer lg:text-2xl hover:text-rose-600">< FaLinkedin /></span>
          <span className="cursor-pointer lg:text-2xl hover:text-rose-600" ><FaXTwitter /></span>
          <span className="cursor-pointer lg:text-2xl hover:text-rose-600"><FaGithub /></span>
          <span className="cursor-pointer lg:text-2xl hover:text-rose-600">< FaEnvelope /></span>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
