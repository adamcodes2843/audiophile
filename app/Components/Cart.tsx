'use client'
import Link from 'next/link'
const Cart = ({setShowCart, cartItems}:any) => {
    
    console.log(cartItems)

    let toCheckout = () => {
        setShowCart(false)
    }
    let removeAll = () => {
        setShowCart(false)
    }
    const calcTotal = () => {
        let itemTotal = cartItems && cartItems.reduce((total:number, curr:any) => {
            return total + (curr.price * curr.quantity)
        }, 0).toString()
        let totalArr = itemTotal.split("")
        if (totalArr.length > 3) {
            totalArr.splice(totalArr.length-3,0, ',')
            let z = totalArr.join('')
            let stringTotal = z.toString()
            return stringTotal
        }
    }

  return (
    <div className="fixed z-40 w-full mt-24 h-full bg-audiocolor-b2 bg-opacity-30 overflow-hidden max-w-[1440px] mx-auto left-0 right-0">
        <div className="z-50 flex flex-col md:w-1/2 md:max-w-xl justify-between bg-audiocolor-w1 mx-6 md:ml-auto md:mr-10 lg:mr-40 lg:ml-auto mt-6 p-6 rounded-lg gap-3">
            <div className="flex flex-row justify-between">
            <h6 className="text-H6">{`CART (${cartItems && cartItems.length})`}</h6>
            <button type="button" onClick={() => removeAll()} className="opacity-50 underline hover:text-audiocolor-oj2 hover:opacity-100">Remove all</button>
            </div>
            <ul className="flex flex-col gap-4 my-4">
                {cartItems ? cartItems.map((item:any )=> (
                    <li key={item.id} className="flex">
                        <img src={`/../.${item.cartImage}`} alt={item.product} width={70} height={70} className="rounded-xl mr-6" />
                        <div className="flex flex-col justify-center">
                            <p className="font-bold">{item.product}</p>
                            <p className="opacity-50">${item.price}</p>
                        </div>
                    </li>
                    )) : 'no items'}
                </ul>
            <div className="flex flex-row justify-between">
                <p className="opacity-50">TOTAL</p>
                <h6 className="text-H6">${cartItems && calcTotal()}</h6>
            </div>
            <Link href='/checkout' onClick={() => toCheckout()} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 py-3 my-2 text-center">CHECKOUT</Link>
        </div>
    </div>
  )
}

export default Cart