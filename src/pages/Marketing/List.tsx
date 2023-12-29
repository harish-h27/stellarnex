import React, { useState } from "react";
import ImageList from "../../assets/marekting/1.jpg";

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
        "Discovery is the exciting first step where we delve into the world of your business and identify your target demographic. By conducting a goal identification meeting, we gather valuable insights that pave the way for a tailored digital strategy.",
    },
    {
      header: "2. Research",
      description:
        "Research plays a vital role in understanding the needs and preferences of your target audience. We go beyond surface-level information, uncovering the intricate details that shape their behavior. Armed with these findings, we expertly incorporate them into your digital strategy, ensuring it resonates deeply with your audience.      ",
    },
    {
      header: "3. Set up",
      description:
        "Once the groundwork is laid, it's time to set up and put your business plans into action. This step is where we transform ideas into reality, creating a strong foundation for your digital presence.",
    },
    {
      header: "4. Optimization",
      description:
        "Optimization is key in maximizing your online potential. We carefully craft and organize your site's content to effectively reach the widest possible audience. By optimizing every element, we ensure that your digital presence is tailored to perfection, perfectly aligning with your target demographic's preferences.",
    },
    {
      header: "5. Ongoing review",
      description:
        "Ongoing review is crucial to maintain a successful digital strategy. We regularly analyze the results and make necessary changes for continuous improvement. With our vigilant monitoring and fine-tuning, your business stays ahead of the curve and constantly evolves to meet the ever-changing needs of your audience.      ",
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
      <div className="bg-brand-color3 w-full flex justify-around py-16 sm:flex-col sm:py-2">
        <div className="w-9/12 flex justify-between sm:w-full sm:flex-col">
          <div
            className={`w-5/12 relative min-h-[800px] border-4 border-black bg-cover ${
              isImageExpanded ? "h-[600px]" : "max-h-[800px]"
            } sm:w-full sm:min-h-[400px] sm:max-h-[400px] sm:mt-5`}
            style={{ backgroundImage: `url(${ImageList})` }}
            onClick={handleImageClick}
          ></div>
          <div className="w-6/12 flex flex-col max-h-[800px] relative overflow-hidden sm:w-full">
            {listItems.map((item, index) => (
              <div key={index} className="border-b border-black">
                <div
                  onClick={() => handleItemClick(index)}
                  className="flex items-center justify-between py-2 px-4 cursor-pointe"
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
        </div>
      </div>
    </>
  );
};

export default ItemList;
