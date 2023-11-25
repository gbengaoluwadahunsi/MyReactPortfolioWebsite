
 import { Link } from "react-router-dom"; 
import Experience from "./ExperienceArray";
import ResumeProjectsArray from "./ResumeProjectsArray";
import ResumeProjectSection from "./ResumeProjectSection";
import ContactArray from "./ContactArray";
import ResumeContactSection from "./ResumeContactSection";
import TechStackArray from "./TechStackArray";
import ResumeTechStackSection from "./ResumeTechStackSection";
import EducationArray from "./EducationArray";
import ResumeEducationSection from "./ResumeEducationSection";
import ExperienceSection from "./ExperienceSection";
import GenericPdfDownloader from "./PdfDownloader";





const Resume = () =>  {

  const exp = Experience.map(item => (
    <ExperienceSection
      key={item.id}
      year={item.year}
      title={item.title}
      description={item.description}

    />
  ))

  const resumeProjects  =  ResumeProjectsArray.map(project => (

    <ResumeProjectSection
      key={project.id}
      title={project.title}
      description={project.description}

    />

  ))

  const resumeContacts  =  ContactArray.map(contact => (

    <ResumeContactSection
      key={contact.id}
      title={contact.title}
     
    />

  ))

  const resumeTechStacks  =  TechStackArray.map(tech => (

    <ResumeTechStackSection
      key={tech.id}
      title={tech.title}
     
    />

  ))

  const resumeEducation  =  EducationArray.map(education => (

    <ResumeEducationSection
      key={education.id}
      title={education.title}
      year={education.year}
      major={education.major}

    />

  )) 

  

  

   
	return (
    

    
		<div className='bg-slate-200 height  '> 
         
          <div className="grid grid-cols-2 p-10 ">

            <Link to="/" className="lg:text-2xl   font-extrabold  text-rose-600 ">Home</Link>
            <GenericPdfDownloader  
             downloadFileName="Gbenga Oluwadahunsi Resume" 
            rootElementId="divToDownload" 
          
             />
            
            </div>
          <h2 className='text-customBlue font-extrabold  md:text-xl lg:text-3xl text-center'>Résumé </h2>  
          <main id="divToDownload" className="bg-white mt-6  mb-4 xl:mx-32  p-7 lg:p-10 rounded grid  text-gray-800  lg:grid-cols-7 ">
            
            
                <div className=" col-span-5 grid grid-col-1 gap-8">
                  <div className='flex flex-col gap-2'>
                    <h2 className ="lg:text-5xl text-rose-600 font-extrabold">Gbenga Oluwadahunsi</h2>
                    <span className='font-bold   lg:w-72 rounded   lg:text-2xl'>FrontEnd Developer</span>

                    
                  </div>

                  <div className='lg:text-xl  text-justify'>
                    <h5 className='font-bold text-rose-600'>SUMMARY</h5>
                    <p className='w-3/4'>                    
                      A creative, detail-oriented Front-end developer with a strong interest in Artificial Intelligence.
                      I have a track record of creating and launching successful front and backend web applications and I&apos;m looking to contribute my skills to a global tech company.
                    </p>
                  </div>

                  <div className='lg:text-xl  text-justify'>
                  <h5 className='font-bold text-rose-600 '>EXPERIENCE</h5>
                  {exp}

                  </div>

                  <div className='lg:text-xl  text-justify flex flex-col '>
                  <h2 className='font-bold text-rose-600 '>PROJECTS</h2>
                  {resumeProjects}
                 
                  
                </div>
                </div>

                <div className=" text-md flex flex-col gap-3  w-96 ">
                  <h2 className ="lg:text-2xl text-rose-600 font-extrabold">CONTACT  </h2>
                  <div className="flex flex-col gap-2">

                    {resumeContacts}
                  </div>

                  <div>
                    <h2 className ="lg:text-2xl text-rose-600 font-extrabold">SKILLS</h2>
                    <div className="flex flex-col gap-2">
                      {resumeTechStacks}
                    </div>
                  </div>

                  <div>
                    <h2 className ="lg:text-2xl text-rose-600 font-extrabold">EDUCATION</h2>
                    <div>
                      {resumeEducation}
                    </div>
                  </div>

                </div>

                
                
              
            </main>
  </div>
     

)}

  export default Resume


