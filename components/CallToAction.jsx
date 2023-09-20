import React from "react";
import Phone from "../public/phone2.png";
import Image from "next/image";

export default function CallToAction() {
  return (
    <div className='bg-blue-50 dark:bg-agape-dark-blue px-[3rem] lg:px-[5rem] lg:py-0 py-[2rem] text-slate-950 dark:text-slate-50 relative'>
      <div className='flex lg:flex lg:gap-[-3rem] lg:py-0 items-center lg:px-[5rem]'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-[.5rem]'>
            <h2 className='font-bold text-[1.3rem] lg:text-[3rem]'>
              Your Pet's Health and <br /> happiness Starts Here ✅
            </h2>
            <p className='text-slate-600 dark:text-slate-100 text-[.7rem] lg:text-[1.1rem]'>
              What are you waiting for? Book an appointment today!
            </p>
          </div>
          <div className='pt-[1.2rem] flex gap-[.5rem] lg:gap-[1rem] w-full dark:text-slate-950'>
            <button className='font-semibold bg-agape-yellow px-[1rem] py-[.5rem] rounded-md text-[.8rem] lg:text-[1rem] '>
              Book Appointment
            </button>
            <button className='font-semibold border-2 border-agape-yellow px-[1rem] py-[.5rem] rounded-md text-[.8rem] lg:text-[1rem]'>
              Live Chart
            </button>
          </div>
        </div>
        <div className='h-[400px] hidden lg:block'>
          <Image
            src={Phone}
            alt='Agape '
            className='w-[450px] h-[450px] top-[-4rem] right-[10rem] absolute'
          />
        </div>
      </div>
    </div>
  );
}
