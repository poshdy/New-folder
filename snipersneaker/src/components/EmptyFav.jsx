import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const EmptyFav = () => {
  return (
    <div className='flex items-center w-full justify-center h-full'>
        <h2>Your Favs <AiOutlineHeart size={20} /> is currlenty empty</h2>
        <Link to={'/shop'}>Start Shopping!</Link>
    </div>
  )
}

export default EmptyFav