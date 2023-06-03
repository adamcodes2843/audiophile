import data from '../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

const CategoryDropdown = () => {

    const categoryLinkNames = ['XX99 Mark I Headphones', 'ZX9 Speaker', 'YX1 Wireless Earphones']
    let MarkIPreview = '/../assets/product-xx99-mark-one-headphones/mobile/image-removebg-preview(41).svg'
    let ZX9Preview = '/../assets/product-zx9-speaker/mobile/image-removebg-preview(38).svg'
    let YX1Preview = '/../assets/product-yx1-earphones/mobile/image-removebg-preview(42).svg'
    let shadow = '/../assets/home/mobile/Oval Copy 4.svg'

    let organizedData = () => {
      let neededData = data.filter((homeCategory)=> categoryLinkNames.indexOf(homeCategory.name) >= 0)
      let earphoneData:any = neededData.shift()
      let orderedData = neededData.concat(earphoneData)
      return orderedData
    }
    
  return (
    <section className="w-full bg-audiocolor-w1 pt-6 pb-1 rounded-b-lg">
        <ul className='mb-10 md:mb-0 mx-6 flex flex-col md:flex-row md:gap-3 lg:gap-8 md:mx-10 lg:mx-40 md:pb-6'>
        {organizedData().map((category) => (
            <li key={category.id} className="relative h-56 lg:h-72 flex flex-col justify-end items-center w-full">
                <Image src={category.name === 'XX99 Mark I Headphones' ? MarkIPreview : category.name === 'ZX9 Speaker' ? ZX9Preview : YX1Preview} alt="" width='90' height='90' className={`${category.name === 'YX1 Wireless Earphones' && 'w-28 h-28'} absolute z-10 top-2 lg:top-8 xl:top-4 md:w-28 md:h-28 lg:h-32 lg:w-32 xl:w-40 xl:h-40`} />
                <Image src={shadow} alt="" width='200' height='200' className="absolute z-10 top-16 lg:top-32"/>
                <div className="bg-audiocolor-w3 h-40 lg:h-48 flex flex-col justify-end items-center w-full rounded-lg">
                  <h4 className="mb-1 font-bold lg:text-H6">{category.category.toUpperCase()}</h4>
                  <Link href={`/categories/${category.category}`} className="mb-4 text-subtitle opacity-60 flex items-center gap-1 hover:text-audiocolor-oj2">
                    SHOP <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 text-audiocolor-oj2" />
                  </Link>
                </div>
            </li>
        ))}
        </ul>
    </section>
  )
}

export default CategoryDropdown