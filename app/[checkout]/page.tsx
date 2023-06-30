'use client'

import {useState, useEffect, useContext} from 'react'
import { AppContext } from '../Components/Context-Provider'
import Summary from "./Summary"
import Link from 'next/link'
import BillingDetails from './BillingDetails'
import ShippingInfo from './ShippingInfo'
import PaymentDetails from './PaymentDetails'
import ThankYou from './ThankYou'

interface CustomerCheckout {
  name: string,
  email: string,
  phone: string,
  address: string,
  zip: string,
  city: string,
  country: string,
  payment: string,
  eMoneyNum: string,
  eMoneyPIN: string,
  total: number | string,
  shipping: number | string,
  vat: number | string
  grandTotal: number | string
  products: []
}

const Checkout = () => {
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [expandList, setExpandList] = useState<boolean>(false)
  const [formDisabled, setFormDisabled] = useState<boolean>(true)
  const [summaryItems, setSummaryItems] = useState<any>()
  const [checkoutData, setCheckoutData] = useState<CustomerCheckout>({
    name: "",
    email: "",
    phone: '',
    address: "",
    zip: '',
    city: "",
    country: "",
    payment: "e-Money",
    eMoneyNum: '',
    eMoneyPIN: '',
    total: '',
    shipping: '',
    vat: '',
    grandTotal: '',
    products: []
  })
  const {setShowCart, cartItems, setCartItems}:any = useContext(AppContext)
  console.log(cartItems)

  let validName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(checkoutData.name)
  let validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(checkoutData.email)
  let validPhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/gm.test(checkoutData.phone)
  let validZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(checkoutData.zip)
  let validAddress = /(\d{1,}) [a-zA-Z0-9\s]+/g.test(checkoutData.address)
  let validCity = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(checkoutData.city)
  let validCountry = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(checkoutData.country)
  let validEMoneyNum = /(^\d{9}$)/gm.test(checkoutData.eMoneyNum)
  let validEMoneyPIN = /(^\d{4}$)/gm.test(checkoutData.eMoneyPIN)

  useEffect(() => {
    if (checkoutData.payment === 'e-Money' && validName && validEmail && validPhone && validZip && validAddress && validCity && validCountry && validEMoneyNum && validEMoneyPIN && cartItems.length >= 1) {
      setFormDisabled(false)
    }
    else if (checkoutData.payment === 'cash-on-delivery' && validName && validEmail && validPhone && validZip && validAddress && validCity && validCountry && cartItems.length >= 1) {
      setFormDisabled(false)
    }
    else if (checkoutData.payment === 'e-Money' && !validName || !validEmail || !validPhone || !validZip || !validAddress || !validCity || !validCountry || !validEMoneyNum || !validEMoneyPIN || cartItems.length < 1) {
      setFormDisabled(true)
    }
    else if (checkoutData.payment === 'cash-on-delivery' && !validName || !validEmail || !validPhone || !validZip || !validAddress || !validCity || !validCountry || cartItems.length < 1) {
      setFormDisabled(true)
    }
  }, [checkoutData])

  useEffect(()=> {
    fetch(`${process.env.BASE_URL}/api/getCartItems`)
    .then(response => {
        if(!response.ok) {
            throw Error('could not fetch the data for theat resource')
        }
        return response.json()
    })
    .then(data => {
        setSummaryItems(data)
        setCheckoutData({...checkoutData, 
          shipping:50, 
          total: data.reduce((total:number, curr:any) => {
            return total + (curr.price * curr.quantity)
            }, 0),
          vat: Math.floor(data.reduce((total:number, curr:any) => {
            return total + (curr.price * curr.quantity)
            }, 0) * 0.2),
          grandTotal: data.reduce((total:number, curr:any) => {
            return total + (curr.price * curr.quantity)
            }, 0) + 50,
          products: data.map((item:any)=> ({id: item.id}))
          })
    })
  }, [])

  useEffect(()=> {
    setShowCart(false)
  }, [])
  
  const handleSubmit = (e: any, data: CustomerCheckout) => {
    e.preventDefault()
    addCustomerRecord(data)
    updatePurchasedProducts()
    setSubmitted(true)
  }

  async function addCustomerRecord(data: CustomerCheckout){
    try{
      fetch(`${process.env.BASE_URL}/api/createCustomerRecord`, {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function updatePurchasedProducts(){
    try{
      fetch(`${process.env.BASE_URL}/api/updatePurchasedProducts`, {
        headers: {
          'Content-Type': 'application/json'
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
    <div className=" bg-audiocolor-w3 mt-24 pt-4 md:pt-10 lg:pt-20 xl:w-full xl:max-w-[1440px] xl:mx-auto">
        <Link href={'/'} className="ml-6 md:ml-10 lg:ml-40 font-thin hover:text-audiocolor-oj2">Go Back</Link>
        <form onSubmit={(e) => handleSubmit(e, checkoutData)} className="xl:flex xl:gap-8">
          <div className="bg-audiocolor-w1 p-6 md:px-8 lg:px-12 lg:pt-12 mt-4 md:mt-6 rounded-lg mx-6 md:mx-10 lg:mx-40 xl:ml-40 xl:mr-0 xl:w-2/3 xl:mb-28">
          <h2 className='text-H4 font-semibold mb-10'>CHECKOUT</h2>
          <div className="flex flex-col">
            <BillingDetails checkoutData={checkoutData} setCheckoutData={setCheckoutData} validName={validName} validEmail={validEmail} validPhone={validPhone} />
            <ShippingInfo checkoutData={checkoutData} setCheckoutData={setCheckoutData} validAddress={validAddress} validZip={validZip} validCity={validCity} validCountry={validCountry} />
            <PaymentDetails checkoutData={checkoutData} setCheckoutData={setCheckoutData} validEMoneyNum={validEMoneyNum} validEMoneyPIN={validEMoneyPIN} />
          </div>
          </div>
          <Summary summaryItems={summaryItems} formDisabled={formDisabled} setFormDisabled={setFormDisabled} checkoutData={checkoutData} />
        </form>
        {submitted && <ThankYou summaryItems={summaryItems} setSubmitted={setSubmitted} checkoutData={checkoutData} expandList={expandList} setExpandList={setExpandList} setCartItems={setCartItems} />}
    </div>
  )
}

export default Checkout