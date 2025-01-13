import Image from "next/image";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
              <div className=" h-20 md:bg-red-800">
                  <div className="container mx-auto flex justify-between items-center h-full p-3">
                      <Image src="/images/signinbuttom.svg" width={40} height={40} alt="logo" className="cursor-pointer"></Image>
                      <Image src="/images/menu.svg" width={20} height={20} alt="menu" className="cursor-pointer"></Image>
        </div>
        </div>
      </header>
      {children}
      <footer></footer>
    </>
  );
}

export default Layout;
