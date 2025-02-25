"use client";
import Image from "next/image";
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/layouts/mobile.css";

function Booking({ searchParams }) {
  const { title, price, day, night } = searchParams;

  return (
    <div className="container m-auto">
      <div className="flex-col items-center justify-cente p-7">
        <div>
          <form className="grid grid-cols-12 gap-4 p-10 border border-gray-300 rounded-lg  md:max-w-[800px]">
            <div className="flex  w-[300px]">
              <img src="/images/svgs/user.svg" />
              <h3 className="font-bold text-lg mr-2">مشخصات مسافر</h3>
            </div>
            <div className="col-span-12 md:col-span-3 border rounded-lg p-2 border-gray-600">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="placeholder-black"
              />
            </div>
            <div className="col-span-12 md:col-span-3 border rounded-lg p-2  border-gray-600">
              <select className="outline-none w-full">
                <option className="text-gray-400">جنسیت</option>
                <option>مرد</option>
                <option>زن</option>
              </select>
            </div>
            <div className="col-span-12 md:col-span-3 border rounded-lg p-2  border-gray-600">
              <input
                type="text"
                placeholder="کد ملی"
                className="placeholder-black"
              />
            </div>
            <div className="col-span-12 md:col-span-3 border rounded-lg p-2  border-gray-600">
              <div className="flex item-center w-full  ">
                <Image
                  src="/images/svgs/calendar.svg"
                  width={18}
                  height={18}
                  className="md:mr-4"
                  alt="date"
                ></Image>
                <DatePicker
                  placeholder="تاریخ تولد"
                  locale={persian_fa}
                  
                  calendar={persian}
                  style={{
                    
                    border: "none",
                    width: "100%",
                    outline: "none",
                    boxShadow: "none",
                    marginRight: "2px",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-400">تعداد شب ها: {night}</p>
            <p className="text-sm text-gray-400">تعداد روز ها: {day}</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{price} تومان</h1>
            <p className="text-sm text-gray-400">هزینه کل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
