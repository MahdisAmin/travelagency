import { toPersianNumber } from "@/utils/extras";
import { getEventStatus } from "@/utils/helper";
import moment from "jalali-moment";
import Image from "next/image";
import React from "react";

function UserTours({ tour }) {
  const perStartDay = tour?.startDate
    ? moment(tour?.startDate, "YYYY-MM-DD")
        .locale("fa")
        .format("jD jMMMM jYYYY")
    : "تاریخ نامعتبر";

  const perEndtDay = tour?.endDate
    ? moment(tour?.endDate, "YYYY-MM-DD").locale("fa").format("jD jMMMM jYYYY")
    : "تاریخ نامعتبر";
  if (!tour) return;
  return (
    <div className="md:border md:border-gray-300 md:rounded-lg md:mb-5 md:px-2 md:py-2 ">
      <div className="border border-gray-300 p-2 rounded-lg mb-5">
        <div className="flex justify-end">
          <span
            className={`
    px-3 py-1 rounded-md text-sm text-left
    ${
      getEventStatus(tour?.startDate, tour?.endDate) === "شروع نشده"
        ? "bg-blue-500 text-white" // استایل برای "شروع نشده"
        : getEventStatus(tour?.startDate, tour?.endDate) === "به اتمام رسیده"
        ? "bg-green-500 text-white" // استایل برای "به اتمام رسیده"
        : "bg-yellow-400 text-black" // استایل برای "در حال برگزاری"
    }
  `}
          >
            {getEventStatus(tour?.startDate, tour?.endDate)}
          </span>
        </div>
        <div className="flex justify-between py-3 px-8 font-normal md:max-w-[700px]">
          <p className="flex items-center ">
            <Image
              src="/images/svgs/sun.svg"
              width={16}
              height={16}
              className="ml-1"
              alt="profile"
            ></Image>
            {tour?.title}
          </p>
          <p>سفر با {tour?.fleetVehicle}</p>
        </div>
        <div className="md:flex md:justify-between md:py-3 md:px-0 md:max-w-[700px]">
          <div className="flex justify-between py-3 px-8">
            <p>
              {tour?.origin?.name} به {tour?.destination?.name}
            </p>
            <p className="text-gray-500 font-normal md:mr-3"> {perStartDay}</p>
          </div>
          <div className="flex justify-between py-3 px-8">
            <p>تاریخ بازگشت</p>
            <p className="text-gray-500 font-normal md:mr-3"> {perEndtDay} </p>
          </div>
        </div>
        <div className=" border-t border-t-gray-300"></div>
        <div className="flex justify-between py-3 px-3 md:max-w-[700px] md:mr-4">
          <p className="text-gray-500">شماره تور</p>
          <p>{toPersianNumber(102095404)}</p>
          <span className="text-gray-500">|</span>
          <span className="text-gray-500"> مبلغ پرداخت شده :</span>
          <p> {toPersianNumber(+tour?.price)} تومان</p>
        </div>
      </div>
    </div>
  );
}

export default UserTours;
