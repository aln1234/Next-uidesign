import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-start space-x-12 items-center">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <div className="flex items-center gap-8 ">
            <h1 className="navbar-item">Personal</h1>
            <h1 className="navbar-item">Business</h1>
            <h1 className="navbar-item">Wealth Management</h1>
            <h1 className="navbar-item">Options</h1>
            <h1 className="navbar-item">About us</h1>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <h1 className="font-main font-semibold text-gray-600 ">Sign Up</h1>
          <h1 className="font-main font-semibold text-white bg-[#273c75] px-5 py-3 rounded-full ">
            Login
          </h1>
        </div>
      </div>
    </section>
  );
};
