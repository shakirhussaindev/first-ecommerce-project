import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import NavLi from '../components/NavLi'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='pt-10 pb-4'>
      <Container>
        <Flex className="items-center">
          <div className='w-3/12'>
          <Image src={Logo}/>
          </div>
          <div className='w-5/12'>
          <ul className='flex gap-x-12'>
            <NavLi text="Home"/>
            <NavLi text="Contact"/>
            <NavLi text="About"/>
            <NavLi text="Sign Up"/>
          </ul>
          </div>
          <div className='w-4/12'>
          <Flex className="items-center">
            <div className='ml-10 w-[243px] bg-white2 rounded-sm relative'>
            <input className='py-2.5 pl-5 pr-12 outline-none text-sm font-pop placeholder:text-xs placeholder:text-black placeholder:font-pop placeholder:font-normal' type="text" placeholder='What are you looking for?'/>
            <IoSearchOutline className='absolute left-[207px] text-xl top-3'/>
          </div>
            <CiHeart className='text-2xl ml-9 mr-7'/>
            <IoCartOutline className='text-2xl'/>
          </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
