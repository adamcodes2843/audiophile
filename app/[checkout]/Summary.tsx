'use client'

const Summary = () => {
  return (
    <section className="bg-audiocolor-w1 p-6 md:px-8 lg:px-12 lg:pt-12 mt-6 md:mt-8 xl:mt-6 rounded-lg flex flex-col justify-between mb-28 xl:mb-auto mx-6 md:mx-10 lg:mx-40 xl:ml-0 xl:mr-40 xl:w-1/3">
        <h2 className='text-H6 mb-10'>SUMMARY</h2>
        <ul>

        </ul>
        <div className='flex flex-col gap-1'>
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
          <div className="text-H6 text-audiocolor-oj2">$5,446</div>
        </div>
        </div>
        <button type="button" className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 py-3 my-2">CONTINUE & PAY</button>
    </section>
  )
}

export default Summary