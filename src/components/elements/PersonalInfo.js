import { toPersianNumber } from "@/utils/extras";
import React from "react";

function PersonalInfo({ data }) {
  console.log(data);
  return (
    <div>
      <div className="p-5 border border-gray-300 rounded-lg mt-3 font-normal">
        <div className="flex justify-between">
          <p>اطلاعات شخصی</p>
          <button className="text-[#009ECA] flex">
            <img src="/images/svgs/edit.svg" alt="edit" className="ml-1" />
            ویرایش اطلاعات
          </button>
        </div>
        <div className="flex justify-between my-3 ">
          <p>نام و نام خانوادگی</p>
          <span className="font-semibold">{data?.data.fullName}</span>
        </div>
        <div className="flex justify-between my-3 ">
          <p>کد ملی</p>
          <span className="font-semibold">
            {toPersianNumber(+data?.data.nationalCode)}
          </span>
        </div>
        <div className="flex justify-between my-3 ">
          <p>جنسیت</p>
          {data?.data.gender === "male" ? (
            <span className="font-semibold">مرد</span>
          ) : (
            <span className="font-semibold">زن</span>
          )}
        </div>
        <div className="flex justify-between my-3 ">
          <p>تاریخ تولد</p>
          <span className="font-semibold">{data?.data.birthDate}</span>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
