import React from "react";
import orangeBgBlue from "../assets/images/news-orange.jpg";
import fArrow from "../assets/images/forward-arrow.jpg"
import tag from "../assets/images/tag.jpg"
import profileImg from "../assets/images/profile-img.jpg"
import message from "../assets/images/message.jpg"
import newsPlate from "../assets/images/news-plate.jpg"
import newsEgg from "../assets/images/news-egg.jpg"

const LatestNews = () => {
  return (
    <section className="px-80 mb-7">
      <div className="flex flex-col gap-4">
        {/* Latest news Heading */}
        <div className="flex flex-row justify-center items-center ">
          <h1 className="text-xl font-bold">Latest News</h1>
        </div>

        {/* Latest News Cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Latest News Card 1 */}
          <div className="flex flex-col border rounded shadow-lg ">
            <div className="relative">
              <img src={orangeBgBlue} alt="" />
              <div className="flex flex-col absolute bottom-4 left-4 bg-white px-2 py-1 rounded justify-center items-center">
                <p className="text-xs font-semibold">18</p>
                <p className="text-[8px]">NOV</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-3 py-4">
              <div className="flex flex-row gap-4">
                <div className="flex flex-row text-xs gap-1">
                  <img src={tag} alt="" className="h-4"/>
                  <p>Food</p>
                </div>
                <div className="flex flex-row text-xs gap-1">
                  <img src={profileImg} alt="" className="h-4"/>
                  <p>By Admin</p>
                </div>
                <div className="flex flex-row text-xs gap-1">
                  <img src={message} alt="" className="h-4"/>
                  <p>65 Comments</p>
                </div>
              </div>

              <div className="text-green-700">
                <p className="font-medium text-sm">Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
              </div>
              {/* button */}
              <div className="flex flex-row items-center gap-3">
                <p className="text-xs font-bold text-green-600 ">Read More</p>
                <img src={fArrow} alt="" className="h-3"/>
              </div>
            </div>


          </div>

          {/* Latest News Card 2 */}
          <div className="flex flex-col border rounded shadow-lg">
            <div className="relative">
              <img src={newsEgg} alt="" />
              <div className="flex flex-col absolute bottom-4 left-4 bg-gray-300 px-2 py-1 rounded justify-center items-center">
                <p className="text-xs font-semibold">29</p>
                <p className="text-[8px]">JAN</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-3 py-4">
              <div className="flex flex-row gap-4">
                <div className="flex flex-row text-xs gap-1">
                  <img src={tag} alt="" className="h-4"/>
                  <p>Food</p>
                </div>
                <div className="flex flex-row text-xs gap-1">
                  <img src={profileImg} alt="" className="h-4"/>
                  <p>By Admin</p>
                </div>
                <div className="flex flex-row text-xs gap-1">
                  <img src={message} alt="" className="h-4"/>
                  <p>65 Comments</p>
                </div>
              </div>

              <div className="">
                <p className="font-medium text-sm">Eget lobortis lorem lacinia. Vivamus pharetra semper,</p>
              </div>
              {/* button */}
              <div className="flex flex-row items-center gap-3">
                <p className="text-xs font-bold text-green-600 ">Read More</p>
                <img src={fArrow} alt="" className="h-3"/>
              </div>
            </div>


          </div>

           {/* Latest News Card 3 */}
          <div className="flex flex-col border rounded shadow-lg">
            <div className="relative">
              <img src={newsPlate} alt="" />
              <div className="flex flex-col absolute bottom-4 left-4 bg-gray-300 px-2 py-1 rounded justify-center items-center">
                <p className="text-xs font-semibold">21</p>
                <p className="text-[8px]">FEB</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-3 py-4">
              <div className="flex flex-row gap-4">
                <div className="flex flex-row text-xs gap-1">
                  <img src={tag} alt="" className="h-4"/>
                  <p>Food</p>
                </div>
                <div className="flex flex-row text-xs gap-1">
                  <img src={profileImg} alt="" className="h-4"/>
                  <p>By Admin</p>
                </div>
                <div className="flex flex-row text-xs gap-1">
                  <img src={message} alt="" className="h-4"/>
                  <p>65 Comments</p>
                </div>
              </div>

              <div className="">
                <p className=" text-sm">Maecenas blandit risus elementum mauris malesuada.</p>
              </div>
              {/* button */}
              <div className="flex flex-row items-center gap-3">
                <p className="text-xs font-bold text-green-600 ">Read More</p>
                <img src={fArrow} alt="" className="h-3"/>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
