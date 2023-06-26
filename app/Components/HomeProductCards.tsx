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
    <section className='flex flex-col w-full mb-32 md:mb-24 px-6 lg:px-40 md:px-10 gap-6 md:gap-8 lg:gap-12 mt-40 md:mt-20 xl:mt-32 xl:mb-48'>
      {/* ZX9 SPEAKER */}
      <figure className="flex flex-col xl:flex-row items-center xl:justify-end text-center px-4 xl:px-0 xl:py-0 py-16 gap-7 rounded-lg bg-audiocolor-oj2 w-full overflow-hidden relative text-audiocolor-w1 xl:overflow-hidden xl:w-full">
        <img src={mobileSpeakerZX9} alt="ZX9 SPEAKERS" className='w-40 md:hidden' />
        <img src={tabletSpeakerZX9} alt="ZX9 SPEAKERS" className='w-44 hidden md:block xl:hidden lg:w-60' />
        <img src={desktopSpeakerZX9} alt="ZX9 SPEAKERS" className='w-[23rem] hidden xl:block absolute left-32 -bottom-3 z-40' />
        <h3 className="text-H2 md:text-H1 font-semibold mt-2 md:mt-14 lg:mt-6 xl:hidden">ZX9 <br /> SPEAKER</h3>
        <p className='font-normal opacity-80 w-72 md:w-80 xl:hidden'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link href='/products/zx9-speaker' className='w-40 py-3 text-center bg-audiocolor-b2 md:mt-4 z-30 xl:hidden'>SEE PRODUCT</Link>
        <div className="hidden xl:flex lg:flex-col justify-between my-32 xl:gap-6 w-5/12">
          <h3 className="text-H1 font-semibold text-start">ZX9 <br /> SPEAKER</h3>
          <p className='font-normal opacity-80 w-80 text-start'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link href='/products/zx9-speaker' className='w-40 py-3 text-center bg-audiocolor-b2 hover:bg-audiocolor-g2 md:mt-4 z-30'>SEE PRODUCT</Link>
        </div>
        <div className="absolute border-[1px] w-[20rem] h-[20rem] md:w-[34rem] md:h-[34rem] rounded-full md:bottom-[17rem] bottom-[19.2rem]  opacity-30 xl:top-40 xl:left-8" />
        <div className="absolute border-[1px] w-[17.5rem] h-[17.5rem] md:w-[30rem] md:h-[30rem] rounded-full bottom-[20.5rem] md:bottom-[19rem] opacity-30 xl:top-48 xl:left-16" />
        <div className="absolute border-[1px] w-[35rem] h-[35rem] md:w-[60rem] md:h-[60rem] rounded-full bottom-44 md:bottom-16 opacity-30 xl:-top-10 xl:-left-44" />
      </figure>
      {/* ZX7 SPEAKER */}
      <figure className='relative w-full'>
        <img src={mobileSpeakerZX7} alt='ZX7 SPEAKERS' className='rounded-lg relative md:hidden w-full' />
        <img src={tabletSpeakerZX7} alt='ZX7 SPEAKERS' className='rounded-lg hidden md:block lg:hidden w-full' />
        <img src={desktopSpeakerZX7} alt='ZX7 SPEAKERS' className='rounded-lg hidden lg:block' />
        <figcaption className='ml-6 md:ml-16 lg:ml-20 absolute top-0 flex flex-col gap-7 h-full '>
          <div className="flex flex-col justify-center h-3/4 my-auto">
          <h3 className='text-H4 mb-6 md:mb-8'>ZX7 SPEAKER</h3>
          <Link href='/products/zx7-speaker' className='border-[1px] py-3 text-center w-40 hover:bg-audiocolor-b2 hover:text-audiocolor-w1'>SEE PRODUCT</Link>
          </div>
        </figcaption>
      </figure>
      {/* YX1 EARPHONES */}
      <figure className="grid grid-cols-1 grid-rows-2 md:flex md:w-full md:gap-3 lg:gap-8">
        <img src={mobileEarphones} alt='YX1 EARPHONES' className="rounded-lg md:hidden w-full" />
        <img src={tabletEarphones} alt='YX1 EARPHONES' className="rounded-lg hidden md:block lg:hidden md:w-1/2" />
        <img src={desktopEarphones} alt='YX1 EARPHONES' className="rounded-lg hidden lg:block h-1/2 md:w-1/2" />
        <figcaption className="bg-audiocolor-w3 mt-5 pl-3 md:px-0 flex flex-col justify-center gap-6 md:gap-8 md:w-1/2 rounded-lg md:mt-0">
          <div className="w-11/12 md:w-3/4 mx-auto">
          <h3 className='text-H4 mb-6 md:mb-8'>YX1 EARPHONES</h3>
          <Link href='/products/yx1-earphones' className='border-[1px] w-40 py-3 px-8 text-center hover:bg-audiocolor-b2 hover:text-audiocolor-w1'>SEE PRODUCT</Link>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

export default HomeProductCards