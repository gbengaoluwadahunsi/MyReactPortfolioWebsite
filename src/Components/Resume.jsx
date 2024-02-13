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
import { FaArrowDown } from "react-icons/fa";

const Resume = () => {
  const exp = Experience.map((item) => (
    <ExperienceSection
      key={item.id}
      year={item.year}
      title={item.title}
      description={item.description}
    />
  ));

  const resumeProjects = ResumeProjectsArray.map((project) => (
    <ResumeProjectSection
      key={project.id}
      title={project.title}
      description={project.description}
    />
  ));

  const resumeContacts = ContactArray.map((contact) => (
    <ResumeContactSection key={contact.id} title={contact.title} />
  ));

  const resumeTechStacks = TechStackArray.map((tech) => (
    <ResumeTechStackSection key={tech.id} title={tech.title} />
  ));

  const resumeEducation = EducationArray.map((education) => (
    <ResumeEducationSection
      key={education.id}
      title={education.title}
      year={education.year}
      major={education.major}
    />
  ));

  return (
    <div className="bg-slate-500 lg:h-[100rem] p-6">
      <div className="flex flex-row justify-between ">
        <Link to="/" className="lg:text-2xl   font-extrabold  text-rose-500 ">
          Home
        </Link>
        <a
          href="Gbenga Oluwadahunsi_Software_Developer.pdf"
          download
          className="text-customBlue  font-semibold"
        >
          {" "}
          <FaArrowDown className="inline" /> Download Résumé{" "}
        </a>
      </div>

      <h2 className="text-customBlue font-extrabold  md:text-xl lg:text-3xl text-center">
        Résumé
      </h2>

      <main className="bg-white rounded  text-gray-800 flex flex-col md:flex-row">
        <div className="p-4 lg:p-16">
          <div>
            <h2 className=" md:text-3xl lg:text-5xl text-rose-500 font-extrabold">
              Gbenga Oluwadahunsi
            </h2>
            <span className="font-bold   lg:w-72 rounded   lg:text-2xl">
              FullStack Developer
            </span>
          </div>

          <div className="lg:text-xl  text-justify mt-8 lg:mt-16">
            <h5 className="font-bold text-rose-500">SUMMARY</h5>
            <p className="">
              A creative, detail-oriented Fullstack Engineer with a strong
              interest in Artificial Intelligence. I have a track record of
              creating and launching successful frontend and backend web
              applications.
            </p>
          </div>

          <div className="lg:text-xl  text-justify mt-8 lg:mt-16">
            <h5 className="font-bold text-rose-500 ">EXPERIENCE</h5>
            {exp}
          </div>

          <div className="lg:text-xl  text-justify mt-8 lg:mt:16">
            <h2 className="font-bold text-rose-500 ">PROJECTS</h2>
            {resumeProjects}
          </div>
        </div>

        <div className=" text-md flex flex-col gap-3 p-4 md:w-96 md:p-16 ">
          <h2 className="lg:text-2xl text-rose-500 font-extrabold">CONTACT </h2>
          <div className="flex flex-col gap-2">{resumeContacts}</div>

          <div>
            <h2 className="lg:text-2xl text-rose-500 font-extrabold">SKILLS</h2>
            <div className="flex flex-col gap-2">{resumeTechStacks}</div>
          </div>

          <div>
            <h2 className="lg:text-2xl text-rose-500 font-extrabold">
              EDUCATION
            </h2>
            <div>{resumeEducation}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
