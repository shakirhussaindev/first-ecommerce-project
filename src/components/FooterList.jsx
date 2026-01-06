import React from 'react'

const FooterList = ({className,text}) => {
  return (
    <li className={`text-base text-white1 font-pop font-normal ${className}`}>{text}</li>
  )
}

export default FooterList
