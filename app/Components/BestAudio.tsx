import bestAudioGear from '../assets/shared/mobile/image-best-gear.jpg'
import Image from 'next/image'

const BestAudio = () => {
  return (
    <section className='mx-6 my-28 flex flex-col justify-around items-center gap-9'>
        <Image src={bestAudioGear} alt='' className='rounded-lg' />
        <h2 className="text-H4 text-center w-[98%]">BRINGING YOU THE <span className='text-audiocolor-oj2'>BEST</span> AUDIO GEAR</h2>
        <p className="text-center opacity-60">Located at the heart of New York City,  Audiophile is premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </section>
  )
}

export default BestAudio