import React, { useState } from "react";
import ImageList from "../../assets/branding/1.jpg";

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
        `When it comes to building a successful brand, the first step is to truly understand your target demographic and their unique needs. By identifying who they are and what they crave, you can pave the way for a compelling brand story that resonates with their hearts and minds.

        But it doesn't stop there. You also need to dig deep and uncover the underlying goals, values, and mission that drive your brand. These elements are the bedrock of your identity and will guide your every move as you craft a brand that stands out in the crowd.`,
    },
    {
      header: "2. Design",
      description:
        "Research is a vital component of the brand-building process. It's all about delving into the desires and preferences of your target audience. By unearthing these valuable insights, you'll gain a clear understanding of how to tailor your branding efforts to meet their expectations. This means incorporating their preferences into every aspect of your brand, from visual design to messaging.",
    },
    {
      header: "3. Design",
      description:
        "When it's time to bring your brand to life visually, the design stage takes center stage. Armed with the knowledge of your business's unique identity and the tastes of your target audience, our team will craft stunning concepts that capture the essence of your brand. From colors to typography, every element will be carefully considered to create a cohesive and visually appealing brand identity.",
    },
    {
      header: "4. Style guide",
      description:
        "Once we receive your approval for a design concept, the real magic happens. We roll up our sleeves and dive into creating your brand's style guide. This comprehensive document will serve as the blueprint for your brand's visual identity, ensuring consistency across all touchpoints. It's an essential tool that empowers you to maintain a strong and unified brand presence as you grow.",
    },
    {
      header: "5. Brand collateral",
      description:
        "And let's not forget about the practical side of branding. Your brand collateral plays a crucial role in establishing your presence in the real world. We've got you covered with everything you need, from eye-catching business cards that leave a lasting impression to professional letterheads that make your communications stand out. We'll even provide you with presentation folders and email signatures that showcase your brand's personality and professionalism.",
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
      <div className="bg-brand-color5 w-full flex justify-around py-16 sm:flex-col sm:py-2">
        <div className="w-9/12 flex justify-between sm:w-full sm:flex-col">
          <div className="w-6/12 flex flex-col max-h-[800px] relative overflow-hidden sm:w-full">
            {listItems.map((item, index) => (
              <div key={index} className="border-b border-black">
                <div
                  onClick={() => handleItemClick(index)}
                  className="flex items-center justify-between py-2 px-4 cursor-pointe"
                >
                  <div className="text-[62px] sm:text-2xl">{item.header}</div>
                  <div>{openItem === index ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}</div>
                </div>
                {openItem === index && (
                  <div className="px-4 pb-4">{item.description}</div>
                )}
              </div>
            ))}
          </div>
          <div
            className={`w-5/12 relative min-h-[800px] border-4 border-black bg-cover ${
              isImageExpanded ? "h-[600px]" : "max-h-[800px]"
            } sm:w-full sm:min-h-[400px] sm:max-h-[400px] sm:mt-5`}
            style={{ backgroundImage: `url(${ImageList})` }}
            onClick={handleImageClick}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
