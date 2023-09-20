import React from "react";

export default function CallToAction() {
  return (
    <div className='bg-blue-950 dark:bg-agape-dark-blue px-[3rem] lg:px-[5rem] lg:py-[3rem] py-[2rem] text-white'>
      <div className='flex flex-col gap-[.5rem]'>
        <h2 className='font-bold text-[1.3rem]'>
          Your Pet's Health and happiness Starts Here ✅
        </h2>
        <p className='text-slate-300 text-[.6rem]'>
          What are you waiting for? Book an appointment today!
        </p>
      </div>
      <div className='pt-[1.2rem] flex gap-[.5rem] w-full'>
        <button className='bg-sky-600 px-[1rem] py-[.5rem] rounded-md text-[.8rem]'>
          Book Appointment
        </button>
        <button className='border-2 border-sky-600 px-[1rem] py-[.5rem] rounded-md text-[.8rem]'>
          Live Chart
        </button>
      </div>
    </div>
  );
}
