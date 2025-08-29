import React from "react";
import budImg from "../assets/images/budding-flower.jpg";
import securePayment from "../assets/images/secure-payment.jpg"
import mastercard from "../assets/images/Method=Mastercard.jpg"
import discovery from "../assets/images/Method=Discover.jpg"
import visa from "../assets/images/Method=Visa.jpg"
import applePay from "../assets/images/Method=ApplePay.jpg"
import logoRbg from "../assets/images/remove-bg-logo.png" 

const Footer = () => {
  return (
    <section className="px-80 bg-black pt-10">
      <div className="flex flex-col gap-8">
        {/* Row 1 footer */}
        <div className="grid grid-cols-6 gap-16 mr-16">
          {/* column 1 */}
          <div className="flex flex-col items-start col-span-2 ">
            <div className="flex flex-col gap-2">
              {/* footer logo and name */}
              <div className="flex flex-row items-center gap-2 text-white">
                <div className=" bg-black">
                  <img src={logoRbg} alt="" className="h-5 object-cover bg-black" />
                </div>
                <div className="text-lg font-bold">
                  <h1>Ecobazar</h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-white">
                {/* text */}
                <div className="text-xs text-gray-400 font-medium">
                  <p>
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida
                    turpis dui, eget bibendum magna congue nec.
                  </p>
                </div>
                {/* cell number */}
                <div className="flex flex-row gap-3 text-xs font-bold items-start">
                  <div className="border-b-2 border-green-400 pb-1">
                    <p>(219) 555-0114</p>
                  </div>
                  <div className="">
                    <p>or</p>
                  </div>
                  <div className="border-b-2 border-green-400 pb-1">
                    <p>Proxy@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between col-span-4">
            {/* column 2 */}
            <div className="flex flex-col gap-4">
              {/* row 1 */}
              <div className="text-xs font-bold text-white">
                <p>My Account</p>
              </div>
              {/* row 2 */}
              <div className="flex flex-col gap-2 text-xs ">
                <div className="text-gray-400 font-medium">
                  <p>My Account</p>
                </div>
                <div className="text-gray-400 font-medium">
                  <p>Order History</p>
                </div>
                <div className="text-white">
                  <p>Shoping Cart</p>
                </div>
                <div className="text-gray-400 font-medium">
                  <p>Wishlist</p>
                </div>
              </div>
            </div>

            {/* column 3 */}
            <div className="flex flex-col gap-4">
              {/* row 1 */}
              <div className="text-xs font-bold text-white">
                <p>Helps</p>
              </div>
              {/* row 2 */}
              <div className="flex flex-col gap-2 text-xs text-gray-400 font-medium">
                <div className="">
                  <p>Contact</p>
                </div>
                <div className="">
                  <p>Faqs</p>
                </div>
                <div className="">
                  <p>Terms & Condition</p>
                </div>
                <div className="">
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
            {/* column 4 */}
            <div className="flex flex-col gap-4">
              {/* row 1 */}
              <div className="text-xs font-bold text-white">
                <p>Proxy</p>
              </div>
              {/* row 2 */}
              <div className="flex flex-col gap-2 text-xs text-gray-400 font-medium">
                <div className="">
                  <p>About</p>
                </div>
                <div className="">
                  <p>Shop</p>
                </div>
                <div className="">
                  <p>Product</p>
                </div>
                <div className="">
                  <p>Track Order</p>
                </div>
              </div>
            </div>
            {/* column 5 */}
            <div className="flex flex-col gap-4">
              {/* row 1 */}
              <div className="text-xs font-bold text-white">
                <p>Categories</p>
              </div>
              {/* row 2 */}
              <div className="flex flex-col gap-2 text-xs text-gray-400 font-medium">
                <div className="">
                  <p>Fruit & Vegetables</p>
                </div>
                <div className="">
                  <p>Meat & Fish</p>
                </div>
                <div className="">
                  <p>Bread & Bakery</p>
                </div>
                <div className="">
                  <p>Beauty & Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 footer */}
        <div className="flex flex-row justify-between items-center py-4 border-t border-gray-800">
          <div className="text-xs text-gray-400"><p>Ecobazar eCommerce © 2021. All Rights Reserved</p></div>
          <div className="flex flex-row gap-1">
            <div className=""><img src={applePay} alt="" className="h-5"/></div>
            <div className=""><img src={visa} alt="" className="h-5"/></div>
            <div className=""><img src={discovery} alt="" className="h-5"/></div>
            <div className=""><img src={mastercard} alt="" className="h-5"/></div>
            <div className=""><img src={securePayment} alt="" className="h-5"/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
