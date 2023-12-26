import PropTypes from 'prop-types';
import { FaGithub } from "react-icons/fa";



const Specials = (props) => {
    return (
        <>
            <section className='bg-white grid mx-0 lg:grid-rows-4 pt-2 w-3/4 lg:w-full rounded-lg place-self-center text-customBlue font-medium duration-500  transition-transform transform cursor-pointer  hover:-translate-x-4'>
                   
                    <div className='row-span-3 place-self-center'>                                                 
                        <img  className = "h-full rounded-xl lg:w-92   px-4 " src={`Images/${props.img}`} alt={`${props.menu} Image`} />  
                        <p className='px-6 text-center mt-10'>{props.description}</p>
                    </div>
                    
                    <div className=' bg-customBlue  rounded-b-lg px-6 py-2'>
                        <h2 className='lg:text-xl text-zinc-300'>{props.menu}</h2>
                       <div className="grid grid-cols-2 mt-1"> <a href={props.linked} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-red-600 "> Click to View</a><a className = " place-self-end" href={props.gitHubRepo}  target="_blank" rel="noopener noreferrer"><FaGithub size="1.6rem" className='text-white hover:text-green-100'/></a></div>
                       <span className="text-white text-xs">{props.stack}</span>
                    </div>
                
            </section>
        </>
    );
};

Specials.propTypes = {
    id: PropTypes.number.isRequired, 
    img: PropTypes.string,
    menu: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    linked: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gitHubRepo : PropTypes.string

    
};

export default Specials;
