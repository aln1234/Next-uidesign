import Image from "next/image";
import React from "react";

const IconList = () => {
  return (
    <section className="max-w-5xl mx-auto py-12">
      <div className="flex flex-row items-center space-x-24">
        <div>
          <Image
            src="/images/icon1.png"
            alt="Icon 1"
            height={200}
            width={200}
            className="hover:scale-110 cursor-pointer duration-200 transition-all ease-in-out"
          />
          <h2 className="px-8 mt-12 text-xl font-extrabold  text-[#273c75] font-main">
            Keep tabs on your credit
          </h2>
          <p className="px-8 mt-4  text-sm font-medium text-gray-400">
            Zelle is here to make it easy to send,receive and request money with
            friends and family in minutes
          </p>
        </div>
        <div>
          <Image
            src="/images/icon2.png"
            alt="Icon 1"
            height={150}
            width={150}
            className="hover:scale-110 cursor-pointer duration-200 transition-all ease-in-out"
          />
          <h2 className="px-8 mt-6 text-xl font-extrabold text-[#273c75] font-main">
            Dont't have a bank account ?
          </h2>
          <p className="px-8 mt-4 text-sm font-medium text-gray-400">
            Zelle is here to make it easy to send,receive and request money with
            friends and family in minutes
          </p>
        </div>
        <div>
          <Image
            src="/images/icon3.png"
            alt="Icon 1"
            height={150}
            width={150}
            className="hover:scale-110 cursor-pointer duration-200 transition-all ease-in-out"
          />
          <div className="flex flex-col">
            <h2 className="px-8 mt-6 text-xl font-extrabold text-[#273c75] font-main">
              Receive and request money
            </h2>
            <p className="px-8 mt-4 text-sm font-medium text-gray-400">
              Zelle is here to make it easy to send,receive and request money
              with friends and family in minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconList;
