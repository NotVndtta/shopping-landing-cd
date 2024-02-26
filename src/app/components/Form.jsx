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
        <div className='absolute text-custom-black font-extrabold text-5xl py-[70px] '>
          <form className="bg-white w-[764px] h-[567px] mx-[258px] mt-[70px] rounded-2xl p-12" 
          onSubmit={handleSubmit(onSubmit)}>
            <label className="font-bold text-[32px] leading-normal text-custom-black text-left ">
              Let’s discuss your project <br />
            </label>
            <div className="flex justify-between mt-12">

              <div className="text-base font-semibold text-custom-black">
                <div>
                  Your full name <span className="text-[#E02424]">*</span>
                </div>
                <Image src={profile} 
                width={24}
                height={24}
                alt="placeholder image"  
                objectFit="contain" 
                className="absolute mt-[23px] ml-5"
                />
                <input className={`w-[324px] h-[55px] pl-[54px] mt-2 py-[13px] 
                  border ${errors.fullName ? 'border-[#E02424]' : 'border-[#E5E7EB]'} 
                  hover:border-[#7E3AF2] focus:border-[#7E3AF2] rounded-2xl text-base font-normal`} 
                  placeholder='Name Surname'
                  {...register("fullName", {
                  required: "Please fill this mandatory field",
                  
                })} 
                />
                <div className="font-semibold text-xs text-[#E02424]">
                  {errors?.fullName && <p>{errors?.fullName?.message}</p>}
                </div>
              </div>
              <div className="text-base font-semibold text-custom-black">
                <div>
                  Your email <span className="text-[#E02424]">*</span>
                </div>
              <div className="relative">
              <Image src={!isTyping && !errors.email ? mail : isTyping ? mail2 : mailError} 
              width={24}
              height={24}
                alt="placeholder image"  
                objectFit="contain" 
                className="absolute mt-[23px] ml-5"
                />
              <input className={`w-[324px] h-[55px] pl-[54px] mt-2 py-[13px] 
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
            <label className="mt-4 text-base font-semibold text-custom-black">
            Tell me about your projecty
            <textarea className="w-[667px] h-[122px] pl-5 pt-[13px]   border 
                  border-[#E5E7EB] hover:border-[#7E3AF2] focus:border-[#7E3AF2] rounded-2xl "
              placeholder='Add here a general description of your idea and target aim' 
            {...register("description", {
              required: "Please fill this mandatory field",
            })} />
            </label>
            <button className="max-w-[188px] max-h-[50px] justify-between mt-16 px-[25px] py-[13px]
              text-white text-base font-semibold flex flex-row items-center gap-x-3
              bg-purple-600 rounded-full hover:bg-purple-500 active:bg-purple-600 active:border-purple-200 
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
        width={1280}
        height={708}
        src={gradient}
        alt="Form background"
        objectFit="cover"
        objectPosition=""
        className="z-[-1]"
        />
    </div>
        
  )
}

export default Form
