import Link from 'next/link'
import CategoryLinks from '../../Components/CategoryLinks'
import BestAudio from '../../Components/BestAudio'
import data from '../../data.json'

export default function Category({params}: {
    params: { category: string}
}) {

  let reversedData = data.slice().reverse()
  return (
    <section className="bg-audiocolor-w1 max-w-[1440px] lg:mx-auto">
        { params.category === 'speakers' || params.category === 'headphones' || params.category === 'earphones' ?
            <>
            <h1 className="pb-10 md:pb-0 md:h-[22rem] lg:h-[21rem] pt-24 md:pt-20 flex justify-center items-center bg-audiocolor-b1 text-H4 md:text-H2 font-semibold text-audiocolor-w3">{params.category.toUpperCase()}</h1>
            <ul className='px-6 md:px-10 pt-16 md:pt-28 lg:px-40 lg:mt-16'>
            {reversedData.filter((cat) => cat.category == params.category).map((product)=> (
              <li key={product.name} className={`flex flex-col ${product.slug === 'xx99-mark-one-headphones' || product.slug === 'zx7-speaker' ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-20 xl:gap-32 items-center text-center justify-between mb-20 md:mb-32 lg:mb-20 xl:mb-32`}>
                <img src={`/../.${product.categoryImage.mobile}`} alt="" className="rounded-lg mb-8 md:hidden" />
                <img src={`/../.${product.categoryImage.tablet}`} alt="" className="rounded-lg mb-12 hidden md:block lg:hidden" />
                <img src={`/../.${product.categoryImage.desktop}`} alt="" className={`rounded-lg mb-8 hidden lg:block lg:w-1/2 lg:h-auto`} />
                <div className="lg:flex lg:flex-col lg:w-1/2 lg:items-start xl:pr-3">
                {
                  product.new && <h4 className="text-overline text-audiocolor-oj2 mb-6 md:mb-3">{product.new && 'NEW PRODUCT'}</h4>
                }
                <h2 className="text-H4 md:text-H2">{product.name.split(' ').slice(0, product.name.split(' ').length - 1).join(' ')}</h2>
                <h2 className="text-H4 mb-6 lg:mb-3 md:text-H2">{product.name.split(' ').slice(product.name.split(' ').length-1,).join() }</h2>
                <p className="font-normal opacity-60 mb-10 md:mb-10 lg:mb-6 md:mx-20 lg:mx-0 md:mt-6 lg:mt-3 lg:text-start">{product.description}</p>
                <Link href={`/products/${product.slug}`} className="bg-audiocolor-oj2 hover:bg-audiocolor-oj1 text-audiocolor-w1 py-4 px-8 mb-6">SEE PRODUCT</Link>
                </div>
              </li>
            ))}
            </ul>
            <CategoryLinks />
            <BestAudio />
            </>
            : <h1 className="mt-40">Not a valid category</h1>
        }  
    </section>
  )
}