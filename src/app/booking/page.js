"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/layouts/mobile.css";
import { howmanyDays, toPersianNumber } from "@/utils/extras";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookie";
import { useGetBasket } from "@/config/services/query";
import Link from "next/link";

function Booking() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const { data } = useGetBasket();
  console.log(data?.data.price);
  const day = howmanyDays(data?.data.startDate, data?.data.endDate);
  const night = +day - 1;
  // useEffect(() => {
  //   const token = getCookie("accessToken");
  //   const refresh = getCookie("refreshToken");

  //   if (!token && !refresh) {
  //     toast("ابتدا وارد شوید.", {
  //       style: {
  //         zIndex: 1000000,
  //         color: "#28A745",
  //       },
  //     });
  //     router.replace("/");
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);
  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
  //     </div>
  //   );
  // }
  if (!data) {
    return (
      <div className="container mx-auto p-7 flex flex-col items-center justify-center md:bg-gray-100 rounded-xl my-9">
        <p className="font-bold mb-3 text-xl">توری برای شما رزرو نشده !</p>
        <Link href="/" className="bg-primary-green px-9 py-2 rounded-lg font-bold text-white"> بریم خرید</Link>
      </div>
    );
  }
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
                  className="placeholder-black outline-none"
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
                  className="placeholder-black outline-none"
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
              <h1 className="text-2xl font-bold">{data?.data.title}</h1>
              <p className="text-sm text-gray-700 mr-7">
                {" "}
                {toPersianNumber(day)}
                روز و {toPersianNumber(night)} شب
              </p>
            </div>
            <div className="flex  items-center justify-between w-full mt-3">
              <p className="text-lg ">قیمت نهایی</p>
              <h1 className="text-xl font-bold  text-blue-500 mr-7">
                {toPersianNumber(+data?.data.price)}
                <span className="text-sm text-gray-800"> تومان</span>
              </h1>
            </div>
            <button className="w-full rounded-lg bg-primary-green text-white text-center p-2 mt-3 cursor-pointer">
              ثبت و خرید نهایی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
