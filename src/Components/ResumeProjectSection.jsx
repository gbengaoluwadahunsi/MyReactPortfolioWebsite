
import PropTypes from 'prop-types';

const ResumeProjectSection = (props) => {
  return (
    <div  className='mt-1'>
    <h5 className='font-bold text-rose-800 '>{props.title}</h5>
    <p className='w-3/4'>                    
      A creative, detail-oriented front-end developer with a strong interest in artificial intelligence.
      I have a track record of creating and launching successful front and backend web applications and I&apos;m looking to contribute my skills to a global tech company.
    </p>
  </div>
  )
}

ResumeProjectSection.propTypes = {
    id: PropTypes.number.isRequired,
    title :  PropTypes.string.isRequired
}

export default ResumeProjectSection