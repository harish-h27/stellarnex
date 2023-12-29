import React, { useState } from "react";

const ItemList: React.FC = () => {
  return (
    <>
      <div className="text-gray-600  bg-brand-color4 flex justify-center py-14 w-full sm:py-4">
        <div className=" flex w-9/12 items-center sm:items-start sm:flex-col-reverse sm:w-11/12 sm:justify-center">
          <div className="w-7/12 sm:w-full">
            <p className="leading-relaxed text-lg text-gray-900">
              Welcome to StellarNex, your hub for cutting-edge digital
              solutions. At StellarNex, we pride ourselves on being pioneers in
              digital marketing and web/mobile app development. Our journey is
              powered by a relentless pursuit of innovation, crafting
              exceptional experiences for businesses worldwide.
            </p>
            <br />
            <p className="leading-relaxed text-lg text-gray-900">
              Our dedicated team of experts combines creativity with technical
              proficiency to deliver unparalleled solutions. From devising
              dynamic digital marketing strategies to creating captivating web
              designs, seamless mobile applications, and pioneering blockchain
              technologies, we cater to diverse needs with precision and
              finesse.{" "}
            </p>
            <br />
            <p className="leading-relaxed text-lg text-gray-900 w-full">
              Ready to embark on a transformative digital journey? Reach out to
              StellarNex today. Let's collaborate and shape the future of your
              digital success together."
            </p>
            <br />
            <p className="leading-relaxed text-lg text-gray-900 mt-8 w-full">
              You can also email us. our email address:{" "}
              <span className=" font-bold">hi@stellarnex.com</span>
            </p>
            <span className="inline-flex mt-6 justify-center sm:justify-start"></span>
          </div>
          <div className="w-5/12 mt-0 pl-28 sm:w-full sm:pl-0 sm:mt-0">
            <form action="" method="post" id="submit-contact-form">
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 py-4 text-lg text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 py-4 text-lg text-gray-900">
                    Your Phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 py-4 text-lg text-gray-900">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 py-4 text-lg text-gray-900">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="px-8 py-3  rounded-full text-lg text-white bg-black my-4 sm:px-4 sm:py-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
