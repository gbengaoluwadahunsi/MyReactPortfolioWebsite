
import './App.css'
import './styles.css'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'





const App = () => {


  return (
    <>

      <div className=" h-screen grid grid-rows-6  bg-slate-950">  
            <Navbar />
            <Homepage />
            
            
        </div>    
    </>
  )
}

export default App
