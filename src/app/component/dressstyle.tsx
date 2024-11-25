import React from 'react'
import Image from 'next/image'

const Dressstyle = () => {
  return (
    <div className='w-[1239px] h-[866px] top-[2417px] left-[100px] mx-auto rounded-[40px] bg-[#F0F0F0] '>
        <div className='w-[687px] h-[58px] top-[70px] left-[276px] mx-auto text-center py-[75px]'><h1 className='font-bold text-[48px] leading-[57.6px]'>BROWSE BY DRESS STYLE</h1></div>
            
            <div className='top-[192px] w-[1239px] h-[300px] left-[100px] mt-[15px] flex flex-wrap  px-[50px] gap-[45px]'>

           
            <div className='w-[407px] h-[289px] top-[192px] left-[64px] rounded-[20px] '>
    
    <Image
    src={'/casual.png'}
    alt='casual cloths image'
    width={407}
    height={289}
    /></div>


<div className='w-[684px] h-[289px] top-[192px] left-[491px] rounded-[20px]'>
    
    <Image
    src={'/formal.png'}
    alt='formal cloth image'
    width={684}
    height={289}
    /></div>



<div className='w-[684px] h-[289px] top-[501px] left-[64px] rounded-[20px]'>
    
    <Image
    src={'/party.png'}
    alt='party cloth image'
    width={684}
    height={289}
    /></div>



<div className='w-[407px] h-[289px] top-[501px] left-[768px] rounded-[20px]'>
    
    <Image
    src={'/gym.png'}
    alt='gym cloths image'
    width={407}
    height={289}
    /></div>
    
    
    </div>
    </div>
  )
}

export default Dressstyle