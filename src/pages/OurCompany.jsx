import { LocationCard } from "../components/Cards";

import CanadaImage from '../images/cards/location-cards/canada.png'
import AustraliaImage from '../images/cards/location-cards/australia.png'
import UkImage from '../images/cards/location-cards/united-kingdom.png'
import { useState } from "react";

export const OurCompany = () => {
  const [locationCardData] = useState([
    {id: 1, title: 'canada', img: CanadaImage},
    {id: 2, title: 'australia', img: AustraliaImage},
    {id: 3, title: 'united kingdom', img: UkImage},
  ])
  return <div className="md:container md:px-10 xl:px-[85px]">
    <div className="grid gap-y-[48px] lg:grid-cols-3 my-[60px] lg:my-[80px]">
    {locationCardData.map(item => (
       <LocationCard title={item.title} img={item.img} id={item.id} />
    ))}
    </div>
  </div>;
};
