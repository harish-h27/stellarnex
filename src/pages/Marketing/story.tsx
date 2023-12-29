import marketingImg3 from '../../assets/marekting/3.jpg'

const Story = () => {
  return (
    <div className=" w-full flex justify-around items-center  py-10 mt-20 sm:mt-5 sm:justify-center">
      <div className="w-9/12 sm:w-11/12 ">
        <div className="flex justify-between sm:flex-col">
          <div className="w-6/12 sm:w-full">
            <button className="px-8 py-3  rounded-full text-lg text-black border-black border-2 my-4 sm:px-4 sm:py-2">
              Search engine marketing
            </button>
            <p className="sm:text-sm">
              Having carried out a number of successful campaigns, our team has
              plenty of experience dealing with the current world of Google Ads,
              as well as the knowledge and techniques required to craft
              effective ads.
            </p>
            <br />
            <p className="sm:text-sm">
              In order to attract as many potential customers as possible, we
              write multiple campaigns centered around the product or services
              our client offers, which we optimize with up-to-date key word
              research and an understanding of their target demographic. Then,
              we regularly monitor the performance of each campaign, altering
              and improving them as needed.
            </p>
            <br />
          </div>
          <div className="w-5/12 sm:w-full">
            <button className="px-8 py-3  rounded-full text-lg text-black border-black border-2 my-4 sm:px-4 sm:py-2">
              Search engine optimization
            </button>
            <p className="sm:text-sm">
              Today, almost 70% of all online activities start with a search
              engine. That means that ranking highly in search engine results is
              more important now than ever.
            </p>
            <br />
            <p className="sm:text-sm">
              With expertise in Search Engine Optimization that we tailor
              specifically to the local algorithm in Perth, we can modify your
              website to rank higher in Google search results, and get your
              business seen by potential clients in your area.
            </p>
            <br />
            <p className="sm:text-sm">
              Not to mention, we also offer ongoing services to regularly post
              content and update your website for the most recent changes in
              Google’s algorithm, to keep your website climbing the ranks of
              search results.
            </p>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className="w-6/12 sm:w-full ">
            <button className="px-8 py-3  rounded-full text-lg text-black border-black border-2 my-4 sm:px-4 sm:py-2">
              Search engine marketing
            </button>
            <p className="sm:text-sm">
              Social media is rapidly changing the face of the digital marketing
              industry. In 2018, social media had already become the most
              relevant advertising channel for over 43% of consumers under the
              age of 40.
            </p>
            <br />

            <p className="sm:text-sm">
              So, it goes without saying that with the right strategy and
              content, social media can become a fantastic tool for your
              business.
            </p>
            <br />

            <p className="sm:text-sm">
              Our team can handle the graphics, content, scheduling, and account
              management so your only responsibility is reaping the rewards.
            </p>
            <button className="px-8 py-3  rounded-full text-lg text-white bg-black my-4 sm:px-4 sm:py-2">
                Get to work
              </button>
          </div>
          <div className="w-5/12">
          <div></div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
