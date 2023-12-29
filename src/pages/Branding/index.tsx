import React from "react";
import List from "./List";
import Story from "./story";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="flex justify-around sm:mt-0">
        <div className="w-9/12 sm:w-full">
          <div className="text-[200px] sm:text-[60px]">
            <span>Branding </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-brand-color5">
        <Story/>
        <List />
      </div>
    </div>
  );
};

export default Contact;
