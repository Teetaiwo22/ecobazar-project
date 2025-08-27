import React from "react";
import fArrow from "../assets/images/forward-arrow.jpg";
import apple from "../assets/images/apple.jpg";
import star1 from "../assets/images/Star 1.jpg";
import star5 from "../assets/images/Star 5.jpg";
import bag from "../assets/images/Bag.jpg";
import eye from "../assets/images/eyes.jpg";
import love from "../assets/images/love.jpg";
import malta from "../assets/images/fresh-indi-orange.jpg"
import cabbage from "../assets/images/cabbage.jpg"
import lettuce from "../assets/images/lettuce.png"
import eggplant from "../assets/images/eggplant.jpg"
import potatoes from "../assets/images/potatoes.jpg"
import corn from "../assets/images/corn.jpg"
import cauliflower from "../assets/images/cauliflower.jpg"
import capsicum from "../assets/images/capsicum.jpg"
import chill from "../assets/images/green-chill.jpg"


const Products = () => {
  return (
    <section className="mb-10 px-80 border">
      <div className="">
        {/* Procuts Heading */}
        <div className="flex flex-row mb-5 justify-between">
          <h1 className="text-xl font-bold">Popular Products</h1>
          <div className="flex flex-row justify-center items-center gap-3">
            <p className="text-xs text-green-500 ">View All</p>
            <img src={fArrow} alt="" className="h-3" />
          </div>
        </div>

        {/* Popular Products cards */}
        <div className="grid grid-cols-5 border">
          {/* card 1 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4 border">
              <img src={apple} alt="" />
              <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white text-xs">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1 ">
                <div className="text-xs">
                  <p className="">Green Apple</p>
                </div>
                <div className="flex flex-row gap-1 font-bold text-xs">
                  <p className="">$14.99</p>
                  <p className="text-gray-400 line-through">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row ">
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4">
              <img src={malta} alt="" />
              <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white hidden">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Fresh Indian Malta</p>
                </div>
                <div className="flex flex-row gap-1 text-xs font-bold">
                  <p>$20.00</p>
                  <p className="text-gray-400 line-through hidden">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex flex-col border-2 border-green-600 shadow">
            {/* image */}
            <div className="relative pt-4">
              <img src={cabbage} alt="" />
              {/* <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white hidden">
                Sale 50%
              </p> */}
              <div className="flex flex-col justify-center items-center gap-2 absolute top-4 right-3">
                <div className="p-2 border rounded-full flex items-center bg-gray-200">
                  <img src={eye} alt="" className="rounded-full h-4"/>
                </div>
                <div className="p-2 border rounded-full bg-gray-200">
                  <img src={love} alt="" className="h-4 rounded-full"/>
                </div>
              </div>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Chinese cabbage</p>
                </div>
                <div className="flex flex-row gap-1 text-xs font-bold">
                  <p>$12.00</p>
                  <p className="text-gray-400 line-through hidden">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-green-600 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4">
              <img src={lettuce} alt="" />
              <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white hidden">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Green Lettuce</p>
                </div>
                <div className="flex flex-row gap-1 text-base font-bold text-xs">
                  <p>$9.00</p>
                  <p className="text-gray-400 line-through hidden">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                   <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4">
              <img src={eggplant} alt="" />
              <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white hidden">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Eggplant</p>
                </div>
                <div className="flex flex-row gap-1 text-xs font-bold ">
                  <p>$34.00</p>
                  <p className="text-gray-400 line-through hidden">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4">
              <img src={potatoes} alt="" />
              <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white hidden">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Big Potatoes</p>
                </div>
                <div className="flex flex-row gap-1 text-xs font-bold">
                  <p>$20.00</p>
                  <p className="text-gray-400 line-through hidden">$20.00</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                 <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>

          {/* card 7 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4">
              <img src={corn} alt="" />
              <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white hidden">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Corn</p>
                </div>
                <div className="flex flex-row gap-1 text-xs font-bold">
                  <p>$20.00</p>
                  <p className="text-gray-400 line-through hidden">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>

          {/* card 8 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4">
              <img src={cauliflower} alt="" />
              <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white hidden">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Fresh Cauliflower</p>
                </div>
                <div className="flex flex-row gap-1 text-xs font-bold">
                  <p>$12.00</p>
                  <p className="text-gray-400 line-through hidden">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>

          {/* card 9 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4">
              <img src={capsicum} alt="" />
              <p className="absolute top-4 left-3 text-xs bg-red-600 py-1 px-2 rounded text-white">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Green Capscicum</p>
                </div>
                <div className="flex flex-row gap-1 text-xs font-bold">
                  <p>$9.00</p>
                  <p className="text-gray-400 line-through">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>

          {/* card 10 */}
          <div className="flex flex-col border">
            {/* image */}
            <div className="relative pt-4">
              <img src={chill} alt="" />
              <p className="absolute top-4 left-3 text-sm bg-red-600 py-1 px-2 rounded text-white hidden">
                Sale 50%
              </p>
            </div>

            {/* image details */}
            <div className="flex flex-row justify-between items-center px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="text-xs">
                  <p>Green Chili</p>
                </div>
                <div className="flex flex-row gap-1 text-xs font-bold">
                  <p>$34.00</p>
                  <p className="text-gray-400 line-through hidden">$20.99</p>
                </div>
                {/* stars */}
                <div className="flex flex-row">
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star1} alt="" className="h-3"/>
                  <img src={star5} alt="" className="h-3"/>
                </div>
              </div>

              {/* shoping bag */}
              <div className=" p-2 bg-gray-200 rounded-full">
                <img src={bag} alt="" className="rounded-full h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
