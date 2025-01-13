import Image from "next/image";
import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div>
      <div className="w-[209px] h-[816px] rounded-xl bg-rose-200 shadow-lg ">
        <ul className="p-4">
          <li className="flex items-center p-4 ">
            <Image
              src="/images/home-2.svg"
              width={16}
              height={16}
              alt="home"
            ></Image>
            <Link href="#" className="text-green-400 mr-2">
              Home
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
              Home
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
              Home
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
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
