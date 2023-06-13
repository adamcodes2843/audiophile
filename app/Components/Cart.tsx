'use client'

import Link from 'next/link'
import {useEffect, useState} from 'react'

/*async function getCartItems() {
    const res = await fetch(`/api/getCartItems`)
    if (!res.ok) {
        console.log(res)
    }
    return res.json()
}
*/

const Cart = ({setShowCart}:any) => {
    const [cartItems, setCartItems] = useState<any>()

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
    
    console.log(cartItems)

    let toCheckout = () => {
        setShowCart(false)
    }
    let removeAll = () => {
        setShowCart(false)
    }
  return (
    <div className="fixed z-40 w-full mt-24 h-full bg-audiocolor-b2 bg-opacity-30 overflow-hidden max-w-[1440px] mx-auto left-0 right-0">
        <div className="z-50 flex flex-col md:w-1/2 md:max-w-xl justify-between bg-audiocolor-w1 mx-6 md:ml-auto md:mr-10 lg:mr-40 lg:ml-auto mt-6 p-6 rounded-lg gap-3">
            <div className="flex flex-row justify-between">
            <h6 className="text-H6">{'CART (3)'}</h6>
            <button type="button" onClick={() => removeAll()}>Remove all</button>
            </div>
            <div className="flex flex-row justify-between">
                <ul>
                    {cartItems ? cartItems.map((item:any )=> (
                        <li key={item.id}>{item.product}</li>
                    )) : 'no items'}
                </ul>
                <p>TOTAL</p>
                <h6 className="text-H6">$5,446</h6>
            </div>
            <Link href='/checkout' onClick={() => toCheckout()} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 py-3 my-2 text-center">CHECKOUT</Link>
        </div>
    </div>
  )
}

export default Cart