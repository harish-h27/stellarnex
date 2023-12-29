import React, { useState } from "react";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import { NavLink } from "react-router-dom";

const OurWork: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(img1);
  const [currentColor, setCurrentColor] = useState("color1");
  return (
    <div
      className={`w-full bg-brand-${currentColor} h-[1250px] py-10 text-[100px] sm:h-[1150px] sm:pb-0`}
    >
      <div className="flex justify-center overflow-hidden">
        <div className="text-8xl text-center flex justify-between sm:text-xl sm:justify-center sm:items-center">
          <i className="fa-solid fa-star-of-life text-[100px] sm:text-[40px]"></i>
          <span className="text-[100px] mx-10 sm:text-[40px]">our work</span>
          <i className="fa-solid fa-star-of-life text-[100px] sm:text-[40px]"></i>
        </div>
      </div>
      <div className="flex justify-center h-full items-center sm:w-full sm:mt-10 ">
        <div className="flex justify-between  w-11/12 h-full items-center sm:flex-col sm:w-full">
          <div className="border-2 rounded-2xl h-[900px] max-h-[900px] w-6/12 overflow-hidden p-14 border-black sm:w-11/12 sm:h-[470px] sm:p-4">
            <p className=" h-10 flex relative top-[-35px] sm:top-[-11px]">
              <i className="fa-regular fa-circle text-sm sm:text-xs"></i>
              <i className="fa-regular fa-circle text-sm ml-4 sm:text-xs"></i>
              <i className="fa-regular fa-circle text-sm ml-4 sm:text-xs"></i>
            </p>
            <img
              src={currentImage}
              alt="img"
              className="w-full h-[800px] max-h-[800px]  relative top-[-32px] rounded  overflow-hidden sm:w-full sm:h-[375px] sm:mt-2"
            ></img>
          </div>
          <div className="text-left w-6/12 ml-8 sm:w-10/12 sm:h-[750px]">
            <NavLink
              to="#"
              className="border-b-2 border-gray-600 pb-4 block"
              onMouseOver={() => {
                setCurrentImage(img1);
                setCurrentColor("color2");
              }}
            >
              <p className="text-xl mt-4">Web Design</p>
              <p className="text-4xl font-semibold mt-4">Sthreekendra.com</p>
            </NavLink>
            <NavLink
              to="#"
              className="border-b-2 border-gray-600 pb-4 block"
              onMouseOver={() => {
                setCurrentImage(img2);
                setCurrentColor("color3");
              }}
            >
              <p className="text-xl mt-4">Mobile / Website Development</p>
              <p className="text-4xl  font-semibold mt-4">AgriBaskets.com</p>
            </NavLink>
            <NavLink
              to="#"
              className="border-b-2 border-gray-800 pb-4 block"
              onMouseOver={() => {
                setCurrentImage(img3);
                setCurrentColor("color1");
              }}
            >
              <p className="text-xl mt-4">Digital Marketing</p>
              <p className="text-4xl  font-semibold mt-4">Kanva Diagnostic</p>
            </NavLink>
            <NavLink
              to="#"
              className="border-b-2 border-gray-600 pb-4 block"
              onMouseOver={() => {
                setCurrentImage(img4);
                setCurrentColor("color4");
              }}
            >
              <p className="text-xl mt-4">Branding / Digital Marketing</p>
              <p className="text-4xl mt-4 font-semibold">Kalparuvksha</p>
            </NavLink>
            <div>
              <button className=" bg-black  font-medium px-8 py-3 text-lg rounded-full text-white mt-4 sm:relative sm:top-[-40px]">
                View all
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default OurWork;
