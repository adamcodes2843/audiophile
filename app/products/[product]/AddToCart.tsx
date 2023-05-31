'use client'

const AddToCart = () => {
  return (
    <div className="flex w-fill gap-4 mt-8 h-12">
        <div className="flex gap-6 items-center bg-audiocolor-w2 px-6">
            <button className="opacity-30">-</button>
            <div>1</div>
            <button className="opacity-30">+</button>
        </div>
        <button className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 px-8">ADD TO CART</button>
    </div>
  )
}

export default AddToCart