import React from "react";
import Illustrators from "../img/illustration-intro.svg";

function HeroSection() {
  return (
    <div>
      <div className=" container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className=" max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring Everyone Together To Build Better Products
          </h1>
          <p className=" max-w-sm text-center text-gray-700 md:text-left">
            Manage makes is simple for software teams to plan day to day task
            while keeping the learger team goals in view
          </p>
          <div className=" flex justify-center md:justify-start">
            <a
              href="3a"
              className=" text-white bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-800"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className=" md:w-1/2">
          <img src={Illustrators} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
