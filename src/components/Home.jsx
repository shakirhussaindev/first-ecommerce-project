import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul className='flex justify-center gap-x-10 py-5 text-xl font-semibold'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/Services"><li>Services</li></Link>
        <Link to="/Product"><li>Product</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>
      <div>
        <h1 className='bg-orange-300 text-white text-center py-10 text-largg '>Ecommerce Project</h1>
      </div>
    </div>
  )
}

export default Home
