'use client'

import {useEffect, useState, useContext} from 'react'
import {useParams} from 'next/navigation'
import { AppContext } from './Context-Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Cart from './Cart'

const Nav = () => {
    const [showCategories, setShowCategories] = useState<boolean>(false)
    const {cartItems, setCartItems, showCart, setShowCart}:any = useContext(AppContext)
    const params = useParams()

    async function fetchCartData(){
      fetch(`${process.env.BASE_URL}/api/getCartItems`)
      .then(response => {
          if(!response.ok) {
              throw Error('could not fetch the data for that resource')
          }
          return response.json()
      })
      .then(data => {
          setCartItems(data)
      })
    }

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
        fetchCartData()
        setShowCart(true)
      } else {
        setShowCart(false)
        fetchCartData()
        if (params?.checkout === 'checkout') {
          window.location.reload()
        }
      }
    }

    useEffect(() => {
      fetch(`${process.env.BASE_URL}/api/getCartItems`)
      .then(response => {
          if(!response.ok) {
              throw Error('could not fetch the data for that resource')
          }
          return response.json()
      })
      .then(data => {
          setCartItems(data)
      })
    }, [])

    return (
      <>
      <nav className={`py-[1.85rem] px-8 md:px-10 lg:px-40 flex justify-between md:justify-start items-center text-audiocolor-w1 w-full z-50 ${showCategories || showCart ? 'fixed bg-audiocolor-b1' : 'absolute'} md:left-0 md:right-0 lg:mx-auto max-w-[1440px] md:mx-auto xl:w-full`}>
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
          <button type="button" className={`md:ml-auto rounded-full p-2 relative`} onClick={() => cartSwitch()}>
          <img src={'/../assets/cart/CombinedShape.svg'} alt="cart" />
          {cartItems && cartItems.filter((prod:any) => prod.quantity != 0).length > 0 && <div className="absolute bottom-[1.3rem] left-[1.1rem] text-audiocolor-oj2">{cartItems.filter((prod:any) => prod.quantity != 0).length}</div>}
          </button>
      </nav>
      {
        showCategories ? <Dropdown setShowCategories={setShowCategories} /> :
        showCart ? <Cart /> : 
        ''
      }
      </>
    )
  }

export default Nav