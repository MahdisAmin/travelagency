"use client";
import { useUpdatePersonalInfo } from "@/config/services/mutations";
import { toPersianNumber } from "@/utils/extras";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";

function UserInfo({ data, refetch }) {
  const { mutate: updateProfile } = useUpdatePersonalInfo();
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const previousEmail = data?.data?.email;

  const handleEditClick = () => {
    setIsEditing(true);
    setValue("email", data?.data?.email || "");
  };

  const onSubmit = (data) => {
    if (!isEmail(data.email)) {
      return;
    }

    updateProfile(
      { email: data.email },
      {
        onSuccess: () => {
          refetch();
          setIsEditing(false);
        },
      }
    );
  };
  return (
    <div>
      <div className="p-5 border border-gray-300 rounded-lg">
        <p>اطلاعات حساب کاربری</p>
        <div className="md:flex md:justify-between">
          <div className="flex justify-between my-3 font-normal">
            <p className="text-gray-600 md:ml-6">شماره موبایل</p>
            <span>{toPersianNumber(+data?.data?.mobile)}</span>
          </div>
          <div className="flex justify-between my-3 font-normal">
            <div className="flex md:ml-20 lg:ml-80">
              {!isEditing && (
                <>
                  <p className="ml-7">ایمیل</p>
                  <span>{previousEmail || "-"}</span>{" "}
                </>
              )}
            </div>
            {!isEditing && (
              <button
                onClick={handleEditClick}
                className="text-[#009ECA] flex font-bold"
              >
                <img src="/images/svgs/edit.svg" alt="edit" className="ml-1" />
                افزودن
              </button>
            )}
            {isEditing && (
              <div className="flex flex-col relative">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex absolute left-28 "
                >
                  <input
                    type="email"
                    {...register("email", {
                      required: "ایمیل نمی‌تواند خالی باشد",
                      validate: (value) =>
                        isEmail(value) || "ایمیل وارد شده معتبر نیست",
                    })}
                    className="border border-gray-300 p-2 rounded mt-2"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1 absolute -bottom-5">
                      {errors.email.message}
                    </span>
                  )}
                  <button
                    type="submit"
                    className="bg-primary-green text-white px-6 md:px-9 py-1 mr-2 rounded-lg mt-3"
                  >
                    تایید
                  </button>
                </form>
                <button
                  onClick={() => setIsEditing(false)}
                  className="mt-3  text-primary-green border border-primary-green py-[6px] px-5 md:px-8 rounded-lg -mr-10"
                >
                  انصراف
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
