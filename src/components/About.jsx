import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <ul className='flex justify-center gap-x-10 py-5 text-xl font-semibold'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/Services"><li>Services</li></Link>
        <Link to="/Product"><li>Product</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>
    <div className='text-5xl flex justify-center'>
      <h1>About</h1>
      </div>
      <p className='text-xl flex justify-center text-center py-4 px-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque rem eos quod impedit modi? Officia nemo cumque itaque ad perspiciatis odio sed molestias praesentium pariatur magni animi doloribus, accusantium suscipit!</p>
    </>
  )
}

export default About
