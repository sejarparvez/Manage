import React from "react";
import Facebook from "../img/icon-facebook.svg";
import Instagram from "../img/icon-instagram.svg";
import Pinterest from "../img/icon-pinterest.svg";
import Twitter from "../img/icon-twitter.svg";
import Youtube from "../img/icon-youtube.svg";
import Logo from "../img/logo-white.svg";

function Footer() {
  return (
    <div className=" bg-[#010820]">
      <div className=" container flex flex-col-reverse justify-between px-6 py-10  mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023 All Right Reserved
          </div>
          <div>
            <img src={Logo} className="h-8" alt="" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#a">
              <img src={Facebook} alt="" />
            </a>
            <a href="#a">
              <img src={Youtube} alt="" />
            </a>
            <a href="#a">
              <img src={Twitter} alt="" />
            </a>
            <a href="#a">
              <img src={Pinterest} alt="" />
            </a>
            <a href="#a">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="flex justify-around md:space-x-32 space-x-8">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#a" className=" hover:text-orange-500">
              Home
            </a>
            <a href="#a" className=" hover:text-orange-500">
              Pricing
            </a>
            <a href="#a" className=" hover:text-orange-500">
              Products
            </a>
            <a href="#a" className=" hover:text-orange-500">
              About Us
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#a" className=" hover:text-orange-500">
              Careers
            </a>
            <a href="#a" className=" hover:text-orange-500">
              Comunity
            </a>
            <a href="#a" className=" hover:text-orange-500">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 rounded-full px-4 focus:outline-none w-4"
                placeholder="Updates in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-orange-700 hover:bg-orange-400 focus:outline-none">
                {" "}
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2023 All Right Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
