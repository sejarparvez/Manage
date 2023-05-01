import React from "react";
import Ali from "../img/avatar-ali.png";
import Anisha from "../img/avatar-anisha.png";
import Richrd from "../img/avatar-richard.png";

function Testimonial() {
  return (
    <div>
      <div className=" max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's different about Manage?
        </h2>
        <div className=" flex flex-col mt-24 md:flex-row md:space-x-6 gap-24 md:gap-4">
          <div className=" flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
            <img src={Anisha} className="w-16 -mt-16" alt="" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-gray-700">
              "Manage has supercharged our team's workflow. the ability to
              maintain visibility on learger milestone at all times keeps
              everyone motivated."
            </p>
          </div>
          <div className=" flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
            <img src={Ali} className="w-16 -mt-16" alt="" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-gray-700">
              "We have been able to cancle so many other subcribtions since
              using Manage. There is no more cross chanel confusion and everyone
              is much more focused."
            </p>
          </div>
          <div className=" flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/3">
            <img src={Richrd} className="w-16 -mt-16" alt="" />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-gray-700">
              "Manage has supercharged our team's workflow. the ability to
              maintain visibility on learger milestone at all times keeps
              everyone motivated."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
