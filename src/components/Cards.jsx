import { Link } from "react-router-dom";
import { ArrowRight } from "../images/svgs/index";
import { ButtonPeach, ButtonWhite } from "./Btns";
import { useWindowSize } from "@uidotdev/usehooks";
import scrollToTop from "../functions";

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

export const CategoriesCard = ({ url, title, img, lgHeight }) => {
  return (
    <div
      className={`h-[250px] md:h-[200px] ${lgHeight} group bg-no-repeat bg-cover bg-center rounded-[15px]`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <section className="bg-black/60 h-full group-hover:bg-peach/60 flex flex-col items-center justify-center gap-y-6 rounded-[15px]">
        <h2 className="text-white uppercase font-medium text-[28px] md:text-[40px] leading-9 md:leading-[48px] tracking-[1.4px] md:tracking-[2px] text-center">
          {title}
        </h2>
        <Link
          onClick={scrollToTop}
          to={`/${url}`}
          className="font-medium text-white text-[15px] uppercase leading-[15px] tracking-[5px] flex items-center gap-x-[22px]"
        >
          view projects
          <ArrowRight />
        </Link>
      </section>
    </div>
  );
};

export const CountryCard = ({ img, title, id }) => {
  return (
    <div className="flex flex-col justify-center items-center" key={id}>
      <img src={img} alt="" className="w-[202px] h-[202px]" />
      <h3 className="text-dark-gray font-medium text-[20px] leading-[26px] uppercase mt-[48px] mb-[24px] tracking-[5px]">
        {title}
      </h3>
      <ButtonPeach title="see location" url="/locations" />
    </div>
  );
};

export const OurCompanyCard = ({
  img,
  title,
  description_1,
  description_2,
  orderDirection,
  titleColor,
  descriptionColor,
  bgColor,
}) => {
  const { width } = useWindowSize();
  return (
    <div
      className={`flex flex-col lg:flex-row md:container mx-auto md:rounded-[15px] overflow-hidden`}
    >
      {orderDirection !== "order-1" && (
        <img src={img} className={`w-full ${orderDirection}`} alt={title} />
      )}
      <section
        className={`${bgColor} py-20 px-4 md:px-20 lg:px-24 lg:py-0 flex flex-col text-center lg:text-start lg:justify-center gap-y-6 ${
          width < 1023 && "order-2"
        }`}
      >
        <h3 className={`font-medium text-[32px] leading-9 ${titleColor}`}>
          {title}
        </h3>
        <p className={`text-[15px] leading-[25px] ${descriptionColor}`}>
          {description_1}
        </p>
        <p className={`text-[15px] leading-[25px] ${descriptionColor}`}>
          {description_2}
        </p>
      </section>
      {orderDirection === "order-1" && (
        <img src={img} className={`w-full ${orderDirection}`} alt={title} />
      )}
    </div>
  );
};

export const LocationCard = ({
  map,
  title,
  address_1,
  address_2,
  tel,
  email,
  orderDirection,
}) => {
  const { width } = useWindowSize();
  return (
    <div className="grid lg:grid-cols-3 md:gap-[30px]">
      <div
        className={`lg:col-span-2 bg-extra-light-peach md:rounded-[15px] min-h-[394px] md:min-h-[326px] ${
          width < 1023 && "order-last"
        } flex flex-col md:flex-row md:gap-x-24 gap-y-6 items-center justify-center md:justify-start text-center md:text-left md:px-20`}
      >
        <div>
          <h3 className="text-peach font-medium text-[32px] leading-9 mb-6 md:text-[40px] md:leading-[48px] capitalize">
            {title}
          </h3>
          <h4 className="font-bold text-[15px] leading-[25px] md:text-base md:leading-[26px] text-dark-gray capitalize">
            Designo Central Office
          </h4>
          <p>{address_1}</p>
          <p>{address_2}</p>
        </div>

        <div>
          <div className="hidden md:block h-12 mb-6"></div>
          <h4 className="font-bold text-[15px] leading-[25px] md:text-base md:leading-[26px] text-dark-gray capitalize">
            contact
          </h4>
          <p>P : {tel}</p>
          <p>M : {email}</p>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${map})` }}
        className={`md:rounded-[15px] h-[320px] md:h-[326px] bg-no-repeat bg-cover bg-right-top ${orderDirection}`}
      ></div>
    </div>
  );
};

export const FooterCard = () => {
  return (
    <div className="min-h-[380px] md:min-h-[320px] lg:min-h-[292px] bg-peach w-full rounded-[15px] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-28 lg:px-24 gap-y-8">
      <section className="text-center lg:text-left lg:max-w-[450px]">
        <h2 className="font-medium text-[32px] md:text-[40px] leading-9 md:leading-none text-white mb-3 lg:mb-4">
          Let's talk about
          <br />
          your project
        </h2>
        <p className="text-white text-[15px] md:text-base leading-[25px] md:leading-[26px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </section>
      <ButtonWhite title={"get in touch"} url="/contact" />
    </div>
  );
};
