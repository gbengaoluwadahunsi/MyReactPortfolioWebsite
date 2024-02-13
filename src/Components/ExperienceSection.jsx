import PropTypes from "prop-types";

function ExperienceSection(props) {
  return (
    <div className=" mt-1 lg:mb-8 text-justify">
      <h5 className="font-bold text-rose-800 mt-2">
        {props.title}
        <span className=" text-lg  py-1">
          {props.year}
        </span>
      </h5>
      <p className="">{props.description}</p>
    </div>
  );
}

ExperienceSection.propTypes = {
  id: PropTypes.number, // Change the prop type to number if it's an integer
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceSection;
