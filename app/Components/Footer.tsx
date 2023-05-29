import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-audiocolor-b2 text-audiocolor-w1 flex flex-col justify-between items-center md:items-start md:text-left text-center px-6 md:px-10 mt-auto">
        <div className='h-1 w-1/3 md:w-28 bg-audiocolor-oj2 mb-2'/>
        <h1 className="text-H3 my-10 md:mb-6">audiophile</h1>
        <ul className="flex flex-col md:flex-row justify-around py-4 gap-4 md:gap-8 mb-10 md:mb-4">
            <Link href='/'>HOME</Link>
            <Link href='/categories/headphones'>HEADPHONES</Link>
            <Link href='/categories/speakers'>SPEAKERS</Link>
            <Link href='/categories/earphones'>EARPHONES</Link>
        </ul>
        <p className='opacity-50 mb-10 md:mb-20 text-body font-normal'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and vist our demo facility - we're open 7 days a week.</p>
        <div className="md:flex justify-between w-full">
        <p className='opacity-50 mb-10  text-body font-normal'>Copyright 2021. All Rights Reserved</p>
        <div className='flex h-7 justify-center mb-10 gap-3'>
            <FontAwesomeIcon icon={faFacebookSquare} className="w-7 "/>
            <FontAwesomeIcon icon={faTwitterSquare} className="w-7 bg-audiocolor-b1"/>
            <FontAwesomeIcon icon={faInstagram} className="w-7 "/>
        </div>
        </div>
    </footer>
  )
}

export default Footer