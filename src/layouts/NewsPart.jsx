import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import LanguageBtn from '../components/LanguageBtn'
import Flex from '../components/Flex'

const NewsPart = () => {
  return (
    <section className='bg-black'>
      <Container>
        <Flex className="items-center">
          <p className='flex-1 text-center text-sm text-white1 font-pop font-normal py-3'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to="/janina"><span className='font-semibold pl-2'><u>ShopNow</u></span></Link></p>
          <LanguageBtn className=""/>
        </Flex>
      </Container>
    </section>
  )
}

export default NewsPart
