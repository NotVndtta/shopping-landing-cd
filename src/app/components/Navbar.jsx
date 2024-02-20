import React from 'react'
import Image from 'next/image';
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <section>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center py-4 px-20 border-b border-gray-300 gap-x-96'>
                    <div className='header_logo'>
                        <Image src={logo} alt="Logo"></Image>
                    </div>
                    <nav className='flex justify-between text-center text-custom-gray font-semibold text-base leading-6 gap-x-6'>
                        <a href="#!" className='text-purple-600'>Main</a>
                        <a href="#!">About</a>
                        <a href="#!">Get in touch</a>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Navbar
