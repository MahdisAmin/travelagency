import Image from "next/image";
import Link from "next/link";
import React from "react";

function Menu({ setShoeMenu }) {
  if (!setShoeMenu) return;
  return (
    <div
      className=" bg-gray-600 w-full h-full fixed top-0 left-0 z-50 bg-opacity-50"
      onClick={() => setShoeMenu(false)}
    >
      <div className="w-[209px] h-[816px] rounded-xl  bg-white shadow-lg absolute -bottom-44  transition-all duration-1000 ease-in-out">
        <ul className="p-4">
          <li className="flex items-center p-4 ">
            <Image
              src="/images/home-2.svg"
              width={16}
              height={16}
              alt="home"
            ></Image>
            <Link href="#" className="text-green-400 mr-2">
              صفحه اصلی
            </Link>
          </li>
          <li className="flex items-center p-4 ">
            <Image
              src="/images/airplane-square.svg"
              width={16}
              height={16}
              alt="home"
            ></Image>
            <Link href="#" className=" mr-2">
              خدمات گردشگری
            </Link>
          </li>
          <li className="flex items-center p-4 ">
            <Image
              src="/images/volume-low.svg"
              width={16}
              height={16}
              alt="home"
            ></Image>
            <Link href="#" className=" mr-2">
              درباره ما
            </Link>
          </li>

          <li className="flex items-center p-4 ">
            <Image
              src="/images/call.svg"
              width={16}
              height={16}
              alt="home"
            ></Image>
            <Link href="#" className=" mr-2">
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
