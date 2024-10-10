import { LocationCard } from "../components/Cards";

export const Location = () => {
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <div className="grid gap-y-[40px] md:gap-y-[120px] lg:gap-y-8">
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  );
};
