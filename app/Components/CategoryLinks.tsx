import data from '../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import MarkIPreview from '../assets/product-xx99-mark-one-headphones/mobile/image-removebg-preview(41).svg'
import ZX9Preview from '../assets/product-zx9-speaker/mobile/image-removebg-preview(38).svg'
import YX1Preview from '../assets/product-yx1-earphones/mobile/image-removebg-preview(42).svg'
import shadow from '../assets/home/mobile/Oval Copy 4.svg'
console.log(data)
const CategoryLinks = () => {

    const categoryLinkNames = [
      'XX99 Mark I Headphones', 'ZX9 Speaker', 'YX1 Wireless Earphones'
    ]

  return (
    <section className="w-full">
        <ul className='my-10 mx-6 flex flex-col'>
        {data.filter((homeCategory)=> categoryLinkNames.indexOf(homeCategory.name) >= 0).map((category) => (
            <li key={category.id} className={`order-${category.name === 'XX99 Mark I Headphones' ? 'first' : category.name === 'ZX9 Speaker' ? '2' : 'last'} relative h-56 flex flex-col justify-end items-center w-full`}>
                <Image src={category.name === 'XX99 Mark I Headphones' ? MarkIPreview : category.name === 'ZX9 Speaker' ? ZX9Preview : YX1Preview} alt="" width='85' height='85' className={`${category.name === 'YX1 Wireless Earphones' && 'w-28 h-28'} absolute z-10 top-4`} />
                <Image src={shadow} alt="" width='200' height='200' className="absolute z-10 top-20"/>
                <div className="bg-audiocolor-w3 h-40 flex flex-col justify-end items-center w-full rounded-lg">
                  <h4 className="mb-1 font-bold">{category.category.toUpperCase()}</h4>
                  <Link href='' className="mb-4 text-subtitle opacity-60 flex items-center gap-1 hover:text-audiocolor-oj2">
                    SHOP <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 text-audiocolor-oj2" />
                  </Link>
                </div>
            </li>
        ))}
        </ul>
    </section>
  )
}

export default CategoryLinks