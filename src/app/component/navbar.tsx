import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='max-w-[1440px]'>
        <div className='max-w-[1440px] h-[38px] bg-[#000000]'>
        <h1 className='text-white bg-black flex justify-center text-center items-center'>Sign up and get 20% off to your first order.Sign up Now</h1>
        </div>
        
        <div className='max-w-[1240px] h-[48px]  top-[62px] left-[100px] gap-[40px] mx-auto flex flex-wrap'>
        <div className='max-w-[160px] h-[22px]'>
            <h1 className='font-bold test-[22px] border-sold border-1px border-black mt-[8px]'>SHOP.CO</h1>

        </div>
        <div className='w-[421px] h-[22px] gap-[20px] flex flex-wrap  mt-[8px]'>
            <Link href="./component/footer.tsx" className='w-[57px] h-[22px] text-[12px] gap-[4px] font-normal hover:bg-[#F0EEED] hover:text-[14px] hover:w-[97px] hover:text-center hover:mx-auto'>Shop</Link><br />
            <Link href="/on scale"  className='w-[57px] text-[12px]  h-[22px] gap-[4px] font-normal hover:bg-[#F0EEED] hover:text-[14px] hover:w-[97px] hover:text-center hover:mx-auto'>On scale</Link><br />
            <Link href="/new arrivals"  className='w-[87px]  text-[12px] h-[22px] gap-[4px] font-normal hover:bg-[#F0EEED] hover:text-[12px] hover:rounded-md hover:w-[97px] hover:text-center hover:mx-auto'>New Arrivals</Link><br />
            <Link href="/brands"  className='w-[57px] text-[12px]  h-[22px] gap-[4px] font-normal hover:bg-[#F0EEED] hover:text-[14px] hover:w-[97px] hover:text-center hover:mx-auto'>Brands</Link><br />

        </div>
        <div className=' '>
        <div>
        
        <textarea
        //  onChange={(e)=>setMessage(e.target.value)}
        //  value={message}
        className='bg-[#F0F0F0] w-[557px]  h-[35px] border border-solid  rounded-[62px] px-[16px] py-[5px]'  
        id="message"
        placeholder='Seach for Product.'
        ></textarea>
        </div>
            
        </div>
        
        </div>
        
    </div>
  )
}

export default Navbar
