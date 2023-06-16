'use client'

const Summary = ({checkoutData, summaryItems, formDisabled}:any) => {

  return (
    <fieldset className="bg-audiocolor-w1 p-6 md:px-8 lg:px-12 xl:px-8 lg:pt-10 mt-6 md:mt-8 xl:mt-6 rounded-lg flex flex-col justify-between mb-28 xl:mb-auto mx-6 md:mx-10 lg:mx-40 xl:ml-0 xl:mr-40 xl:w-1/3">
        <h2 className='text-H6'>SUMMARY</h2>
        <ul className="flex flex-col gap-4 my-8">
        {summaryItems && summaryItems.map((item:any )=> (
              <li key={item.id} className="flex">
                <img src={`/../.${item.cartImage}`} alt={item.product} width={70} height={70} className="rounded-xl mr-6" />
                <div className="flex flex-col justify-center">
                    <p className="font-bold">{item.product}</p>
                    <p className="opacity-50">${item.price.toLocaleString()}</p>
                </div>
                <p className="ml-auto flex jusitify-center items-center">x{item.quantity}</p>
              </li>
            ))}
        </ul>
        <div className='flex flex-col gap-1'>
        <div className="flex justify-between">
          <h6 className="opacity-50">TOTAL</h6>
          <div className="text-H6">${checkoutData.total.toLocaleString()}</div>
        </div>
        <div className="flex justify-between">
          <h6 className="opacity-50">SHIPPING</h6>
          <div className="text-H6">${checkoutData.shipping}</div>
        </div>
        <div className="flex justify-between">
          <h6 className="opacity-50">{'VAT (INCLUDED)'}</h6>
          <div className="text-H6">${checkoutData.vat.toLocaleString()}</div>
        </div>
        <div className="flex justify-between my-6">
          <h6 className="opacity-50">GRAND TOTAL</h6>
          <div className="text-H6 text-audiocolor-oj2">${checkoutData.grandTotal.toLocaleString()}</div>
        </div>
        </div>
        <button type="submit" disabled={formDisabled} className={`bg-audiocolor-oj2 ${formDisabled ? 'hover:bg-audiocolor-r1 hover:bg-opacity-80' : 'hover:bg-audiocolor-oj1'} text-audiocolor-w1 py-3 my-2`}>CONTINUE & PAY</button>
    </fieldset>
  )
}

export default Summary