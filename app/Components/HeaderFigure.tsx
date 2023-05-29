import Link from 'next/link'

const HeaderFigure = () => {
  let mobileTitleImage = '/../assets/home/mobile/image-header.jpg'
  let tabletTitleImage = '/../assets/home/tablet/image-header.jpg'
  let desktopTitleImage = '../assets/home/tablet/image-header.jpg'
  return (
    <figure className="text-audiocolor-w3 flex flex-col w-full text-center justify-center items-center">
        <img src={mobileTitleImage} alt="" className="w-full h-full z-0 md:hidden" />
        <img src={tabletTitleImage} alt="" className="w-full h-full z-0 hidden md:block lg:hidden" />
        <img src={desktopTitleImage} alt="" className="w-full h-full z-0 hidden lg:block" />
        <figcaption className='absolute mx-12 flex flex-col gap-6 mt-20 '>
        <h2 className="text-overline opacity-50">NEW PRODUCT</h2>
        <h1 className="text-H3 md:text-H1">XX99 MARK II <br /> HEADPHONES</h1>
        <p className="opacity-70 md:mx-auto max-w-lg md:w-[23rem]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link href="/products/xx99-mark-two-headphones" className="bg-audiocolor-oj2 mx-auto py-3 px-8">SEE PRODUCT</Link>
        </figcaption>
    </figure>
  )
}

export default HeaderFigure