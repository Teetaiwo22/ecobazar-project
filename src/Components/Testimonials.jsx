import React from "react";
import fArrow from "../assets/images/forward-arrow.jpg";
import blackArrow from "../assets/images/black-arrow.jpg";
import star1 from "../assets/images/Star 1.jpg";
import dp from "../assets/images/profile-pix.jpg";
import quotes from "../assets/images/quotes.jpg";
import dp2 from "../assets/images/dp2.jpg"
import dp3 from "../assets/images/dp3.jpg"

const Testimonials = () => {
  return (
    <section className="px-80 mb-7 bg-gray-100 py-10">
      <div className="">
        {/* Testimonials Headings */}
        <div className="flex flex-row mb-5 justify-between items-center">
          <h1 className="text-xl font-bold">Client Testimonials</h1>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="p-3 bg-green-600 rounded-full">
              <img src={blackArrow} alt="" className="h-2 " />
            </div>
            <div className="p-3 bg-white rounded-full">
              <img src={fArrow} alt="" className="h-2" />
            </div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* first card */}
          <div className="flex flex-col bg-white rounded rounded-xl gap-4 px-4 py-4">
            <div className="">
              <img src={quotes} alt="" className="h-4" />
            </div>
            <div className="">
              <p className="text-[11px]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>
            {/* image section */}
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <img src={dp} alt="" className="h-10" />
                <div className="text-[9.5px] font-semibold">
                  <h4>Robert Fox</h4>
                  <p className="text-gray-400">Customer</p>
                </div>
              </div>

              <div className="flex flex-row ">
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
              </div>
            </div>
          </div>

          {/* 2rd card */}
          <div className="flex flex-col bg-white rounded rounded-xl gap-4 px-4 py-4">
            <div className="">
              <img src={quotes} alt="" className="h-4" />
            </div>
            <div className="">
              <p className="text-[11px]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>
            {/* image section */}
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <img src={dp2} alt="" className="h-10" />
                <div className="text-[9.5px] font-semibold">
                  <h4>Robert Fox</h4>
                  <p className="text-gray-400">Customer</p>
                </div>
              </div>

              <div className="flex flex-row ">
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
              </div>
            </div>
          </div>

          {/* 3rd card */}
          <div className="flex flex-col bg-white rounded rounded-xl gap-4 px-4 py-4">
            <div className="">
              <img src={quotes} alt="" className="h-4" />
            </div>
            <div className="">
              <p className="text-[11px]">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
            </div>
            {/* image section */}
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                <img src={dp3} alt="" className="h-10" />
                <div className="text-[9.5px] font-semibold">
                  <h4>Robert Fox</h4>
                  <p className="text-gray-400">Customer</p>
                </div>
              </div>

              <div className="flex flex-row ">
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
                <img src={star1} alt="" className="h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
