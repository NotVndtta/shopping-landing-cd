import React from 'react';
import Image from 'next/image';
import banner from '../../images/banner_photo.png';
import vector from '../../images/Vector.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex h-[768px] w-[1280px] pl-[85px] mt-[19px]">
      <div className="mt-[143px]">
        <h1 className="text-6xl leading-normal font-bold whitespace-nowrap">Hey, I’m Nick</h1>
        <p className="text-xl leading-normal text-custom-gray font-normal">Frontend developer</p>
        <div className="relative mt-[92px] text-lg text-custom-gray font-normal pt-6 ">
          <div className="absolute top-[-6px] left-0 w-6 h-0.5 bg-purple-600"></div>
          Help you to create high-quality digital <br/> 
          products that your clients will love and let 
          your business thrive
        </div>
        <button className="max-w-[188px] max-h-[50px] justify-between mt-[60px]  px-[25px] py-[13px]
         text-white text-base font-semibold flex flex-row items-center gap-x-3
         bg-purple-600 rounded-full hover:bg-purple-500 active:bg-purple-600 active:border-purple-200 disabled:bg-gray-200 disabled:text-gray-600 disabled:border-gray-200">
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
