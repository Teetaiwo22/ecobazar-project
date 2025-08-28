import React from "react";
import x from "../assets/images/x.jpg"
import insta from "../assets/images/instagram 1.jpg"
import printerest from "../assets/images/printerest.jpg"

const NewsLetter = () => {
  return (
    <section className="px-80 mb-7 bg-gray-100 py-10">
      <div className="flex flex-row gap-8">
        {/* subscribe Heading */}
        <div className="">
          <h1 className="font-bold text-lg">Subcribe to our Newsletter</h1>
          <p className="text-xs text-gray-400">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* subscribe input and socials */}
        <div className="flex flex-row w-full items-center gap-10 ">
          {/* input */}
          <div className="w-full relative ">
            <input type="text" className="w-full border p-2 bg-white rounded-3xl text-xs" placeholder="Your email address"/>
            <button className="text-white py-2 px-10 absolute right-0 top-0 justify-center items-center rounded-3xl bg-green-600 text-xs font-bold">
              Subscribe
            </button>
          </div>
          {/* socials handles */}
          <div className="flex flex-row gap-3 items-center">
           <div className="w-full bg-green-600 p-3 rounded-full"> <img src={x} alt="" className="h-4 w-12 rounded-full"/></div>
            <div className="w-full"><img src={printerest} alt="" className="h-3"/></div>
            <div className="w-full"><img src={insta} alt="" className="h-3"/></div>
            <div className="w-full"><img src={x} alt="" className="h-3"/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
