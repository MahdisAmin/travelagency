"use client";
import React, { useState } from "react";
import BankAccountForm from "../templates/BankAccountForm";

function BankacoountInfo({ data ,refetch }) {
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };
  console.log(data?.data);

  return (
    <div>
      <div className="p-5 border border-gray-300 rounded-lg mt-3 font-normal">
        {isEditing ? (
          <BankAccountForm cancel={handleCancel} setIsEditing={setIsEditing} refetch={refetch} />
        ) : (
          <>
            <div className="flex justify-between font-bold">
              <p>اطلاعات حساب بانکی</p>
              <button className="text-[#009ECA] flex" onClick={editHandler}>
                <img src="/images/svgs/edit.svg" alt="edit" className="ml-1" />
                ویرایش اطلاعات
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap md:max-w-[700px] ">
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">شماره کارت</p>
                <span className="font-semibold">
                  {" "}
                  {data?.data.payment?.debitCard_code || "-"}
                </span>
              </div>
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">شماره شبا</p>
                <span className="font-semibold">
                  {data?.data.payment?.shaba_code || "-"}
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap md:max-w-[700px] ">
              <div className="flex justify-between my-3 ">
                <p className="md:ml-2">شماره حساب</p>
                <span className="font-semibold">
                  {" "}
                  {data?.data.payment?.accountIdentifier || "-"}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BankacoountInfo;
