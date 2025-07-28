import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/mochi.jpg";

const Hero = () => {
  return (
    <section className="bg-[#1f2937] px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between gap-8">
        <div className="hero-info pb-5 md:pb-0">
          <h2 className="text-4xl lg:text-6xl font-semibold text-[#d1fae5]">
            Web Developer, Composer, Sound Designer
          </h2>
          <br />
          <button className="bg-[#047857] hover:bg-[#065f46] border-2 border-[#10b981] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
            <Link to="/projects">See my work</Link>
          </button>
        </div>

        <div className="hero-img flex justify-center">
          <img
            src={HeroImg}
            alt="Mochi"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;