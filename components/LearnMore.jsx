import React from "react";

export default function LearnMore() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block bg-[url('/bg.jpg')] px-[3rem] bg-cover bg-no-repeat  lg:px-[5rem] lg:py-[3rem] py-[2rem]">
        <div className='flex lg:px-[5rem] py-[1rem] lg:py-[1rem] flex-col-reverse lg:items-start lg:flex-row lg:justify-between items-center'>
          <div className='flex flex-col gap-[1rem]'>
            <h2 className='font-bold text-[1.3rem] lg:text-[2rem] py-1'>
              Envisioning a brighter <br /> future for animals.
            </h2>
            <p className='text-[1rem]'>
              Our efforts have resulted in significant improvements <br /> in
              pet care.Will you be part of our journey?
            </p>
            <div className='text-[1.3rem] pt-[1rem] lg:w-[500px]'>
              <button className='text-[1rem]  px-[1.1rem] py-[.8rem] bg-agape-dark-blue hover:bg-agape-yellow rounded-md'>
                Learn More
              </button>
            </div>
          </div>
          <div className='grid lg:px-0 grid-cols-2 gap-1 text-start lg:grid lg:grid-cols-2 lg:gap-4 lg:text-center text-slate-50'>
            <div className='bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md py-[3rem] px-[3rem] bg-white cursor-pointer hover:bg-agape-yellow'>
              <h3 className='lg:text-[1.6rem] font-bold'>1,300+</h3>
              <p>Pets</p>
            </div>
            <div className='bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md py-[3rem] px-[3rem] bg-white cursor-pointer hover:bg-agape-yellow'>
              <h3 className='lg:text-[1.6rem] font-bold'>200+</h3>
              <p>Veterinarians</p>
            </div>
            <div className='bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md py-[3rem] px-[3rem] bg-white cursor-pointer hover:bg-agape-yellow'>
              <h3 className='lg:text-[1.6rem] font-bold'>002</h3>
              <p>Areas</p>
            </div>
            <div className='backdrop-filter backdrop-blur-lg rounded-md py-[3rem] px-[3rem] bg-agape-yellow cursor-pointer hover:bg-agape-dark-blue'>
              <h3 className='lg:text-[1.6rem] font-bold'>038</h3>
              <p>Veterinary CLinic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className='lg:hidden bg-agape-light-blue px-[3rem] py-[2rem]'>
        <div className='flex py-[1rem] flex-col-reverse lg:items-start items-center'>
          <div className='flex flex-col-reverse gap-[1rem] text-slate-50'>
            <div>
              <h2 className='font-bold text-[1.3rem] lg:text-[2rem] py-1'>
                Envisioning a brighter <br /> future for animals.
              </h2>
              <p className='text-[1rem]'>
                Our efforts have resulted in significant improvements <br /> in
                pet care.Will you be part of our journey?
              </p>
              <div className='text-[1.3rem] pt-[1rem]'>
                <button className='text-[1rem]  px-[1.1rem] py-[.8rem] shadow-lg bg-agape-dark-blue hover:bg-agape-yellow rounded-md'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 text-slate-50'>
              <div className='hidden rounded-md py-[3rem] text-center px-[3rem] bg-slate-950 cursor-pointer hover:bg-agape-yellow w-full'>
                <h3 className='text-[1.6rem] font-bold'>1,300+</h3>
                <p>Pets</p>
              </div>
              <div className='hidden rounded-md py-[3rem] text-center px-[3rem] bg-slate-950 cursor-pointer hover:bg-agape-yellow w-full'>
                <h3 className='text-[1.6rem] font-bold'>200+</h3>
                <p>Veterinarians</p>
              </div>
              <div className='rounded-md py-[3rem] text-center px-[3rem] bg-slate-950 cursor-pointer hover:bg-agape-yellow w-full'>
                <h3 className='text-[1.6rem] font-bold'>002+</h3>
                <p>Areas</p>
              </div>
              <div className='rounded-md py-[3rem] text-center px-[3rem] bg-slate-950 cursor-pointer hover:bg-agape-yellow w-full'>
                <h3 className='text-[1.6rem] font-bold'>038+</h3>
                <p>Veterinary CLinic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
