import aboutImg1 from "../../assets/about/1.jpg";

const Story = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-24 rounded-xl sm:mt-0">
        <div className="w-9/12  flex justify-between py-5 px-2 rounded-2xl sm:flex-col sm:w-11/12">
          <div className="w-6/12 sm:w-full">
            <p className="text-[100px] sm:text-[60px]">Hi there 👋🏻 </p> <br />
            <p className="text-2xl sm:text-lg">
              We’re a team of passionate, diverse individuals who are dedicated
              to helping startups move forward. Through our Youtube content, our
              Startup Hub, and our Agency services, we’re committed to guiding
              startup founders in the rocky journey of starting and growing a
              company. Get a glimpse of who we are!
            </p>
          </div>
          <div
            className="w-5/12 relative min-h-[400px] border-4 border-black bg-cover rounded-xl sm:w-full sm:min-h-[300px] sm:max-h-[300px] sm:mt-5"
            style={{
              backgroundImage: `url(${aboutImg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-9/12 sm:w-11/12">
          <p className=" text-4xl text-center">
            <span className=" bg-brand-color2 h-10 w-10 inline-block relative top-2 rounded-[50px] mr-2 "></span>
            Our <span className=" bg-brand-color2 rounded-lg px-2">team</span>
          </p>
          <div className="flex justify-center  w-full mt-10 ">
            <div className="flex justify-between w-8/12 sm:flex-wrap sm:w-full sm:items-center sm:justify-between">
              <div className=" h-[100px] w-[100px] rounded-full border-2 border-black"></div>
              <div className=" h-[100px] w-[100px] rounded-full border-2 border-black"></div>
              <div className=" h-[100px] w-[100px] rounded-full border-2 border-black"></div>
              <div className=" h-[100px] w-[100px] rounded-full border-2 border-black"></div>
              <div className=" h-[100px] w-[100px] rounded-full border-2 border-black"></div>
              <div className=" h-[100px] w-[100px] rounded-full border-2 border-black"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 sm:mt-20">
        <div className="w-9/12 sm:w-11/12">
          <div className="w-full flex justify-between sm:flex-col">
            <div className="w-6/12 sm:w-full">
              <p className=" text-4xl sm:text-center">
                <span className=" bg-brand-color3 h-10 w-10 inline-block relative top-2 rounded-[50px] mr-2"></span>
                Our{" "}
                <span className="rounded-lg px-2 bg-brand-color3 ">
                  journey
                </span>
              </p>
              <br /> <br />
              <p className=" text-base">
                StellarNex was founded with a visionary aim—to redefine the
                digital landscape. We are a dynamic team of innovators,
                dedicated to crafting bespoke digital solutions that resonate
                with our clients' needs. Our journey began with a passion for
                cutting-edge technology and a commitment to delivering
                excellence. At StellarNex, we thrive on the philosophy of
                merging creativity with technology, ensuring our clients stand
                out in the ever-evolving digital sphere.
                <br /> <br />
                Our core strength lies in our versatile expertise. We specialize
                in a myriad of digital domains, including robust website
                development, intuitive mobile applications, and strategic
                digital marketing solutions. Each project at StellarNex is a
                canvas for innovation. We meticulously tailor our services to
                fit the unique requirements of every client, ensuring their
                digital footprint is not just remarkable but also impactful.
              </p>
            </div>
            <div
            className="w-5/12 relative min-h-[400px] border-4 border-black bg-cover rounded-xl sm:w-full sm:min-h-[300px] sm:max-h-[300px] sm:mt-5"
            style={{
                backgroundImage: `url(${aboutImg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>{" "}
          </div>
          <div className="w-full mt-40 flex justify-between sm:mt-20 sm:flex-col-reverse">
            <div
            className="w-5/12 relative min-h-[400px] border-4 border-black bg-cover rounded-xl sm:w-full sm:min-h-[300px] sm:max-h-[300px] sm:mt-5"
            style={{
                backgroundImage: `url(${aboutImg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>{" "}
            <div className="w-6/12 sm:w-full">
              <p className=" text-4xl align-middle sm:text-center">
                <span className=" bg-brand-color5 h-10 w-10 inline-block relative top-2 rounded-[50px] mr-2 "></span>
                Our{" "}
                <span className=" text-black bg-brand-color5 rounded-lg px-4">
                  future
                </span>
              </p>
              <br /> <br />
              <p className="text-base">
                Transparency and collaboration are at the heart of our ethos. We
                believe in fostering long-term partnerships built on trust and
                mutual growth. When you collaborate with StellarNex, you embark
                on a journey where your aspirations are heard, your visions are
                realized, and your success becomes our shared goal. <br />
                <br /> At StellarNex, our sights are set on the horizon of
                innovation. We are driven by a relentless pursuit of staying at
                the forefront of technological advancements. Our future involves
                pushing boundaries, exploring new frontiers, and pioneering
                cutting-edge solutions that anticipate and exceed the evolving
                needs of our clients and the digital landscape. We envision a
                tomorrow where every interaction with technology reflects
                seamless user experiences, elevated by our unwavering commitment
                to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20 sm:flex-col">
        <div className="w-9/12 sm:w-full">
          <p className=" text-4xl align-middle text-center sm:text-center">
            <span className=" bg-brand-color2 h-10 w-10 inline-block relative top-2 rounded-[50px] mr-2 "></span>
            Our{" "}
            <span className="text-black bg-brand-color2 px-2 rounded-lg">
              Mantras
            </span>
          </p>
          <div className="flex justify-between mt-20 sm:flex-col sm:items-center">
            <div className="w-3/12 sm:w-11/12">
              <div className="text-4xl sm:text-center">
                <i className="fa-solid fa-volume-high text-[#B2DECA]"></i>
              </div>
              <div className=" text-4xl my-3">Storytelling</div>
              <p className="font-extralight">
                We are storytellers. We believe in the transformative power of
                stories and use them to help founders pitch their businesses.
                Through our visual content, we also try to create a deeper
                understanding of the startup ecosystem and inspire entrepreneurs
                across the globe.
              </p>
            </div>
            <div className="w-3/12 sm:w-11/12">
              <div className="text-4xl sm:text-center">
                <i className="fa-solid fa-arrow-up-right-dots text-[#F5A091]"></i>
              </div>
              <div className=" text-4xl my-3">Constant Growth</div>
              <p className="font-extralight">
                We believe in helping startup founders grow personally and
                professionally by sharing our knowledge, experience, and
                resources. This constant improvement is part of the very essence
                of what we do as a company.
              </p>
            </div>
            <div className="w-3/12 sm:w-11/12">
              <div className="text-4xl sm:text-center">
                <i className="fa-solid fa-magnifying-glass-dollar text-[#A8DAF4]"></i>
              </div>
              <div className=" text-4xl my-3">Transparency</div>
              <p className="font-extralight">
                Being transparent internally and with the rest of the founder
                community has been crucial in our growth. In our view, being
                straightforward about our company’s goals and performance
                creates a deeper commitment and greater meaning to the very work
                we do every day.
              </p>
            </div>
          </div>
          <div className="flex justify-around mt-10 sm:flex-col sm:items-center">
            <div className="w-4/12 sm:w-11/12">
              <div className="text-4xl sm:text-center">
                <i className="fa-solid fa-face-smile text-[#ABAEDB]"></i>
              </div>
              <div className=" text-4xl my-3">Fun Environment</div>
              <p className="font-extralight">
                We are not saying this as a marketing gimmick. We truly believe
                that we are more productive, creative, and motivated when we are
                having fun. We strive to create an environment that fosters joy
                and human connections, and where people can feel respected,
                valued, and cared for.
              </p>
            </div>
            <div className="w-4/12 sm:w-11/12">
              <div className="text-4xl sm:text-center">
                <i className="fa-solid fa-hand-back-fist text-[#B2DECA]"></i>
              </div>
              <div className=" text-4xl my-3 sm:w-full">
                Autonomy & Leadership
              </div>
              <p className="font-extralight">
                We love hiring people who can teach us something. We also like
                employees who are self-sufficient, and able to do
                problem-solving without micromanaging. We highly reward
                leadership, and people who challenge our beliefs, and propose
                new ways of doing things.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="w-9/12 flex justify-between sm:w-full sm:flex-col sm:justify-center sm:items-center">
          <div className="w-9/12 sm:w-11/12">
            <p className=" text-4xl align-middle mt-5">
              <span className=" bg-brand-color1 h-10 w-10 inline-block relative top-2 rounded-[50px] mr-2 "></span>
              <span className="text-[#F5A091]">Join</span> us
            </p>
            <p className="text-2xl mt-5 sm:text-xl">
              We would love to have you onboard. Whether you’re looking for
              lessons that can inspire you in your business journey, looking to
              join our founder community, or if you’re interested in applying
              for a job with our team, we look forward to hearing from you!
            </p>
          </div>
          <div className="w-3/12 text-end sm:text-center sm:w-full">
            <i className="fa-solid fa-fan text-[#F5A091] inline-block text-[240px] sm:text-[140px]"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
