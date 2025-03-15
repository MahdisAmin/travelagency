"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import toast from "react-hot-toast";
import { useUpdatePersonalInfo } from "@/config/services/mutations";
const PassengerForm = ({
  formData,
  onFormValidityChange,
  onFormDataChange,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: formData,
  });
  const { mutate } = useUpdatePersonalInfo();
  useEffect(() => {
    if (onFormValidityChange) {
      onFormValidityChange(isValid);
    }
  }, [isValid, onFormValidityChange]);

  const validateNationalCode = (value) => {
    if (!value) return "کد ملی الزامی است";
    if (value.length !== 10) return "کد ملی باید ۱۰ رقمی باشد";
    return true;
  };

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("اطلاعات  با موفقیت ذخیره شد.");
      },
      onError: () => toast.error("مشکلی پیش آمده دوباره امتحان کنید."),
    });
    onFormDataChange(data);
  };
  const cancleHandler = () => {
    
    reset(formData);
    onCancel();
  };

  return (
    <form
      className="grid grid-cols-12 gap-4 p-10 border border-gray-300 rounded-lg md:max-w-[800px] md:bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-[300px] md:col-span-12 md:items-center">
        <img src="/images/svgs/user.svg" alt="user" />
        <h3 className="font-bold text-lg mr-2">مشخصات مسافر</h3>
      </div>

      <div className="col-span-12 md:col-span-4 border rounded-lg p-2 border-gray-600 relative">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="placeholder-black outline-none"
          {...register("fullName", { required: "این فید الزامی است" })}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1 absolute -bottom-5 left-0 w-full">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div className="col-span-12 md:col-span-4 border rounded-lg p-2 border-gray-600 relative">
        <select
          className="outline-none w-full"
          {...register("gender", { required: "یکی از گزینه هارا انتخاب کنید" })}
        >
          <option value="">جنسیت</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>

        {errors.gender && (
          <p className="text-red-500 text-sm mt-1 absolute -bottom-5 left-0 w-full ">
            {errors.gender.message}
          </p>
        )}
      </div>

      <div className="col-span-12 md:col-span-4 border rounded-lg p-2 border-gray-600 relative">
        <input
          type="text"
          placeholder="کد ملی"
          className="placeholder-black outline-none"
          {...register("nationalCode", {
            required: "کد ملی صحیح وارد کنید",
            validate: validateNationalCode,
          })}
        />
        {errors.nationalCode && (
          <p className="text-red-500 text-sm mt-1 absolute -bottom-5 left-0 w-full">
            {errors.nationalCode.message}
          </p>
        )}
      </div>

      <div className="col-span-12 md:col-span-4 border rounded-lg p-2 border-gray-600 relative">
        <div className="flex items-center w-full">
          <Image
            src="/images/svgs/calendar.svg"
            width={18}
            height={18}
            className="md:mr-4"
            alt="date"
          />
          <Controller
            name="birthDate"
            control={control}
            rules={{ required: "تاریخ تولد الزامی است" }}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={(date) => {
                  const formattedDate = date ? date.format("YYYY-MM-DD") : null;
                  field.onChange(formattedDate);
                }}
                placeholder="تاریخ تولد"
                className="outline-none w-full"
                locale={persian_fa}
                calendar={persian}
                style={{
                  border: "none",
                  width: "100%",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
            )}
          />

          {errors.birthDate && (
            <p className="text-red-500 text-sm mt-1 absolute -bottom-5 left-0 w-full">
              {errors.birthDate.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col  md:flex-row  md:w-[500px] w-[350px] justify-center md:justify-start items-center">
        <button
          type="submit"
          className=" p-2 bg-primary-green text-white md:w-[120px] rounded-xl md:ml-4 md:mb-0 mb-5 w-full"
        >
          ثبت اطلاعات
        </button>
        <button
          type="button"
          onClick={cancleHandler}
          className=" p-2  text-gray-600 w-full md:w-[120px] rounded-xl border border-gray-600"
        >
          انصراف
        </button>
      </div>
    </form>
  );
};

export default PassengerForm;
