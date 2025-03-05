import Image from "next/image";
import Link from "next/link";
import React from "react";

function layout({children}) {
  return (
    <div>
      <div className="p-10 grid grid-cols-4 gap-6 font-bold">
        <ul className="border border-slate-200 divide-y  rounded-md col-span-1">
          <li className="p-2 flex">
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
          <li className="p-2 flex">
            <Image
              src="/images/svgs/sun.svg"
              width={16}
              height={16}
              alt="profile"
            ></Image>
            <Link href="/profile" className="mr-2">
              تورهای من
            </Link>
          </li>
          <li className="p-2 flex">
            <Image
              src="/images/svgs/convert.svg"
              width={16}
              height={16}
              alt="profile"
            ></Image>
            <Link href="/profile" className="mr-2">
              تراکنش ها
            </Link>
          </li>
        </ul>
        <main className="bg-red-100 col-span-3">{children}</main>
      </div>
    </div>
  );
}

export default layout;
