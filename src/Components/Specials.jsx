import PropTypes from 'prop-types';
import { FaGithub } from "react-icons/fa";



const Specials = (props) => {
    return (
        <>
            <div className='text-customBlue font-medium duration-500  transition-transform transform cursor-pointer  hover:-translate-x-4' >
               

                <section className='bg-white grid mx-12 lg:mx-0 lg:grid-rows-4 h-full  w-3/4 lg:w-full rounded-lg place-self-center'>
                    <div className='row-span-3 place-self-center'>
                        <div className='flex flex-row justify-center '>
                            {props.img ? (
                                <img  className = "h-24 lg:h-32" src={`Images/${props.img}`} alt={`${props.menu} Image`} />
                                
                            ) : (
                                <span
                                    className={
                                        props.id === 2
                                            ? 'bg-gradient-to-r  mt-10 from-green-400 to-blue-400  lg:text-3xl rounded p-2 lg:p-6'
                                            : props.id === 4
                                            ? 'text-xl   mt-10 lg:text-3xl inline-block font-extrabold p-6 text-rose-600'
                                            : ''
                                    }
                                >
                                    {props.title}
                                </span>
                            )}
                        </div>
                        <p className='px-6 text-center mt-10'>{props.description}</p>
                    </div>
                    <div className=' bg-customBlue  rounded-b-lg px-6 py-2'>
                        <h2 className='lg:text-xl text-zinc-300'>{props.menu}</h2>
                       <div className="grid grid-cols-2 mt-1"> <a href={props.linked} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-red-600 "> Click to View</a><a className = " place-self-end" href={props.gitHubRepo}  target="_blank" rel="noopener noreferrer"><FaGithub size="1.6rem" className='text-white hover:text-green-100'/></a></div>
                       <span className="text-white text-xs">{props.stack}</span>
                    </div>
                
                </section>
                
            </div>
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
