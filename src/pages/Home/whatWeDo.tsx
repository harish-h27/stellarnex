import React, { useState } from "react";

const WhatWeDo: React.FC = () => {
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);
  const [item5, setItem5] = useState(false);
  return (
    <div className="w-full flex justify-start overflow-x-auto homecontainer z-10 h-[600px] items-center sm:h-[350px]">
      <div className="flex items-start z-10 ">
        <div
          onMouseOver={() => setItem1(true)}
          onMouseOut={() => setItem1(false)}
          className="flex flex-col justify-between bg-brand-color2 rounded-3xl w-[480px] h-[480px] mr-10 transition ease-in-out delay-150  duration-300 hover:scale-105 sm:h-[250px] sm:w-[250px]"
        >
          <p className="text-6xl ml-4 mt-4 sm:text-3xl">Web Development</p>

          <div
            className={`flex justify-between items-center ml-4 mb-4 display: ${
              item1 ? "flex" : "hidden"
            }`}
          >
            <button className="w-2/12">
              <i
                className="fa-solid fa-arrow-up-long bg-black text-white p-12 rounded-full sm:p-4"
                style={{ transform: "rotate(35deg)" }}
              ></i>
            </button>
            <p className="w-9/12 sm:text-sm">
              Craft powerful websites with responsive designs and cutting-edge
              technology. Elevate your online presence with premium websites,
              optimized for all devices.
            </p>
          </div>
        </div>

        <div
          onMouseOver={() => setItem2(true)}
          onMouseOut={() => setItem2(false)}
          className="flex flex-col justify-between bg-brand-color1 rounded-3xl w-[480px] h-[480px] mr-10 transition ease-in-out delay-150  duration-300 hover:scale-105 sm:h-[250px] sm:w-[250px]"
        >
          <p className=" text-6xl ml-4 mt-4 sm:text-3xl">Blockchain Apps</p>

          <div
            className={`flex justify-between items-center ml-4 mb-4 display: ${
              item2 ? "flex" : "hidden"
            }`}
          >
            <button className="w-2/12">
              <i
                className="fa-solid fa-arrow-up-long bg-black text-white p-12 rounded-full sm:p-4"
                style={{ transform: "rotate(35deg)" }}
              ></i>
            </button>
            <p className="w-9/12 sm:text-sm">
              Delve into blockchain development and build innovative
              decentralized applications. Leverage the power of blockchain
              technology to transform your business.
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setItem3(true)}
          onMouseOut={() => setItem3(false)}
          className="flex flex-col justify-between bg-brand-color5 rounded-3xl w-[480px] h-[480px] mr-10 transition ease-in-out delay-150  duration-300 hover:scale-105 sm:h-[250px] sm:w-[250px]"
        >
          <p className=" text-6xl ml-4 mt-4 sm:text-3xl">Digital Marketing</p>

          <div
            className={`flex justify-between items-center ml-4 mb-4 display: ${
              item3 ? "flex" : "hidden"
            }`}
          >
            <button className="w-2/12">
              <i
                className="fa-solid fa-arrow-up-long bg-black text-white p-12 rounded-full sm:p-4"
                style={{ transform: "rotate(35deg)" }}
              ></i>
            </button>
            <p className="w-9/12 sm:text-sm">
              Enhance your brand's online visibility with strategic digital
              marketing solutions. Target your audience effectively and boost
              engagement across various platforms.
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setItem4(true)}
          onMouseOut={() => setItem4(false)}
          className="flex flex-col justify-between bg-brand-color3 rounded-3xl w-[480px] h-[480px] mr-10 transition ease-in-out delay-150  duration-300 hover:scale-105 sm:h-[250px] sm:w-[250px]"
        >
          <p className=" text-6xl ml-4 mt-4 sm:text-3xl">Social Media Ads</p>
          <div
            className={`flex justify-between items-center ml-4 mb-4 display: ${
              item4 ? "flex" : "hidden"
            }`}
          >
            <button className="w-2/12">
              <i
                className="fa-solid fa-arrow-up-long bg-black text-white p-12 rounded-full sm:p-4"
                style={{ transform: "rotate(35deg)" }}
              ></i>
            </button>
            <p className="w-9/12 sm:text-sm">
              Maximize your reach and engagement through targeted social media
              advertising campaigns. Harness the potential of social platforms
              to grow your business.
            </p>
          </div>
        </div>
        <div
          onMouseOver={() => setItem5(true)}
          onMouseOut={() => setItem5(false)}
          className="flex flex-col justify-between bg-brand-color4 w-[480px] rounded-3xl h-[480px] mr-10 animation hover:scale-105 sm:h-[250px] sm:w-[250px]"
        >
          <p className="text-6xl ml-4 mt-4 sm:text-3xl">Content Writing</p>

          <div
            className={`flex justify-between items-center ml-5 mb-4 display: ${
              item5 ? "flex" : "hidden"
            }`}
          >
            <button className="w-2/12">
              <i
                className="fa-solid fa-arrow-up-long bg-black text-white p-12 rounded-full sm:p-4"
                style={{ transform: "rotate(35deg)" }}
              ></i>
            </button>
            <p className="w-9/12 sm:text-sm">
              Develop captivating content strategies for your online platforms.
              Create compelling and engaging content to connect with your
              audience and drive conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
