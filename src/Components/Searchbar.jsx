import React from "react";
import budImg from "../assets/images/budding-flower.jpg";

const Searchbar = () => {
  return (
    <section className="py-3 px-80">
      <div className="flex justify-between items-center">
        <div className="flex text-xl font-bold items-center gap-1">
          <img src={budImg} alt="" className="h-5 object-cover"/>
          <h1>Ecobazar</h1>
        </div>

        {/* Search input container */}
        <div className=""></div>

        {/* Shopping cart container */}
        <div className="flex ">
          {/* love icon */}
          <div></div>

          {/* shopping cart */}
          <div className="flex gap-2 text-xs">
            <div>
              {/* bag icon here */}
              <p className="bg-green-800 text-white text-xs p-1 rounded-full">2</p>
            </div>

            <div>
              <div className=""><p>shopping cart</p></div>
              <div className="font-bold">$57.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
