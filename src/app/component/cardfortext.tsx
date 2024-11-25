import React from 'react'
import Image from 'next/image'
const Cardfortext = () => {
  return (
    <div className='max-w-[1440px] h-[500px] top-[3300px] left-[100px] mx-auto mt-[75px] '>
        <div className='w-[954px] h-[58px] top-[3363px] left-[100px] px-[55px]  '>
        <h1 className='font-bold text-[48px] leading--[57.4px] '>OUR HAPPY CUSTOMERS </h1>
        <div className='w-[1240px] h-[600px]   flex flex-row gap-[8px] mt-[25px]'>
        <div className='w-[400px] h-[240px] top-[3461px] left-[100px] rounded-[20px] border-[1px] border-black'>
        <div className='w-[336px] h-[161.58pween'>
        <Image className='my-[25px] px-[25px]'
            src={'/rating.png'}
            alt='rating '
            width={110}
            height={19}
            />
            <div className='w-[336px] h-[124px] gap-[12px] px-[25px]'>
            <h1 className='w-[110px] h-[24px] gap-[4px] text-bold text-[18px] leading-[] my-[25px]'>Alex K.</h1>
            <p className='w-[336px] h-[88px]  text-normal text-[16px] leading-[22px] justify-between text-justify'>"Finding clothes that align with my personal style used to be a chalienge until I discovered shop.co. The range of options they offer is truly remarkable,catering to a variety of tastes and occasions."</p>
        </div></div></div>


        
        <div className='w-[400px] h-[240px] top-[3461px] left-[100px] rounded-[20px] border-[1px] border-black'>
        <div className='w-[336px] h-[161.58pween'>
        <Image className='my-[25px] px-[25px]'
            src={'/rating.png'}
            alt='rating '
            width={110}
            height={19}
            />
            <div className='w-[336px] h-[124px] gap-[12px] px-[25px]'>
            <h1 className='w-[110px] h-[24px] gap-[4px] text-bold text-[18px] leading-[] my-[25px]'>James L.</h1>
            <p className='w-[336px] h-[88px]  text-normal text-[16px] leading-[22px]'>"i"'m blown aways by the quality and sytle of the clothes i reaceived from Shop.co. Form casual wear to elegant dresses. every piece I've bought has exceededmy expeciations"</p>
        </div></div></div>



        
        <div className='w-[400px] h-[240px] top-[3461px] left-[100px] rounded-[20px] border-[1px] border-black'>
        <div className='w-[336px] h-[161.58pween'>
        <Image className='my-[25px] px-[25px]'
            src={'/rating.png'}
            alt='rating '
            width={110}
            height={19}
            />
            <div className='w-[336px] h-[124px] gap-[12px] px-[25px]'>
            <h1 className='w-[110px] h-[24px] gap-[4px] text-bold text-[18px] leading-[] my-[25px]'>Sarah M.</h1>
            <p className='w-[336px] h-[88px]  text-normal text-[16px] leading-[22px]'>"i"As someone who's always on the lookout for unique fashion pieces,I'm thrilled to have stumbled upen Shop.co The slection of clothes is noth only diverse but also on-point with the latest trends."</p>
        </div></div></div>
        </div>

        </div>
    </div>
  )
}

export default Cardfortext