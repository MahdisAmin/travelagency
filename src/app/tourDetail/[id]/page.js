import ReserveBtn from "@/components/elements/ReseveBtn";
import { howmanyDays, toPersianNumber } from "@/utils/extras";
import moment from "jalali-moment";
import Image from "next/image";

import React from "react";

export async function getTours(id) {
  const res = await fetch(`http://localhost:6500/tour/${id}`, {
    cache: "no-store",
  });
  const tours = await res.json();
  return tours;
}

async function TourDetails({ params }) {
  const tours = await getTours(params.id);
  const {
    image,
    title,
    startDate,
    endDate,
    price,
    origin,
    fleetVehicle,
    availableSeats,
    insurance,
    id,
  } = tours;

  const perStartDay = moment(startDate, "YYYY-MM-DD")
    .locale("fa")
    .format("jD jMMMM jYYYY");
  const perEndtDay = moment(endDate, "YYYY-MM-DD")
    .locale("fa")
    .format("jD jMMMM jYYYY");

  const day = howmanyDays(startDate, endDate);
  const night = +day - 1;

  return (
    <div className=" md:bg-gray-100 md:p-5 p-0 bg-white">
      <div className="container mx-auto md:bg-white md:border md:border-gray-200 md:rounded-lg md:my-9 md:mx-auto">
        <div className="flex flex-col md:flex-row  ">
          <div className="flex justify-center items-center m-3">
            <img
              src={image}
              className="w-[330px] h-[220px] overflow-hidden rounded-lg "
              alt={title}
            />
          </div>
          <div>
            <div className=" flex justify-between items-center mx-20 md:flex-col md:justify-start  md:mx-1 md:mt-7 md:items-start ">
              <h1 className="text-[20px] font-bold "> {title}</h1>
              <p className="tracking-widest md:mt-5">
                {toPersianNumber(day)} روز و {toPersianNumber(night)} شب
              </p>
            </div>
            <div className="flex justify-between items-center  mx-16 my-7  md:my-9 md:justify-start md:mx-0">
              <div className="flex justify-center items-center md:ml-7 ">
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
              <div className="flex justify-center items-center md:ml-7">
                <Image
                  src="/images/svgs/map.svg"
                  width={14}
                  height={14}
                  alt="map"
                ></Image>
                <span className="mr-3 text-[#7D7D7D] text-[13px]">
                  برنامه سفر
                </span>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/images/svgs/medal-star.svg"
                  width={14}
                  height={14}
                  alt="medal"
                ></Image>
                <span className="mr-3 text-[#7D7D7D] text-[13px]">
                  تضمین کیفیت
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col-reverse">
          <div className="flex justify-between items-center mx-16 my-7 ">
            <div className="hidden md:block">
              <div className="flex  items-center m-2 ">
                <Image
                  src="/images/svgs/routing.svg"
                  width={16}
                  height={16}
                  alt="routing"
                ></Image>
                <p className="mr-1 text-[#444444] "> مبدا</p>
              </div>
              <p className="text-center font-semibold mt-3 text-sm">
                {origin.name}
              </p>
            </div>
            <div className="hidden md:block md:border-r md:border-r-gray-200">
              <div className="flex  items-center m-2">
                <Image
                  src="/images/svgs/calendar2.svg"
                  width={16}
                  height={16}
                  alt="calendar"
                ></Image>
                <p className="mr-1 text-[#444444] ">تاریخ رفت</p>
              </div>
              <p className="text-center font-semibold mt-3 text-sm">
                {perStartDay}
              </p>
            </div>
            <div className="hidden md:block  md:border-r md:border-r-gray-200">
              <div className="flex  items-center m-2">
                <Image
                  src="/images/svgs/calendar2.svg"
                  width={16}
                  height={16}
                  alt="calendar"
                ></Image>
                <p className="mr-1 text-[#444444] "> تاریخ برگشت</p>
              </div>
              <p className="text-center font-semibold mt-3 text-sm">
                {perEndtDay}
              </p>
            </div>
            <div className=" md:border-r md:border-r-gray-200">
              <div className="flex  items-center m-2">
                <Image
                  src="/images/svgs/bus.svg"
                  width={16}
                  height={16}
                  alt="bus"
                ></Image>
                <p className="mr-1 text-[#444444] ">حمل و نقل</p>
              </div>
              <p className="text-center font-semibold mt-3 text-sm">
                {fleetVehicle}
              </p>
            </div>
            <div className=" md:border-r md:border-r-gray-200">
              <div className="flex  items-center m-2 mr-6">
                <Image
                  src="/images/svgs/twousers.svg"
                  width={16}
                  height={16}
                  alt="twousers"
                ></Image>
                <p className="mr-1 text-[#444444]">ظرفیت</p>
              </div>
              <p className="tracking-wider mt-3 font-semibold text-sm text-center">
                {" "}
                حداکثر {toPersianNumber(availableSeats)} نفر
              </p>
            </div>
            <div className=" md:border-r md:border-r-gray-200 md:pr-3">
              <div className="flex  items-center  ">
                <Image
                  src="/images/svgs/security.svg"
                  width={16}
                  height={16}
                  alt="security"
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
          <div className="flex justify-between items-center mx-16 my-7 md:-mt-16 md:mr-[370px] md:flex-row-reverse md:mx-0">
            <ReserveBtn  id={id} />
            <p className="text-2xl text-blue-500">
              {toPersianNumber(price)}{" "}
              <span className="text-sm text-primary-gray mr-3">تومان</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
