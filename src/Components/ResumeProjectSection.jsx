import PropTypes from "prop-types";

const ResumeProjectSection = (props) => {
  return (
    <div className="mt-1">
      <h5 className="font-bold text-rose-800 ">{props.title}</h5>
      <p className="w-3/4">{props.description}</p>
    </div>
  );
};

ResumeProjectSection.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ResumeProjectSection;
