import React from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full bg-black'>
      <div className='flex container py-5 flex-col md:flex-row items-center md:justify-between'>
      <h1 className=" text-2xl md:text-3xl font-black text-white">SNIPER.SNEAKER.</h1>
        <div className="flex   items-center gap-2">
          {navLinks.map((link, i) => (
            <div key={i}>
              <Link className="text-white font-medium text-base md:text-lg" to={link.id}>
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer