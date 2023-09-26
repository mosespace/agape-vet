import React from "react";
import Link from "next/link";
const bookAppointment =
  "https://wa.me/256783011694?text=Hello,%20i%20would%20like%20to%20book%20an%20appointment,%20I%20got%20to%20see%20this%20on%20your%20website%20and%20i%20decided%20to%20get%20in%20touch%20with%20you%20✅";

// https://www.tiktok.com/@tcomic1/video/7277644662670691590?q=uganda%20slap%20sound%20effect&t=1695301641013
export default function Hero() {
  return (
    <div className='min-h-screen w-full  lg:bg-opacity-10 lg:bg-cover lg:bg-no-repeat dark:bg-slate-950 dark:text-slate-50 flex lg:px-[5rem] px-[3rem] flex-col gap-[1.5rem] justify-center items-center py-[1.2rem]'>
      <div className='flex flex-col items-center justify-center gap-[1rem] text-center '>
        <h2 className='text-[2rem] md:text-[2.6rem] font-extrabold lg:text-[7rem]/[7.3rem]'>
          Your <span className='lg:bg-agape-yellow/60'>One-Stop</span> <br />{" "}
          <span className='lg:bg-agape-yellow/60'>Animal Care</span> Solution
        </h2>
        <p className='lg:text-[1.5rem]'>Let's
          Enhance your Animal's well-being with our all encompassing services! <br /> Book
          an appointment today!
        </p>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row gap-[1rem]'>
        <Link
          href={bookAppointment}
          className='bg-agape-dark-blue text-center font-bold outline-4 outline outline-agape-yellow  rounded-md'
        >
          <button className='px-[1rem] py-[.8rem]'>Book Appointment</button>
        </Link>
        <Link
          href='#'
          className='border-2 rounded-md border-agape-yellow font-bold outline-4 outline outline-agape-dark-blue'
        >
          <button className='px-[1rem] py-[.8rem]'>Download User Manual</button>
        </Link>
      </div>
    </div>
  );
}
