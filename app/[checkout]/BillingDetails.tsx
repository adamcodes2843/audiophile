'use client'

const BillingDetails = ({checkoutData, setCheckoutData, validName, validEmail, validPhone}:any) => {

  
  
  

  return (
    <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-16 gap-5">
        <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">BILLING DETAILS</h4>
        <div>
            <label htmlFor='name' className={`flex justify-between mb-1 text-subtitle ${!validName && checkoutData.name !== "" && 'text-audiocolor-r1'}`}><span>Name</span><span className={`${validName || checkoutData.name === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
            <input 
            id="name" 
            name="name" 
            type="text" 
            placeholder="Adam Childers"
            value={checkoutData.name}
            onChange={(e) => {
              setCheckoutData({...checkoutData, name: e.target.value})
            }}
            className={`form-input ${validName || checkoutData.name == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`} />
        </div>
        <div>
            <label htmlFor='email' className={`flex justify-between mb-1 text-subtitle ${!validEmail && checkoutData.email !== "" && 'text-audiocolor-r1'}`}><span>Email Address</span><span className={`${validEmail || checkoutData.email === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
            <input 
            id="email" 
            name="email" 
            type="text" 
            placeholder="adamcodes2843@gmail.com"
            value={checkoutData.email} 
            onChange={(e) => {
              setCheckoutData({...checkoutData, email: e.target.value})
            }}
            className={`form-input ${validEmail || checkoutData.email == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`} />
        </div>
        <div>
            <label htmlFor='phoneNumber' className={`flex justify-between mb-1 text-subtitle ${!validPhone && checkoutData.phone !== "" && 'text-audiocolor-r1'}`}><span>Phone Number</span><span className={`${validPhone || checkoutData.phone === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
            <input 
            id="phoneNumber" 
            name="phoneNumber" 
            type="text" 
            placeholder="1-(555)-555-5555"
            value={checkoutData.phone}
            onChange={(e) => {
              setCheckoutData({...checkoutData, phone: e.target.value})
            }}
            className={`form-input ${validPhone || checkoutData.phone == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`} />
        </div>
    </fieldset>
  )
}

export default BillingDetails