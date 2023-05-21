import Link from 'next/link'

const HeaderFigure = () => {
  let phoneTitleImage = '/../assets/home/mobile/image-header.jpg'
  return (
    <figure className="text-audiocolor-w3 flex flex-col w-full text-center justify-center">
        <img src={phoneTitleImage} alt="" className="w-full h-full z-0" />
        <figcaption className='absolute mx-12 flex flex-col gap-6 mt-20 '>
        <h2 className="text-overline opacity-70">NEW PRODUCT</h2>
        <h1 className="text-H3">XX99 MARK II HEADPHONES</h1>
        <p className="opacity-70">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link href="/products/xx99-mark-two-headphones" className="bg-audiocolor-oj2 mx-auto py-4 px-8">SEE PRODUCT</Link>
        </figcaption>
    </figure>
  )
}

export default HeaderFigure