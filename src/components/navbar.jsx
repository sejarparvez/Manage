import React from "react";
import Logo from "../img/logo.svg";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className=" relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#a" className=" hover:text-orange-500">
            Pricing
          </a>
          <a href="#a" className=" hover:text-orange-500">
            Product
          </a>
          <a href="#a" className=" hover:text-orange-500">
            About Us
          </a>
          <a href="#a" className=" hover:text-orange-500">
            Careers
          </a>
          <a href="#a" className=" hover:text-orange-500">
            Community
          </a>
        </div>
        <a
          href="3a"
          className="hidden md:block text-white bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-800"
        >
          Get Started
        </a>
        <Menu />
      </div>
    </div>
  );
}
