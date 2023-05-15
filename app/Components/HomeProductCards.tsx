import HomeEarphones from '../assets/home/mobile/image-earphones-yx1.jpg'
import HomeSpeakerZX7 from '../assets/home/mobile/image-speaker-zx7.jpg'
import HomeSpeakerZX9 from '../assets/home/mobile/image-speaker-zx9.png'
import Image from 'next/image'
import Link from 'next/link'

const HomeProductCards = () => {
  return (
    <section className='flex flex-col w-full px-6 gap-6 mt-40'>
      <figure className="flex flex-col items-center text-center px-4 py-16 gap-7 rounded-lg bg-audiocolor-oj2 w-full overflow-hidden relative text-audiocolor-w1">
        <Image src={HomeSpeakerZX9} alt="ZX9 SPEAKERS" className='w-40 mb-2' />
        <h3 className="text-H2 font-semibold">ZX9 <br /> SPEAKER</h3>
        <p className='font-normal opacity-80 w-72'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link href='' className='w-40 py-3 text-center bg-audiocolor-b2'>SEE PRODUCT</Link>
        <div className="absolute border-[1px] w-[20rem] h-[20rem] rounded-full top-0 opacity-30" />
        <div className="absolute border-[1px] w-[17.5rem] h-[17.5rem] rounded-full top-5 opacity-30" />
        <div className="absolute border-[1px] w-[35rem] h-[35rem] rounded-full bottom-44 opacity-30" />
      </figure>
      <figure className='relative'>
        <Image src={HomeSpeakerZX7} alt='ZX7 SPEAKERS' className='rounded-lg relative' />
        <figcaption className='mx-6 absolute top-24 flex flex-col gap-7'>
          <h3 className='text-H4'>ZX7 SPEAKER</h3>
          <Link href='' className='border-[1px] py-2 text-center w-36'>SEE PRODUCT</Link>
        </figcaption>
      </figure>
      <figure>
        <Image src={HomeEarphones} alt='YX1 EARPHONES' className="rounded-lg" />
        <figcaption className="bg-audiocolor-w3 h-48 mt-5 px-6 flex flex-col justify-center gap-6">
          <h3 className='text-H4'>YX1 EARPHONES</h3>
          <Link href='' className='border-[1px] w-40 py-2 text-center'>SEE PRODUCT</Link>
        </figcaption>
      </figure>
    </section>
  )
}

export default HomeProductCards