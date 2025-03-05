"use client"; 

import useQuery from "@/config/hooks/query";
import Link from "next/link";
import React from "react";

function Payment() {
  const { getQuery } = useQuery();

    const status = getQuery("status");
    console.log(status)

  if (status === "success") 
    return (
      <div className="flex flex-col  justify-center items-center m-10  p-5 rounded-2xl ">
        <p className="font-bold text-lg mt-4">پرداخت با موفقیت انجام شد!</p>
        <Link href="/profile" className="bg-primary-green text-white p-3 rounded-lg mt-4">برو به پروفایل</Link>
      </div>
    );

    return (
      <div className="flex flex-col  justify-center items-center m-10 p-5 rounded-2xl ">
        <p className="font-bold text-lg mt-4 text-red-700">پرداخت انجام نشد!</p>
        <Link
          href="/"
          className="bg-primary-green text-white p-3 rounded-lg mt-4"
        >
          برو به صفحه اصلی
        </Link>
      </div>
    );
  
}

export default Payment;
