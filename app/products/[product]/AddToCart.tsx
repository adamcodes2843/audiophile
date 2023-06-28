'use client'
import {useState, useEffect} from 'react'

interface ItemPost {
  product: string,
  cartImage: string,
  price: number,
  category: string,
  quantity: number
  slug: string
}

const AddToCart = ({params, productData}:any) => {
  const [item, setItem] = useState<ItemPost>({
    product: '',
    slug: params.product,
    cartImage: `./assets/cart/image-${params.product}.jpg`,
    price: productData.price,
    category: productData.category,
    quantity: 1,
  })
  const [itemInCart, setItemInCart] = useState<boolean>(false)
  const [cartItemId, setCartItemId] = useState<number | undefined>()

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
    fetch('/api/getCartItems')
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
  }, [])

  async function addItem(data: ItemPost) {
    try {
      fetch('/api/createCartItem', {
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
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdateItem = async (id:number | undefined, quan:number) => {
    try {
      updateProduct(String(id), String(quan))
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  async function updateProduct(id:string, quan:string) {
    try{
      fetch(`/api/update/${id}`, {
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