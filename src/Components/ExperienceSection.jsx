import PropTypes from 'prop-types';



function ExperienceSection(props) {
  return (
    <div className=' mt-1 text-justify'>
    <h5 className='font-bold text-rose-800 mt-2'>{props.title}<span className="bg-customBlue text-lg  mx-2 rounded px-2 py-1">{props.year}</span></h5>
    <p className='w-3/4'>                    
      {props.description}
    </p>
    </div>
  )
}

ExperienceSection.propTypes = {
    id: PropTypes.number, // Change the prop type to number if it's an integer
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

    
};


export default ExperienceSection

