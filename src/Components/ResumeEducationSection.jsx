import PropTypes from 'prop-types';

const ResumeEducationSection = (props) =>  {
  return (
    <div>

        
       <div className='flex flex-row gap-4' >
        <span>{props.title}</span> 
        <span className="">{props.year}</span>
     </div>
        <h6>{props.major}</h6>
    </div>
  )
}

ResumeEducationSection.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
  
    
  };

export default ResumeEducationSection
