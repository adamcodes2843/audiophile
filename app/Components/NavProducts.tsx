'use client'

import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const NavProducts = () => {
    const [showCategories, setShowCategories] = useState<boolean>(false)

    const categorySwitch = () => {
      if (!showCategories) {
        setShowCategories(true)
      } else {
        setShowCategories(false)
      }
    }

    console.log(showCategories)

    return (
      <nav className="py-6 px-8 md:px-10 lg:px-40 flex justify-between md:justify-start items-center text-audiocolor-w1 w-full z-10 absolute md:left-0 md:right-0 lg:mx-auto max-w-[1440px] md:mx-auto xl:w-full">
          <button type="button" onClick={() => categorySwitch()}>
          <FontAwesomeIcon icon={faBars} className='h-6 md:mr-10 lg:hidden' />
          </button>
          <h1 className="text-H4 tracking-normal lg:mr-auto">audiophile</h1>
          <ul className="hidden lg:flex lg:gap-8">
            <Link href='/' className="hover:text-audiocolor-oj2">HOME</Link>
            <Link href='/categories/headphones' className="hover:text-audiocolor-oj2">HEADPHONES</Link>
            <Link href='/categories/speakers' className="hover:text-audiocolor-oj2">SPEAKERS</Link>
            <Link href='/categories/earphones' className="hover:text-audiocolor-oj2">EARPHONES</Link>
          </ul>
          <img src={'/../assets/cart/CombinedShape.svg'} alt="cart" className="md:ml-auto" />
      </nav>
    )
  }

export default NavProducts