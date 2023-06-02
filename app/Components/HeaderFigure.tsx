import Link from 'next/link'

const HeaderFigure = () => {
  let mobileTitleImage = '/../assets/home/mobile/image-header.jpg'
  let tabletTitleImage = '/../assets/home/tablet/image-header.jpg'
  let desktopTitleImage = '../assets/home/desktop/image-hero.jpg'
  return (
    <figure className="text-audiocolor-w3 flex flex-col w-full text-center justify-center items-center mb-6 xl:mb-28 lg:flex-row lg:justify-between lg:bg-audiocolor-b1 lg:w-full lg:relative">
        <img src={mobileTitleImage} alt="" className="w-full h-full z-0 md:hidden" />
        <img src={tabletTitleImage} alt="" className="w-full h-full z-0 hidden md:block lg:hidden" />
        <img src={desktopTitleImage} alt="" className="w-full max-w-[1444px] h-full z-0 hidden lg:block lg:mx-auto" />
        <figcaption className='absolute mx-12 flex flex-col gap-6 mt-20 lg:items-start lg:left-0 lg:right-0 lg:w-5/6 lg:mx-auto max-w-[1080px]'>
        <h2 className="text-overline opacity-50">NEW PRODUCT</h2>
        <h1 className="text-H3 md:text-H1">XX99 MARK II <br /> HEADPHONES</h1>
        <p className="opacity-70 md:mx-auto max-w-lg md:w-[23rem] lg:text-start lg:ml-0">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link href="/products/xx99-mark-two-headphones" className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 mx-auto lg:ml-0 py-3 px-8">SEE PRODUCT</Link>
        </figcaption>
    </figure>
  )
}

export default HeaderFigure