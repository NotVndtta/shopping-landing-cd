import React from 'react';
import Image from 'next/image';
import banner from '../../images/banner_photo.png';
import vector from '../../images/Vector.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="ph:h-[504px] ph:pl-[15px] ph:pt-[27px] tb:h-[455px] tb:flex tb:pl-[39px] 
    dp:h-[768px] dp:w-[1280px] 
    dp:pl-[85px] dp:pt-[17px]  tb:justify-between">
      <div className="dp:pt-[162px] ">
        <h1 className="ph:text-2xl tb:text-6xl leading-normal 
        font-bold whitespace-nowrap ">Hey, I’m Nick</h1>
        <p className="ph:text-sm tb:text-xl leading-normal text-custom-gray dp:text-xl
        font-normal mt-[18px] ">Frontend developer</p>
        <div className="ph:text-sm mt-[38px] relative dp:mt-[95px] tb:text-xl  text-custom-gray 
        font-normal  pt-6  tb:w-[445px]">
          <div className="absolute top-[-6px] left-0 w-[25px] h-[3px] bg-purple-600 "></div>
          Help you to create high-quality digital <br/> 
          products that your clients will love and let   
          your business thrive
        </div>

       
        <button className="ph:max-w-[139px] ph:h-[39px] ph:whitespace-nowrap ph:text-sm 
        px-[13px] py-[9px] ph:gap-x-2 ph:mt-[27px] 
        dp:max-w-[188px] dp:h-[50px] justify-between dp:mt-[60px] dp:px-[25px] dp:py-[13px]
         text-white dp:text-base font-semibold flex flex-row items-center dp:gap-x-3 
         bg-purple-600 rounded-full hover:bg-purple-500 active:bg-purple-600 
         active:border-purple-200 disabled:bg-gray-200 disabled:text-gray-600 
         disabled:border-gray-200">
      <Link href="#!">
        Get in touch
      </Link>
      <Image src={vector} alt="plane img"  fit="cover" />
    </button>
      </div>
      <div className='  bg-right bg-no-repeat dp:ml-[-180px] dp:mb-[-100px]'>
      <Image
        src={banner}
        alt="Banner background"
        fit="cover"
        position="right"
        className="tb:w-[680px] tb:h-[340px] dp:w-[1080px] dp:h-[689px] z-[-1] "
        />
      </div>
    </section>
  );
}

export default Hero;
