'use client'

import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Cart from './Cart'

const Nav = () => {
    const [showCategories, setShowCategories] = useState<boolean>(false)
    const [showCart, setShowCart] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<any>()

    const categorySwitch = () => {
      if (!showCategories) {
        setShowCart(false)
        setShowCategories(true)
      } else {
        setShowCategories(false)
      }
    }
    const cartSwitch = () => {
      if (!showCart) {
        setShowCategories(false)
        setShowCart(true)
      } else {
        setShowCart(false)
      }
    }

    useEffect(() => {
      fetch('/api/getCartItems')
      .then(response => {
          if(!response.ok) {
              throw Error('could not fetch the data for theat resource')
          }
          return response.json()
      })
      .then(data => {
          setCartItems(data)
      })
    }, [])

    useEffect(() => {
      if (cartItems && cartItems.length >= 1){
        setShowCart(true)
      }
    }, [cartItems])

    return (
      <>
      <nav className={`py-8 px-8 md:px-10 lg:px-40 flex justify-between md:justify-start items-center text-audiocolor-w1 w-full z-50 ${showCategories || showCart ? 'fixed bg-audiocolor-b1' : 'absolute'} md:left-0 md:right-0 lg:mx-auto max-w-[1440px] md:mx-auto xl:w-full`}>
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
          <button type="button" className="md:ml-auto relative" onClick={() => cartSwitch()}>
          <img src={'/../assets/cart/CombinedShape.svg'} alt="cart" />
          {cartItems && cartItems.length > 0 && <div className="absolute bottom-3 left-[0.6rem] text-audiocolor-oj2">{cartItems.length}</div>}
          </button>
      </nav>
      {
        showCategories ? <Dropdown setShowCategories={setShowCategories} /> :
        showCart ? <Cart setShowCart={setShowCart} setCartItems={setCartItems} cartItems={cartItems} /> : 
        ''
      }
      </>
    )
  }

export default Nav