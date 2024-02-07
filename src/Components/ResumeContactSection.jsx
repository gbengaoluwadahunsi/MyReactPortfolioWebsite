import PropTypes from "prop-types";

function ResumeContactSection(props) {
  return (
    <div>
      <a href={`https://${props.title}`} target="_blank" rel="noreferrer">
        {props.title}
      </a>
    </div>
  );
}

ResumeContactSection.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ResumeContactSection;
