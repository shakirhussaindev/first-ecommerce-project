import React from 'react'

const NavLi = ({className,text}) => {
  return (
    <li className={`relative text-base text-black font-pop font-normal cursor-pointer after:absolute after:content-[''] after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#808080] after:transition-all after:duration-300 hover:after:w-full ${className}`}>{text}</li>
  )
}

export default NavLi