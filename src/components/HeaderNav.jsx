import React from "react";

const HeaderNav = function () {
  return (
    <header className="relative">
      <div className="container mx-auto p-4 sm:px-0 flex justify-between">
        <span className="block text-[1.375rem] font-semibold cursor-default">
          Kourse
        </span>
        <div className="hamburger rounded-md p-[.5rem] bg-white/[.2] sm:hidden flex flex-col gap-[.5rem] justify-center [&>*]:w-[2rem] [&>*]:h-[.2rem] [&>*]:bg-white">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="hidden sm:flex sm:justify-between basis-[75%] md:basis-[65%]">
          <ul className="sm:flex sm:justify-between sm:gap-[1.25rem] items-center text-white/[.8] [&>li>a:hover]:text-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Post a Job</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <button className="py-[.3rem] px-[.75rem] rounded-lg bg-white/[.1] hover:bg-white/[.3]">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
