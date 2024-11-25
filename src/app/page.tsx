import React from 'react'
import Navbar from './component/navbar'
import Herosection from './component/herosection'
import LOgobar from './component/logobars'
import Card from './component/card'
import Card2 from './component/card2'
import Dressstyle from './component/dressstyle'
import Cardfortext from './component/cardfortext'
import Footer from './component/footer'

const Homepage = () => {
  return (
    <div className=' '>
     <Navbar/>
      <Herosection/>
      <LOgobar/>
      <div className='w-[403px] h-[58px] top-[991px] left-[518px] flex text-center justify-center items-center mx-auto my-[45px]'>
        <h1 className='text-[48px] leading-[57.6px] font-bold'>NEW ARRIVALS</h1>
      </div>
      <Card/>
      <div className='w-[403px] h-[58px] top-[991px] left-[518px] flex text-center justify-center items-center mx-auto my-[45px]'>
        <h1 className='text-[48px] leading-[57.6px] font-bold'>TOP SELLING</h1>
      </div>
      <Card2/>
      <Dressstyle/>
      <Cardfortext/>
      <Footer/>
     

    </div>
  )
}

export default Homepage