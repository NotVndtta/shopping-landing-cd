import Image from 'next/image';
import AvatarImg from '../../images/avatar.png';
import Link from 'next/link';
import vector from '../../images/Vector.svg';
import elipsebg from '../../images/elipsebg.png'

const Profile = () => {
    return (
            <div className="container px-[85px]">
                    <div className="font-bold text-32 leading-normal text-custom-black mb-10">About me</div>
                    <div className="flex justify-between gap-x-60 pr-32 pt-[80px]">
                        <div className="w-412 h-412 text-left relative">
                            <div className="h-full w-full" >
                                <Image src={elipsebg} alt="elipsebg" width={412} height={412} className="z-[-1] absolute" />
                                <Image src={AvatarImg} alt="Avatar" width={364} height={364} className="p-6" />
                            </div>
                        </div>
                        <div className=" w-537 h-228 text-left relative mt-[92px]">
                        <div class="absolute top-[-24px] left-0 w-[25px] h-[3px] bg-purple-600"></div>
                        <div className=' text-custom-gray font-normal '>
                            <span className="font-semibold text-custom-black">Nick Richardson</span> - specialist in Frontend <br />
                            development. Clear code is my passion. <br />
                            Solving issues through negotiations
                        </div>
                            <button className="max-w-[188px] max-h-[50px] justify-between mt-16 px-[25px] py-[13px]
                                text-white text-base font-semibold flex flex-row items-center gap-x-3
                                bg-purple-600 rounded-full hover:bg-purple-500 active:bg-purple-600 active:border-purple-200 disabled:bg-gray-200 disabled:text-gray-600 disabled:border-gray-200">
                                <Link href="#!">
                                    Get in touch
                                </Link>
                                <Image src={vector} alt="plane img"  objectFit="cover" />
                            </button>
                        </div>
                    </div>
            </div>
    );
};

export default Profile;