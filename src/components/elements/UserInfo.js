import { toPersianNumber } from "@/utils/extras";
import React from "react";

function UserInfo({ data }) {
  return (
    <div>
      <div className="p-5 border border-gray-300 rounded-lg">
        <p>اطلاعات حساب کاربری</p>
        <div className="flex justify-between my-3 font-normal ">
          <p className="text-gray-600 ">شماره موبایل</p>
          <span>{toPersianNumber(+data?.data?.mobile)}</span>
        </div>
        <div className="flex justify-between my-3 font-normal">
          <p className="">ایمیل -</p>
          <button className="text-[#009ECA] flex">
            <img src="/images/svgs/edit.svg" alt="edit"  className="ml-1"/>
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
