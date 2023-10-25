
import './App.css'
import './styles.css'
import Homepage from './Components/Homepage'
import { Routes, Route } from 'react-router-dom'
import  myWorks from   './Components/My-works'






const App = () => {


  return (
    <>

      <div className=" h-full  grid grid-rows-4 background">  
          <Routes>
          <Route  exact path='/' Component={Homepage }/>
            <Route path='/myWorks' Component={myWorks}/>
          </Routes>
      </div>    

    </>
  )
}

export default App
