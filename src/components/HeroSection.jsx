import React from "react";
import imgHeroBelakang from '../assets/img/imgherobelakang.png'
import imgHeroTengah from '../assets/img/imgherotengah.png'
import imgHeroDepan from '../assets/img/imgherodepan.png'

const HeroSection = function(){
    return (
        <section className="py-[5rem] lg:flex gap-[4rem] justify-between relative">
            <div className="headline font-['poppins'] [&>button]:font-semibold order-0 mb-[2.5rem] lg:mb-0">
                <h1 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3.4rem] max-w-[20ch]">Elevate Your Career to the Next Level</h1>
                <p className="text-white/[.6] my-[1.5rem] sm:my-[2rem] max-w-[34.5rem] leading-[2.5rem]">Get expert-led instruction from experienced professionals in Industry and gain valuable skills and knowledge that can be applied to your career or personal life.</p>
                <button className="bg-[#FF5C00] py-[.2rem] px-[.75rem] sm:py-[.75rem] sm:px-[1.75rem] rounded-xl sm:rounded-[1.5rem] mr-[2rem] hover:bg-[#D94E00]">Find a Course</button>
                <button className="text-[#FF5C00] py-[.2rem] hover:text-[#D94E00]">Learn More</button>
            </div>
            <div className="lg:relative [&>img]:w-full flex gap-[1rem] lg:block">
                <img src={imgHeroBelakang} alt="herotengah" />
                <img className="lg:absolute -top-5 right-8" src={imgHeroTengah} alt="herotengah" />
                <img className="lg:absolute -top-9 right-16" src={imgHeroDepan} alt="herotengah" />
            </div>
        </section>    
    )
}

export default HeroSection