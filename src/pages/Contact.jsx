import { CountryCard } from "../components/Cards";
import Swal from "sweetalert2";

import CanadaImage from "../images/cards/location-cards/canada.png";
import AustraliaImage from "../images/cards/location-cards/australia.png";
import UkImage from "../images/cards/location-cards/united-kingdom.png";
import { useState } from "react";

export const Contact = () => {
  const [locationCardData] = useState([
    { id: 1, title: "canada", img: CanadaImage },
    { id: 2, title: "australia", img: AustraliaImage },
    { id: 3, title: "united kingdom", img: UkImage },
  ]);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "836fa0f0-c363-4c28-a59d-1cf24f7111c2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <div
        className={`grid lg:grid-cols-2 md:rounded-[15px] py-12 md:py-16 bg-peach relative overflow-hidden z-0 px-6 md:px-14 lg:px-24 gap-x-24`}
      >
        <section className="pb-20 text-white  lg:py-0 flex flex-col text-center md:text-start lg:justify-center gap-y-6">
          <h3 className={`font-medium text-[32px] leading-9 capitalize`}>
            contact us
          </h3>
          <p className={`text-[15px] leading-[25px]`}>
            Ready to take it to the next level? Let's talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that's relatable to your
            users, drop us a line.
          </p>
        </section>
        <form onSubmit={onSubmit} className="flex flex-col lg:pl-7">
          <input
            placeholder="name"
            type="text"
            required
            id="name"
            name="name"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium pl-4"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            name="email"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium pl-4"
          />
          <input
            type="number"
            placeholder="Phone"
            required
            name="phone"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium pl-4"
          />
          <textarea
            placeholder="your message"
            required
            name="message"
            className="h-20 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium pl-4"
          ></textarea>
          <button
            type="submit"
            className={`hover:text-white hover:bg-light-peach h-14 rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px]  inline-flex items-center justify-center px-6 min-w-[152px] self-center md:self-end transition easy-in-out duration-200`}
          >
            send
          </button>
        </form>
        <div className="absolute bottom-0 left-0 rounded-full w-[640px] h-[640px] bg-gradient-to-b from-[#5D0202]/0 to-[#5D0202]/15 -z-10"></div>
      </div>
      <div className="grid gap-y-[48px] lg:grid-cols-3 my-[60px] lg:my-[80px]">
        {locationCardData.map((item) => (
          <CountryCard title={item.title} img={item.img} id={item.id} />
        ))}
      </div>
    </div>
  );
};
