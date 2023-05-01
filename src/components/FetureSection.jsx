import React from "react";

function FetureSection() {
  return (
    <div>
      <div className=" container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className=" flex flex-col space-y-12 md:w-1/2">
          <h2 className=" max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className=" max-w-sm text-center text-gray-800 md:text-left">
            Manage provide all the fuctionality your team needs, without the
            complexity. our software is tailor-made for mordern digital product
            teams.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className=" rounded-l-full bg-orange-200 md:bg-transparent">
              <div className=" flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                  01
                </div>
                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                  Track company wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company wide progress
              </h3>
              <p className=" text-gray-800">
                see how your day-to-day task fit into the wider vision. go from
                tracking progress at the milestone level all the done to the
                smallest details. Never lose sight of the bigger picture again.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className=" rounded-l-full bg-orange-200 md:bg-transparent">
              <div className=" flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                  02
                </div>
                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                  Advance build-in reports
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advance build-in reports
              </h3>
              <p className=" text-gray-800">
                Set internal delivery estimates and track progress toword
                company goals. Our customizable dashboard helps you build out
                the reports you need to keep key stackholder informed.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className=" rounded-l-full bg-orange-200 md:bg-transparent">
              <div className=" flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                  03
                </div>
                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className=" text-gray-800">
                Stop jumping from one service to another to communicate, store
                files, track task and share documents. Menga offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetureSection;
