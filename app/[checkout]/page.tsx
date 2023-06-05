'use client'

import {useState} from 'react'
import Summary from "./Summary"
import Link from 'next/link'
import BillingDetails from './BillingDetails'
import ShippingInfo from './ShippingInfo'
import PaymentDetails from './PaymentDetails'
import ThankYou from './ThankYou'

interface CustomerCheckout {
  name: string,
  email: string,
  phone: number | undefined,
  address: string,
  zip: number | undefined,
  city: string,
  country: string,
  payment: string,
  eMoneyNum: number | undefined,
  eMoneyPIN: number | undefined
}

const Checkout = () => {
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [checkoutData, setCheckoutData] = useState<CustomerCheckout>({
    name: "",
    email: "",
    phone: undefined,
    address: "",
    zip: undefined,
    city: "",
    country: "",
    payment: "e-Money",
    eMoneyNum: undefined,
    eMoneyPIN: undefined
  })

  console.log(checkoutData)

  return (
    <div className=" bg-audiocolor-w3 mt-24 pt-4 md:pt-10 lg:pt-20 max-w-[1440px] xl:mx-auto ">
        <Link href={'/'} className="ml-6 md:ml-10 lg:ml-40 font-thin">Go Back</Link>
        <form className="xl:flex xl:gap-8">
          <div className="bg-audiocolor-w1 p-6 md:px-8 lg:px-12 lg:pt-12 mt-4 md:mt-6 rounded-lg mx-6 md:mx-10 lg:mx-40 xl:ml-40 xl:mr-0 xl:w-2/3 xl:mb-28">
          <h2 className='text-H4 font-semibold mb-10'>CHECKOUT</h2>
          <div className="flex flex-col">
            <BillingDetails checkoutData={checkoutData} setCheckoutData={setCheckoutData} />
            <ShippingInfo checkoutData={checkoutData} setCheckoutData={setCheckoutData} />
            <PaymentDetails checkoutData={checkoutData} setCheckoutData={setCheckoutData} />
          </div>
          </div>
          <Summary setSubmitted={setSubmitted}/>
        </form>
        {submitted && <ThankYou setSubmitted={setSubmitted}/>}
    </div>
  )
}

export default Checkout