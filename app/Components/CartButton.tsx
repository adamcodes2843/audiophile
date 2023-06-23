const CartButton = ({cartItems}:any) => {
  return (
    <div className="bg-audiocolor-w3 text-subtitle flex">
        <button className="opacity-25">-</button>
        <p>{cartItems && cartItems.quantity}</p>
        <button className="opacity-25">+</button>
    </div>
  )
}

export default CartButton