'use client'
import { useForm } from "react-hook-form"
import {useState, useEffect} from 'react'
import React from 'react'
import gradient from '../../images/gradient.png'
import Image from 'next/image';
import Link from 'next/link';
import vector from '../../images/Vector.svg';
import inactive from '../../images/inactive.png';
import mail from '../../images/mail.png'
import profile from '../../images/profile.png'
import mailError from '../../images/mail3.png'
import mail2 from '../../images/mail1.png'


const Form = () => {
  const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
    mode: "onBlur"
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    setIsTyping(event.target.value !== '');
  };
  return (  
    <div className='container mx-auto'>
        <div className='absolute text-custom-black ph:font-semibold ph:px-[10px] ph:py-16 dp:font-bold dp:text-5xl dp:py-[70px] '>
          <form className=" ph:w-[300px]  ph:px-[5px] ph:text-center dp:text-left  ph:py-6 bg-white dp:w-[764px] dp:h-[567px] dp:mx-[258px]  rounded-2xl dp:p-12" 
          onSubmit={handleSubmit(onSubmit)}>
            <label className="ph:text-semibold ph:text-xl  dp:font-bold dp:text-[32px] leading-normal text-custom-black dp:text-left ">
              Let’s discuss your project <br />
            </label>
            <div className="ph:px-4">
            <div className="dp:flex dp:justify-between dp:gap-5 ph:mt-9 dp:mt-12">

              <div className="ph:text-xs dp:text-base ph:text-left font-semibold text-custom-black">
                <div>
                  Your full name <span className="text-[#E02424]">*</span>
                </div>
                <Image src={profile} 
                width={24}
                height={24}
                alt="placeholder image"  
                objectFit="contain" 
                className="absolute ml-5 ph:mt-[13px] dp:mt-[23px] "
                />
                <input className={`ph:w-[258px] ph:h-[50px] ph:text-xs dp:w-[324px] dp:h-[55px] pl-[54px] dp:mt-2 dp:py-[13px] 
                  border ${errors.fullName ? 'border-[#E02424]' : 'border-[#E5E7EB]'} 
                  hover:border-[#7E3AF2] focus:border-[#7E3AF2] rounded-2xl dp:text-base font-normal`} 
                  placeholder='Name Surname'
                  {...register("fullName", {
                  required: "Please fill this mandatory field",
                  
                })} 
                />
                <div className="font-semibold text-xs text-[#E02424]">
                  {errors?.fullName && <p>{errors?.fullName?.message}</p>}
                </div>
              </div>
              <div className="ph:text-xs ph:text-left dp:text-base font-semibold text-custom-black">
                <div>
                  Your email <span className="text-[#E02424]">*</span>
                </div>
              <div className="relative">
              <Image src={!isTyping && !errors.email ? mail : isTyping ? mail2 : mailError} 
              width={24}
              height={24}
                alt="placeholder image"  
                objectFit="contain" 
                className="absolute ml-5 ph:mt-[13px] dp:mt-[23px]"
                />
              <input className={`ph:w-[258px] ph:h-[50px] ph:text-xs dp:w-[324px] dp:h-[55px] pl-[54px] 
                dp:mt-2 dp:py-[13px] 
                border ${errors.email? 'border-[#E02424]' : 'border-[#E5E7EB]'} 
                hover:border-[#7E3AF2] focus:border-[#7E3AF2] rounded-2xl text-base font-normal`}
                placeholder='name@example.com'
                {...register("email", {
                  required: "Please fill this mandatory field",
                })}
                onChange={handleInputChange}
                 />
                </div>
                <div className="font-semibold text-xs text-[#E02424]">
                  {errors?.fullName && <p>{errors?.email?.message}</p>}
                </div>
              </div>
            </div>
            <div className="mt-4 ph:text-xs ph:text-left dp:text-base font-semibold text-custom-black">
            Tell me about your projecty
            <textarea className="ph:w-[258px] ph:h-[122px] ph:px-5 dp:w-[667px] dp:h-[122px] dp:pl-5 pt-[13px]  border 
                  border-[#E5E7EB] hover:border-[#7E3AF2] focus:border-[#7E3AF2] font-normal ph:text-sm 
                  dp:text-base rounded-2xl "
              placeholder='Add here a general description of your idea and target aim' 
            {...register("description", {
              required: "Please fill this mandatory field",
            })} />
            </div>
          </div>
            <button className="ph:flex ph:ml-[21px] ph:mt-9 dp:ml-4 max-w-[188px] max-h-[50px] justify-between 
              dp:mt-12 px-[25px] py-[13px]
              text-white text-base font-semibold flex flex-row items-center gap-x-3 
              bg-purple-600 rounded-full hover:bg-purple-500 active:bg-purple-600 
              active:border-purple-200 
              disabled:bg-gray-200 disabled:text-gray-600 disabled:border-gray-200"
              disabled={!isValid}>
              <Link href="#!">
                Submit
              </Link>
              <Image src={isValid ? vector: inactive} alt="plane img"  objectFit="cover" />
                                
            </button>
          </form>
        </div>
        <Image
        
        src={gradient}
        alt="Form background"
        objectFit="cover"
        objectPosition=""
        className="ph:w-[320px] ph:h-[753px] dp:w-[1280px] dp:h-[708px] z-[-1]"
        />
    </div>
        
  )
}

export default Form
