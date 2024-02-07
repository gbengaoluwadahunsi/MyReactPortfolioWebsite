import PropTypes from "prop-types";

function ResumeTechStackSection(props) {
  return (
    <div>
      <span>{props.title}</span>
    </div>
  );
}

ResumeTechStackSection.propTypes = {
  id: PropTypes.number, // Change the prop type to number if it's an integer
  title: PropTypes.string.isRequired,
};

export default ResumeTechStackSection;
