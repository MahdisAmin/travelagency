"use client";
import { toPersianNumber } from "@/utils/extras";
import React, { useEffect, useState } from "react";
import PassengerForm from "./Form";

function PersonalInfo({ data }) {
  const [isEditing, setIsEditing] = useState(false);
  const [personalData, setPersonalData] = useState(data?.data);

  useEffect(() => {
    setPersonalData(data?.data);
  }, [data]);

  const editHandler = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Data Submitted:", formData);
    setPersonalData(formData);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="mt-3 w-full rounded border border-gray-300 ">
          <PassengerForm
            formData={personalData}
            onFormDataChange={handleFormSubmit}
            onCancel={handleCancel}
          />
        </div>
      ) : (
        <>
          <div className="p-5 border border-gray-300 rounded-lg mt-3 font-normal">
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
                <span className="font-semibold">{personalData?.fullName}</span>
              </div>
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">کد ملی</p>
                <span className="font-semibold">
                  {toPersianNumber(+personalData?.nationalCode)}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap md:max-w-[700px] ">
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">جنسیت</p>
                {personalData?.gender === "male" ? (
                  <span className="font-semibold">مرد</span>
                ) : (
                  <span className="font-semibold">زن</span>
                )}
              </div>
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">تاریخ تولد</p>
                <span className="font-semibold">{personalData?.birthDate}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonalInfo;
