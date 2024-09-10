import { ArrowRight } from "../images/svgs/index";
import WebDesign from "../images/categories/web_design.jpg";
import AppDesign from "../images/categories/app_design.jpg";
import GraphicDesign from "../images/categories/graphic_design.jpg";

export const Categories = () => {
  return (
    <div className="container my-[120px] lg:my-40 grid lg:grid-cols-2 gap-y-6 lg:gap-x-7 px-6 md:px-0">
      <div
        className="h-[250px] md:h-[200px] lg:h-[640px] group bg-no-repeat bg-cover bg-center rounded-[15px]"
        style={{ backgroundImage: `url(${WebDesign})` }}
      >
        <section className="bg-black/60 h-full group-hover:bg-peach/60 flex flex-col items-center justify-center gap-y-6 rounded-[15px]">
          <h2 className="text-white uppercase font-medium text-[28px] md:text-[40px] leading-9 md:leading-[48px] tracking-[1.4px] md:tracking-[2px] text-center">
            web design
          </h2>
          <a
            href="/"
            className="font-medium text-white text-[15px] uppercase leading-[15px] tracking-[5px] flex items-center gap-x-[22px]"
          >
            view projects
            <ArrowRight />
          </a>
        </section>
      </div>

      <div className="grid gap-y-6">
        <div
          className="h-[250px] md:h-[200px] lg:h-[308px] group bg-no-repeat bg-cover bg-center rounded-[15px]"
          style={{ backgroundImage: `url(${AppDesign})` }}
        >
          <section className="bg-black/60 h-full group-hover:bg-peach/60 flex flex-col items-center justify-center gap-y-6 rounded-[15px]">
            <h2 className="text-white uppercase font-medium text-[28px] md:text-[40px] leading-9 md:leading-[48px] tracking-[1.4px] md:tracking-[2px] text-center">
              app design
            </h2>
            <a
              href="/"
              className="font-medium text-white text-[15px] uppercase leading-[15px] tracking-[5px] flex items-center gap-x-[22px]"
            >
              view projects
              <ArrowRight />
            </a>
          </section>
        </div>

        <div
          className="h-[250px] md:h-[200px] lg:h-[308px] group bg-no-repeat bg-cover bg-center rounded-[15px]"
          style={{ backgroundImage: `url(${GraphicDesign})` }}
        >
          <section className="bg-black/60 h-full group-hover:bg-peach/60 flex flex-col items-center justify-center gap-y-6 rounded-[15px]">
            <h2 className="text-white uppercase font-medium text-[28px] md:text-[40px] leading-9 md:leading-[48px] tracking-[1.4px] md:tracking-[2px] text-center">
              graphic design
            </h2>
            <a
              href="/"
              className="font-medium text-white text-[15px] uppercase leading-[15px] tracking-[5px] flex items-center gap-x-[22px]"
            >
              view projects
              <ArrowRight />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
