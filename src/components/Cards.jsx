import { Link } from "react-router-dom";
import { ArrowRight } from "../images/svgs/index";

export const DesignCards = ({ item }) => {
  return (
    <div className="rounded-[15px] overflow-hidden md:flex lg:block md:h-[310px] lg:h-auto group">
      <div
        className="bg-top bg-cover bg-no-repeat min-h-80 md:min-h-[310px] lg:min-h-80 md:w-[338px] lg:w-full"
        style={{ backgroundImage: `url(${item.imageSrc})` }}
      ></div>

      <section className="h-40 md:h-auto md:w-[351px] lg:h-40 lg:w-full text-center flex flex-col gap-y-4 justify-center bg-[#fdf3f0] group-hover:bg-peach">
        <h2 className="font-medium text-xl leading-[26px] tracking-[5px] uppercase text-peach group-hover:text-white">
          {item.title}
        </h2>
        <p className="text-base leading-[26px] text-dark-gray group-hover:text-white">
          {item.description}
        </p>
      </section>
    </div>
  );
};

export const CategoriesCard = ({url, title, img, lgHeight}) => {
  return(
    <div
          className={`h-[250px] md:h-[200px] ${lgHeight} group bg-no-repeat bg-cover bg-center rounded-[15px]`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <section className="bg-black/60 h-full group-hover:bg-peach/60 flex flex-col items-center justify-center gap-y-6 rounded-[15px]">
            <h2 className="text-white uppercase font-medium text-[28px] md:text-[40px] leading-9 md:leading-[48px] tracking-[1.4px] md:tracking-[2px] text-center">
              {title}
            </h2>
            <Link
              to={url}
              className="font-medium text-white text-[15px] uppercase leading-[15px] tracking-[5px] flex items-center gap-x-[22px]"
            >
              view projects
              <ArrowRight />
            </Link>
          </section>
        </div>
  )
}
