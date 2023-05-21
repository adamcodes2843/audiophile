import BestAudio from "@/app/Components/BestAudio"
import CategoryLinks from "@/app/Components/CategoryLinks"
import data from "../../data.json"
import Link from 'next/link'
import AddToCart from "./AddToCart"

function Product({params}: {
    params: { product: string}
}) {
  let productInfo:any = data.filter((prod) => prod.slug == params.product)
  console.log(productInfo)
  let productSrcImage = '/../.' + productInfo[0].image.mobile
  return (
    <div className="mt-28 flex flex-col">
        <Link href={'/'} className="mx-6 font-thin w-14 mt-2">Go Back</Link>
        <img src={productSrcImage} alt='' className="h-fill w-fill rounded-lg mx-6 mt-6" />
        <h4 className="text-overline text-audiocolor-oj1 mx-6 mt-6">{productInfo[0].new && 'NEW PRODUCT'}</h4>
        <h2 className="text-H3 mx-6 mt-6">{productInfo[0].name}</h2>
        <p className="font-normal mx-6 opacity-70 mt-6">{productInfo[0].description}</p>
        <p className="text-H6 mt-6 mx-6">$ {productInfo[0].price}</p>
        <AddToCart />
        <h4 className="text-H4 mx-6 mt-20 font-bold">FEATURES</h4>
        <p className='mx-6 mt-6 font-normal opacity-70'>{productInfo[0].features}</p>
        <h4 className="text-H4 mx-6 mt-20">IN THE BOX</h4>
        <ul className="mx-6 mt-6 flex flex-col">
          {productInfo[0].includes.map((item: any) => (
            <li key={productInfo[0].id} className="mb-2 flex"><span className="text-audiocolor-oj2 w-10 font-bold">{item.quantity}x</span><span className=" font-normal opacity-70">{item.item}</span></li>
          ))}
        </ul>
        <section className="mx-6 mt-28 flex flex-col gap-4">
          <img src={'/../.' + productInfo[0].gallery.first.mobile} alt='gallery image 1' className="rounded-lg" />
          <img src={'/../.' + productInfo[0].gallery.second.mobile} alt='gallery image 2' className="rounded-lg" />
          <img src={'/../.' + productInfo[0].gallery.third.mobile} alt='gallery image 3' className="rounded-lg" />
        </section>
        <section className="mx-6 mt-28">
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