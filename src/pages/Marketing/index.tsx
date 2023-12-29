import React from "react";
import List from "./List";
import Story from "./story";

const Branding: React.FC = () => {
  return (
    <div>
      <div className="flex justify-around sm:mt-0">
        <div className="w-9/12 sm:w-full">
          <div className="text-[200px] sm:text-[60px]">
            <span>Digital </span>
          </div>
          <div className="text-[200px] mt-[-100px] sm:text-[60px] sm:mt-[-15px]">
            <span>marketing</span>
          </div>
        </div>
      </div>
      <div className="bg-brand-color3">
        <Story/>
        <List />
      </div>
    </div>
  );
};

export default Branding;
