const BestAudio = () => {
  return (
    <section className='mx-6 md:mx-10 mb-28 mt-20 md:mt-24 flex flex-col justify-around items-center gap-9'>
        <img src='/../assets/shared/mobile/image-best-gear.jpg' alt='' className='rounded-lg md:hidden' />
        <img src='/../assets/shared/tablet/image-best-gear.jpg' alt='' className='rounded-lg hidden md:block' />
        <h2 className="text-H4 md:text-H2 md:mt-6 text-center w-[98%]">BRINGING YOU THE <span className='text-audiocolor-oj2'>BEST<br className="hidden md:block" /></span> AUDIO GEAR</h2>
        <p className="text-center opacity-60 md:mx-16">Located at the heart of New York City,  Audiophile is premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </section>
  )
}

export default BestAudio