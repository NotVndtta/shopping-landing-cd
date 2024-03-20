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
        <div className='absolute text-custom-black ph:font-semibold ph:px-[10px] ph:py-16 
        tb:font-bold tb:text-5xl tb:py-[70px] '>
          <form className=" ph:w-[300px]  ph:px-[5px] ph:text-center 
          tb:w-[712px] tb:mx-[40px] tb:text-left  ph:py-6 bg-white 
          dp:w-[764px] dp:h-[567px] dp:mx-[258px] tb:px-8 tb:py-12 rounded-2xl dp:p-12" 
          onSubmit={handleSubmit(onSubmit)}>
            <label className="ph:text-semibold ph:text-xl tb:font-bold tb:text-[32px] leading-normal text-custom-black tb:text-left ">
              Let’s discuss your project <br />
            </label>
            <div className="ph:px-4 tb:px-0">
            <div className="tb:flex tb:justify-between tb:gap-6 dp:gap-5 ph:mt-9 tb:mt-12">

              <div className="ph:text-xs tb:text-base ph:text-left font-semibold text-custom-black">
                <div>
                  Your full name <span className="text-[#E02424]">*</span>
                </div>
                <Image src={profile} 
                width={24}
                height={24}
                alt="placeholder image"  
                fit="contain" 
                className="absolute ml-5 ph:mt-[13px] tb:mt-[23px] "
                />
                <input className={`ph:w-[258px] ph:h-[50px] ph:text-xs 
                tb:w-[312px] dp:w-[324px] tb:h-[55px] pl-[54px] tb:mt-2 dp:py-[13px] 
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
              <div className="ph:text-xs ph:text-left tb:text-base font-semibold text-custom-black">
                <div>
                  Your email <span className="text-[#E02424]">*</span>
                </div>
              <div className="relative">
              <Image src={!isTyping && !errors.email ? mail : isTyping ? mail2 : mailError} 
              width={24}
              height={24}
                alt="placeholder image"  
                fit="contain" 
                className="absolute ml-5 ph:mt-[13px]  tb:mt-[23px]"
                />
              <input className={`ph:w-[258px] ph:h-[50px] ph:text-xs 
                dp:w-[324px] tb:h-[55px] pl-[54px] tb:mt-2 dp:py-[13px]
                tb:w-[312px]  
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
            <div className="mt-3 ph:text-xs ph:text-left tb:text-base font-semibold text-custom-black">
            Tell me about your projecty
            <textarea className="ph:w-[258px] ph:h-[122px] ph:px-5 
                  tb:w-[648px] tb:h-[162px] tb:pl-5
                  dp:w-[667px] dp:h-[122px] pt-[13px]  border 
                  border-[#E5E7EB] hover:border-[#7E3AF2] focus:border-[#7E3AF2] 
                  font-normal ph:text-sm 
                  tb:text-base rounded-2xl "
              placeholder='Add here a general description of your idea and target aim' 
            {...register("description", {
              required: "Please fill this mandatory field",
            })} />
            </div>
          </div>
            <button className="ph:flex ph:ml-[21px] tb:ml-0 ph:mt-9 dp:ml-4 max-w-[188px] max-h-[50px] 
            justify-between 
              dp:mt-12 px-[25px] py-[13px]
              text-white text-base font-semibold flex flex-row items-center gap-x-3 
              bg-purple-600 rounded-full hover:bg-purple-500 active:bg-purple-600 
              active:border-purple-200 
              disabled:bg-gray-200 disabled:text-gray-600 disabled:border-gray-200"
              disabled={!isValid}>
              <Link href="#!">
                Submit
              </Link>
              <Image src={isValid ? vector: inactive} alt="plane img"  fit="cover" />
                                
            </button>
          </form>
        </div>
        <Image
        
        src={gradient}
        alt="Form background"
        fit="cover"
        objectPosition=""
        className="ph:w-[320px] ph:h-[753px] tb:w-[792px] tb:h-[708px] dp:w-[1280px] 
        dp:h-[708px] z-[-1]"
        />
    </div>
        
  )
}

export default Form
