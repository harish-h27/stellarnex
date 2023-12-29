import React, { useState } from "react";
import ImageList from "../../assets/website/1.jpg";

interface ListItem {
  header: string;
  description: string;
}

const ItemList: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const listItems: ListItem[] = [
    {
      header: "1. Discovery",
      description:
        "We kick off our process by delving deep into the hearts and minds of your target demographic. We want to grasp exactly who they are and what they're searching for. By understanding their needs, we can create a website that speaks directly to them, captivating their attention from the moment they land on your page.",
    },
    {
      header: "2. Design",
      description:
        "It's time to bring your website to life visually! Our team will meticulously craft wireframes, sketching out each page's elements and their strategic positions. This serves as our starting point for discussion and revision. Prepare to be blown away as we unveil the blueprint of your website's future glory.",
    },
    {
      header: "3. Content",
      description:
        "Great content is the heart and soul of any successful website. Our talented team will create fresh, captivating content specifically tailored to your brand. If you already have existing content, fear not! We'll seamlessly integrate and architect it, ensuring it blends harmoniously with the overall design. Get ready for a symphony of words that mesmerizes your audience.",
    },
    {
      header: "4. Development",
      description:
        "With design and content approved, we roll up our sleeves and dive into development. We'll bring your website to life, meticulously crafting each pixel to perfection. Our team of coding maestros will work tirelessly to ensure your vision is flawlessly executed. Your website will soon transcend the realm of dreams and become a fully functional reality.",
    },
    {
      header: "5. Launch & training",
      description:
        "The moment we've all been eagerly waiting for has arrived—your website is now live! It's time to celebrate and embrace the power of your online presence. But we're not done just yet. We'll schedule a personalized training session, empowering you to manage and edit your content with ease. We'll be by your side, answering any questions you may have, ensuring your journey with your website is nothing short of extraordinary.",
    },
  ];
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);

  const handleItemClick = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
    setIsImageExpanded(false); // Close the image container when expanding item description
  };

  const handleImageClick = () => {
    setIsImageExpanded((prev) => !prev);
    setOpenItem(null); // Close any open item description when expanding the image container
  };

  return (
    <>
      <div className="bg-brand-color2 w-full flex justify-around py-16 sm:py-5">
        <div className="w-9/12 flex justify-between sm:w-full sm:flex-col sm:items-center">
          <div className="w-6/12 flex flex-col relative overflow-hidden sm:w-full">
            {listItems.map((item, index) => (
              <div key={index} className="border-b border-black">
                <div
                  onClick={() => handleItemClick(index)}
                  className="flex items-center justify-between py-2 px-4 cursor-pointer"
                >
                  <div className="text-[62px] sm:text-2xl">{item.header}</div>
                  <div>
                    {openItem === index ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </div>
                </div>
                {openItem === index && (
                  <div className="px-4 pb-4">{item.description}</div>
                )}
              </div>
            ))}
          </div>
          <div
            className={`w-5/12 relative min-h-[800px] border-4 border-black bg-cover rounded-xl ${
              isImageExpanded ? "h-[600px]" : "max-h-[800px]"
            } sm:w-full sm:min-h-[400px] sm:max-h-[400px] sm:mt-5`}
            style={{
              backgroundImage: `url(${ImageList})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={handleImageClick}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
