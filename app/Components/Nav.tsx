import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav className="bg-audiocolor-b2 py-8 px-8 flex justify-between md:justify-start items-center text-audiocolor-w1 w-full z-10 absolute">
        <FontAwesomeIcon icon={faBars} className='h-6 md:mr-10' />
        <h1 className="text-H4 tracking-normal">audiophile</h1>
        <FontAwesomeIcon icon={faShoppingCart} className="bg-audiocolor-b2 h-6 md:ml-auto" />
    </nav>
  )
}

export default Nav