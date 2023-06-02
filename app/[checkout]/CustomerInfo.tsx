'use client'

const CustomerInfo = () => {
  return (
    <section className="bg-audiocolor-w1 p-6 md:px-8 lg:px-12 lg:pt-12 mt-4 md:mt-6 rounded-lg mx-6 md:mx-10 lg:mx-40 xl:ml-40 xl:mr-0 xl:w-2/3 xl:mb-28">
        <h2 className='text-H4 font-semibold mb-10'>CHECKOUT</h2>
        <form className="flex flex-col">
            <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-16 gap-5">
                <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">BILLING DETAILS</h4>
                <div>
                <label htmlFor='name' className="mb-1 text-subtitle">Name</label>
                <input id="name" name="name" type="text" placeholder="Adam Childers" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1 mb-2" />
                </div>
                <div>
                <label htmlFor='email' className="mt-4 mb-1 text-subtitle">Email Address</label>
                <input id="email" name="email" type="text" placeholder="adamcodes2843@gmail.com" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1 mb-2" />
                </div>
                <div>
                <label htmlFor='phoneNumber' className="mt-4 mb-1 text-subtitle">Phone Number</label>
                <input id="phoneNumber" name="phoneNumber" type="text" placeholder="1-(555)-555-5555" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1 mb-2" />
                </div>
            </fieldset>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-16 gap-5">
                <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">SHIPPING INFO</h4>
                <div className="md:col-span-2">
                <label htmlFor='address' className="mt-4 mb-1 text-subtitle">Your Address</label>
                <input id="address" name="address" type="text" placeholder="123 Address Street" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1 mb-2" />
                </div>
                <div>
                <label htmlFor='zip' className="mt-4 mb-1 text-subtitle">ZIP Code</label>
                <input id="zip" name="zip" type="text" placeholder="10001" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1 mb-2" />
                </div>
                <div>
                <label htmlFor='city' className="mt-4 mb-1 text-subtitle">City</label>
                <input id="city" name="city" type="text" placeholder="Chicago" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1 mb-2" />
                </div>
                <div>
                <label htmlFor='country' className="mt-4 mb-1 text-subtitle">Country</label>
                <input id="country" name="country" type="text" placeholder="United States" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1 mb-2" />
                </div>
            </fieldset>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6">
                <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">PAYMENT DETAILS</h4>
                <h5 className="mt-4 mb-2 text-subtitle md:row-span-2">Payment Method</h5>
                <label htmlFor="eMon" className="border-[1px] border-audiocolor-g1 p-3 rounded-lg md:mt-4 md:ml-3 font-bold">
                    <input type="radio" id="eMon" name="payment_method" value="e-Money" className="mr-3" />
                    e-Money
                </label>
                <label htmlFor="CoD" className="border-[1px]  border-audiocolor-g1 p-3 mt-4 mb-3 rounded-lg md:ml-3 font-bold">
                    <input type="radio" id="CoD" name="payment_method" value="cash on delivery" className="mr-3" />
                    Cash on Delivery
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 md:mt-2 md:col-span-2">
                <div>
                <label htmlFor='eMoneyNumber' className="mt-4 mb-1 text-subtitle">e-Money Number</label>
                <input id="eMoneyNumber" name="eMoneyNumber" type="text" placeholder="238521993" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1 mb-2" />
                </div>
                <div>
                <label htmlFor='eMoneyPIN' className="mt-4 mb-1 text-subtitle">e-Money PIN</label>
                <input id="eMoneyPIN" name="eMoneyPIN" type="text" placeholder="6891" className="w-full h-10 border-[1px] p-6 rounded-lg border-audiocolor-g1" />
                </div>
                </div>
            </fieldset>
        </form>
    </section>
  )
}

export default CustomerInfo