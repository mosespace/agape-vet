import React from "react";

export default function CallToAction() {
  return (
    <div className='bg-blue-50 dark:bg-agape-dark-blue px-[3rem] lg:px-[5rem] lg:py-[3rem] py-[2rem] text-slate-950 dark:text-slate-50'>
      <div className='flex flex-col gap-[.5rem]'>
        <h2 className='font-bold text-[1.3rem] '>
          Your Pet's Health and happiness Starts Here ✅
        </h2>
        <p className='text-slate-600 dark:text-slate-100 text-[.7rem]'>
          What are you waiting for? Book an appointment today!
        </p>
      </div>
      <div className='pt-[1.2rem] flex gap-[.5rem] w-full dark:text-slate-950'>
        <button className='font-semibold bg-agape-yellow px-[1rem] py-[.5rem] rounded-md text-[.8rem] '>
          Book Appointment
        </button>
        <button className='font-semibold border-2 border-agape-yellow px-[1rem] py-[.5rem] rounded-md text-[.8rem]'>
          Live Chart
        </button>
      </div>
    </div>
  );
}
