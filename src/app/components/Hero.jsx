import React from 'react';
import Image from 'next/image';
import banner from '../../images/banner_photo.png';
import vector from '../../images/Vector.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="ph:h-[504px] pl-[15px] pt-[27px] dp:flex dp:h-[768px] dp:w-[1280px] 
    dp:pl-[85px] dp:mt-[19px] mx-auto">
      <div className="dp:mt-[143px]">
        <h1 className="ph:text-2xl dp:text-6xl leading-normal 
        font-bold whitespace-nowrap">Hey, I’m Nick</h1>
        <p className="ph:text-sm dp:text-xl leading-normal text-custom-gray 
        font-normal pt-1">Frontend developer</p>
        <div className="ph:text-sm mt-[38px] relative dp:mt-[92px] dp:text-lg text-custom-gray 
        font-normal pt-6 ">
          <div className="absolute top-[-6px] left-0 w-6 h-0.5 bg-purple-600"></div>
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
      <Image src={vector} alt="plane img"  objectFit="cover" />
    </button>
      </div>
      <div className='  bg-right bg-no-repeat'>
      <Image
        src={banner}
        width={1080}
        height={689}
        alt="Banner background"
        objectFit="cover"
        objectPosition="right"
        className="z-[-1] "
      />
      </div>
    </section>
  );
}

export default Hero;
