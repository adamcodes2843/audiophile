import Link from 'next/link'
const Cart = () => {
  return (
    <div className="fixed z-40 w-full mt-24 lg:hidden h-full bg-audiocolor-b2 bg-opacity-30 overflow-hidden">
        <div className="z-50 flex flex-col justify-between bg-audiocolor-w1 mx-6 mt-6 p-6 rounded-lg gap-3">
            <div className="flex flex-row justify-between">
            <h6 className="text-H6">{'CART (3)'}</h6>
            <button type="button">Remove all</button>
            </div>
            <ul></ul>
            <div className="flex flex-row justify-between">
                <p>TOTAL</p>
                <h6 className="text-H6">$5,446</h6>
            </div>
            <Link href='/checkout' className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 py-3 my-2 text-center">CHECKOUT</Link>
        </div>
    </div>
  )
}

export default Cart