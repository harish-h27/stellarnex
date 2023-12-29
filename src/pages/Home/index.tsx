import React, { useEffect, useRef, useState } from "react";
import WhatWeDo from "./whatWeDo";
import OurWork from "./ourWork";
import StartPage from "./startPage";

const waitNSeconds = async (seconds: number): Promise<void> => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 100);
  });
};

const Home: React.FC = () => {
  const [fontName, setFontName] = useState("");
  const fontRef = useRef<HTMLDivElement>(null);
  const fontNames = ["font1", "font2", "font3", "font4", "font5", "font6"]; // Example font names

  useEffect(() => {
    const fontChangeInterval = setInterval(() => {
      const randomFontName =
        fontNames[Math.floor(Math.random() * fontNames.length)];
      const element = fontRef.current;

      if (element) {
        element.style.transition = "opacity 0.5s ease-out"; // Smooth transition
        // element.style.opacity = "0"; // Fade out
        setTimeout(() => {
          // setFontName(randomFontName);
          // element.style.opacity = "1"; // Fade in with new font
        }, 500); // Wait for the transition to complete before changing the font
      }
    }, 2000); // Change font every 2 seconds (2000 milliseconds)

    return () => clearInterval(fontChangeInterval); // Cleanup interval on unmount
  }, [fontNames]);

  return (
    <div>
      {/* <StartPage /> */}
      <div className="flex justify-center overflow-hidden sm:mt-20">
        <div className="w-9/12 items-center sm:w-full">
          <div
            ref={fontRef}
            className="text-[200px] font-black text-center overflow-hidden relative h-fit sm:text-[70px]"
            style={{
              fontFamily: fontName,
              transition: "opacity 0.5s ease-out",
            }}
          >
            StellarNex
          </div>
          <div className="w-full rounded-full flex justify-between  items-center h-[600px] sm:flex-col sm:mt-20 sm:h-[400px] sm:justify-between">
            <div className="w-8/12 sm:w-full sm:text-center ">
              <div id="light" className=" w-[2500px] rotate-[160deg] relative overflow-hidden h-[650px] top-[-300px] left-[-400px] rounded-xl sm:w-[500px] sm:h-[300px] sm:left-[0px] sm:top-[-50px]">
                <div id="lineh1"></div>
                <div id="lineh2"></div>
                <div id="lineh3"></div>
                <div id="lineh4"></div>
                <div id="lineh5"></div>
                <div id="lineh6"></div>
                <div id="lineh7"></div>
                <div id="lineh8"></div>
                <div id="lineh9"></div>
                <div id="lineh10"></div>
                <div id="lineh11"></div>
                <div id="lineh12"></div>
              </div>
            </div>
            <div className="w-4/12 sm:w-full sm:text-center z-40 relative sm:top-[-100px]">
              <h2 className="font-semibold">What we do?</h2>
              <p className="text-baseline mt-4">
                We design and develop user centered digital products, ecommerce
                and brand communication solutions.
              </p>
              <button className=" bg-brand-color1  font-medium px-8 py-3 text-lg rounded-full text-black mt-4">
                Get to work
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <OurWork />
    </div>
  );
};

export default Home;
