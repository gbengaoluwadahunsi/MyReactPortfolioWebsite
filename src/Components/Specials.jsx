import PropTypes from 'prop-types';


const Specials = (props) => {
    return (
        <>
            <div className='text-customBlue font-medium duration-500  transition-transform transform cursor-pointer  hover:-translate-x-4' >
                <section className='bg-white grid lg:grid-rows-4 h-96 rounded-lg'>
                    <div className='row-span-3 place-self-center'>
                        <div className='flex flex-row justify-center '>
                            {props.img ? (
                                <img  className = "h-24 lg:h-32" src={`./Public/${props.img}`} alt={`${props.menu} Image`} />
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
                        <p className='  px-6 text-center mt-10'>{props.description}</p>
                    </div>
                    <div className=' bg-customBlue  rounded-b-lg p-6 '>
                        <h2 className='lg:text-xl text-zinc-300'>{props.menu}</h2>
                        <span className="text-zinc-400">{props.link}</span>
                    </div>
                
                </section>
            </div>
        </>
    );
};

Specials.propTypes = {
    id: PropTypes.number.isRequired, // Change the prop type to number if it's an integer
    img: PropTypes.string,
    menu: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

    
};

export default Specials;
