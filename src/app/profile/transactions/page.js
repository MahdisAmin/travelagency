"use client";
import { useGetUserTransactions } from "@/config/services/query";
import { formatNumber, toPersianNumber, turnDateToFa } from "@/utils/extras";

import React from "react";

function Transactions() {
  const { data } = useGetUserTransactions();
  console.log(data);
  return (
    <div>
      <div className="flex justify-between py-3 px-8 bg-gray-300 rounded-lg font-normal">
        <p>تاریخ و ساعت</p>
        <p>مبلغ (تومان)</p>
        <p className="hidden md:block">نوع تراکنش</p>

        <p>شماره سفارش</p>
      </div>
      <div className="flex-col justify-between  border border-gray-300 border-t-0 rounded-lg">
        {data?.data.map((data) => (
          <ul className="flex justify-between w-full items-center px-8   py-3 font-normal" key={data.id}>
            <li>{turnDateToFa(data.createdAt)}</li>
            <li className="-mr-10 md:mr-0">{formatNumber(+data.amount)}</li>
            <li className="hidden md:block">ثبت نام در تور گردشگری</li>
            <li>{toPersianNumber(12054902)}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
