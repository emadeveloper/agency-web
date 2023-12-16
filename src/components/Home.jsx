import { Carousel } from "flowbite-react";
import React from "react";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          {/* hero image */}
         {/*  <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <img src="" alt="" />
          </div>
          {/* hero text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
              Lessons and insights{" "}
              <span className="text-brandPrimary leading-snug">
                {" "}
                from 8 years
              </span>
            </h1>
            <p className="text-neutralDGray text-base mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="btn-primary">Register</button>
          </div>
          {/* hero image */}
        {/*   <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <img src="" alt="" />
          </div> */}
          {/* hero text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
              Learn and Earn Money {" "}
              <span className="text-brandPrimary leading-snug">
                {" "}
                in 4 Months
              </span>
            </h1>
            <p className="text-neutralDGray text-base mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="btn-primary">Register</button>
          </div>
          {/* hero image */}
          {/* <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <img src="" alt="" />
          </div> */}
          {/* hero text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
              Lessons and insights{" "}
              <span className="text-brandPrimary leading-snug">
                {" "}
                from 8 years
              </span>
            </h1>
            <p className="text-neutralDGray text-base mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="btn-primary">Register</button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
