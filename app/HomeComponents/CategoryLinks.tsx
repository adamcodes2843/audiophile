import data from '../data.json'
import Image from 'next/image'
console.log(data)
const CategoryLinks = () => {

    const categoryLinks = ['XX99 Mark I Headphones', 'ZX9 Speaker', 'YX1 Wireless Earphones']

  return (
    <section className="w-full flex flex-col">
        <ul className='my-10 mx-6'>
        {data.filter((homeCategory)=> categoryLinks.indexOf(homeCategory.name) >= 0).map((category) => (
            <li key={category.id} className="bg-audiocolor-w3 border-2">
                <Image src={'/.' + category.categoryImage.mobile} alt="Heaphones page" width='100' height='100' />
                <div>
                  <h4>{category.category.toUpperCase()}</h4>
                </div>
            </li>
        ))}
        </ul>
    </section>
  )
}

export default CategoryLinks