"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
const PassengerForm = ({
  formData,
  onFormValidityChange,
  onFormDataChange,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
    setValue, // برای تنظیم مقادیر از دست رفته
    watch, // برای نظارت بر مقادیر وارد شده
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    onFormValidityChange(isValid);
  }, [isValid, onFormValidityChange]);

  const validateNationalCode = (value) => {
    if (!value) return "کد ملی الزامی است";
    if (value.length !== 10) return "کد ملی باید ۱۰ رقمی باشد";
    return true;
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    if (data.birthDate) {
      console.log("تاریخ تولد:", data.birthDate);
    } else {
      console.log("تاریخ تولد خالی است");
    }
    onFormDataChange(data); // ارسال داده‌های فرم به والد
  };

  return (
    <form
      className="grid grid-cols-12 gap-4 p-10 border border-gray-300 rounded-lg md:max-w-[800px] md:bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-[300px] md:col-span-12 md:items-center">
        <img src="/images/svgs/user.svg" alt="user" />
        <h3 className="font-bold text-lg mr-2">{formData.title}</h3>
      </div>

      <div className="col-span-12 md:col-span-4 border rounded-lg p-2 border-gray-600 relative">
        <input
          type="text"
          placeholder={formData.fullNamePlaceholder}
          className="placeholder-black outline-none"
          {...register("fullName", { required: true })}
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
          {...register("gender", { required: true })}
        >
          <option value="">{formData.genderPlaceholder}</option>
          <option value="male">{formData.genderOptions?.male || "مرد"}</option>
          <option value="female">
            {formData.genderOptions?.female || "زن"}
          </option>
        </select>

        {errors.gender && (
          <p className="text-red-500 text-sm mt-1 absolute -bottom-5 left-0 w-full">
            {errors.gender.message}
          </p>
        )}
      </div>

      <div className="col-span-12 md:col-span-4 border rounded-lg p-2 border-gray-600 relative">
        <input
          type="text"
          placeholder={formData.nationalCodePlaceholder}
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
                placeholder={formData.birthDatePlaceholder}
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

      <button type="submit" className="mt-4">
        Submit
      </button>
    </form>
  );
};

export default PassengerForm;
