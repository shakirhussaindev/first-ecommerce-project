import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <ul className='flex justify-center gap-x-10 py-5 text-xl font-semibold'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/Services"><li>Services</li></Link>
        <Link to="/Product"><li>Product</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>
    <div className='text-5xl flex justify-center'>Product</div>
      
    </div>
  )
}

export default Product
