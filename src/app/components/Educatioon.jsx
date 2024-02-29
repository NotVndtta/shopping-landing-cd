
import musicIcon from '../../images/music_icon.svg'
import artIcon from '../../images/art_icon.svg'
import photoIcon from '../../images/photo_icon.svg'
import Image from 'next/image';
import Link from 'next/link';
import vector from '../../images/Vector.svg';

const Education = () => {
    return (
        <div className='container ph:py-12 ph:pl-[15px] dp:flex dp:px-[85px] dp:pt-[80px] 
        dp:pb-[100px] dp:w-[1280px]  mx-auto'>
            <div className='dp:flex dp:justify-between dp:gap-[217px]'>
                <div className='ph:w-[246px] dp:w-[353px]'>
                <div className='ph:font-semibold ph:text-xl dp:font-bold dp:text-2xl leading-normal 
                ph:mb-7 dp:mb-11'>
                            Interests
                        </div>
                    <div className='flex justify-between  ph:gap-2 dp:gap-4 '>
                        <Image src={musicIcon} alt='Music'  className='ph:w-11 ph:h-11 dp:w-[60px] 
                        dp:h-[60px]'></Image>
                        <div className='flex-grow ph:text-xs font-normal dp:text-xl leading-normal 
                        text-left'>
                            <span className='font-semibold'>Music</span> <br/>
                            <div className='ph:mt-1 dp:mt-2'>
                                <nobr> Indie rock | Reggae </nobr>
                            </div>
                         </div>
                    </div>
                    <div className='ph:mt-6 dp:mt-11 flex justify-between ph:gap-2 dp:gap-4'>
                            <Image src={artIcon} alt='Art' className='ph:w-11 ph:h-11 dp:w-[60px] 
                            dp:h-[60px]'></Image>
                        <div className='ph:text-xs flex-grow font-normal dp:text-xl leading-normal 
                        text-left '>
                            <span className='font-semibold'> Art </span> <br />
                            <div className='ph:mt-1 dp:mt-2'>
                                <nobr>Edvard Munch | Frida Kahlo </nobr>
                            </div>
                        </div>
                    </div>
                    <div className='ph:mt-6 dp:mt-11 flex justify-between ph:gap-2 dp:gap-4'>
                            <Image src={photoIcon} alt='Photo1' className='ph:w-11 ph:h-11 dp:w-[60px] 
                            dp:h-[60px]'></Image>
                        <div className='flex-grow ph:text-xs font-normal dp:text-xl leading-normal 
                        text-left '>
                            <span className='font-semibold'>Photography</span> <br/>
                            <div className='ph:mt-1 dp:mt-2'>
                                Portraits
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ph:mt-12 dp:mt-0 ph:text-xs ph:mr-[15px] font-normal dp:text-xl 
                leading-normal text-left'>
                    <div className='ph:font-semibold ph:text-xl dp:font-bold dp:text-2xl leading-normal 
                    ph:mb-7 dp:mb-11'>
                        Education & Experience
                    </div>
                    
                    <div className='ph:gap-1 dp:h-[100px] dp:mt-11 border-b text-custom-black
                     border-border-color dp:gap-4 justify-between flex'>
                    <div className="whitespace-nowrap ph:w-[120px] dp:w-[150px]">
                        2008 - Present
                    </div>
                    <div className="flex-grow ph:whitespace-normal dp:whitespace-nowrap ph:w-[100px]">
                        <span className='font-semibold'> Middle Frontend developer </span> <br/>
                        <div className='ph:mt-2 ph:mb-3'> 
                        Ozon 
                        </div>
                    </div>
                    </div>
                    <div className='ph:mt-3 ph:gap-1 dp:h-[100px] dp:mt-11 border-b text-custom-black border-border-color dp:gap-4 justify-between flex'>
                    <div className="whitespace-nowrap ph:w-[120px] dp:w-[150px]">
                        2006 - 2007 
                    </div>
                    <div className="flex-grow ph:whitespace-normal dp:whitespace-nowrap ph:w-[100px]">
                        <span className='font-semibold dp:whitespace-nowrap'> Frontend development courses </span><br />
                        <div className='ph:mt-2 ph:mb-3'>
                            Stepik
                        </div>
                    </div>
                    </div>
                    <div className='ph:mt-3 ph:gap-1 dp:h-[100px] dp:mt-11 border-b text-custom-black border-border-color dp:gap-4 justify-between flex'>
                    <div className="whitespace-nowrap ph:w-[120px] dp:w-[150px]">
                        2000 - 2005 
                    </div>
                    <div className="flex-grow ph:whitespace-normal dp:whitespace-nowrap ph:w-[100px]">
                        <span className='font-semibold dp:whitespace-nowrap '> Frontend developer </span> <br />
                        <div className='ph:mt-2 ph:mb-3'>
                            Saint Petersburg State University 
                        </div>
                    </div>
                    </div>
            </div>
    

            <button className=" ph:max-w-[139px] ph:h-[39px] ph:whitespace-nowrap ph:text-sm 
                px-[13px] py-[9px] ph:gap-x-2 ph:mt-[27px] 
                dp:hidden dp:max-w-[188px] dp:h-[50px] justify-between dp:mt-[60px] dp:px-[25px] dp:py-[13px]
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
    </div>
);
}
 
export default Education;