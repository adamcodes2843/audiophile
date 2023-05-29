'use client'

const Summary = () => {
  return (
    <section className="bg-audiocolor-w1 p-6 mt-6 rounded-lg flex flex-col justify-between mb-20">
        <h2 className='text-H6 mb-10'>SUMMARY</h2>
        <ul>

        </ul>
        <div className="flex justify-between">
          <h6 className="opacity-50">TOTAL</h6>
          <div className="text-H6">$5,396</div>
        </div>
        <div className="flex justify-between">
          <h6 className="opacity-50">SHIPPING</h6>
          <div className="text-H6">$50</div>
        </div>
        <div className="flex justify-between">
          <h6 className="opacity-50">{'VAT (INCLUDED)'}</h6>
          <div className="text-H6">$1,079</div>
        </div>
        <div className="flex justify-between my-6">
          <h6 className="opacity-50">GRAND TOTAL</h6>
          <div className="text-H6 text-audiocolor-oj1">$5,446</div>
        </div>
        <button type="button" className="bg-audiocolor-oj2 text-audiocolor-w1 py-3 my-2">CONTINUE & PAY</button>
    </section>
  )
}

export default Summary