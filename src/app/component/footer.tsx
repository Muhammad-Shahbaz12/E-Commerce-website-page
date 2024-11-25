import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='max-[1440px] h-[289px] top-[3781px] left-[-1px]'>
        <div className=' bg-black w-[1240px] h-[180px] mx-auto top-[3781px] left-[100px] rounded-[20px] justify-between px-[64px] py-[46px] flex flex-wrap'>
            <div className='w-[551px] h-[94px] '>
                <h1 className='text-white font-bold text-[40px] leading-[45px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
           
            </div>
            <div className='w-[349px] h-[108px] gap-[14px]'>
            
            <div className='bg-[#F0F0F0] w-[349px]   h-[48px] border border-solid  rounded-[62px] px-[16px] py-[12px]  '>
            <h1 className=''>Enter your email addres</h1>
            </div>

            <div className='bg-[#F0F0F0] w-[349pxpx]  mt-[12px] h-[48px] border border-solid  rounded-[62px] px-[16px] py-[12px] mx-auto text-center  '>
            <h1 className=''> Subscribes to Newsletter</h1>
            </div>

            </div>
        </div>

        <div className='max-w-[1440px] h-[299px] top-[3871px]  bg-[#F0F0F0]'>

        <div className='w-[1240px] h-[177px] top-[4011px] left-[100px]  justify-between mt-[45px]  mx-auto flex flex-wrap gap-[15px] bg-[#F0F0F0] '>
            <div className='  w-[248px] h-[177px] gap-[15px] '>
                <div className='w-[248px] h-[114px] gap-[] '><h1 className='w-[167px] h-[23px] text-[33px] font-bold leading-[40.15px]'>SHOP.CO</h1>
                <p className='w-[248px] h-[66px] text-[14px] font-normal leading-[22px] my-[25px]'>We have clothes that suits your style and which you're proud to wear.Formwomen to men.
                </p>
            </div></div>

            <div className='w-[104px] h-[177px] gap-[16px] '>
                <h1 className='w-[104px] h-[18px] text-[16px]  font-medium  leading-[18px] tracking-[3px]'>COMPONY</h1>
                <div className='w-[104px] h-[133px] font-[] text-[16px] leading-[19px] py-[13px]'>
                <p className='mt-[5px]'>About</p>
                <p className='mt-[5px]'>Features</p>
                <p className='mt-[5px]'>Works</p>
                <p className='mt-[5px]'>Career</p></div>
            </div>


            <div className='w-[136px] h-[177px] gap-[26px] '>
                <h1 className='w-[49px] h-[18px] text-[16px]  font-medium  leading-[18px] tracking-[3px '>HELP</h1>
                <div className='w-[136px] h-[133px] font-[] text-[16px] leading-[19px] py-[13px]'>
                <p className='mt-[5px]'>Coustomer Support</p>
                <p className='mt-[5px]'>Delivery</p>
                <p className='mt-[5px]'>Terms & conditions</p>
                <p className='mt-[5px]'>Privacy Policy</p></div>
            </div>





            <div className='w-[149px] h-[177px] gap-[26px]'>
                <h1 className='w-[37px] h-[18px] text-[16px]  font-medium  leading-[18px] tracking-[3px] '>FAQ</h1>
                <div className='w-[149px] h-[133px] font-[] text-[16px] leading-[19px] py-[13px]'>
                <p className='mt-[5px]'>Account</p>
                <p className='mt-[5px]'>Manage Deliveries</p>
                <p className='mt-[5px]'>Orders</p>
                <p className='mt-[5px]'>Poyments</p></div>
            </div>



            <div className='w-[149px] h-[177px] gap-[26px]'>
                <h1 className='w-[118px] h-[18px] text-[16px]  font-medium  leading-[18px] tracking-[3px] '>RESOURSCES</h1>
                <div className='w-[149px] h-[133px] font-[] text-[16px] leading-[19px] py-[13px]'>
                <p className='mt-[5px]'>Free EBook</p>
                <p className='mt-[5px]'>Development</p>
                <p className='mt-[5px]'>How to-Blog</p>
                <p className='mt-[5px]'>Youtube Playist</p></div>
            </div>
            </div>



            <div className='max-w-[1240px] mx-auto h-[55px] left-[100px] flex flex-wrap justify-between'>
                <div > 
                <Image className='top-[4263px] left-[100px]'
                src={'/© 2000-2021, All rights reserved.png'}
                alt='recivering image'
                width={269}
                height={19}/>
                </div>


                <div>
                <Image className='top-[4263px] left-[100px]'
                src={'/vcsjbhv.png'}
                alt='logo images'
                width={269}
                height={19}/>
                </div>




            </div>

        </div>


        



        

    </div>
  )
}

export default Footer