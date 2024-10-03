export const DesignCards = ({ item }) => {
  return (
    <div className="rounded-[15px] overflow-hidden md:flex lg:block md:h-[310px] lg:h-auto group max-h-[478px]">
      <img src={item.imageSrc} alt="" className="w-full md:w-auto lg:w-full" />

      <section className="h-40 md:h-auto lg:h-40 text-center flex flex-col gap-y-4 justify-center bg-[#fdf3f0] group-hover:bg-peach">
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
