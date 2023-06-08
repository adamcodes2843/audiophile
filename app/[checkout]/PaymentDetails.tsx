'use client'

import Image from 'next/image'

const PaymentDetails = ({checkoutData, setCheckoutData, validEMoneyNum, validEMoneyPIN}:any) => {

    const ePay = () => {
        setCheckoutData({...checkoutData, payment: "e-Money"})
    }
    const onDelivery = () => {
        setCheckoutData({...checkoutData, payment: "cash-on-delivery", eMoneyNum: "", eMoneyPIN: ""})
    }
    const cashIcon = '/../assets/checkout/icon-cash-on-delivery.svg'

  return (
    <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6">
        <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">PAYMENT DETAILS</h4>
        <h5 className="mt-4 mb-2 text-subtitle md:row-span-2">Payment Method</h5>
            <label htmlFor="eMon" className={`flex items-center border-[1px] border-audiocolor-g1 p-3 rounded-lg md:mt-4 md:ml-3 font-bold hover:cursor-pointer hover:border-audiocolor-oj2 ${checkoutData.payment === 'e-Money' && 'border-audiocolor-oj2'}`}>
            <input 
            type="radio" 
            id="eMon" 
            name="payment_method" 
            value="e-Money"
            className={`mr-3 hover:cursor-pointer accent-audiocolor-oj2 w-5 h-5`} 
            defaultChecked 
            onClick={() => ePay()} />
                e-Money
            </label>
            <label htmlFor="CoD" className={`flex items-center border-[1px] border-audiocolor-g1 p-3 mt-4 mb-3 rounded-lg md:ml-3 font-bold hover:cursor-pointer hover:border-audiocolor-oj2 ${checkoutData.payment === 'cash-on-delivery' && 'border-audiocolor-oj2'}`}>
            <input 
            type="radio" 
            id="CoD" 
            name="payment_method" 
            value="cash-on-delivery" 
            className="mr-3 hover:cursor-pointer accent-audiocolor-oj2 w-5 h-5" 
            onClick={() => onDelivery()} />
                Cash on Delivery
            </label>
        {
            checkoutData.payment === 'e-Money' ?
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 md:mt-2 md:col-span-2'>
                <div>
                <label htmlFor='eMoneyNumber' className={`flex justify-between mb-1 text-subtitle ${!validEMoneyNum && checkoutData.eMoneyNum !== "" && 'text-audiocolor-r1'}`}><span>e-Money Number</span><span className={`${validEMoneyNum || checkoutData.eMoneyNum === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
                <input 
                id="eMoneyNumber" 
                name="eMoneyNumber" 
                type="text" 
                placeholder="238521993" 
                value={checkoutData.eMoneyNum}
                onChange={(e) => {
                    setCheckoutData({...checkoutData, eMoneyNum: e.target.value})
                }}
                className={`form-input ${validEMoneyNum || checkoutData.eMoneyNum == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`} />
                </div>
                <div>
                <label htmlFor='eMoneyPIN' className={`flex justify-between mb-1 text-subtitle ${!validEMoneyPIN && checkoutData.eMoneyPIN !== "" && 'text-audiocolor-r1'}`}><span>e-Money PIN</span><span className={`${validEMoneyPIN || checkoutData.eMoneyPIN === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
                <input 
                id="eMoneyPIN" 
                name="eMoneyPIN" 
                type="text" 
                placeholder="6891" 
                value={checkoutData.eMoneyPIN}
                onChange={(e) => {
                    setCheckoutData({...checkoutData, eMoneyPIN: e.target.value})
                }}
                className={`form-input ${validEMoneyPIN || checkoutData.eMoneyPIN == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`} />
                </div>
            </div>
            :
            <div className="flex md:col-span-2 w-full gap-8 mt-4">
                <Image src={cashIcon} alt="cash on delivery" width="60" height="60" className="m-auto" />
                <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
        }
        
    </fieldset>
  )
}

export default PaymentDetails