import AppDesign from "../images/categories/app_design.jpg";
import WebDesign from "../images/categories/web_design.jpg";
import GraphicDesign from "../images/categories/graphic_design.jpg";
import { CategoriesCard } from "./Cards";

export const Categories = () => {
  return (
    <div className="container my-[120px] lg:my-40 grid lg:grid-cols-2 gap-y-6 lg:gap-x-7 px-6 md:px-0">
      <CategoriesCard 
          url="web-design"
          img={WebDesign} 
          title='web design' 
          lgHeight='lg:h-[640px]'
        />

      <div className="grid gap-y-6">
        <CategoriesCard 
          url="app-design"
          img={AppDesign} 
          title='app design' 
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
