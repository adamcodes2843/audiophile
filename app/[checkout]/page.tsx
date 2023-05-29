import CustomerInfo from "./CustomerInfo"
import Summary from "./Summary"
import Link from 'next/link'

const Checkout = () => {
  return (
    <div className="pt-28 px-6 bg-audiocolor-w3">
        <Link href={'/'} className="font-thin w-14 mt-2">Go Back</Link>
        <CustomerInfo />
        <Summary />
    </div>
  )
}

export default Checkout