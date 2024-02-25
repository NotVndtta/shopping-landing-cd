
import musicIcon from '../../images/music_icon.svg'
import artIcon from '../../images/art_icon.svg'
import photoIcon from '../../images/photo_icon.svg'
import Image from 'next/image';
import Link from 'next/link';

const Education = () => {
    return (<section>
        <div className='container px-[85px] pt-[80px] pb-[100px] mx-auto'>
            <div className='flex justify-between gap-[217px]'>
                <div className='w-[353px]'>
                <div className='font-bold text-2xl leading-normal mb-[44px]'>
                            Interests
                        </div>
                    <div className='flex justify-between gap-4 mr-[83px]'>
                        <Image src={musicIcon} alt='Music' width={"60px"} height={"60px"}></Image>
                        <div className='font-normal text-xl leading-normal text-left'>
                            <span className='font-semibold'>Music</span> <br/>
                           <nobr> Indie rock | Reggae </nobr>
                         </div>
                    </div>
                    <div className='mt-[44px] flex justify-between gap-4'>
                            <Image src={artIcon} alt='Art' width={"60px"} height={"60px"}></Image>
                        <div className='font-normal text-xl leading-normal text-left'>
                            <span className='font-semibold'> Art </span> <br />
                            <nobr>Edvard Munch | Frida Kahlo </nobr>
                        </div>
                    </div>
                    <div className='mt-[44px] flex justify-between gap-4 mr-[141px]'>
                            <Image src={photoIcon} alt='Photo1' width={"60px"} height={"60px"}></Image>
                        <div className='font-normal text-xl leading-normal text-left'>
                            <span className='font-semibold'>Photography</span> <br/>
                            Portraits
                        </div>
                    </div>
                </div>
                <div className='font-normal text-xl leading-normal text-left'>
                    <div className='font-bold text-2xl leading-normal mb-[44px]'>
                        Education & Experience
                    </div>
                    
                    <div className='h-[100px] mt-[44px] border-b text-custom-black border-border-color gap-4 justify-between flex'>
                    <div className="w-[150px]">
                        2008 - Present
                    </div>
                    <div className="flex-grow">
                        <span className='font-semibold'> <nobr>Middle Frontend developer </nobr></span> <br/>
                        Ozon
                    </div>
                    </div>
                    <div className='h-[100px] pt-6 border-b border-border-color gap-4 justify-between flex'>
                    <div className="w-[150px]">
                        2006 - 2007 
                    </div>
                    <div className="flex-grow">
                        <span className='font-semibold'> <nobr> Frontend development courses </nobr></span><br />
                        Stepik
                    </div>
                    </div>
                    <div className='h-[100px] pt-6 border-b border-border-color gap-4 justify-between flex'>
                    <div className="w-[150px]">
                        2000 - 2005 
                    </div>
                    <div className="flex-grow">
                        <span className='font-semibold'> <nobr>Frontend developer </nobr></span> <br />
                        <nobr>Saint Petersburg State University </nobr>
                    </div>
                    </div>
            </div>
        </div>
    </div>
    </section>);
}
 
export default Education;