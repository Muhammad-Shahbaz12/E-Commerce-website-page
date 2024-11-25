import React from 'react'
import Image from 'next/image'

const LOgobar = () => {
  return (
    <div className='max-w-[1440px] h-[122px] top-[797px] px-[85px] flex flex-wrap gap-[85px] bg-black'>
 <div className='w-[170px] h-[35px] my-[35px]  '>
  <Image className='top-[841px] left-[100px] mt-[12px]'
       src={'/6.png'}
       alt=''
       width={168.48}
       height={33.16}/>
       </div>
       <div className='w-[140px] h-[35px] my-[35px]   px-[35px]'>
<Image className='top-[841px] left-[100px] mt-[12px]'
       src={'/2.png'}
       alt=''
       width={91}
       height={32}/>
</div>
<div className='w-[170px] h-[35px] my-[35px] '>
<Image className='top-[840px] left-[569.48px] mt-[12px]'
       src={'/3.png'}
       alt=''
       width={158}
       height={32}/>
</div>
<div className='w-[170px] h-[35px] my-[35px]  '>
<Image className='top-[842px] left-[831px] mt-[12px]'
       src={'/4.png'}
       alt=''
       width={194}
       height={32}/>
</div>
<div className='w-[170px] h-[35px] my-[35px]  '>
<Image className='top-[841px] left-[1131.48px] mt-[12px]'
       src={'/1.png'}
       alt=''
       width={206.79}
       height={33.35}/>
</div>
    </div>
  )
}

export default LOgobar