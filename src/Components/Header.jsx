
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered} from '@fortawesome/free-solid-svg-icons';






const Header = () => {
  return (
    <header className=' grid grid-cols-2 gap-10 lg:py-10 lg:px-14  bg-slate-950'><span className='font-extrabold text-3xl text-rose-700'>Pollécode</span> <span className = " justify-self-end font-extrabold text-3xl text-rose-700"><FontAwesomeIcon   icon={faBarsStaggered}  /></span> </header>
  )
}

export default Header;