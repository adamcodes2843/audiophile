'use client'

import Image from 'next/image'
import Link from 'next/link'

const ThankYou = ({setSubmitted}:any) => {

  let checkmark = '/../assets/checkout/icon-order-confirmation.svg'

  let returnHome = () => {
    setSubmitted(false)
  }

  return (
    <div className="fixed z-40 w-full h-full bg-audiocolor-b2 bg-opacity-30 overflow-hidden max-w-[1440px] mx-auto left-0 right-0 top-0 flex flex-col justify-center items-center">
        <div className="z-50 flex flex-col md:w-1/2 md:max-w-xl justify-between bg-audiocolor-w1 mx-6 mt-6 p-6 rounded-lg gap-3 lg:gap-6">
        <Image src={checkmark} alt="" width="60" height="60" />
        <h1 className="text-H5 md:text-H3">THANK YOU <br />FOR YOUR ORDER</h1>
        <p className="opacity-50">You will receive an email confirmation shortly.</p>
        <Link href={'/'} onClick={() => returnHome()} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 text-center py-3">BACK TO HOME</Link>
        </div>
    </div>
  )
}

export default ThankYou