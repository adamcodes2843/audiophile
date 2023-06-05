'use client'

import Image from 'next/image'

const PaymentDetails = ({checkoutData, setCheckoutData}:any) => {
    const ePay = () => {
        setCheckoutData({...checkoutData, payment: "e-Money"})
    }
    const onDelivery = () => {
        setCheckoutData({...checkoutData, payment: "cash-on-delivery"})
    }
    const cashIcon = '/../assets/checkout/icon-cash-on-delivery.svg'
  return (
    <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6">
        <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">PAYMENT DETAILS</h4>
        <h5 className="mt-4 mb-2 text-subtitle md:row-span-2">Payment Method</h5>
            <label htmlFor="eMon" className="border-[1px] border-audiocolor-g1 p-3 rounded-lg md:mt-4 md:ml-3 font-bold hover:cursor-pointer hover:border-audiocolor-oj2">
            <input type="radio" id="eMon" name="payment_method" value="e-Money" className="mr-3 hover:cursor-pointer" onClick={() => ePay()} />
                e-Money
            </label>
            <label htmlFor="CoD" className="border-[1px]  border-audiocolor-g1 p-3 mt-4 mb-3 rounded-lg md:ml-3 font-bold hover:cursor-pointer hover:border-audiocolor-oj2">
            <input type="radio" id="CoD" name="payment_method" value="cash on delivery" className="mr-3 hover:cursor-pointer" onClick={() => onDelivery()} />
                Cash on Delivery
            </label>
        {
            checkoutData.payment === 'e-Money' ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 md:mt-2 md:col-span-2">
                <div>
                <label htmlFor='eMoneyNumber' className="mt-4 mb-1 text-subtitle">e-Money Number</label>
                <input id="eMoneyNumber" name="eMoneyNumber" type="text" placeholder="238521993" className="form-input" />
                </div>
                <div>
                <label htmlFor='eMoneyPIN' className="mt-4 mb-1 text-subtitle">e-Money PIN</label>
                <input id="eMoneyPIN" name="eMoneyPIN" type="text" placeholder="6891" className="form-input" />
                </div>
            </div>
            :
            <div className="flex col-span-2 w-full gap-5">
                <Image src={cashIcon} alt="cash on delivery" width="60" height="60" />
                <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
        }
        
    </fieldset>
  )
}

export default PaymentDetails