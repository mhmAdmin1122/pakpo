import React from 'react';
import Slider from "react-slick";
import data from '../json/hero.json'
import Image from 'next/image';

const HeroBaner = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className='hero-banner-container relative bg-black'>
            <Slider {...settings} className=''>
                {data.map((index)=>(
                    <div className="bannerBox" key={index.id}>
                        <Image src={index.banerImg} width={440} height={450} alt='banner-pic'/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HeroBaner
