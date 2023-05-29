import BestAudio from "@/app/Components/BestAudio"
import CategoryLinks from "@/app/Components/CategoryLinks"
import data from "../../data.json"
import Link from 'next/link'
import AddToCart from "./AddToCart"

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
    <div className="mt-28 md:mt-32 flex flex-col md:px-4">
        <Link href={'/'} className="mx-6 font-thin w-14 mt-2">Go Back</Link>
        <div className="px-6">
        <img src={'/../.' + productInfo[0].image.mobile} alt='' className="h-fill w-fill rounded-lg mt-6 md:hidden" />
        <img src={'/../.' + productInfo[0].image.mobile} alt='' className="h-fill w-fill rounded-lg  mt-6 hidden md:block lg:hidden" />
        <img src={'/../.' + productInfo[0].image.mobile} alt='' className="h-fill w-fill rounded-lg mt-6 hidden lg:block" />
        <div className="">
        <h4 className="text-overline text-audiocolor-oj1 mt-8">{productInfo[0].new && 'NEW PRODUCT'}</h4>
        <h2 className="text-H3 md:text-H2 mt-6">{productInfo[0].name.split(' ').slice(0, productInfo[0].name.split(' ').length - 1).join(' ')}</h2>
        <h2 className="text-H3 mb-6 md:text-H2">{productInfo[0].name.split(' ').slice(productInfo[0].name.split(' ').length-1,).join() }</h2>
        <p className="font-normal opacity-70 mt-6">{productInfo[0].description}</p>
        <p className="text-H6 mt-6">$ {priceToString()}</p>
        <AddToCart />
        </div>
        </div>
        <h4 className="text-H4 mx-6 mt-20 font-bold">FEATURES</h4>
        <ul className='mx-6 mt-6 font-normal opacity-70'>{paragraphs.map((paragraph:any) => (
          <li key={Math.random()} className="mb-6">{paragraph}</li> 
        ))}</ul>
        <h4 className="text-H4 mx-6 mt-16">IN THE BOX</h4>
        <ul className="mx-6 mt-6 flex flex-col">
          {productInfo[0].includes.map((item: any) => (
            <li key={productInfo[0].id} className="mb-2 flex"><span className="text-audiocolor-oj2 w-10 font-bold">{item.quantity}x</span><span className=" font-normal opacity-70">{item.item}</span></li>
          ))}
        </ul>
        <section className="mx-auto px-6 mt-24 grid grid-cols-1 gap-4">
          <img src={'/../.' + productInfo[0].gallery.first.mobile} alt='gallery image 1' className="rounded-lg" />
          <img src={'/../.' + productInfo[0].gallery.second.mobile} alt='gallery image 2' className="rounded-lg" />
          <img src={'/../.' + productInfo[0].gallery.third.mobile} alt='gallery image 3' className="rounded-lg" />
        </section>
        <section className="mx-6 mt-28 mb-6">
          <h5 className="text-H5 text-center">YOU MAY ALSO LIKE</h5>
          <ul className="flex flex-col mt-10 gap-5">
            {productInfo[0].others.map((otherProd:any) => (
              <li key={Math.random()} className="mb-8 flex flex-col gap-8">
                <img src={'/../.' + otherProd.image.mobile} alt={otherProd.name} />
                <h4 className="text-center text-H4">{otherProd.name}</h4>
                <Link href={`/products/${otherProd.slug}`} className="bg-audiocolor-oj2 text-audiocolor-w1 font-semibold w-40 py-3 text-center mx-auto">SEE PRODUCT</Link>
              </li>
            ))}
          </ul>
        </section>
        <CategoryLinks />
        <BestAudio />
    </div>
  )
}

export default Product