import React from "react";
import Bannerbig from "../assets/images/Bannar Big.jpg";
import Banner2 from "../assets/images/Bannar2.jpg";
import Banner3 from "../assets/images/Bannar3.jpg";
import truck from "../assets/images/delivery-truck 1.jpg"
import headphone from "../assets/images/headphones 1.jpg"
import bag from "../assets/images/shopping-bag.jpg"
import package1 from "../assets/images/package.jpg"

const HeroSection = () => {
  return (
    <section className="py-4 px-80 border">
      <div className="flex flex-col">
        <div className="flex flex-row  gap-4">
          <div className="w-4/6">
            <img
              src={Bannerbig}
              alt=""
              className=" h-full object-cover w-full"
            />
          </div>
          <div className="flex flex-col w-2/6 gap-4">
            <div className="">
              <img src={Banner2} alt="" className="object-cover w-full" />
            </div>
            <div className="">
              <img src={Banner3} alt="" className="object-cover w-full" />
            </div>
          </div>
        </div>
        
        <div className="mt-5 p-5 mb-10 shadow-xl">
            <div className="flex flex-row justify-center">
                <div className="w-1/4 flex flex-row text-xs gap-2 items-center">
                    <img src={truck} alt="" className="h-5"/>
                    <div>
                        <h5 className="font-bold">Free Shipping</h5>
                        <p>Free shipping on all your order</p>
                    </div>
                </div>
                <div className="w-1/4 flex flex-row text-xs gap-2 items-center">
                    <img src={headphone} alt="" className="h-5"/>
                    <div>
                        <h5 className="font-bold">Customer Support 24/7</h5>
                        <p>Instant access to Support</p>
                    </div>
                </div>
                <div className="w-1/4 flex flex-row text-xs gap-2 items-center">
                    <img src={bag} alt="" className="h-5"/>
                    <div>
                        <h5 className="font-bold">100% Secure Payment</h5>
                        <p>We ensure your money is save</p>
                    </div>
                </div>
                <div className="w-1/4 flex flex-row text-xs gap-2 items-center">
                    <img src={package1} alt="" className="h-5"/>
                    <div>
                        <h5 className="font-bold">Money-Back Guarantee</h5>
                        <p>30 Days Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
