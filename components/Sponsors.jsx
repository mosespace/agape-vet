import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Sponsor1 from "../public/logo White.svg";

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
  return (
    <div className='cursor-pointer dark:bg-slate-950 flex flex-col items-center justify-center lg:py-[2rem]'>
      <h2 className='text-[2.1rem] font-bold'>Our Sponsors</h2>
      <Marquee pauseOnHover={true}>
        <div className='flex'>
          {sponsors.map((sponsor, id) => {
            <div key={id} className='h-[35px] relative w-[100px]'>
              <Image
                src={sponsor.logo}
                alt={sponsor.brandName}
                fill
                className='w-full h-full object-cover'
              />
            </div>;
          })}
        </div>
      </Marquee>
    </div>
  );
}
