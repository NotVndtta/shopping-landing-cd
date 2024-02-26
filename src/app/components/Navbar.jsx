import React from 'react'
import Image from 'next/image';
import logo from '../../images/logo.png'
import menu from '../../images/menu.png'

const Navbar = () => {
    return (
        <section>
            <div className='container mx-auto px-4 border-b border-[#E5E7EB] h-16'>
                <div className='flex justify-between items-center py-4 pl-4 pr-[10px] 
                tb:px-[39px] dp:px-[85px]  '>
                    <div className='header_logo'>
                        <Image src={logo} alt="Logo"></Image>
                    </div>
                    <nav className='ph:hidden  tb:flex dp:flex justify-between text-center
                    text-custom-gray font-semibold text-base 
                    leading-6 gap-x-6 '>
                        <a href="#!" className='text-purple-600'>Main</a>
                        <a href="#!">About</a>
                        <a href="#!">Get in touch</a>
                    </nav>
                    <div className='ph:block tb:hidden md:hidden '>
                        <Image src={menu} alt="Menu"></Image>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar
