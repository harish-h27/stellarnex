import websiteImg from "../../assets/website/2.jpg";

const Story = () => {
  return (
    <div className="bg-brand-color2 w-full flex justify-center items-center pt-4 sm:justify-center sm:py-5">
      <div className="w-11/12 flex justify-between sm:flex-col sm:justify-between sm:w-11/12">
        <div className="w-6/12 sm:w-full">
          <div></div>{" "}
        </div>
        <div className="w-5/12 sm:w-full">
          <div className="flex flex-col justify-between">
            <div className=" font-medium w-9/12 text-xl sm:w-full sm:text-base">
              Crafting websites with a user-centric approach, especially
              emphasizing mobile-first design, is our expertise. We specialize
              in empowering businesses to establish their online presence
              through premium websites, meticulously designed for optimal
              functionality across all devices. With a mere six-second window to
              engage visitors, our focus lies in crafting websites with care,
              expertise, and a touch of innovation.
            </div>
            <br />
            <div className="w-9/12 text-base sm:w-full sm:text-sm">
              Our adept team of web developers and skilled graphic designers
              excels in creating visually appealing and user-friendly websites
              with sophisticated functionalities. We continuously evolve and
              stay updated with the latest innovations in web development,
              integrating these advancements into our clients' sites. Above all,
              we prioritize aligning our work with your unique vision,
              acknowledging that your insight into your business is
              unparalleled.
            </div>
            <br />
            <div className="w-9/12">
              <button className=" bg-black  font-medium px-8 py-3 text-lg rounded-full text-white mt-4">
                Get to work
              </button>
            </div>
          </div>
          <div className="w-3/12"></div>
        </div>
      </div>
    </div>
  );
};

export default Story;
