import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Sponsor1 from "../public/logo.svg";

export default function Sponsors() {
  const sponsors = [
    { id: 1, brandName: "BrandRider", logo: Sponsor1 },
    { id: 2, brandName: "BrandRider", logo: Sponsor1 },
    { id: 3, brandName: "BrandRider", logo: Sponsor1 },
    { id: 4, brandName: "BrandRider", logo: Sponsor1 },
    { id: 5, brandName: "BrandRider", logo: Sponsor1 },
    { id: 6, brandName: "BrandRider", logo: Sponsor1 },
    { id: 7, brandName: "BrandRider", logo: Sponsor1 },
    { id: 8, brandName: "BrandRider", logo: Sponsor1 },
    { id: 9, brandName: "BrandRider", logo: Sponsor1 },
    { id: 10, brandName: "BrandRider", logo: Sponsor1 },
  ];
  // console.log(sponsors);
  return (
    <div className='cursor-pointer dark:bg-slate-50 flex flex-col items-center justify-center py-[2rem] lg:py-[1rem]'>
      <h2 className='lg:text-[2.1rem] text-[1rem] dark:text-slate-950 font-bold lg:pb-[1rem]'>
        Our Sponsors
      </h2>
      <Marquee pauseOnHover={true}>
        <div className='flex gap-[10rem] pt-[1rem]'>
          {sponsors.map((sponsor, id) => {
            return (
              <div key={id} className='h-[35px] relative w-[100px]'>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.brandName}
                  fill
                  className='w-full h-full object-cover'
                />
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}
