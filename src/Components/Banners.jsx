import React from "react";
import fArrow from "../assets/images/forward-arrow.jpg";

const Banners = () => {
  return (
    <section className="px-80 border mb-10">
      <div className="border-2 flex flex-row gap-4">
        {/* Banner 1 */}
        <div className="bg-[url('/blue-banner.png')] bg-cover bg-no-repeat w-1/3">
          <div className="text-white flex flex-col justify-center items-center gap-1 pt-6">
            <div>
              <p className="text-xs font-bold">BEST DEALS</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Sale of the Month</h1>
            </div>
            {/* time */}
            <div className="flex flex-row justify-center items-center gap-2">
              {/* days */}
              <div className="flex flex-row justify-start gap-2">
                <div className="flex flex-col justify-center items-center">
                  <h3>00</h3>
                  <p className="text-[8px] font-bold">DAYS</p>
                </div>
                <div className="">
                  <span>:</span>
                </div>
              </div>
              {/* HOURS */}
              <div className="flex flex-row justify-start gap-2">
                <div className="flex flex-col justify-between items-center">
                  <h3>02</h3>
                  <p className="text-[8px] font-bold">HOURS</p>
                </div>
                <div className="">
                  <span>:</span>
                </div>
              </div>
              {/* min */}
              <div className="flex flex-row justify-start gap-2">
                <div className="flex flex-col justify-center items-center">
                  <h3>18</h3>
                  <p className="text-[8px] font-bold">MINS</p>
                </div>
                <div className="">
                  <span>:</span>
                </div>
              </div>
              {/* SECS */}
              <div className="flex flex-row justify-start gap-2">
                <div className="flex flex-col justify-between items-center">
                  <h3>46</h3>
                  <p className="text-[8px] font-bold">SECS</p>
                </div>
                <div className="hidden">
                  <span>:</span>
                </div>
              </div>

             
            </div>
            {/* SHOP NOW CTA BUTTON */}
            <div className="flex flex-row items-center justify-center gap-2 py-2 px-4 bg-white rounded rounded-2xl mt-4 mb-60">
              <div className="text-green-600 text-xs font-bold">Shop Now</div>
              <div className="">
                <img src={fArrow} alt="" className="h-2"/>
              </div>
            </div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="bg-[url('/black-banner.jpg')] bg-cover bg-no-repeat w-1/3">
          <div className="text-white flex flex-col justify-center items-center gap-1 pt-6">
            <div>
              <p className="text-xs font-bold">BEST DEALS</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Sale of the Month</h1>
            </div>
            {/* discount */}
            <div className="flex flex-row justify-center items-center text-xs text-black mt-1">
              <p className="text-white">Started at</p>
              <p className="py-1 px-2 rounded font-bold bg-black text-orange-400">$79.99</p>
            </div>
            {/* SHOP NOW CTA BUTTON */}
            <div className="flex flex-row items-center justify-center gap-2 py-2 px-4 bg-white rounded rounded-2xl mt-4 mb-60">
              <div className="text-green-600 text-xs font-bold">Shop Now</div>
              <div className="">
                <img src={fArrow} alt="" className="h-2"/>
              </div>
            </div>
          </div>
        </div>

        {/* Banner 3 */}
        <div className="bg-[url('/yellow-banner.jpg')] bg-cover bg-no-repeat w-1/3">
          <div className="text-white flex flex-col justify-center items-center gap-1 pt-6">
            <div>
              <p className="text-xs font-bold">BEST DEALS</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Sale of the Month</h1>
            </div>
            {/* discount */}
            <div className="flex flex-row justify-center items-center gap-2 text-xs text-black mt-1">
              <p>Up to</p>
              <p className="py-1 px-2 rounded font-bold bg-black text-yellow-400">64% OFF</p>
            </div>
            {/* SHOP NOW CTA BUTTON */}
            <div className="flex flex-row items-center justify-center gap-2 py-2 px-4 bg-white rounded rounded-2xl mt-4 mb-60">
              <div className="text-green-600 text-xs font-bold">Shop Now</div>
              <div className="">
                <img src={fArrow} alt="" className="h-2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
