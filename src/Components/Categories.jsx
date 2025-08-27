import React from "react";
import fArrow from "../assets/images/forward-arrow.jpg";
import freshFruit from "../assets/images/fruits.png";
import FreshVeg from "../assets/images/fresh-vegetables.jpg"
import meatfish from "../assets/images/meatfish.jpg"
import snacks from "../assets/images/snacks.jpg"
import beverages from "../assets/images/Beverages.jpg"
import bh from "../assets/images/beauty&health.jpg"
import bb from "../assets/images/bread&bakery.png"
import bn from "../assets/images/baking needs.png"
import cooking from "../assets/images/cooking.png"
import df from "../assets/images/diabetic food.jpg"
import dd from "../assets/images/dish detergent.jpg"
import oil from "../assets/images/oil.jpg"


const Categories = () => {
  return (
    <section className="mb-10 px-80 border">
      <div className="flex flex-col">
        {/* Cate Heading */}
        <div className="flex flex-row mb-5 justify-between">
          <h1 className="text-xl font-bold">Popular Categories</h1>
          <div className="flex flex-row justify-center items-center gap-3">
            <p className="text-xs text-green-500 ">View All</p>
            <img src={fArrow} alt="" className="h-3" />
          </div>
        </div>

        {/* Categories Cards */}
        <div className="grid grid-cols-6 gap-4 w-full border">
          {/* box 1 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={freshFruit} alt="" className=" object-cover" />
            <p className="text-xs py-4 font-bold">Fresh Fruit</p>
          </div>
          {/* box 2 */}
          <div className="flex flex-col justify-center items-center border-2 border-green-600 rounded w-1/6  w-full shadow-xl">
            <img src={FreshVeg} alt="" className="mb-4 object-cover" />
            <p className="text-xs font-bold ">Fresh Vegetables</p>
          </div>
          {/* box 3 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={meatfish} alt="" className=" object-cover" />
            <p className="text-xs font-bold py-4">Fresh Fruit</p>
          </div>
          {/* box 4 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={snacks} alt="" className=" object-cover" />
            <p className="text-xs font-bold py-4">Snacks</p>
          </div>
          {/* box 5 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={beverages} alt="" className=" object-cover" />
            <p className="text-xs font-bold py-4">Beverages</p>
          </div>
          {/* box 6 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={bh} alt="" className=" object-cover" />
            <p className="text-xs font-bold py-4">Beauty and Health</p>
          </div>
          {/* box 7 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={bb} alt="" className=" object-cover" />
            <p className="text-xs font-bold py-4">Bread & Bakery</p>
          </div>
          {/* box 8 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={bn} alt="" className=" object-cover" />
            <p className="text-xs font-bold py-4">Baking Needs</p>
          </div>
          {/* box 9 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6  w-full">
            <img src={cooking} alt="" className=" object-cover " />
            <p className="text-xs font-bold py-4">Cooking</p>
          </div>
          {/* box 10 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={df} alt="" className=" object-cover " />
            <p className="text-xs font-bold py-4">Diabetic Food</p>
          </div>
          {/* box 11 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6  w-full">
            <img src={dd} alt="" className=" object-cover " />
            <p className="text-xs font-bold py-4">Dish Detergent</p>
          </div>
          {/* box 12 */}
          <div className="flex flex-col justify-center items-center  border border-gray-200 rounded w-1/6 w-full">
            <img src={oil} alt="" className="object-cover" />
            <p className="text-xs font-bold py-4">Oil</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
