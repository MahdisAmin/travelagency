"use client";
import Image from "next/image";
import React, { useState } from "react";
import Menu from "../elements/Menu";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <div className=" h-20 md:bg-red-800">
          <div className="container mx-auto flex justify-between items-center h-full p-3">
            <div onClick={() => setShowMenu(!showMenu)} className="md:hidden">
              <Image
                src="/images/menu.svg"
                width={20}
                height={20}
                alt="menu"
                className="cursor-pointer"
              ></Image>
            </div>
            <div className="md:hidden">
              <Image
                src="/images/signinbuttom.svg"
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
      <footer></footer>
    </>
  );
}

export default Layout;
