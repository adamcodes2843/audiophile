import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav className="bg-audiocolor-b2 py-8 px-8 flex justify-between items-center text-audiocolor-w1 w-full z-10 absolute">
        <FontAwesomeIcon icon={faBars} className='h-6' />
        <h1 className="text-H4">audiophile</h1>
        <FontAwesomeIcon icon={faShoppingCart} className="bg-audiocolor-b2 h-6" />
    </nav>
  )
}

export default Nav