import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo2 from '../assets/logo2.png'
import QrCode from '../assets/site-qr.png'
import PlayStore from '../assets/google-play-badge-logo.png'
import AppStore from '../assets/app-store-badge-logo.png'
import { AiOutlineSend } from "react-icons/ai";
import FooterTitle from '../components/FooterTitle'
import FooterList from '../components/FooterList'
import { RiFacebookLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-black pt-20'>
      <Container>
        <Flex className="justify-between pb-15">
          <div className=''>
          <Image src={Logo2} alt="logo"/>
          <h5 className='text-xl text-white1 font-pop font-medium py-6'>Subscribe</h5>
          <p className='text-base text-white1 font-pop font-normal pb-4'>Get 10% off your first order</p>
          <div className='relative w-[217px] border border-white1 rounded-sm'>
            <input className='text-base text-white1 font-pop font-normal outline-none py-3 pl-4 placeholder:text-base placeholder:text-[#fafafa66] placeholder:font-pop placeholder:font-normal' type="email" placeholder='Enter your email'/>
            <AiOutlineSend className='absolute text-white text-2xl top-1/2 -translate-y-1/2 right-4'/>
          </div>
          </div>
          <div className='w-2/12'>
          <FooterTitle text="Support"/>
          <ul className='flex flex-col gap-y-4 mt-6'>
            <FooterList text="111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."/>
            <FooterList text="exclusive@gmail.com"/>
            <FooterList text="+88015-88888-9999"/>
          </ul>
          </div>
          <div className=''>
          <FooterTitle text="Account"/>
          <ul className='flex flex-col gap-y-4 mt-6'>
            <FooterList text="My Account"/>
            <FooterList text="Login / Register"/>
            <FooterList text="Cart"/>
            <FooterList text="Wishlist"/>
            <FooterList text="Shop"/>
          </ul>
          </div>
          <div className=''>
          <FooterTitle text="Quick Link"/>
          <ul className='flex flex-col gap-y-4 mt-6'>
            <FooterList text="Privacy Policy"/>
            <FooterList text="Terms Of Use"/>
            <FooterList text="FAQ"/>
            <FooterList text="Contact"/>
          </ul>
          </div>
          <div className=''>
          <FooterTitle text="Download App"/>
          <p className='text-xs font-pop font-medium text-[#fafafab3] pt-6 pb-2'>Save $3 with App New User Only</p>
          <Flex className="justify-between">
            <Image className="w-[80px]" src={QrCode}/>
            <div>
              <Image className="w-[106px] mb-2.5" src={PlayStore}/>
              <Image className="w-[106px]" src={AppStore}/>
            </div>
          </Flex>
          <Flex className="text-white text-3xl gap-6 mt-6">
            <RiFacebookLine />
            <LuTwitter />
            <FaInstagram />
            <RiLinkedinLine />
          </Flex>
          </div>
        </Flex>
      </Container>
      <hr className='border-[#ffffff66] opacity-30'/>
      <p className='text-[#ffffff66]  text-base font-pop font-normal text-center pt-4 pb-6'><FaRegCopyright className='inline-block text-2xl pr-1'/>Copyright Rimel 2022. All right reserved</p>
    </footer>
  )
}

export default Footer
