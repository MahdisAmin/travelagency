"use client";

import AuthProvider from "@/components/provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

function layout({ children }) {
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname === path ? "bg-green-300 text-white rounded " : "";
  };
  return (
    <div>
      <AuthProvider>
        <div className="grid-cols-12 p-10 grid md:grid-cols-4 gap-6 font-bold">
          <ul className="col-span-12 border-b md:border border-slate-300 md:divide-y  md:rounded-md md:col-span-1 flex justify-between md:flex-col md:justify-evenly md:max-h-[125px] ">
            <li className={`p-2 flex ${isActive("/profile")}`}>
              <Image
                src="/images/svgs/peo.svg"
                width={16}
                height={16}
                alt="profile"
              ></Image>
              <Link href="/profile" className="mr-2">
                پروفایل من
              </Link>
            </li>
            <li className={`p-2 flex ${isActive("/profile/mytours")}`}>
              <Image
                src="/images/svgs/sun.svg"
                width={16}
                height={16}
                alt="profile"
              ></Image>
              <Link href="/profile/mytours" className="mr-2">
                تورهای من
              </Link>
            </li>
            <li className={`p-2 flex ${isActive("/profile/transactions")}`}>
              <Image
                src="/images/svgs/convert.svg"
                width={16}
                height={16}
                alt="profile"
              ></Image>
              <Link href="/profile/transactions" className="mr-2">
                تراکنش ها
              </Link>
            </li>
          </ul>
          <main className=" col-span-12 md:col-span-3">{children}</main>
        </div>
      </AuthProvider>
    </div>
  );
}

export default layout;
