
import Navbar from './Navbar'
import  ProjectArray from './ProjectArray'
import  Cards from './Specials'
import Footer from './Footer'





const Myworks = () => {

  const Cadd = ProjectArray.map(item => (
    <Cards
      key={item.id}
      id={item.id}  // Pass the id as a prop
      img={item.img}
      menu={item.menu}
      link={item.link}
      linked={item.linked}
      title={item.title}
      description={item.description}
      stack = {item.stack}
      gitHubRepo = {item.gitHubRepo}

    />
  ))

  return (
    < div className = "bg-slate-200">
    <Navbar className />
     <main className='  lg:-mt-6 lg:px-16 py-10 lg:py-10'>
       <h2 className='text-customBlue font-extrabold p-6 text-md md:text-xl lg:text-3xl text-center'>Selection of the works I&apos;ve previously completed.</h2> 
       <div className='mt-6 grid justify-around grid-rows-1 sm:grid-cols-2 lg:grid-cols-3   gap-6 sm:gap-4 lg:gap-8 '>
        {Cadd}  
        </div>  
       
      </main>
      <Footer />
  
    </div>
  )
}

export default Myworks