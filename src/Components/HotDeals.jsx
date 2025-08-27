import React from "react";
import fArrow from "../assets/images/forward-arrow.jpg";
import hotapple from "../assets/images/hot-apple.jpg";
import love from "../assets/images/love.jpg";
import eye from "../assets/images/eyes.jpg";
import bag from "../assets/images/Bag.jpg";
import cabbage from "../assets/images/cabbage.jpg";
import star1 from "../assets/images/Star 1.jpg";
import star5 from "../assets/images/Star 5.jpg"

const HotDeals = () => {
  return (
    <section className="px-80">
      <div className="">
        {/* Hot deals Heading */}
        <div className="flex flex-row mb-5 justify-between">
          <h1 className="text-xl font-bold">Hot Deals</h1>
          <div className="flex flex-row justify-center items-center gap-3">
            <p className="text-xs text-green-500 ">View All</p>
            <img src={fArrow} alt="" className="h-3" />
          </div>
        </div>

        {/* Hot deals cards */}
        <div class="grid grid-cols-5 grid-rows-3">
          <div class="col-span-2 row-span-2 bg-orange-100">
            {/*card 1 - biggest card - add to cart red n blue card */}
            <div className="flex-row relative border-2 border-green-600">
              <div className="w-200">
                <img src={hotapple} alt="" className="" />
              </div>
              <div className="flex flex-row justify-center items-center absolute top-3 left-3 gap-2">
                <p className="bg-red-600 text-white text-xs p-1 rounded">
                  Sale 50%
                </p>
                <p className="bg-blue-600 text-white text-xs p-1 rounded">
                  Best Sale
                </p>
              </div>

              <div className="flex flex-row justify-between items-center">
                <img src={love} alt="" />
                <button className="flex flex-row">
                  Add to Cart
                  <span>
                    <img src={bag} alt="" />
                  </span>
                </button>
                <img src={eye} alt="" />
              </div>
            </div>

            <div className=""></div>
          </div>

          {/*card 2 cabbage  */}
          <div className="flex flex-col border-2 border-green-600 shadow">
            {/* image */}
            <div className="relative pt-4">
              <img src={cabbage} alt="" />
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-sm">
                  <p>Chinese cabbage</p>
                </div>
                <div className="flex flex-row gap-1 text-base font-bold">
                  <p>$12.00</p>
                  <p className="text-gray-400 line-through hidden">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                  <img src={star5} alt="" />
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-300 rounded-full">
                <img src={bag} alt="" className="rounded-full" />
              </div>
            </div>
          </div>

          <div class="bg-orange-300">03</div>
          <div class=" bg-orange-600 ">04</div>
          <div class="bg-orange-400">05</div>
          <div class="bg-orange-500">06</div>
          <div class="bg-orange-200">07</div>
          <div class="bg-orange-300">08</div>
          <div class=" bg-orange-600 ">09</div>
          <div class="bg-orange-400">10</div>
          <div class="bg-orange-500">11</div>
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
