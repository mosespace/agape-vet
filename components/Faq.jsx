"use client";
import Image from "next/image";
import React, { useState } from "react";
import Phone from "../public/phone.png";
import { BiPlus, BiMinus } from "react-icons/bi";

export default function Faq() {
  const data = [
    {
      id: 1,
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velitrem officia nobis iste quod voluptates repellat dolorem corporis voluptatem vel.",
    },
    {
      id: 2,
      question: "Is this home service?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velitrem officia nobis iste quod voluptates repellat dolorem corporis voluptatem vel.",
    },
    {
      id: 3,
      question: "Is this only for cows and dogs?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velitrem officia nobis iste quod voluptates repellat dolorem corporis voluptatem vel.",
    },
    {
      id: 4,
      question: "Are there any cancellation fees?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velitrem officia nobis iste quod voluptates repellat dolorem corporis voluptatem vel.",
    },
    {
      id: 5,
      question: "How to join Agape as a groomer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velitrem officia nobis iste quod voluptates repellat dolorem corporis voluptatem vel.",
    },
  ];

  const [questionOpen, setQuestionOpen] = useState({});

  const toggleMenu = (id) => {
    setQuestionOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className='dark:bg-slate-50 dark:text-slate-950 px-[3rem] lg:px-[5rem] lg:py-[3rem] py-[2rem]'>
      <div className='flex lg:px-[5rem] py-[1rem] flex-col-reverse lg:flex-row lg:gap-[15rem] md:items-start items-center'>
        <div className='flex flex-col gap-[1rem] md:w-full'>
          <h2 className='font-bold text-[1.3rem] lg:text-[2rem] py-4'>
            Frequently <br /> Asked Question
          </h2>
          {data.map((item) => (
            <div
              key={item.id}
              className={`${
                questionOpen
                  ? "text-[1.3rem] flex flex-col lg:w-[500px] border-2 border-agape-yellow px-[1.1rem] py-[.8rem] rounded-md"
                  : "bg-slate-200 text-[1.3rem] flex flex-col lg:w-[500px] border-2 border-agape-yellow px-[1.1rem] py-[.8rem] rounded-md"
              }`}
            >
              <div className='flex justify-between font-bold'>
                <span>{item.question}</span>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className='flex justify-between items-center'
                >
                  {questionOpen[item.id] ? (
                    <BiMinus size={20} />
                  ) : (
                    <BiPlus size={20} />
                  )}
                </button>
              </div>
              {questionOpen[item.id] && (
                <p className='text-[1rem] pt-[1rem]'>{item.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className='h-[400px] relative w-full'>
          <Image
            src={Phone}
            alt='Agape Demo Image'
            fill
            className='w-full h-full object-contain'
          />
        </div>
      </div>
    </div>
  );
}
