import React, { useEffect, useState } from 'react'
import HeroImg from '../images/hero-banner.jpg'
import Cone1 from '../images/cone1.png'
import Cone2 from '../images/cone2.png'
import Candy1 from '../images/candy1.png'
import Candy2 from '../images/candy2.png'
import Cup1 from '../images/cup1.png'
import BoxIce from '../images/ice1.png'
import FloatIceCream from '../images/float-ice-cream.png'
import FloatIceCream2 from '../images/float-ice-cream2.png'
import AboutAbs from '../images/about-abs.png'
import KachiKeri from '../images/kachi-keri.png'
import IceSandwich from '../images/ice-cream-sandwich.png'
import Mango from '../images/mango.png'
import PanKulfi from '../images/panKulfi.png'
import ConeIco from '../images/coneIco.png'
import RightArrow from '../images/rightArrow.png'
import Cup2 from '../images/cup2.png'

const LandingPage: React.FC = () => {

    // hero slider
    const images = [Cone1, Cone2, Candy1, Candy2, Cup1, BoxIce];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const AboutImg = [
        { src: KachiKeri, alt: "Kachi Keri", delay: "delay-100" },
        { src: IceSandwich, alt: "Ice Sandwich", delay: "delay-300" },
        { src: Mango, alt: "Mango", delay: "delay-500" },
    ];

    return (
        <>

            {/* hero section */}

            <section
                style={{ backgroundImage: `url(${HeroImg})` }}
                className='bg-cover bg-center'
            >
                <div className="px-3 md:px-40 py-10 md:py-16">
                    <div className='relative grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center'>
                        <div>
                            <div className='relative'>
                                <h1 className='text-5xl md:text-[70px] leading-[50px] md:leading-[80px] font-bold'>Grab The Best<br />Ice Cream</h1>
                                <img
                                    src={FloatIceCream}
                                    draggable={false}
                                    className='absolute w-[70px] md:w-[100px] -bottom-5 right-2 md:right-10 select-none'
                                />
                            </div>
                            <h1 className='mt-5 text-2xl font-medium'>"Taste Happiness in Every Scoop!"</h1>
                            <p className='mt-5 text-base text-justify'>Experience the delightful world of ice creams with <span className='italic font-medium'>Shree Goras Ice Cream</span>. From crispy cones to creamy cups and irresistible candies, we craft flavors that melt hearts and create sweet memories.</p>
                            <a
                                href="#"
                                className='mt-5 block w-fit bg-[#F3CB60] hover:bg-white text-black border border-black text-base px-6 py-3 rounded-full transition-all duration-300 ease-in-out'
                            >
                                Explore Flavors
                            </a>
                        </div>
                        <div className='h-[300px] md:h-[400px] mt-10 md:mt-0'>
                            <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        draggable={false}
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className={`absolute select-none w-full h-full object-contain transition-all duration-1000 ease-in-out ${currentIndex === index
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-75'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='absolute -bottom-20 md:-bottom-28 right-0'>
                            <img className='w-[150px] md:w-[200px]' src={FloatIceCream2} draggable={false} />
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className='bg-[#DAEEFF]'>
                <div className="px-3 md:px-40">
                    <div className='relative py-10 md:py-16'>
                        <h1 className='text-center text-3xl md:text-5xl font-bold'>We Care About You!</h1>
                        <div className='absolute top-10 md:top-0 -left-8 md:left-0 z-10'>
                            <img className='w-[100px] md:w-[550px]' src={AboutAbs} />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
                            <div></div>
                            <div>
                                <p className='text-justify'>At <span className='italic font-bold'>Shree Goras Ice Cream</span>, we believe that every bite should be a celebration of taste and joy. With a passion for perfection, we craft a delightful range of ice creams, from crunchy cones and creamy cups to irresistible candy treats. Our unique flavors are made with the finest ingredients, ensuring a rich and unforgettable taste experience.</p>
                            </div>
                        </div>
                        <div className="grid items-center gap-10 md:gap-20 grid-cols-1 md:grid-cols-2 mt-10 md:flex-row">
                            {/* Image Section (First on Mobile) */}
                            <div className="grid grid-cols-3 gap-5 place-items-center md:order-2">
                                {AboutImg.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.src}
                                        alt={image.alt}
                                        className={`w-4/5 h-full object-contain animate-bounce ${image.delay}`}
                                    />
                                ))}
                            </div>

                            {/* Text Section (Second on Mobile) */}
                            <div className="space-y-5 md:order-1">
                                <p className="text-justify">
                                    At <span className="italic font-bold">Shree Goras Ice Cream</span>, we are passionate about creating unforgettable taste experiences. With years of dedication and love for crafting ice cream, we’ve perfected a range of delicious treats. From creamy cups and crunchy cones to delightful candies, every product is made using the finest ingredients, ensuring freshness and rich flavors in every bite.
                                </p>
                                <p className="text-justify">
                                    Our mission is simple: to spread happiness through every scoop. Whether you're enjoying a classic favorite or exploring one of our unique creations, we promise a moment of pure joy. At <span className="italic font-bold">Shree Goras Ice Cream</span>, we believe life is better with a little sweetness — and we’re here to make every occasion special with our delicious range of frozen treats.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* product categories */}

            <section className='bg-[#FECDDC]'>
                <div className="px-3 md:px-40">
                    <div className='relative py-10 md:py-16'>
                        <h1 className='mb-32 text-center text-3xl md:text-5xl font-bold' style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)' }}>Our Product Categories</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                            <div className='bg-[#DAEEFF] rounded-lg group'>
                                <div className='w-full h-[200px] -mt-[100px] grid grid-cols-1 gap-5'>
                                    <img
                                        src={PanKulfi}
                                        className='w-full h-[200px] object-contain transition-all duration-500 ease-in-out group-hover:scale-75'
                                    />
                                </div>
                                <div className='px-10 pb-10 pt-5'>
                                    <h1 className='text-3xl font-bold text-center'>Cones</h1>
                                    <div className='flex items-center justify-center mb-5'>
                                        <img src={ConeIco} className='w-[40px]' />
                                    </div>
                                    <p className='mb-5 text-center'>"Crispy, crunchy, and packed with flavor, our ice cream cones are the perfect treat."</p>
                                    <div className='flex items-center justify-center mt-5'>
                                        <a
                                            className='flex items-center justify-center bg-[#FECDDC] border h-14 w-14 border-black rounded-full'
                                            href="#"
                                        >
                                            <img
                                                className='w-[20px]'
                                                src={RightArrow}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#DAEEFF] rounded-lg group'>
                                <div className='w-full h-[200px] -mt-[100px] grid grid-cols-1 gap-5'>
                                    <img
                                        src={Cup2}
                                        className='w-full h-[200px] object-contain transition-all duration-500 ease-in-out group-hover:scale-75'
                                    />
                                </div>
                                <div className='px-10 pb-10 pt-5'>
                                    <h1 className='text-3xl font-bold text-center'>Ice Cream Cups</h1>
                                    <div className='flex items-center justify-center mb-5'>
                                        <img src={ConeIco} className='w-[40px]' />
                                    </div>
                                    <p className='mb-5 text-center'>"Rich, creamy, and oh-so-delicious, our ice cream cups are a smooth indulgence."</p>
                                    <div className='flex items-center justify-center mt-5'>
                                        <a
                                            className='flex items-center justify-center bg-[#FECDDC] border h-14 w-14 border-black rounded-full'
                                            href="#"
                                        >
                                            <img
                                                className='w-[20px]'
                                                src={RightArrow}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LandingPage
