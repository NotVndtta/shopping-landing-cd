import Image from 'next/image';
import AvatarImg from '../../images/avatar.png';
import Link from 'next/link';
import vector from '../../images/Vector.svg';
import elipsebg from '../../images/elipsebg.png'

const Profile = () => {
    return (
            <div className="container ph:mt-12 tb:px-[39px] dp:pl-[85px] tb:mt-0 dp:mt-[110px] ">
                    <div className="ph:text-xl ph:mx-[15px] ph:font-semibold tb:mx-0 
                    tb:font-bold tb:text-32 leading-normal 
                        text-custom-black  ">About me
                    </div>
                    <div className="ph:pt-9 ph:mx-[15px] tb:flex tb:justify-between dp:gap-x-[44px] tb:pt-20">
                            <div className="ph:relative ph:flex ph:justify-center ph:items-center 
                            tb:w-[290px]  
                            dp:mt-9 dp:flex dp:relative dp:w-[412px]" >
                                <Image src={elipsebg} alt="elipsebg" 
                                 
                                className="z-[-1] absolute ph:w-[290px] ph:h-[290px] dp:w-[412px] dp:h-[412px] " />
                                <Image src={AvatarImg} alt="Avatar" 
                                className="ph:w-64 ph:h-64 dp:w-[364px] dp:h-[364px]" />
                            </div>
                        
                        <div className="tb:mr-[-44px] text-left relative dp:mt-[125px] tb:mt-[26px]">
                            <div className="absolute top-[-24px] left-0 w-[25px] h-[3px] bg-purple-600"></div>
                            <div className='ph:text-sm ph:mt-12 text-custom-gray font-normal 
                            tb:text-xl leading-normal tb:mt-0
                            tb:w-[380px]  dp:w-[537px] dp:mr-[50px]'>
                                <span className="font-semibold text-custom-black ">
                                Nick Richardson</span> - specialist in Frontend 
                                development. Clear code is my passion.
                                Solving issues through negotiations
                            </div>
                        <button className="ph:hidden dp:flex max-w-[188px] max-h-[50px] justify-between 
                            mt-16 px-[25px] py-[13px]
                            text-white text-base font-semibold flex flex-row items-center gap-x-3
                            bg-purple-600 rounded-full hover:bg-purple-500 active:bg-purple-600
                            active:border-purple-200
                             disabled:bg-gray-200 disabled:text-gray-600 disabled:border-gray-200">
                            <Link href="#!">
                                Get in touch
                            </Link>
                            <Image src={vector} alt="plane img"  fit="cover" />
                            </button>
                        </div>
                    </div>
            </div>
    );
};

export default Profile;