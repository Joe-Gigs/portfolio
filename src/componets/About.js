import React from "react";
import AboutImg from "../assets/kitty.png";

const About = () => {
  return (
    <section className="bg-[#1f2937] text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info">
          
          <h2 className="text-5xl font-bold mb-5 text-[#d1fae5]">
            About Me
          </h2>

            <p className="pb-5 text-[#bbf7d0]">
              I've been a web developer for over 5 years, specializing in creating beautiful and functional websites. I have a passion for coding and love to learn new technologies.
            </p>

            <p className="pb-5 text-[#bbf7d0]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <p className="pb-5 text-[#bbf7d0]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <p className="pb-5 text-[#bbf7d0]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

          </div>

            <div className="about-img">
              <img src={AboutImg} alt="Mochi"
                className="w-[70%] ml-auto rounded-lg shadow-md"
              />
          </div>
          
       </div>
    </section> 
  ) 
}

export default About;