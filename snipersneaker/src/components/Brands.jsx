import React from 'react'
import convlogo from '../assets/convlogo.png'
import vanslogo from '../assets/vanslogo.png'
import nikeogo from '../assets/nikelogo.png'
import adidlogo from '../assets/adidlogo.png'
import { motion } from 'framer-motion'
import { fadeIn, fadeItem } from '../animation/motion'


const Brands = () => {
  return (
    <div className='w-full border-y-2 border-y-black my-12'>
        <motion.div variants={fadeIn} initial='hidden' animate='show' exit={'exit'} className='container px-3 py-2 flex  gap-1 md:gap-2 items-center justify-center'>
            <motion.img  variants={fadeItem}  className='w-20 md:w-32 object-cover' src={nikeogo}/>
            <motion.img  variants={fadeItem} className='w-20 md:w-32 object-cover'  src={adidlogo}/>
            <motion.img  variants={fadeItem} className='w-20 md:w-32 object-cover'  src={convlogo}/>
            <motion.img  variants={fadeItem} className='w-20 md:w-32 object-cover'  src={vanslogo}/>
            
        </motion.div>
    </div>
  )
}

export default Brands