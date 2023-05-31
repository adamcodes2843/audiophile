import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-audiocolor-b1 text-audiocolor-w1 flex flex-col justify-between items-center md:items-start md:text-left text-center px-6 md:px-10 mt-auto max-w-[1440px] lg:mx-auto lg:px-40">
        <div className='h-1 w-1/3 md:w-28 bg-audiocolor-oj2 mb-2'/>
        <div className="xl:flex xl:justify-between xl:w-full xl:items-center xl:mb-10 xl:mt-16">
        <h1 className="text-H3 my-10 xl:mb-0 xl:mt-0 md:mb-6">audiophile</h1>
        <ul className="flex flex-col md:flex-row justify-around py-4 xl:py-0 gap-4 md:gap-8 mb-10 md:mb-4 xl:mb-0">
            <Link href='/' className="hover:text-audiocolor-oj2">HOME</Link>
            <Link href='/categories/headphones' className="hover:text-audiocolor-oj2">HEADPHONES</Link>
            <Link href='/categories/speakers' className="hover:text-audiocolor-oj2">SPEAKERS</Link>
            <Link href='/categories/earphones' className="hover:text-audiocolor-oj2">EARPHONES</Link>
        </ul>
        </div>
        <div className="xl:w-full xl:flex">
        <div className="xl:w-1/2  xl:pr-8">
        <p className='opacity-50 mb-10 md:mb-20 xl:mb-16 text-body font-normal'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and vist our demo facility - we're open 7 days a week.</p>
        <div className="md:flex justify-between w-full">
        <p className='opacity-50 mb-10  text-body font-normal md:hidden xl:block'>Copyright 2021. All Rights Reserved</p>
        </div>
        </div>
        <div className='flex h-7 justify-center md:justify-start mb-10 gap-3 xl:w-1/2 xl:justify-end xl:h-full xl:mt-20'>
            <p className='opacity-50 mb-10  text-body font-normal hidden md:block xl:hidden md:mr-auto'>Copyright 2021. All Rights Reserved</p>
            <FontAwesomeIcon icon={faFacebookSquare} className="w-7 hover:text-audiocolor-oj2 hover:cursor-pointer"/>
            <FontAwesomeIcon icon={faTwitterSquare} className="w-7 bg-audiocolor-b1 hover:text-audiocolor-oj2 hover:cursor-pointer"/>
            <FontAwesomeIcon icon={faInstagram} className="w-7 hover:text-audiocolor-oj2 hover:cursor-pointer"/>
        </div>
        </div>
    </footer>
  )
}

export default Footer