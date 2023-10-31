
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
      <Footer />
   
    </div>
  )
}

export default Myworks