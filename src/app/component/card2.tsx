import React from 'react'
import Image from 'next/image'


const Card2 = () => {

    return (
    <div className=' w-[144px] flex flex-row gap-[15px] mx-[15px]'>

        <div className='w-[300px] h-[400px] left-[100px] top-[1102px] ml-[45px]'>
        <div className='w-[295px] h-[298px] top-[1104px] left-[100px]   '>
            <Image className='bg-[#F0EEED] '
            src={'/shirt21.png'}
            alt='shirt '
            width={295}
            height={298}/>

        </div>
        <div className='w-[295px] h-[27px] top-[1418px] left-[px]'>
            <h1 className='font-bold text-[20px] leading-[27px] mt-[12px]'>Vertical Striped Shirt</h1>

        </div>
        <div className='w-[195px] h-[19px] top-[1453px] left-[100px] gap-[5px] flex flex-wrap'>
            <Image className='flex flex-wrap'
            src={'/rating.png'}
            alt='rating '
            width={110}
            height={19}
            />
            <p className='w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]'>5.0/5</p>
            <h1 className='w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px] font-bold text-[24px] leading-[27px]'>$212</h1>
            <h1 className='w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px] font-bold text-[24px] leading-[27px] text-[#6a5f5f]'>$232</h1>
            <h1 className='w-[58px] h-[28px] top-[1480px] left-[100px] gap-[10px] font-bold text-[12px] leading-[16.2px] px-[14px] py-[6px]  rounded-[62px] bg-red-200 text-red-600'>-20%</h1>
         
        </div>
        </div>


        <div className='w-[300px] h-[400px] left-[100px] top-[1102px]'>
        <div className='w-[295px] h-[298px] top-[1104px] left-[px] '>
            <Image className='bg-[#F0EEED] '
            src={'/shirt22.png'}
            alt='shirt '
            width={295}
            height={298}/>

        </div>
        <div className='w-[295px] h-[27px] top-[1418px] left-[100px]'>
            <h1 className='font-bold text-[20px] leading-[27px] mt-[12px]'>Courage Graphic T-shirt</h1>

        </div>
        <div className='w-[195px] h-[19px] top-[1453px] left-[100px] gap-[5px] flex flex-wrap'>
            <Image className='flex flex-wrap'
            src={'/rating.png'}
            alt='rating '
            width={110}
            height={19}
            />
            <p className='w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]'>4.0/5</p>
            <h1 className='w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px] font-bold text-[24px] leading-[27px]'>$145</h1>
            
        </div>
        </div>


        <div className='w-[300px] h-[400px] left-[100px] top-[1102px]'>

        <div className='w-[295px] h-[298px] top-[1104px] left-[100px] '>
            <Image className='bg-[#F0EEED] '
            src={'/pent23.png'}
            alt='shirt '
            width={295}
            height={298}/>

        </div>
        <div className='w-[295px] h-[27px] top-[1418px] left-[100px]'>
            <h1 className='font-bold text-[20px] leading-[27px]'>Loose Fit Bermuda Shorts</h1>

        </div>
        <div className='w-[150px] h-[19px] top-[1453px] left-[100px] gap-[5px] flex flex-wrap'>
            <Image className='flex flex-wrap'
            src={'/rating.png'}
            alt='rating '
            width={110}
            height={19}
            />
            <p className='w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]'>3/5</p>
            <h1 className='w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px] font-bold text-[24px] leading-[27px]'>$80</h1>
        </div>
        </div>


        <div className='w-[300px] h-[400px] left-[100px] top-[1102px]'>
        <div className='w-[295px] h-[298px] top-[1104px] left-[100px] '>
            <Image className='bg-[#F0EEED] '
            src={'/pent24.png'}
            alt='shirt '
            width={295}
            height={298}/>

        </div>
        <div className='w-[295px] h-[27px] top-[1418px] left-[100px]'>
            <h1 className='font-bold text-[20px] leading-[27px]'>Faded Shinny Jeans</h1>

        </div>
        <div className='w-[195px] h-[19px] top-[1453px] left-[100px] gap-[5px] flex flex-wrap'>
            <Image className='flex flex-wrap'
            src={'/rating.png'}
            alt='rating '
            width={110}
            height={19}
            />
            <p className='w-[33px] h-[19px] font-normal text-[14px] leading-[18.9px]'>4.5/5</p>
            <h1 className='w-[55px] h-[32px] top-[1480px] left-[100px] gap-[10px] font-bold text-[24px] leading-[27px]'>$210</h1>
           
        
        </div>
        </div>



    </div>
  )
}

export default Card2