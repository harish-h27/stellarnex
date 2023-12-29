import React, { useEffect, useState } from "react";

const StartPage: React.FC = () => {
  const [fontName, setFontName] = useState("");
  const [display, setDisplay] = useState("flex");
  useEffect(() => {
    const fontNames = ["font1", "font2", "font3", "font4", "font5", "font6"]; // Example font names
    document.body.style.overflow = 'hidden';
    const fontChangeInterval = setInterval(() => {
      const randomFontName =
        fontNames[Math.floor(Math.random() * fontNames.length)];
      setFontName(randomFontName);
    }, 200);
    setTimeout(() => {
        document.body.style.overflow = 'visible';
        setDisplay("none");
    }, 5000);
    return () => {
        document.body.style.overflow = 'visible';
        clearInterval(fontChangeInterval)}; // Cleanup interval on unmount
  }, []);
  return (
    <div className="flex justify-center overflow-hidden bg-black absolute h-[100vh] z-50 top-0 left-0 w-full items-center" style={{display: display}}>
      <div className=" w-9/12 items-center">
        <div
          className="text-[230px] font-black text-center overflow-hidden text-white"
          style={{ fontFamily: fontName }}
        >
          StellarNex
        </div>
      </div>
    </div>
  );
};

export default StartPage;
