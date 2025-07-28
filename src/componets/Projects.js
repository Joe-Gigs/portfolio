import React from "react";
import soundTrackData from "./soundtrack_data";
import webProjectsData from "./web_projects_data";

const Projects = () => {
  return (
    <main className="px-5 max-w-[1000px] mx-auto flex-1">
      {/* Soundtrack Work Section */}
      <div className="pb-8 pt-20">
        <p className="py-3 text-3xl font-bold text-[#10b981]">Soundtrack work</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {soundTrackData.map((item, i) => (
          <div key={i} className="relative bg-black shadow-lg rounded-xl overflow-hidden group h-80">
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/70">
              <h3 className="text-2xl font-bold text-[#10b981]">{item.name}</h3>
              <p className="text-lg py-3 text-[#10b981]">{item.desc}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 underline">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Web Work Section */}
      <div className="pb-8 pt-20">
        <p className="py-3 text-3xl font-bold text-[#10b981]">Web work</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {webProjectsData.map((item, i) => (
          <div key={i} className="relative bg-black shadow-lg rounded-xl overflow-hidden group h-80">
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/70">
              <h3 className="text-2xl font-bold text-[#10b981]">{item.name}</h3>
              <p className="text-lg py-3 text-[#10b981]">{item.desc}</p>
              {/* <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 underline">
                Visit
              </a> */}
            </div>
          </div>
        ))}
      </div>

      
    </main>
  );
};

export default Projects;