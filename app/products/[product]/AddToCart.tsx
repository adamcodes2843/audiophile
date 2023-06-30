'use client'
import {useState, useEffect, useContext} from 'react'
import { AppContext } from '@/app/Components/Context-Provider'

interface ItemPost {
  product: string,
  cartImage: string,
  price: number,
  category: string,
  quantity: number,
  slug: string,
  purchased: boolean,
  checkoutId: null,
  id: number
}

const AddToCart = ({params, productData}:any) => {
  const [item, setItem] = useState<ItemPost>({
    product: '',
    slug: params.product,
    cartImage: `./assets/cart/image-${params.product}.jpg`,
    price: productData.price,
    category: productData.category,
    quantity: 1,
    purchased: false,
    checkoutId: null,
    id: Math.floor(Math.random() * 100000000)
  })
  const [cartItemId, setCartItemId] = useState<number | undefined>()
  const {setCartItems, cartItems, setShowCart, itemInCart, setItemInCart}:any = useContext(AppContext)

  useEffect(() => {
    if (params.product === 'xx99-mark-two-headphones'){
      setItem({...item, product: 'XX99 MK II'})
    }
    if (params.product === 'xx99-mark-one-headphones'){
      setItem({...item, product: 'XX99 MK I'})
    }
    if (params.product !== 'xx99-mark-two-headphones' && params.product !== 'xx99-mark-one-headphones') {
      setItem({...item, product: params.product.toUpperCase().split('-')[0]})
    }
  }, [])

  useEffect(() => {
    fetch(`${process.env.BASE_URL}/pages/api/getCartItems`)
    .then(res => {
      if (!res.ok){
        throw Error('could not fetch the data for that resource')
      }
      return res.json()
    })
    .then(data => {
      let filteredData = data.filter((prod:any)=> {
        return prod.slug == params.product
      })
      if (filteredData.length === 1) {
        setCartItemId(filteredData[0].id)
        setItemInCart(true)
      }
      else if (!filteredData.length) {
        setItemInCart(false)
      }
    })
  }, [cartItems])

  async function addItem(data: ItemPost) {
    try {
      fetch(`${process.env.BASE_URL}/pages/api/createCartItem`, {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddItem = async (data: ItemPost) => {
    try {
      addItem(data)
      setCartItems([...cartItems, item])
      setItem({...item, quantity: 1})
      setShowCart(true)
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdateItem = async (id:number | undefined, quan:number) => {
    try {
      updateProduct(String(id), String(quan))
      let updatedCartItems = cartItems.map((product:any) => {
        if(product.slug === item.slug) {
          return{...product, quantity: item.quantity}
        }
        return product
      })
      setCartItems(updatedCartItems)
      setItem({...item, quantity: 1})
      setShowCart(true)
    } catch (error) {
      console.log(error)
    }
  }

  async function updateProduct(id:string, quan:string) {
    try{
      fetch(`${process.env.BASE_URL}/pages/api/update/${id}`, {
        body: JSON.stringify({
          quantity: quan
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: 'PATCH'
      })
      .then((response) => response.json())
      .then((json) => console.log(json))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex w-fill gap-4 mt-8 h-12">
        <div className="flex gap-6 items-center bg-audiocolor-w2 px-8 w-32 justify-center">
            <button type='button' disabled={item.quantity <= 1} onClick={() => setItem({...item, quantity: item.quantity - 1})} className={`opacity-30 ${item.quantity > 1 && 'hover:opacity-100 hover:text-audiocolor-oj2'}`}>-</button>
            <div>{item.quantity}</div>
            <button type='button' disabled={item.quantity >= 9} onClick={() => setItem({...item, quantity: item.quantity + 1})} className={`opacity-30 ${item.quantity < 10 && 'hover:opacity-100 hover:text-audiocolor-oj2'}`}>+</button>
        </div>
        {
          itemInCart ?
          <button onClick={() => handleUpdateItem(cartItemId, item.quantity)} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 px-8 flex items-center">UPDATE CART</button> : 
          <button onClick={() => handleAddItem(item)} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 px-8 flex items-center">ADD TO CART</button>
        }
    </div>
  )
}

export default AddToCart