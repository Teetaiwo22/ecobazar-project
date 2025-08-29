import React from "react";
import social1 from "../assets/images/socials1.jpg";
import social2 from "../assets/images/socials2.jpg";
import social3 from "../assets/images/socials3.jpg";
import social4 from "../assets/images/socials4.jpg";
import social5 from "../assets/images/socials5.jpg";
import social6 from "../assets/images/socials6.jpg";
import follow1 from "../assets/images/followus1.jpg";
import follow2 from "../assets/images/folllowus2.jpg";
import follow3 from "../assets/images/followus3.jpg";
import follow4 from "../assets/images/followus4.jpg";
import follow5 from "../assets/images/followus5.jpg";
import follow6 from "../assets/images/followus6.jpg";

const Socials = () => {
  return (
    <section className="px-80 mb-7">
      <div className="">
        {/* Sponsorers Logos */}
        <div className="flex flex-row justify-between items-center py-8">
          <div className="">
            <img src={social1} alt="" className="h-5" />
          </div>
          <span className="border-r-2 text-white">hh</span>
          <div className="">
            <img src={social2} alt="" className="h-5" />
          </div>
          <span className="border-r-2 text-white">hh</span>
          <div className="">
            <img src={social3} alt="" className="h-5" />
          </div>
          <span className="border-r-2 text-white">hh</span>
          <div className="">
            <img src={social4} alt="" className="h-5" />
          </div>
          <span className="border-r-2 text-white">hh</span>
          <div className="">
            <img src={social5} alt="" className="h-5" />
          </div>
          <span className="border-r-2 text-white">hh</span>
          <div className="">
            <img src={social6} alt="" className="h-5" />
          </div>
        </div>

        {/* Follows heading */}
        <div className="">
          <div className="flex flex-row justify-center items-center mb-4">
            <h1 className="text-xl font-bold">Follow us on Instagram</h1>
          </div>

          {/* follow us card */}
          <div className="grid grid-cols-6 gap-4">
            <div className="">
              <img src={follow1} alt="" />
            </div>
            <div className="">
              <img src={follow2} alt="" />
            </div>
            <div className="">
              <img src={follow3} alt="" />
            </div>
            <div className="">
              <img src={follow4} alt="" />
            </div>
            <div className="">
              <img src={follow5} alt="" />
            </div>
            <div className="">
              <img src={follow6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
