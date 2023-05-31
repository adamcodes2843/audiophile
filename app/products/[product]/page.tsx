import BestAudio from "@/app/Components/BestAudio"
import CategoryLinks from "@/app/Components/CategoryLinks"
import data from "../../data.json"
import Link from 'next/link'
import AddToCart from "./AddToCart"
import NavProducts from "@/app/Components/NavProducts"

function Product({params}: {
    params: { product: string}
}) {
  let productInfo:any = data.filter((prod) => prod.slug == params.product)
  
  let productSrcImage = '/../.' + productInfo[0].image.mobile
  let priceString = productInfo[0].price.toString()
  
  const priceToString = () => {
    let priceArray =  priceString.split('')
    if (priceArray.length > 3){
      priceArray.splice(1,0,',')
      let x = priceArray.join('')
      let commaNum = x.toString()
      return commaNum
    } else {
      return priceString
    }
  }

  let paragraphs = productInfo[0].features.split('\n').filter((z:any)=> z != '')
  
  
  return (
    <>
    <NavProducts />
    <div className="mt-24 pt-4 flex flex-col md:px-4 bg-audiocolor-w1 max-w-[1440px] lg:mx-auto">
        <Link href={'/'} className="mx-6 font-thin w-14 mt-2 lg:mt-16 lg:mb-12 lg:mx-40">Go Back</Link>
        <div className="px-6 lg:px-40 md:flex md:gap-8 md:mb-10">
        <img src={'/../.' + productInfo[0].image.mobile} alt='' className="h-fill w-fill mx-auto rounded-lg mt-6 md:hidden" />
        <img src={'/../.' + productInfo[0].image.tablet} alt='' className="w-[18rem] rounded-lg  mt-6 hidden md:block lg:hidden" />
        <img src={'/../.' + productInfo[0].image.desktop} alt='' className="h-fill w-1/2 rounded-lg mt-6 hidden lg:block" />
        <div className="md:flex md:flex-col md:p-6 md:my-auto">
        <h4 className="text-overline text-audiocolor-oj2 mt-8">{productInfo[0].new && 'NEW PRODUCT'}</h4>
        <h2 className="text-H3 lg:text-H2 md:text-H4 mt-6 md:mt-3">{productInfo[0].name.split(' ').slice(0, productInfo[0].name.split(' ').length - 1).join(' ')}</h2>
        <h2 className="text-H3 lg:text-H2 mb-6 md:text-H4">{productInfo[0].name.split(' ').slice(productInfo[0].name.split(' ').length-1,).join() }</h2>
        <p className="font-normal opacity-70 mt-6 md:mt-2 md:mb-2">{productInfo[0].description}</p>
        <p className="text-H6 mt-6">$ {priceToString()}</p>
        <AddToCart />
        </div>
        </div>
        <h4 className="text-H4 md:text-H3 mx-6 mt-20 font-bold lg:mx-40">FEATURES</h4>
        <ul className='mx-6 mt-6 md:mt-8 font-normal opacity-70 lg:mx-40'>{paragraphs.map((paragraph:any) => (
          <li key={Math.random()} className="mb-6">{paragraph}</li> 
        ))}</ul>
        <div className="md:grid md:grid-cols-2 md:mt-24 lg:mx-40">
        <h4 className="text-H4 md:text-H3 mx-6 mt-16 md:mt-0">IN THE BOX</h4>
        <ul className="mx-6 mt-6 md:mt-0 flex flex-col">
          {productInfo[0].includes.map((item: any) => (
            <li key={productInfo[0].id} className="mb-2 flex"><span className="text-audiocolor-oj2 w-10 font-bold">{item.quantity}x</span><span className=" font-normal opacity-70">{item.item}</span></li>
          ))}
        </ul>
        </div>
        <section className="mx-auto px-6 lg:px-40 mt-24 grid grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-12">
          {/* gallery image 1 */}
          <img src={'/../.' + productInfo[0].gallery.first.mobile} alt='gallery image 1' className="rounded-lg md:hidden" />
          <img src={'/../.' + productInfo[0].gallery.first.tablet} alt='gallery image 1' className="rounded-lg hidden md:block lg:hidden md:col-start-1 md:col-span-5 md:row-start-1 md:row-span-1" />
          <img src={'/../.' + productInfo[0].gallery.first.desktop} alt='gallery image 1' className="rounded-lg hidden lg:block md:col-start-1 md:col-span-5 md:row-start-1 md:row-span-1" />
          {/* gallery image 2 */}
          <img src={'/../.' + productInfo[0].gallery.second.mobile} alt='gallery image 2' className="rounded-lg md:hidden" />
          <img src={'/../.' + productInfo[0].gallery.second.tablet} alt='gallery image 2' className="rounded-lg hidden md:block lg:hidden md:col-start-1 md:col-span-5 md:row-start-2 md:row-span-1" />
          <img src={'/../.' + productInfo[0].gallery.second.desktop} alt='gallery image 2' className="rounded-lg hidden lg:block md:col-start-1 md:col-span-5 md:row-start-2 md:row-span-1" />
          {/* gallery image 3 */}
          <img src={'/../.' + productInfo[0].gallery.third.mobile} alt='gallery image 3' className="rounded-lg md:hidden" />
          <img src={'/../.' + productInfo[0].gallery.third.tablet} alt='gallery image 3' className="rounded-lg hidden md:block lg:hidden md:col-start-6 md:col-span-7 md:row-start-1 md:row-span-2" />
          <img src={'/../.' + productInfo[0].gallery.third.desktop} alt='gallery image 3' className="rounded-lg hidden lg:block md:col-start-6 md:col-span-7 md:row-start-1 md:row-span-2" />
        </section>
        <section className="mx-6 mt-28 mb-20 md:mb-0 lg:mx-40">
          <h5 className="text-H5 md:text-H3 text-center">YOU MAY ALSO LIKE</h5>
          <ul className="flex flex-col md:flex-row mt-10 md:mt-16 gap-5 md:gap-3">
            {productInfo[0].others.map((otherProd:any) => (
              <li key={Math.random()} className="mb-8 flex flex-col gap-8">
                <img src={'/../.' + otherProd.image.mobile} alt={otherProd.name} className="md:hidden" />
                <img src={'/../.' + otherProd.image.tablet} alt={otherProd.name} className="hidden md:block lg:hidden rounded-lg" />
                <img src={'/../.' + otherProd.image.desktop} alt={otherProd.name} className="hidden lg:block" />
                <h4 className="text-center text-H4">{otherProd.name}</h4>
                <Link href={`/products/${otherProd.slug}`} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 font-semibold w-40 py-3 text-center mx-auto">SEE PRODUCT</Link>
              </li>
            ))}
          </ul>
        </section>
        <CategoryLinks />
        <BestAudio />
    </div>
    </>
  )
}

export default Product