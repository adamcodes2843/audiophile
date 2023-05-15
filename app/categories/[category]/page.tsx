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
    <div>
        { params.category === 'speakers' || params.category === 'headphones' || params.category === 'earphones' ?
            <h1 className="mt-40">category: {params.category}</h1>
            : <h1 className="mt-40">Not a valid category</h1>
        }
        
    </div>
  )
}