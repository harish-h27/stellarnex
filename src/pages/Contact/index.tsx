import React from "react";
import List from "./List";

const Branding: React.FC = () => {
  return (
    <div>
      <div className="flex justify-around sm:mt-0">
        <div className="w-9/12 sm:w-full">
          <div className="text-[200px] sm:text-[60px]">
            <span>Contact us </span>
          </div>
        </div>
      </div>
      <div className="">
        <List />
      </div>
    </div>
  );
};

export default Branding;
