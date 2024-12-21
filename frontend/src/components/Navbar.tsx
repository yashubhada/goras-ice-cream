import React, { useState } from 'react'
import Logo from '../images/logo.png'

const Navbar: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* desktop screen navbar */}
            <nav className='hidden md:flex items-center justify-center'>
                <div className='bg-white h-[66px] flex items-center px-12 border border-black rounded-full'>
                    <ul className='flex items-center gap-7'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li>
                            <img src={Logo} className='w-[170px]' />
                        </li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            {/* small screen navbar */}
            <nav className="md:hidden relative">
                <div className="z-50 flex items-center justify-between px-3 py-5 relative">
                    <div>
                        <img src={Logo} className="w-[100px]" alt="Logo" />
                    </div>
                    <div
                        onClick={toggleMenu}
                    >
                        {
                            isMenuOpen
                                ?
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-[25px] focus:outline-none"
                                >
                                    <path
                                        d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                                        fill="black"
                                    />
                                </svg>
                                :
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-[25px] focus:outline-none"
                                >
                                    <path
                                        d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
                                        fill="black"
                                    />
                                </svg>
                        }
                    </div>
                </div>
                <div className={`z-10 absolute ${isMenuOpen ? 'h-[235px]' : 'h-0'} transition-all duration-500 ease-in-out transform flex items-end justify-center bg-[#FFFFFF] text-black top-0 left-0 w-full border-b border-black rounded`}>
                    <ul className="space-y-2 text-center pb-3">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
