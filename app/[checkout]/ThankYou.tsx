'use client'

import Image from 'next/image'
import Link from 'next/link'

const ThankYou = ({setSubmitted, summaryItems, checkoutData, expandList, setExpandList}:any) => {

  let checkmark = '/../assets/checkout/icon-order-confirmation.svg'

  let returnHome = () => {
    setSubmitted(false)
  }

  
  return (
    <div className="fixed z-40 w-full h-full bg-audiocolor-b2 bg-opacity-30 overflow-hidden max-w-[1440px] mx-auto left-0 right-0 top-0 flex flex-col justify-center items-center">
        <div className="z-50 flex flex-col justify-between bg-audiocolor-w1 mx-6 mt-6 p-6 rounded-lg gap-3 md:p-10 md:gap-6">
        <Image src={checkmark} alt="" width="60" height="60" />
        <h1 className="text-H5 md:text-H3">THANK YOU <br />FOR YOUR ORDER</h1>
        <p className="opacity-50">You will receive an email confirmation shortly.</p>
        <div className="md:flex">
          <div className="bg-audiocolor-w3 flex flex-col rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg">
            {
              summaryItems && expandList &&
              <div className="flex m-6 md:mb-2">
                <img src={`/../.${summaryItems[0].cartImage}`} alt="product image" width={50} height={50} className="mr-4" />
                <div className="flex flex-col justify-center md:mr-10">
                    <p className="font-bold">{summaryItems[0].product}</p>
                    <p className="opacity-50">${summaryItems[0].price.toLocaleString()}</p>
                </div>
                <p className="ml-auto flex jusitify-center items-center">x{summaryItems[0].quantity}</p>
              </div>
            }
            {
              summaryItems && !expandList && summaryItems.length > 1 &&
              summaryItems.map((item:any )=> (
                <div key={item.id} className="flex">
                  <img src={`/../.${item.cartImage}`} alt={item.product} width={70} height={70} className="rounded-xl mr-6" />
                  <div className="flex flex-col justify-center">
                      <p className="font-bold">{item.product}</p>
                      <p className="opacity-50">${item.price.toLocaleString()}</p>
                  </div>
                  <p className="ml-auto flex jusitify-center items-center">x{item.quantity}</p>
                </div>
                ))
            }
            {
              summaryItems && summaryItems.length > 1 && expandList && <button type='button' onClick={setExpandList(true)} className="mx-6 border-opacity-50 border-audiocolor-g1 border-t-2 p-4 md:pt-2 text-center opacity-50 text-subtitle">and 2 other item(s)</button>
            } 
          </div>
          <div className="bg-audiocolor-b2 px-6 py-4 rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg md:flex md:flex-col md:justify-center md:pr-20">
            <p className="text-audiocolor-w1 text-opacity-50">GRAND TOTAL</p>
            <p className="text-audiocolor-w1 text-H6 py-2">${checkoutData.grandTotal.toLocaleString()}</p>
          </div>
        </div>
        <Link href={'/'} onClick={() => returnHome()} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 text-center py-3">BACK TO HOME</Link>
        </div>
    </div>
  )
}

export default ThankYou