import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center mt-10 sm:mt-5">
        <div className="w-9/12 sm:w-11/12">
          <h1 className="text-6xl font-semi my-5 sm:text-4xl sm:my-0">
            Reach us{" "}
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center mb-20 mt-10 sm:my-4">
        <div className="w-9/12 flex justify-between sm:flex-wrap sm:w-12/12 sm:items-center sm:align-middle">
          <div className="flex flex-col justify-center text-[#A8DAF4] sm:items-center">
            <div>
              <i className="fa-brands fa-linkedin-in text-[#A8DAF4] text-[150px] p-4 sm:text-[45px]"></i>
            </div>
            <button className="border-[#A8DAF4] border-2 rounded-[60px] text-3xl sm:text-base sm:px-6">
              Linkedin
            </button>
          </div>
          <div>
            <div className="flex flex-col justify-center text-[#B2DECA] sm:items-center">
              <div>
                <i className="fa-brands fa-whatsapp text-[#B2DECA] text-[150px] p-4 sm:text-[45px]"></i>
              </div>
              <button className="border-[#B2DECA] border-2 rounded-[60px] text-3xl sm:text-base sm:px-6">
                Whatsapp
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center text-[#F5A091] sm:items-center">
              <div>
                <i className="fa-brands fa-instagram text-[#F5A091] text-[150px] p-4 sm:text-[45px]"></i>
              </div>
              <button className="border-[#F5A091] border-2 rounded-[60px] text-3xl sm:text-base sm:px-6">
                Instagram
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center text-[#ABAEDB] sm:items-center">
              <div>
                <i className="fa-regular fa-keyboard text-[#ABAEDB] text-[150px] p-4 sm:text-[45px]"></i>
              </div>
              <button className="border-[#ABAEDB] border-2 rounded-[60px] text-3xl sm:text-base sm:px-6">
                Write us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 mb-10 flex justify-center rounded-2xl bg-white">
        <div className="w-9/12 flex justify-between sm:flex-col sm:w-full sm:items-center">
          <div className="w-9/12 sm:w-full">
            <div className="flex justify-between w-full sm:flex-col sm:w-full sm:items-center">
              <div className="w-7/12 h-[30rem] bg-brand-color2 rounded-2xl px-3 py-10 m-3 sm:w-11/12 sm:h-[26rem]">
                <p className="">
                  <i className="fa-solid fa-laptop text-5xl sm:text-4xl"></i>
                </p>
                <div>
                  <h1 className="text-4xl font-bold my-5">
                    Let's work together
                  </h1>
                  <p className="my-5">
                    It goes without saying that we love what we do, so we
                    continue to learn and grow every day, instilling that
                    knowledge and innovation into all of our projects. We take
                    every new project as an opportunity to collaborate with our
                    clients and bring their unique vision to life, while still
                    adding our own personal touch as well.
                  </p>
                  <button className="bg-black px-5 py-2 rounded-full text-lg text-white my-5 sm:my-2">
                    <NavLink to="/about">Our team</NavLink>
                  </button>
                </div>
              </div>
              <div className="w-5/12 h-[30rem] bg-brand-color5 rounded-2xl px-3 py-10 m-3 sm:w-11/12 sm:h-[26rem]">
                <p className="flex justify-between items-center">
                  <p>
                    <i className="fa-brands fa-google text-4xl"></i>
                  </p>
                  <p className="flex justify-between">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                </p>
                <br />
                <div>
                  <p className="">
                    “StellarNex did a great job redoing our website. They took
                    the time to listen and really understood what we wanted. He
                    completed the work in super quick time to a very high
                    professional standard. Will definitely recommend”.
                  </p>
                  <p className="font-bold mt-5">— Dr Venkatappa.</p>
                  <p>Kanva Diagnostic services private limited.</p>
                  <button className="flex justify-end  w-full items-center mt-10">
                    <i className="fa-solid fa-circle-chevron-right text-5xl"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full sm:flex-col sm:items-center">
              <div className="w-7/12 h-[20rem] bg-brand-color4 rounded-2xl px-3 py-10 m-3 sm:w-11/12 sm:h-[17rem]">
                <div>
                  <p> Latest insights</p>
                  <h1 className="text-xl font-semi my-5">What is SEO</h1>

                  <p className="my-5">
                    SEO is a term we’re hearing more and more of these days,
                    especially online. But exactly what is SEO?
                  </p>
                  <div className="flex justify-between">
                    <p>Read more ›</p>
                    <p>November 22, 2022</p>
                  </div>
                </div>
              </div>
              <div className="w-5/12 h-[20rem] bg-brand-color1 rounded-2xl px-3 py-10 m-3 sm:w-11/12 sm:h-[17rem]">
                <div>
                  <p>Latest insights</p>
                  <h1 className="text-xl font-bold my-5">
                    Local Web Design vs Outsourcing
                  </h1>
                  <p className="my-5">
                    We come across domains each and every day online, but we
                    rarely stop to think about what they are, how they come
                    about, and how...
                  </p>
                  <div className="flex justify-between">
                    <p>Read more ›</p>
                    <p>July 08, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12 h-[51.5rem] bg-brand-color3 rounded-2xl px-3 py-10 m-3 sm:w-11/12 sm:h-[21rem]">
            <p className="">
              <i className="fa-solid fa-mug-saucer text-5xl sm:text-4xl"></i>
            </p>
            <div className="my-5">
              <h1 className="text-6xl font-semi my-5 sm:text-4xl">
                Have a coffee with us.
              </h1>
              <p className="mt-32 sm:mt-6">
                <span>Phone: +91 9591581849</span>
                <br />
                <span>Email: hi@stellarnex.com</span>
              </p>
              <NavLink to="/contact">
              <button className=" bg-black  font-medium px-8 py-3 text-lg rounded-full text-white mt-4">
                Book a Meeting
                </button>
              </NavLink>
    
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center my-28 sm:my-8">
          <div className="text-[200px] font-black sm:text-[70px]">
            StellarNex
          </div>
        </div>
        <div className="flex justify-center my-16 sm:my-0">
          <div className="flex w-9/12 justify-between sm:flex-col sm:items-center">
            <p>© StellarNex. All rights reserved.</p>
            <p className="sm:mt-4">Privacy policy | Terms & Conditions</p>
            <p className="sm:mt-4 sm:mb-4">Website by StellarNex</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
