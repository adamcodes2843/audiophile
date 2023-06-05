'use client'
const BillingDetails = () => {
  return (
    <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-16 gap-5">
        <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">BILLING DETAILS</h4>
        <div>
            <label htmlFor='name' className="mb-1 text-subtitle">Name</label>
            <input id="name" name="name" type="text" placeholder="Adam Childers" className="form-input " />
        </div>
        <div>
            <label htmlFor='email' className="mt-4 mb-1 text-subtitle">Email Address</label>
            <input id="email" name="email" type="text" placeholder="adamcodes2843@gmail.com" className="form-input" />
        </div>
        <div>
            <label htmlFor='phoneNumber' className="mt-4 mb-1 text-subtitle">Phone Number</label>
            <input id="phoneNumber" name="phoneNumber" type="text" placeholder="1-(555)-555-5555" className="form-input" />
        </div>
    </fieldset>
  )
}

export default BillingDetails