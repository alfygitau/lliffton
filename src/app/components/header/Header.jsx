import React from "react";
import Navigation from "../navigation/Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[140px] w-full shadow-md">
      <div className="h-[50px] border-b">
        <Navigation />
      </div>
      <div className="h-[90px]  w-full">
        <div className="w-[90%] mx-auto h-full flex items-center justify-between">
          <div className="h-full h-full flex items-center">
            <img src="/my_logo.png" alt="logo" />
          </div>
          <div className="flex items-center gap-[20px] h-full">
            <Link href={"/"}>Home</Link>
            <Link href={"/product-services"}>Solutions</Link>
            <Link href={"/contact-us"}>Contact Us</Link>
            <Link href={"/about-us"}>About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
