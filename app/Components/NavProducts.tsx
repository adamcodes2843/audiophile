import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const NavCategories = () => {
    return (
      <nav className="py-6 px-8 md:px-0 flex justify-between md:justify-start items-center text-audiocolor-w1 w-full md:w-11/12 lg:w-10/12 z-10 absolute md:mx-10 md:left-0 md:right-0 lg:mx-auto max-w-[1080px]">
          <FontAwesomeIcon icon={faBars} className='h-6 md:mr-10 lg:hidden' />
          <h1 className="text-H4 tracking-normal lg:mr-auto">audiophile</h1>
          <ul className="hidden lg:flex lg:gap-8">
            <Link href='/'>HOME</Link>
            <Link href='/categories/headphones'>HEADPHONES</Link>
            <Link href='/categories/speakers'>SPEAKERS</Link>
            <Link href='/categories/earphones'>EARPHONES</Link>
          </ul>
          <FontAwesomeIcon icon={faShoppingCart} className="bg-audiocolor-b2 h-6 md:ml-auto" />
      </nav>
    )
  }

export default NavCategories