"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ToggleBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  // if (!mounted) {
  //   return null;
  // }
  return (
    <button
      className='px-[.7rem] py-[.8rem] rounded-md dark:bg-[#212933]'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <BsMoon size={21} color='white' />
      ) : (
        <BsSun size={21} color='white' />
      )}
    </button>
  );
}
