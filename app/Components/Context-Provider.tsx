'use client'
 
import { createContext, useState } from 'react'
 
export const AppContext = createContext({})
 
export default function ContextProvider({ children }:any) {
    const [showCart, setShowCart] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<any>()
    const [itemInCart, setItemInCart] = useState<boolean>(false)

  return <AppContext.Provider value={{showCart, setShowCart, cartItems, setCartItems, setItemInCart, itemInCart}}>{children}</AppContext.Provider>
}