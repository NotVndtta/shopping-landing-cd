import React from 'react';
import Image from 'next/image';
import banner from '../../images/banner_photo.png';
import vector from '../../images/Vector.svg';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative inline-flex  h-[768px] w-[1280px] pl-[85px] mt-[19px]">
      <div className="text- space-y-4 mt-[143px]">
        <h1 className="text-6xl leading-normal font-bold ">Hey, I’m Nick</h1>
        <p className="text-xl leading-normal text-gray-600">Frontend developer</p>
        <div className="relative mt-24 text-lg text-gray-600">
          <div className="absolute top-[-6px] left-0 w-6 h-0.5 bg-purple-600"></div>
          Help you to create high-quality digital products that your clients will love and let your business thrive
        </div>
        <button className="max-w-[188px] max-h-[50px] justify-between mt-24 mb-40 px-[25px] py-[13px]
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
