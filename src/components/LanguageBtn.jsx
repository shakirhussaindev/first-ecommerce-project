import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import Flex from '../components/Flex'

const LanguageBtn = ({className}) => {
  return (
    <div className={className}>
      <Flex className="items-center gap-x-1.5">
        <button className='text-sm text-white1 font-pop font-normal'>English</button>
        <FaChevronDown className='text-white1 text-sm'/>
      </Flex>
    </div>
  )
}

export default LanguageBtn
