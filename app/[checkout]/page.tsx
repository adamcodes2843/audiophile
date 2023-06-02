import CustomerInfo from "./CustomerInfo"
import Summary from "./Summary"
import NavProducts from '../Components/NavProducts'
import Link from 'next/link'

const Checkout = () => {
  return (
    <>
    <NavProducts />
    <div className=" bg-audiocolor-w3 mt-24 pt-4 md:pt-10 lg:pt-20 max-w-[1440px] xl:mx-auto ">
        
        <Link href={'/'} className="ml-6 md:ml-10 lg:ml-40 font-thin">Go Back</Link>
        <div className="xl:flex xl:gap-8">
        <CustomerInfo />
        <Summary />
        </div>
    </div>
    </>
  )
}

export default Checkout