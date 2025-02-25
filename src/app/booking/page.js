"use client";
import Image from "next/image";
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/layouts/mobile.css";
import { toPersianNumber } from "@/utils/extras";

function Booking({ searchParams }) {
  const { title, price, day, night } = searchParams;
  console.log(searchParams);

  return (
    <div className="  md:bg-gray-200 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row p-7 md:gap-7 ">
          <div>
            <form className="grid grid-cols-12 gap-4 p-10 border border-gray-300 rounded-lg md:max-w-[800px] md:bg-white ">
              <div className="flex  w-[300px] md:col-span-12 md:items-center">
                <img src="/images/svgs/user.svg" />
                <h3 className="font-bold text-lg mr-2">مشخصات مسافر</h3>
              </div>
              <div className="col-span-12 md:col-span-4 border rounded-lg p-2 border-gray-600">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="placeholder-black"
                />
              </div>
              <div className="col-span-12 md:col-span-4 border rounded-lg p-2  border-gray-600">
                <select className="outline-none w-full">
                  <option className="text-gray-400">جنسیت</option>
                  <option>مرد</option>
                  <option>زن</option>
                </select>
              </div>
              <div className="col-span-12 md:col-span-4 border rounded-lg p-2  border-gray-600">
                <input
                  type="text"
                  placeholder="کد ملی"
                  className="placeholder-black"
                />
              </div>
              <div className="col-span-12 md:col-span-4 border rounded-lg p-2  border-gray-600">
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
          <div className=" flex flex-col justify-between items-center w-full border border-gray-300 rounded-xl p-5 mt-7 md:w-[300px] bg-white md:mt-0">
            <div className="flex  items-center justify-between border-b border-dashed border-gray-500 w-full">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-sm text-gray-700 mr-7">
                {" "}
                {toPersianNumber(day)}
                روز و {toPersianNumber(night)} شب
              </p>
            </div>
            <div className="flex  items-center justify-between w-full mt-3">
              <p className="text-lg ">قیمت نهایی</p>
              <h1 className="text-xl font-bold  text-blue-500 mr-7">
                {toPersianNumber(price)}
                <span className="text-sm text-gray-800"> تومان</span>
              </h1>
            </div>
            <butt className="w-full rounded-lg bg-primary-green text-white text-center p-2 mt-3 cursor-pointer">
              ثبت و خرید نهایی
            </butt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
