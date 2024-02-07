import PropTypes from "prop-types";

const ResumeEducationSection = (props) => {
  return (
    <div>
      <div className="flex flex-row my-3 gap-4">
        <span className="text-slate-950 font-extrabold">{props.title}</span>
        <span className="text-red-600 font-semibold">{props.year}</span>
      </div>
      <h6>{props.major}</h6>
    </div>
  );
};

ResumeEducationSection.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
};

export default ResumeEducationSection;
