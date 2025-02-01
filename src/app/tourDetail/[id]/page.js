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
          className="w-[330px] h-[220px] overflow-hidden"
          alt={title}
        />
      </div>
      <div className=" flex justify-between items-center mx-20 ">
        <h1 className="text-[20px] font-bold ">{title}</h1>
        <p>
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
          <span className="mr-3 text-[#7D7D7D]">تورلیدر از مبدا</span>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/svgs/map.svg"
            width={14}
            height={14}
            alt="map"
          ></Image>
          <span className="mr-3 text-[#7D7D7D]">برنامه سفر</span>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/svgs/medal-star.svg"
            width={14}
            height={14}
            alt="medal"
          ></Image>
          <span className="mr-3 text-[#7D7D7D]">تضمین کیفیت</span>
        </div>
      </div>
      <div className="flex justify-between items-center mx-16 my-7">
        <div>
          <div className="flex  items-center ">
            <Image src="/images/svgs/bus.svg" width={16} height={16}></Image>
            <p>حمل و نقل</p>
          </div>
          <p>{fleetVehicle}</p>
        </div>
        <div>
          <div className="flex  items-center ">
            <Image src="/images/svgs/bus.svg" width={16} height={16}></Image>
            <p>حمل و نقل</p>
          </div>
          <p>{fleetVehicle}</p>
        </div>
        <div>
          <div className="flex  items-center ">
            <Image src="/images/svgs/bus.svg" width={16} height={16}></Image>
            <p>حمل و نقل</p>
          </div>
          <p className="text-center">{fleetVehicle}</p>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
