"use client";
import React from "react";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { useForm } from "react-hook-form";

export default function Footer() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const image = data.user_image_upload[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "agapevet");
    const uploadResponse = await fetch(
      "https://api.cloudinary.com/v1_1/dn3kh9v0w/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const uploadedImageData = await uploadResponse.json();
    const imageUrl = uploadedImageData.secure_url;
    console.log(imageUrl);
  }
  return (
    <>
      <div className='bg-slate-950 px-[3rem] text-slate-50 lg:px-[5rem] py-[2rem] flex flex-col flex-wrap justify-between'>
        {/* Learn More ---------Desktop */}
        <div className='flex lg:hidden'>
          <h2 className='text-3xl font-bold pb-[1rem]'>Agape</h2>
        </div>
        <div className='flex flex-wrap justify-between lg:pb-[3rem]'>
          {/* Learn More */}
          <div className='hidden lg:block'>
            <h2 className='text-3xl font-bold'>Agape</h2>
          </div>
          {/* Learn More */}
          <div className='flex flex-col '>
            <h2 className='font-semibold pb-3'>Learn More</h2>
            <ul className='flex flex-col gap-3 text-slate-500'>
              <Link href='#' className='hover:text-slate-50'>
                Blog
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                FAQ
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                Join Us
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                About Us
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                Privacy Policy
              </Link>
            </ul>
          </div>

          {/* Services */}
          <div className='flex flex-col'>
            <h2 className='font-semibold pb-3'>Services</h2>
            <ul className='flex flex-col gap-3 text-slate-500'>
              <Link href='#' className='hover:text-slate-50'>
                Medical
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                Medical
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                Pet Food
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                Grooming
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                Veterinary
              </Link>
            </ul>
          </div>

          {/* Contact Us */}
          <div className='flex flex-col'>
            <h2 className='font-semibold pb-3'>Contact Us</h2>
            <ul className='flex flex-col gap-3 text-slate-500'>
              <Link href='#' className='hover:text-slate-50'>
                Call Center
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                Whatsapp
              </Link>
            </ul>
          </div>

          {/* Form */}
          <div className='lg:flex flex-col hidden'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-[2rem]'
            >
              <label className='font-semibold' htmlFor='user_image_upload'>
                Upload File
              </label>
              <div className='flex flex-col rounded-md'>
                <input
                  {...register("user_image_upload")}
                  type='file'
                  name='user_image_upload'
                  id='user_image_upload'
                  accept='image/*'
                  aria-describedby='file_input_help'
                  className='bg-agape-dark-blue rounded-md'
                />
                <p className='text-slate-500'>
                  Please upload on of these types: [.jpg, .jpeg, png, webp]
                  (5MBS)
                </p>
              </div>
              <button
                type='submit'
                className='bg-agape-yellow font-semibold rounded-md px-[1.5rem] py-[.7rem] text-slate-50'
              >
                Upload to Cloud
              </button>
            </form>
          </div>

          {/* Social */}
          <div className='flex flex-col lg:items-center justify-center py-[1.5rem] lg:py-0'>
            <h2 className='font-semibold pb-3'>Social</h2>
            <ul className='flex items-center gap-3 text-agape-dark-blue'>
              <Link href='#' className='hover:text-slate-50'>
                <BsFacebook size={20} />
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                <BsInstagram size={20} />
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                <BsTiktok size={20} />
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                <BsLinkedin size={20} />
              </Link>
              <Link href='#' className='hover:text-slate-50'>
                <BsYoutube size={20} />
              </Link>
            </ul>
          </div>
        </div>

        {/* Downer Footer ---------Mobile & Desktop */}
        <div className='border-slate-500 border-t-2 py-[1rem] text-center text-[.8rem]'>
          @ 2023 BrandRider Corp | All Rights Reserved
        </div>
      </div>
    </>
  );
}

{
  /*agapevet
    agapeveterinarycenter
*/
}
