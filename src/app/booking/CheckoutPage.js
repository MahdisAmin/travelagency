"use client";

import React, { useState } from "react";

import "react-multi-date-picker/styles/layouts/mobile.css";
import { formatNumber, howmanyDays, toPersianNumber } from "@/utils/extras";

import { useRouter } from "next/navigation";
import Loader from "@/components/elements/Loader";
import { useGetBasket } from "@/config/services/query";
import Link from "next/link";
import PassengerForm from "@/components/elements/Form";
import toast from "react-hot-toast";
import { useCheckout } from "@/config/services/mutations";

function CheckOutPage() {
  const router = useRouter();
  const { mutate } = useCheckout();
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState();

  const handleFormValidityChange = (isValid) => {
    setIsFormValid(isValid);
  };

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  const handleFinalSubmit = () => {
    if (!isFormValid || !formData) {
      toast.error("لطفا اطلاعات خود را ثبت کنید");
    }
    if (isFormValid && formData) {
      mutate(
        {
          nationalCode: formData?.nationalCode,
          fullName: formData?.fullName,
          gender: formData?.gender,
          birthDate: formData?.birthDate,
        },
        {
          onSuccess: () => {
            toast.success("رزرو شما با موفقیت ثبت شد");
            router.push("/payment?status=success");
          },

          onError: () => {},
        }
      );
    }
  };
  const cancleHandler = () => {
    setFormData({
      fullName: "",
      gender: "",
      nationalCode: "",
      birthDate: "",
    });
  };
  const { data, isPending } = useGetBasket();
  const day = howmanyDays(data?.data.startDate, data?.data.endDate);
  const night = +day - 1;
  if (isPending) return <Loader />;
  if (!data) {
    return (
      <div className="container mx-auto p-7 flex flex-col items-center justify-center md:bg-gray-100 rounded-xl my-9">
        <p className="font-bold mb-3 text-xl">توری برای شما رزرو نشده !</p>
        <Link
          href="/"
          className="bg-primary-green px-9 py-2 rounded-lg font-bold text-white"
        >
          {" "}
          بریم خرید
        </Link>
      </div>
    );
  }

  return (
    <div className="md:bg-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row p-7 md:gap-7">
          <div className="border border-gray-300 md:bg-white rounded-lg">
            <PassengerForm
              formData={formData}
              onFormValidityChange={handleFormValidityChange}
              onFormDataChange={handleFormDataChange}
              onCancel={cancleHandler}
            />
          </div>
          <div className="flex flex-col justify-between items-center w-full border border-gray-300 rounded-xl p-5 mt-7 md:w-[300px] bg-white md:mt-0">
            <div className="flex items-center justify-between border-b border-dashed border-gray-500 w-full">
              <h1 className="text-2xl font-bold">{data?.data.title}</h1>
              <p className="text-sm text-gray-700 mr-7">
                {toPersianNumber(day)} روز و {toPersianNumber(night)} شب
              </p>
            </div>
            <div className="flex items-center justify-between w-full mt-3">
              <p className="text-lg">قیمت نهایی</p>
              <h1 className="text-xl font-bold text-blue-500 mr-7">
                {formatNumber(+data?.data.price)}
                <span className="text-sm text-gray-800"> تومان</span>
              </h1>
            </div>
            <button
              onClick={handleFinalSubmit}
              disabled={!isFormValid}
              className={`w-full rounded-lg bg-primary-green text-white text-center p-2 mt-3 cursor-pointer ${
                !isFormValid ? " cursor-not-allowed opacity-50" : ""
              }`}
            >
              ثبت و خرید نهایی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
