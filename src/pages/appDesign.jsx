import { useState } from "react";
import { CategoriesCard, DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

import AirFilterImage from '../images/cards/app-design-cards/airfilter.jpg'
import EyeCamImage from '../images/cards/app-design-cards/eyecam.jpg'
import TodoImage from '../images/cards/app-design-cards/todo.jpg'
import FaceItmage from '../images/cards/app-design-cards/faceit.jpg'
import LoopStudiosImage from '../images/cards/app-design-cards/loopstudio.jpg'

import WebDesign from "../images/categories/web_design.jpg";
import GraphicDesign from "../images/categories/graphic_design.jpg";

export const AppDesign = () => {
  const [appDesignCardsContent] = useState([
    {
      id: 1,
      imageSrc: AirFilterImage,
      title: "AIRFILTER",
      description: "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      id: 2,
      imageSrc: EyeCamImage,
      title: "EYECAM",
      description:
        "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      id: 3,
      imageSrc: FaceItmage,
      title: "FACEIT",
      description:
        "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      id: 4,
      imageSrc: TodoImage,
      title: "TODO",
      description:
        "A todo app that features cloud sync with light and dark mode",
    },
    {
      id: 5,
      imageSrc: LoopStudiosImage,
      title: "LOOPSTUDIOS",
      description:
        "A VR experience app made for Loopstudios",
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
        {appDesignCardsContent.map((item) => (
          <DesignCards item={item} />
        ))}
      </div>
      <div className="container pb-24 md:pb-[120px] lg:pb-[160px] px-6 md:px-0 grid lg:grid-cols-2 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        <CategoriesCard
            url="web-design"
            img={WebDesign} 
            title='web design' 
            lgHeight='lg:h-[308px]'
        />
          <CategoriesCard
            url="graphic-design"
            img={GraphicDesign} 
            title='graphic design' 
            lgHeight='lg:h-[308px]'
        />
      </div>
    </div>
  );
};
