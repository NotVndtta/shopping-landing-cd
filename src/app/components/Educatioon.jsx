
import musicIcon from '../../images/music_icon.svg'
import artIcon from '../../images/art_icon.svg'
import photoIcon from '../../images/photo_icon.svg'
import Image from 'next/image';
import Link from 'next/link';
import vector from '../../images/Vector.svg';

const Education = () => {
    return (
        <div className='container ph:py-12 ph:pl-[15px] tb:pt-16 tb:px-[39px] 
        dp:flex dp:px-[85px] dp:pt-[80px] 
        dp:pb-[100px] dp:w-[1280px]  mx-auto'>
            <div className='dp:flex dp:justify-between dp:gap-[217px]'>
                <div className='ph:w-[246px] dp:w-[353px]'>
                <div className='ph:font-semibold ph:text-xl tb:font-bold tb:text-2xl leading-normal 
                ph:mb-7 tb:mb-11'>
                            Interests
                        </div>
                    <div className='flex justify-between  ph:gap-2 tb:gap-4 '>
                        <Image src={musicIcon} alt='Music'  className='ph:w-11 ph:h-11 tb:w-[60px] 
                        tb:h-[60px]'></Image>
                        <div className='flex-grow ph:text-xs font-normal tb:text-xl leading-normal 
                        text-left'>
                            <span className='font-semibold'>Music</span> <br/>
                            <div className='ph:mt-1 tb:mt-2'>
                                <nobr> Indie rock | Reggae </nobr>
                            </div>
                         </div>
                    </div>
                    <div className='ph:mt-6 tb:mt-11 flex justify-between ph:gap-2 tb:gap-4'>
                            <Image src={artIcon} alt='Art' className='ph:w-11 ph:h-11 tb:w-[60px] 
                            tb:h-[60px]'></Image>
                        <div className='ph:text-xs flex-grow font-normal tb:text-xl leading-normal 
                        text-left '>
                            <span className='font-semibold'> Art </span> <br />
                            <div className='ph:mt-1 tb:mt-2'>
                                <nobr>Edvard Munch | Frida Kahlo </nobr>
                            </div>
                        </div>
                    </div>
                    <div className='ph:mt-6 tb:mt-11 flex justify-between ph:gap-2 tb:gap-4'>
                            <Image src={photoIcon} alt='Photo1' className='ph:w-11 ph:h-11 tb:w-[60px] 
                            tb:h-[60px]'></Image>
                        <div className='flex-grow ph:text-xs font-normal tb:text-xl leading-normal 
                        text-left '>
                            <span className='font-semibold'>Photography</span> <br/>
                            <div className='ph:mt-1 tb:mt-2'>
                                Portraits
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ph:mt-12 tb:mt-20 dp:mt-0 ph:text-xs ph:mr-[15px] font-normal tb:text-xl 
                leading-normal text-left'>
                    <div className='ph:font-semibold ph:text-xl tb:font-bold tb:text-2xl leading-normal 
                    ph:mb-7 tb:mb-11'>
                        Education & Experience
                    </div>
                    
                    <div className='ph:gap-1 tb:h-[100px] border-b text-custom-black
                     border-border-color tb:gap-4 justify-between flex dp:w-[504px]'>
                    <div className="whitespace-nowrap ph:w-[120px] tb:w-[152px]">
                        2008 - Present
                    </div>
                    <div className="flex-grow ph:whitespace-normal tb:whitespace-nowrap 
                    tb:h-[100px] ph:w-[100px]">
                        <span className='font-semibold'> Middle Frontend developer </span> <br/>
                        <div className='ph:mt-2 ph:mb-3'> 
                        Ozon 
                        </div>
                    </div>
                    </div>
                    <div className='ph:mt-3 ph:gap-1 tb:h-[100px] tb:mt-6 border-b 
                    text-custom-black border-border-color tb:gap-4 justify-between flex'>
                    <div className="whitespace-nowrap ph:w-[120px] tb:w-[152px]">
                        2006 - 2007 
                    </div>
                    <div className="flex-grow ph:whitespace-normal tb:whitespace-nowrap ph:w-[100px]">
                        <span className='font-semibold '> Frontend development courses </span><br />
                        <div className='ph:mt-2 ph:mb-3'>
                            Stepik
                        </div>
                    </div>
                    </div>
                    <div className='ph:mt-3 ph:gap-1 tb:h-[100px] tb:mt-6 border-b 
                    text-custom-black border-border-color tb:gap-4 justify-between flex'>
                    <div className="whitespace-nowrap ph:w-[120px] tb:w-[152px]">
                        2000 - 2005 
                    </div>
                    <div className="flex-grow ph:whitespace-normal tb:whitespace-nowrap ph:w-[100px]">
                        <span className='font-semibold dp:whitespace-nowrap '> Frontend developer </span> <br />
                        <div className='ph:mt-2 ph:mb-3'>
                            Saint Petersburg State University 
                        </div>
                    </div>
                    </div>
            </div>
    

            <button className=" ph:max-w-[139px] ph:h-[39px] ph:whitespace-nowrap ph:text-sm 
                px-[13px] py-[9px] ph:gap-x-2 ph:mt-[27px] 
                tb:hidden dp:max-w-[188px] dp:h-[50px] justify-between dp:mt-[60px] dp:px-[25px] dp:py-[13px]
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