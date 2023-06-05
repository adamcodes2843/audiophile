'use client'

const ShippingInfo = ({checkoutData, setCheckoutData}:any) => {
  return (
    <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-16 gap-5">
        <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">SHIPPING INFO</h4>
        <div className="md:col-span-2">
            <label htmlFor='address' className="mt-4 mb-1 text-subtitle">Your Address</label>
            <input 
            id="address" 
            name="address" 
            type="text" 
            placeholder="123 Address Street" 
            value={checkoutData.address}
            onChange={(e) => {
                setCheckoutData({...checkoutData, address: e.target.value})
            }}
            className="form-input" />
        </div>
        <div>
            <label htmlFor='zip' className="mt-4 mb-1 text-subtitle">ZIP Code</label>
            <input 
            id="zip" 
            name="zip" 
            type="text" 
            placeholder="10001" 
            value={checkoutData.zip}
            onChange={(e) => {
                setCheckoutData({...checkoutData, zip: e.target.value})
            }}
            className="form-input" />
        </div>
        <div>
            <label htmlFor='city' className="mt-4 mb-1 text-subtitle">City</label>
            <input 
            id="city" 
            name="city" 
            type="text" 
            placeholder="Chicago" 
            value={checkoutData.city}
            onChange={(e) => {
                setCheckoutData({...checkoutData, city: e.target.value})
            }}
            className="form-input" />
        </div>
        <div>
            <label htmlFor='country' className="mt-4 mb-1 text-subtitle">Country</label>
            <input 
            id="country" 
            name="country" 
            type="text" 
            placeholder="United States" 
            value={checkoutData.country}
            onChange={(e) => {
                setCheckoutData({...checkoutData, country: e.target.value})
            }}
            className="form-input" />
        </div>
    </fieldset>
  )
}

export default ShippingInfo