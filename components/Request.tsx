import Image from "next/image";
import React from "react";

const Request = () => {
  return (
    <section className="max-w-6xl mx-auto py-12">
      <div className="flex space-x-12">
        <div className="flex flex-col flex-start gap-2 ">
          <h1 className="font-main text-5xl font-semibold text-[#273c75]">
            Send, receive
          </h1>
          <h1 className="font-main text-5xl font-semibold text-[#273c75]">
            and request
          </h1>
          <h1 className="font-main text-5xl font-semibold text-[#273c75]">
            money
          </h1>
          <p className="text-sm font-medium text-gray-400">
            Zelle is here to make it easy to send,receive and request money with
            friends and family in minutes
          </p>
        </div>
        <div className="flex space-x-12 max-w-2xl">
          <div
            className="bg-white rounded-2xl drop-shadow-2xl 
          cursor-pointer hover:-translate-y-6 duration-200 transition-all ease-in-out   "
          >
            <Image
              src="/images/image2.png"
              alt="image 1"
              width={400}
              height={400}
            />
            <h2 className="px-8 mt-6 text-2xl font-bold text-[#273c75] font-main">
              Keep tabs on your credit
            </h2>
            <p className="text-sm font-medium text-gray-400 px-8 py-8 tracking-wide leading-loose">
              Zelle is here to make it easy to send,receive and request money
              with friends and family in minutes
            </p>
          </div>
          <div
            className="bg-white rounded-2xl drop-shadow-2xl 
          cursor-pointer hover:-translate-y-6 duration-200 transition-all ease-in-out   "
          >
            <Image
              src="/images/image1.png"
              alt="image 1"
              width={400}
              height={400}
            />
            <h2 className="px-8 mt-6 text-2xl font-bold text-[#273c75] font-main">
              Don't have a bank account ?
            </h2>
            <p className="text-sm font-medium text-gray-400 px-8 py-8 tracking-wide leading-loose">
              Zelle is here to make it easy to send,receive and request money
              with friends and family in minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
