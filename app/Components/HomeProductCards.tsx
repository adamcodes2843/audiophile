import Image from 'next/image'
import Link from 'next/link'

const HomeProductCards = () => {
  let mobileEarphones = '/../assets/home/mobile/image-earphones-yx1.jpg'
  let tabletEarphones = '/../assets/home/tablet/image-earphones-yx1.jpg'
  let desktopEarphones = '/../assets/home/desktop/image-earphones-yx1.jpg'
  let mobileSpeakerZX7 = '/../assets/home/mobile/image-speaker-zx7.jpg'
  let tabletSpeakerZX7 = '/../assets/home/tablet/image-speaker-zx7.jpg'
  let desktopSpeakerZX7 = '/../assets/home/desktop/image-speaker-zx7.jpg'
  let mobileSpeakerZX9 = '/../assets/home/mobile/image-speaker-zx9.png'
  let tabletSpeakerZX9 = '/../assets/home/tablet/image-speaker-zx9.png'
  let desktopSpeakerZX9 = '/../assets/home/desktop/image-speaker-zx9.png'
  return (
    <section className='flex flex-col w-full px-6 md:px-10 gap-6 md:gap-8 mt-40 md:mt-24'>
      <figure className="flex flex-col items-center text-center px-4 py-16 gap-7 rounded-lg bg-audiocolor-oj2 w-full overflow-hidden relative text-audiocolor-w1">
        <img src={mobileSpeakerZX9} alt="ZX9 SPEAKERS" className='w-40 md:hidden' />
        <img src={tabletSpeakerZX9} alt="ZX9 SPEAKERS" className='w-44 hidden md:block lg:hidden' />
        <img src={desktopSpeakerZX9} alt="ZX9 SPEAKERS" className='w-40 hidden lg:block' />
        <h3 className="text-H2 md:text-H1 font-semibold mt-2 md:mt-14">ZX9 <br /> SPEAKER</h3>
        <p className='font-normal opacity-80 w-72 md:w-80'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link href='/products/zx9-speaker' className='w-40 py-3 text-center bg-audiocolor-b2 md:mt-4'>SEE PRODUCT</Link>
        <div className="absolute border-[1px] w-[20rem] h-[20rem] md:w-[34rem] md:h-[34rem] rounded-full md:bottom-[17rem] bottom-[19.2rem]  opacity-30" />
        <div className="absolute border-[1px] w-[17.5rem] h-[17.5rem] md:w-[30rem] md:h-[30rem] rounded-full bottom-[20.5rem] md:bottom-[19rem] opacity-30" />
        <div className="absolute border-[1px] w-[35rem] h-[35rem] md:w-[60rem] md:h-[60rem] rounded-full bottom-44 md:bottom-16 opacity-30" />
      </figure>
      <figure className='relative w-full'>
        <img src={mobileSpeakerZX7} alt='ZX7 SPEAKERS' className='rounded-lg relative md:hidden w-full' />
        <img src={tabletSpeakerZX7} alt='ZX7 SPEAKERS' className='rounded-lg hidden md:block lg:hidden w-full' />
        <img src={desktopSpeakerZX7} alt='ZX7 SPEAKERS' className='rounded-lg hidden lg:block' />
        <figcaption className='mx-6 md:mx-16 absolute top-24 flex flex-col gap-7'>
          <h3 className='text-H4'>ZX7 SPEAKER</h3>
          <Link href='/products/zx7-speaker' className='border-[1px] py-2 text-center w-36'>SEE PRODUCT</Link>
        </figcaption>
      </figure>
      <figure className="md:flex md:w-full gap-3">
        <img src={mobileEarphones} alt='YX1 EARPHONES' className="rounded-lg md:hidden w-full" />
        <img src={tabletEarphones} alt='YX1 EARPHONES' className="rounded-lg hidden md:block lg:hidden md:w-1/2" />
        <img src={desktopEarphones} alt='YX1 EARPHONES' className="rounded-lg hidden lg:block" />
        <figcaption className="bg-audiocolor-w3 h-48 mt-5 px-6 flex flex-col justify-center gap-6 md:w-1/2 rounded-lg md:mt-0 md:h-auto">
          <h3 className='text-H4'>YX1 EARPHONES</h3>
          <Link href='/products/yx1-earphones' className='border-[1px] w-40 py-2 text-center'>SEE PRODUCT</Link>
        </figcaption>
      </figure>
    </section>
  )
}

export default HomeProductCards