'use client'
import {useState, useEffect} from 'react'

interface ItemPost {
  product: string,
  cartImage: string,
  price: number,
  category: string,
  quantity: number
}

const AddToCart = ({params, productData}:any) => {
  const [item, setItem] = useState<ItemPost>({
    product: '',
    cartImage: `./assets/cart/image-${params.product}.jpg`,
    price: productData.price,
    category: productData.category,
    quantity: 1
  })

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

  const handleClick = async (data: ItemPost) => {
    try {
      addItem(data)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex w-fill gap-4 mt-8 h-12">
        <div className="flex gap-6 items-center bg-audiocolor-w2 px-8 w-32 justify-center">
            <button type='button' disabled={item.quantity <= 1} onClick={() => setItem({...item,quantity: item.quantity - 1})} className={`opacity-30 ${item.quantity > 1 && 'hover:opacity-100 hover:text-audiocolor-oj2'}`}>-</button>
            <div>{item.quantity}</div>
            <button type='button' disabled={item.quantity >= 10} onClick={() => setItem({...item, quantity: item.quantity + 1})} className={`opacity-30 ${item.quantity < 10 && 'hover:opacity-100 hover:text-audiocolor-oj2'}`}>+</button>
        </div>
        <button  onClick={() => handleClick(item)} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 px-8 flex items-center">ADD TO CART</button>
    </div>
  )
}

export default AddToCart