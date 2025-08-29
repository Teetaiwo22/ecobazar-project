import React from "react";
import locationIcon from "../assets/images/Map Pin.jpg";
import downArrow from "../assets/images/Group (3).jpg"

const Signup = () => {
  return (
    <section className="px-80 border-b py-2">
      <div className="flex justify-between items-center text-xs text-gray-400">
        <div className="flex flex-row gap-1 items-center border">
          <img src={locationIcon} alt="" className="h-3" />
          <p className="text-[11px]">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>

        <div className="flex flex-row items-center gap-3 ">
          <div className="flex flex-row gap-3 pr-3 border-r-2 ">
            <div className="flex flex-row items-center gap-2">
              <p>Eng</p>
              <img src={downArrow} alt="" className="h-1.5"/>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p>USD</p>
              <img src={downArrow} alt="" className="h-1.5"/>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <p>Sign in</p>
            </div>
            <div className=""><p>/</p></div>
            <div>
              <p>Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
