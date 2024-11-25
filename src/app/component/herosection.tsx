import React from 'react'
import Image from 'next/image'
const Herosection = () => {
  return (
    <div className='
    max-w-[1440px] h-[663px] top-[134px] bg-[#F2F0F1] mx-auto mt-[45px] flex  flex-wrap'>
        <div className='max-w-[780px] h-[]'>
        <div className='w-[677px] h-[173px] top-[237px] left-[150px] ' >
        <h1 className='font-bold text-[64px] leading-[64px] mx-[45px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        </div>
        <div className='w-[677px] h-[85px] top-[387px] left-[150px]'>
            <p  className='font-normal text-[16px] leading-[22px] mt-[35px] mx-[45px]'>Browse through our diverse ranfe of meticulously crafted rerments designed to bring out your individually and cater to your sense of sytle.</p>
        </div>
       
        <button className='w-[210px] h-[52px] top-[507px] text-white left-[100px] mx-[45px] px-[54px] py-[16px] bg-black gap-[] rounded-[62px]'>Shop Now</button>
       
       <div className='w-[596px] h-[74px] flex flex-wrap mx-[45px] mt-[45px] top-[607px] left-[100px] gap-[32px] '>
        
        <div className='w-[141px] h-[74px] border border-left '>
        <h1 className='w-[107px] h-[54px] font-bold text-[40px] leading-[54px] '>200+</h1>
        <p className='w-[141px] h-[22px] font-normal text-[16px] leading-[22px]  '>Internation Brands</p>
        </div>

        <div className='w-[156px] h-[74px] '>
        <h1 className='w-[156px] h-[54px] font-bold text-[40px] leading-[54px] '>2,000+</h1>
        <p className='w-[156px] h-[22px] font-normal text-[16px] leading-[22px]  '>High quality proudoct</p>
        </div>

        <div className='w-[171px] h-[74px]  px-[25px]'>
        <h1 className='w-[171px] h-[54px] font-bold text-[40px] leading-[54px] '>30,000+</h1>
        <p className='w-[171px] h-[22px] font-normal text-[16px] leading-[22px]  '>Happy Coustomers</p>
        </div>

       </div>
       </div>
       <Image className='bg-green-600 mt-[95px]'
       src={'/star.png'}
       alt='image for boy and girlds'
       width={70}
       height={10}/>
       
       <Image className='bg-green-600'
       src={'/boys and girls.jpeg'}
       alt='boys and girls image'
       width={450}
       height={163}/>
        

    </div>
  )
}

export default Herosection