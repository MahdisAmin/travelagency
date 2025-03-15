"use client";
import { toPersianNumber } from "@/utils/extras";
import React, { useState } from "react";
import PassengerForm from "./Form";

function PersonalInfo({ data }) {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState(data);
  console.log(info);
  

  const editHandler = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Data Submitted:", formData);
    setInfo(formData);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="p-5 border border-gray-300 rounded-lg mt-3 font-normal">
        {isEditing ? (
          <PassengerForm formData={info?.data} onFormDataChange={handleFormSubmit} />
        ) : (
          <>
            <div className="flex justify-between font-bold">
              <p>اطلاعات شخصی</p>
              <button className="text-[#009ECA] flex" onClick={editHandler}>
                <img src="/images/svgs/edit.svg" alt="edit" className="ml-1" />
                ویرایش اطلاعات
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap md:max-w-[700px] ">
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">نام و نام خانوادگی</p>
                <span className="font-semibold">{data?.data.fullName}</span>
              </div>
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">کد ملی</p>
                <span className="font-semibold">
                  {toPersianNumber(+data?.data.nationalCode)}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap md:max-w-[700px] ">
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">جنسیت</p>
                {data?.data.gender === "male" ? (
                  <span className="font-semibold">مرد</span>
                ) : (
                  <span className="font-semibold">زن</span>
                )}
              </div>
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">تاریخ تولد</p>
                <span className="font-semibold">{data?.data.birthDate}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PersonalInfo;
