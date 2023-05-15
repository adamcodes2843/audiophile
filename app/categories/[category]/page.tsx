import Image from 'next/image'
import Link from 'next/link'
import CategoryLinks from '../../Components/CategoryLinks'
import BestAudio from '../../Components/BestAudio'
import data from '../../data.json'

console.log(data)

export default function Category({params}: {
    params: { category: string}
}) {
  return (
    <section>
        { params.category === 'speakers' || params.category === 'headphones' || params.category === 'earphones' ?
            <>
            <h1 className="mt-24 h-24 flex justify-center items-center bg-audiocolor-b2 text-H3 font-semibold text-audiocolor-w3">{params.category.toUpperCase()}</h1>
            <ul className='px-6'>
            {data.filter((cat) => cat.category == params.category).map((product)=> (
              <li key={product.name} className="flex flex-col items-center text-center justify-between gap-6 mb-24">
                <h4 className="text-overline text-audiocolor-oj1">{product.new && 'NEW PRODUCT'}</h4>
                <h2 className="text-H4">{product.name}</h2>
                <p className="font-normal opacity-60">{product.description}</p>
                <Link href={`/products/${product.slug}`} className="bg-audiocolor-oj2 text-audiocolor-w1 font-normal py-3 px-7 text-subtitle">SEE PRODUCT</Link>
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