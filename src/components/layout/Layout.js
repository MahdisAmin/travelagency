"use client";
import Image from "next/image";
import React, { useState } from "react";
import Menu from "../elements/Menu";
import Footer from "./Footer";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <div className=" h-20 container mx-auto flex justify-between items-center">
          <div className="container mx-auto flex justify-between items-center h-full p-10">
            <div className="hidden md:flex items-center text-sm ">
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="logo"
              ></Image>
              <ul className="flex items-center  mr-9">
                <li className="m-4">صفحه اصلی</li>
                <li className="m-4">خدمات گردشگری</li>
                <li className="m-4">درباره ما</li>
                <li className="m-4">تماس با ما</li>
              </ul>
            </div>
            <div className="hidden md:flex items-center border border-primary-green rounded-lg p-2 cursor-pointer">
              <Image
                src="/images/svgs/profile.svg"
                width={20}
                height={20}
                alt="user"
              ></Image>
              <span className="mr-1 text-primary-green text-md">
                ورود | ثبت نام
              </span>
            </div>
            <div onClick={() => setShowMenu(!showMenu)} className="md:hidden">
              <Image
                src="/images/svgs/menu.svg"
                width={20}
                height={20}
                alt="menu"
                className="cursor-pointer"
              ></Image>
            </div>
            <div className="md:hidden">
              <Image
                src="/images/svgs/signinbuttom.svg"
                width={40}
                height={40}
                alt="logo"
                className="cursor-pointer"
              ></Image>
            </div>
          </div>
          {showMenu && <Menu setShoeMenu={setShowMenu} />}
        </div>
      </header>

      {children}
      <Footer />
    </>
  );
}

export default Layout;
