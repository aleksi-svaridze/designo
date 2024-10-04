import { useState } from "react";
import { DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

export const AppDesign = () => {
  const [webDesignCardsContent] = useState([
    {
      id: 1,
      imageSrc: imageExpress,
      title: "express",
      description: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      id: 2,
      imageSrc: imageTransfer,
      title: "transfer",
      description:
        "Site for low-cost money transfers and sending money within seconds",
    },
    {
      id: 3,
      imageSrc: imagePhoton,
      title: "photon",
      description:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      id: 4,
      imageSrc: imageBuilder,
      title: "builder",
      description:
        "Connects users with local contractors based on their location",
    },
    {
      id: 5,
      imageSrc: imageBlogr,
      title: "blogr",
      description:
        "Blogr is a platform for creating an online blog or publication",
    },
  ]);
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <SecondaryHero
        title={"app design"}
        description={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />
      <div className="container py-24 md:py-[120px] lg:py-[160px] px-6 md:px-0 grid lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        {webDesignCardsContent.map((item) => (
          <DesignCards item={item} />
        ))}
      </div>
    </div>
  );
};
