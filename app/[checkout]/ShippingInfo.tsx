'use client'

const ShippingInfo = ({checkoutData, setCheckoutData, validZip, validAddress, validCity, validCountry}:any) => {
    
  return (
    <fieldset className="grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-16 gap-5">
        <h4 className="text-audiocolor-oj2 text-subtitle md:col-span-2">SHIPPING INFO</h4>
        <div className="md:col-span-2">
            <label htmlFor='address' className={`flex justify-between mb-1 text-subtitle ${!validAddress && checkoutData.address !== "" && 'text-audiocolor-r1'}`}><span>Address</span><span className={`${validAddress || checkoutData.address === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
            <input 
            id="address" 
            name="address" 
            type="text" 
            placeholder="123 Address Street" 
            value={checkoutData.address}
            onChange={(e) => {
                setCheckoutData({...checkoutData, address: e.target.value})
            }}
            className={`form-input ${validAddress || checkoutData.address == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`} />
        </div>
        <div>
            <label htmlFor='zip' className={`flex justify-between mb-1 text-subtitle ${!validZip && checkoutData.zip !== "" && 'text-audiocolor-r1'}`}><span>ZIP Code</span><span className={`${validZip || checkoutData.zip === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
            <input 
            id="zip" 
            name="zip" 
            type="text" 
            placeholder="10001" 
            value={checkoutData.zip}
            onChange={(e) => {
                setCheckoutData({...checkoutData, zip: e.target.value})
            }}
            className={`form-input ${validZip || checkoutData.zip == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`}/>
        </div>
        <div>
            <label htmlFor='city' className={`flex justify-between mb-1 text-subtitle ${!validCity && checkoutData.city !== "" && 'text-audiocolor-r1'}`}><span>City</span><span className={`${validCity || checkoutData.city === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
            <input 
            id="city" 
            name="city" 
            type="text" 
            placeholder="Chicago" 
            value={checkoutData.city}
            onChange={(e) => {
                setCheckoutData({...checkoutData, city: e.target.value})
            }}
            className={`form-input ${validCity || checkoutData.city == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`} />
        </div>
        <div>
            <label htmlFor='country' className={`flex justify-between mb-1 text-subtitle ${!validCountry && checkoutData.country !== "" && 'text-audiocolor-r1'}`}><span>Country</span><span className={`${validCountry || checkoutData.country === "" ? 'hidden' : 'block'}`}>Wrong format</span></label>
            <input 
            id="country" 
            name="country" 
            type="text" 
            placeholder="United States" 
            value={checkoutData.country}
            onChange={(e) => {
                setCheckoutData({...checkoutData, country: e.target.value})
            }}
            className={`form-input ${validCountry || checkoutData.country == "" ? 'border-audiocolor-g1 border-[1px]' : 'border-audiocolor-r1'}`} />
        </div>
    </fieldset>
  )
}

export default ShippingInfo