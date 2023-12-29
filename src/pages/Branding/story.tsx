import brandingImg2 from "../../assets/branding/2.jpg";

const Story = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 ">
      <div className="w-11/12 flex justify-between sm:w-11/12 sm:flex-col sm:justify-center">
        <div className="w-6/12 sm:w-full">
          <div></div>{" "}
        </div>
        <div className="w-5/12 sm:w-full">
          <div className="flex flex-col justify-between sm:w-full">
            <div className="w-9/12">
              <button className="px-8 py-3  rounded-full text-lg text-black border-black border-2 my-4 sm:px-4 sm:py-2">
                Branding
              </button>{" "}
            </div>
            <div className="w-9/12 sm:w-full">
              The world of branding can be a tough one to navigate. Developing
              your business’s brand means focusing on the “little things” that
              most people overlook; colour palette, typography, tone, and
              everything in between. When customising your brand to appeal to
              your target demographic, even the smallest of details can make a
              huge difference Over the years, the team here at StellarNex have
              gotten to know the ins and out of branding, and want to share a
              little of that wisdom with our clients. Interested in brushing up
              on your branding knowledge and growing your business? Give us a
              call today.
            </div>
            <br />
            <div className="w-9/12">
              <button className="px-8 py-3  rounded-full text-lg text-black border-black border-2 my-4 sm:px-4 sm:py-2">
                Copywriting
              </button>{" "}
            </div>
            <div className="w-9/12 sm:w-full">
              You may have heard the phrase “Content is king”. Well, when it
              comes to website development, that is certainly the case. It goes
              without saying that a good website should have relevant, well
              written copy, free from spelling and grammatical errors. However,
              the quality of a website’s content also affects its ranking in
              search engine results, with readability, key word frequency, and
              backlink quality affecting its performance. Our team is well
              versed in creating content that the algorithm agrees with.*
            </div>
            <br />
            <div className="w-9/12">
              <button className="px-8 py-3  rounded-full text-lg text-white bg-black my-4 sm:px-4 sm:py-2">
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
