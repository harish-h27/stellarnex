import React, { useState } from "react";
import ProfileImg from "../../assets/about/profile.png";


const ItemList: React.FC = () => {
  
  return (
    <>
      <div className=" flex justify-around pt-28 bg-brand-color1">
        <div className="w-9/12">
          <div className="w-4/6">
            <div className="w-9/12">
              <button className="px-16 py-5 rounded-full text-lg text-black my-5 border-2 border-black">
                Our team
              </button>{" "}
            </div>
            <p className=" font-medium  text-2xl">
              "Since our establishment in 2022, StellarNex has rapidly evolved
              from a fledgling initiative to a thriving hub of diverse talents
              and expertise. Our journey has been propelled by a collective of
              ingenious minds and varied skill sets. From adept UX designers and
              savvy marketing specialists to adept copywriters and proficient
              website developers, StellarNex now boasts a team of experts
              dedicated to crafting innovative digital solutions."
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around pb-28 bg-brand-color1 pt-10">

      </div>
    </>
  );
};

export default ItemList;
