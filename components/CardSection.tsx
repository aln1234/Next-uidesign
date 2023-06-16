import Image from "next/image";
import React from "react";

const CardSection = () => {
  return (
    <section className="max-w-7xl  py-12">
      <div className="flex flex-row justify-between space-x-60  ">
        <Image
          src="/images/banner2.png"
          alt="banner2 "
          width={600}
          height={600}
          className="object-contain"
        />
        <div className="flex  flex-col max-w-xl gap-3">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-4xl font-bold tracking-wide text-[#273c75]">
              Choose the card
            </h1>
            <h1 className="text-4xl font-bold tracking-wide text-[#273c75]">
              that works for
            </h1>
            <h1 className="text-4xl font-bold tracking-wide text-[#273c75]">
              you
            </h1>
            <p className=" mt-4 text-sm font-medium text-gray-400">
              Zelle is here to make it easy to send,receive and request money
              with friends and family in minutes
            </p>
            <p className=" mt-4 text-sm font-medium text-gray-400">
              Zelle is here to make it easy to send,receive and request money
              with friends and family in minutes
            </p>
            <p
              className="text-white cursor-pointer bg-[#273c75] px-4 py-4 w-60 font-semibold font-main 
            tracking-wide text-center rounded-full text-base  hover:scale-110 duration-200 
            transition-all ease-in-out hover:drop-shadow-xl "
            >
              Learn more about Zelle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
