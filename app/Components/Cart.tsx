'use client'
import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from './Context-Provider'

const Cart = () => {
    const {cartItems, setCartItems, setItemInCart}:any = useContext(AppContext)
    
    let removeAll = () => {
        removeAllItems()
        setCartItems([])
        setItemInCart(false)
    }

    let incrementQuantity = (id:number) => {
        const increasedQuantity = cartItems.map((product:any) => {
            if(product.id === id && product.quantity < 9) {
                incrementProduct(String(id))
                return {...product, quantity: product.quantity + 1}
            }
            return product
        })
        setCartItems(increasedQuantity)
    }

    let decrementQuantity = (id:number) => {
        const decreasedQuantity = cartItems.map((product:any) => {
            if(product.id === id && product.quantity > 1) {
                decrementProduct(String(id))
                return({...product, quantity: product.quantity - 1})
            }
            if(product.id === id && product.quantity <= 1){
                deleteProduct(String(id))
                return({...product, quantity: product.quantity - 1})
            }
            return product
        })
        setCartItems(decreasedQuantity)
    }
    
    async function incrementProduct(id:string) {
        try {
            fetch(`/pages/api/increment/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'PATCH'
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function decrementProduct(id:string) {
        try {
            fetch(`/pages/api/decrement/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'PATCH'
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    async function deleteProduct(id:string) {
        try {
            fetch(`/pages/api/delete/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'DELETE'
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function removeAllItems() {
        try{
            fetch(`/pages/api/removeAll`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'DELETE'
            })
        } catch(error){
            console.log(error)
        }
    }

  return (
    <div className="fixed z-40 w-full mt-24 h-full bg-audiocolor-b2 bg-opacity-30 overflow-hidden max-w-[1440px] mx-auto left-0 right-0 pl-6">
        <div className="z-50 flex flex-col max-w-md md:w-1/2 justify-between bg-audiocolor-w1 mx-6 ml-auto md:mr-10 lg:mr-40 lg:ml-auto mt-6 p-6 rounded-lg">
            <div className="flex flex-row justify-between">
            <h6 className="text-H6">{`CART (${cartItems && cartItems.filter((x:any) => x.quantity > 0).length})`}</h6>
            <button type="button" onClick={() => removeAll()} className="opacity-50 underline hover:text-audiocolor-oj2 hover:opacity-100">Remove all</button>
            </div>
            <ul className="flex flex-col gap-6 my-6">
                {cartItems ? cartItems?.map((item:any | undefined )=> (
                    <li key={item.id} className={`flex items-center ${!item.quantity && 'hidden'}`}>
                        <img src={`/../.${item.cartImage}`} alt={item.product} width={70} height={70} className="rounded-xl mr-4 md:mr-6 w-16 h-16 md:w-20 md:h-20" />
                        <div className="flex flex-col justify-center">
                            <p className="font-bold">{item.product}</p>
                            <p className="opacity-50">${item.price.toLocaleString()}</p>
                        </div>
                        <div className="bg-audiocolor-w3 h-8 lg:h-10 text-subtitle flex items-center gap-4 lg:gap-6 px-4 lg:px-6 ml-auto">
                            <button type="button" onClick={() => decrementQuantity(item.id)} className="opacity-25 hover:opacity-100 hover:text-audiocolor-oj2 hover:font-bold">-</button>
                            <p>{item.quantity}</p>
                            <button type="button" onClick={() => incrementQuantity(item.id)} className="opacity-25 hover:opacity-100 hover:text-audiocolor-oj2 hover:font-bold">+</button>
                        </div>
                    </li>
                    )) : 'no items'}
                </ul>
            <div className="flex flex-row justify-between">
                <p className="opacity-50">TOTAL</p>
                <h6 className="text-H6">${cartItems && cartItems.reduce((total:number, curr:any) => {
            return total + (curr.price * curr.quantity)
        }, 0).toLocaleString()}</h6>
            </div>
            <Link href='/checkout' className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 py-3 my-2 text-center">CHECKOUT</Link>
        </div>
    </div>
  )
}

export default Cart