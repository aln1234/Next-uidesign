import Image from "next/image";
import React from "react";
import { AiFillApple } from "react-icons/ai";

export const Hero = () => {
  return (
    <section className="my-6">
      <div className="flex justify-between  gap-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col flex-start gap-2 ">
            <h3 className="uppercase font-main font-semibold text-gray-600 mb-6">
              U.S. Bank Online Banking
            </h3>
            <h1 className="font-main antialiased text-[#273c75] text-6xl font-bold tracking-wide">
              Better banking is
            </h1>
            <h1 className="font-main antialiased text-[#273c75] font-bold text-6xl tracking-wide">
              just a few
            </h1>
            <h1 className="font-main antialiased text-[#273c75] font-bold text-6xl tracking-wide">
              keystrokes away.
            </h1>
          </div>
          {/* button */}
          <div className="flex my-12 gap-6 items-center ">
            <p
              className="text-white cursor-pointer bg-[#273c75] px-6 py-4 font-semibold font-main 
            tracking-wide text-center rounded-full text-base  hover:scale-110 duration-200 
            transition-all ease-in-out hover:drop-shadow-xl "
            >
              Learn more about Zelle
            </p>
            <div
              className=" bg-[#273c75] px-3 py-3 rounded-full cursor-pointer 
            hover:scale-110 duration-200 transition-all ease-in-out hover:drop-shadow-xl"
            >
              {" "}
              <AiFillApple className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/banner.png"
            alt="banner image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};
