import React from 'react'
import Logo from '../images/logo.png'

const Footer: React.FC = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-[#F3CB60]'>
            <div className="px-3 lg:px-20 2xl:px-40">
                <div className='py-10 md:py-16'>
                    <div className='grid grid-cols-1 md:grid-cols-5 items-center'>
                        <div className='flex justify-center'>
                            <img src={Logo} draggable={false} className='w-[200px] select-none' />
                        </div>
                        <div className='flex justify-center py-5 md:py-0'>
                            <div className='h-[1px] w-full md:h-[150px] md:w-[1px] bg-black'></div>
                        </div>
                        <div className='flex justify-center'>
                            <ul className='space-y-2 text-base md:text-lg text-center'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Flavors</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                        <div className='flex justify-center py-5 md:py-0'>
                            <div className='h-[1px] w-full md:h-[150px] md:w-[1px] bg-black'></div>
                        </div>
                        <div className='flex justify-center'>
                            <ul className='space-y-2 text-base md:text-lg'>
                                <li className='flex items-center gap-5 mb-5'>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className='w-[25px] focus:outline-none'
                                    >
                                        <path
                                            d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"
                                            fill="black"
                                        />
                                    </svg>
                                    <div>
                                        <a href="mailto:#">
                                            shreegorasicecream@gmail.com
                                        </a>
                                    </div>
                                </li>
                                <li className='flex items-center gap-5 mb-5'>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className='w-[25px] focus:outline-none'
                                    >
                                        <path
                                            d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"
                                            fill="black"
                                        />
                                    </svg>
                                    <div>
                                        <a href="tel:#">
                                            12345 67890
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-black py-5 px-3 text-white text-center'>
                &copy; {currentYear}, All rights reserved, <span className='text-[#F3CB60]'>shree goras ice cream</span>, Developed by <span className='text-[#F3CB60]'>yash ubhada</span>
            </div>
        </footer>
    )
}

export default Footer
