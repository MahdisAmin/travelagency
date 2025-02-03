"use client";
import { howmanyDays, toPersianNumber } from "@/utils/extras";
import Image from "next/image";

import React from "react";

export async function getTours(id) {
  const res = await fetch(`http://localhost:6500/tour/${id}`, {
    cache: "no-store",
  });
  const tours = await res.json();
  return tours;
}

async function TourDetails({params}) {
  const tours = await getTours(params.id);
  const {
    image,
    title,
    startDate,
    endDate,
    options,
    price,
    origin,
    fleetVehicle,
    availableSeats,
    insurance,
    id,
  } = tours;
  
    const day = howmanyDays(startDate, endDate);
    const night = +day - 1;

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center m-3">
        <img
          src={image}
          className="w-[330px] h-[220px] overflow-hidden rounded-lg "
          alt={title}
        />
      </div>
      <div className=" flex justify-between items-center mx-20 ">
        <h1 className="text-[20px] font-bold ">{title}</h1>
        <p className="tracking-widest">
          {toPersianNumber(day)} روز و {toPersianNumber(night)} شب
        </p>
      </div>
      <div className="flex justify-between items-center mx-16 my-7">
        <div className="flex justify-center items-center ">
          <Image
            src="/images/svgs/usertick.svg"
            width={14}
            height={14}
            alt="usertick"
          ></Image>
          <span className="mr-3 text-[#7D7D7D] text-[13px]">
            تورلیدر از مبدا
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/svgs/map.svg"
            width={14}
            height={14}
            alt="map"
          ></Image>
          <span className="mr-3 text-[#7D7D7D] text-[13px]">برنامه سفر</span>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/svgs/medal-star.svg"
            width={14}
            height={14}
            alt="medal"
          ></Image>
          <span className="mr-3 text-[#7D7D7D] text-[13px]">تضمین کیفیت</span>
        </div>
      </div>
      <div className="flex justify-between items-center mx-16 my-7">
        <div>
          <div className="flex  items-center m-2">
            <Image src="/images/svgs/bus.svg" width={16} height={16}></Image>
            <p className="mr-1 text-[#444444] ">حمل و نقل</p>
          </div>
          <p className="text-center font-semibold mt-3 text-sm">
            {fleetVehicle}
          </p>
        </div>
        <div>
          <div className="flex  items-center m-2 mr-6">
            <Image
              src="/images/svgs/twousers.svg"
              width={16}
              height={16}
            ></Image>
            <p className="mr-1 text-[#444444]">ظرفیت</p>
          </div>
          <p className="tracking-wider mt-3 font-semibold text-sm text-center">
            {" "}
            حداکثر {toPersianNumber(availableSeats)} نفر
          </p>
        </div>
        <div>
          <div className="flex  items-center m-2 mr-9 ">
            <Image
              src="/images/svgs/security.svg"
              width={16}
              height={16}
            ></Image>
            <p className="mr-1  text-[#444444]">بیمه</p>
          </div>
          {insurance ? (
            <p className="tracking-wider font-bold mt-3 text-sm mr-4">
              بیمه {toPersianNumber(50)} هزار دیناری
            </p>
          ) : (
            <p className="font-semibold mt-3 text-sm">بیمه ندارد</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mx-16 my-7">
        <button className="bg-primary-green text-white  py-2 px-9 rounded-lg my-5">
          {" "}
          <a href={`/tourDetail/${id}/booking`}>رزرو و خرید</a>
        </button>
        <p className="text-2xl text-blue-500">
          {toPersianNumber(price)}{" "}
          <span className="text-sm text-primary-gray mr-3">تومان</span>
        </p>
      </div>
    </div>
  );
}

export default TourDetails;
