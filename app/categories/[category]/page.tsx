import Link from 'next/link'
import CategoryLinks from '../../Components/CategoryLinks'
import BestAudio from '../../Components/BestAudio'
import data from '../../data.json'

export default function Category({params}: {
    params: { category: string}
}) {

  let reversedData = data.slice().reverse()
  return (
    <section>
        { params.category === 'speakers' || params.category === 'headphones' || params.category === 'earphones' ?
            <>
            <h1 className="mt-24 h-24 md:h-60 flex justify-center items-center bg-audiocolor-b2 text-H4 md:text-H2 font-semibold text-audiocolor-w3">{params.category.toUpperCase()}</h1>
            <ul className='px-6 md:px-10 pt-16 md:pt-28'>
            {reversedData.filter((cat) => cat.category == params.category).map((product)=> (
              <li key={product.name} className="flex flex-col items-center text-center justify-between mb-24">
                <img src={`/../.${product.categoryImage.mobile}`} alt="" className="rounded-lg mb-8 md:hidden" />
                <img src={`/../.${product.categoryImage.tablet}`} alt="" className="rounded-lg mb-2 hidden md:block lg:hidden" />
                <img src={`/../.${product.categoryImage.desktop}`} alt="" className="rounded-lg mb-8 hidden lg:block" />
                <h4 className="text-overline text-audiocolor-oj1 mb-6 md:mb-4 md:mt-10">{product.new && 'NEW PRODUCT'}</h4>
                <h2 className="text-H4 md:text-H2">{product.name.split(' ').slice(0, product.name.split(' ').length - 1).join(' ')}</h2>
                <h2 className="text-H4 mb-6 md:text-H2">{product.name.split(' ').slice(product.name.split(' ').length-1,).join() }</h2>
                <p className="font-normal opacity-60 mb-6 md:mx-20 md:mt-3">{product.description}</p>
                <Link href={`/products/${product.slug}`} className="bg-audiocolor-oj2 text-audiocolor-w1 font-normal py-3 px-8 text-subtitle mb-6">SEE PRODUCT</Link>
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