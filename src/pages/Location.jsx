import { LocationCard } from "../components/Cards";
import CanadaTabletImage from "../images/cards/location-card/canadaDesktop.jpg";
import AustraliaTabletImage from "../images/cards/location-card/australiaTablet.jpg";
import UkTabletImage from "../images/cards/location-card/ukTablet.jpg";
// import { useWindowSize } from "@uidotdev/usehooks";

export const Location = () => {
  // const { width } = useWindowSize();

  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <div className="grid gap-y-[40px] md:gap-y-[120px] lg:gap-y-8">
        <LocationCard map={CanadaTabletImage} />
        <LocationCard
          orderDirection={"order-first"}
          map={AustraliaTabletImage}
        />
        <LocationCard map={UkTabletImage} />
      </div>
    </div>
  );
};
