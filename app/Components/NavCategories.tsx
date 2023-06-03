'use client'

import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import  Link from 'next/link'
import Dropdown from './Dropdown'

const NavCategories = () => {
  const [showCategories, setShowCategories] = useState<boolean>(false)

  const categorySwitch = () => {
    if (!showCategories) {
      setShowCategories(true)
    } else {
      setShowCategories(false)
    }
  }

    return (
      <>
      <nav className={`py-8 px-8 lg:px-0 md:px-10 flex justify-between md:justify-start items-center text-audiocolor-w1 w-full lg:w-10/12 z-40 ${showCategories ? 'fixed' : 'absolute'} lg:absolute md:left-0 md:right-0 lg:border-b-[1px] lg:border-audiocolor-w1 lg:border-opacity-10 lg:mx-auto max-w-[1080px] bg-audiocolor-b1`}>
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
      <div className="absolute left-0 right-0 w-full md:w-11/12 lg:hidden h-[1px] md:mx-auto bg-audiocolor-w1 bg-opacity-10 mt-24 z-50" />
      {
        showCategories && <Dropdown />
      }
      </>
    )
  }

export default NavCategories