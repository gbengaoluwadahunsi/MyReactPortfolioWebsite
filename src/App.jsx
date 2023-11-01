
import './App.css'
import './styles.css'
import Homepage from './Components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  MyWorks from   './Components/My-works'
import Resume from './Components/Resume'







const App = () => {

  const pdfUrl = 'public/mages/GbengaDeveloper.pdf';
  return (
    <>

      <div className=" h-full   bg-customBlue">  
          <Router>

            <Routes>
                <Route  exact path='/' element={ < Homepage />}/>
                <Route path='/myworks' element={ < MyWorks />}/>
                <Route path='/resume' element={<Resume pdfUrl={pdfUrl} />} />
            </Routes>
          </Router>
      </div>    

    </>
  )
}

export default App
