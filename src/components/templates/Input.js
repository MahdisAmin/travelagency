"use client";
import Image from "next/image";
import { Controller, set, useForm } from "react-hook-form";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/layouts/mobile.css";
import { useGetTours } from "@/config/services/query";
import { useEffect, useState } from "react";

function Input() {
  const [query, setQuery] = useState("");
  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit, control } = useForm();
  console.log(data);
  useEffect(() => {
    refetch();
  }, [query]);
  const onSubmit = (form) => {
    let queryString = "";
    for (const key in form) {
      if (key === "date" && form.date) {
        if (form.date.startDate && form.date.endDate) {
          queryString += `startDate=${form?.date?.startDate}&`;
        }
        if (form.date.endDate) {
          queryString += `endDate=${form?.date?.endDate}&`;
        }
      } else if (form[key]) {
        queryString += key + "=" + form[key] + "&";
      }
    }
    setQuery(queryString);
  };

  return (
    <div>
      <div className="container p-10 mx-auto ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto grid grid-cols-12 text-center gap-3 md:border md:border-gray-200 rounded-lg p-1  md:max-w-[800px]"
        >
          <div className=" col-span-6  md:col-span-3 border rounded-lg p-2 md:border-none ">
            <div className="flex item-center w-full  ">
              <Image
                src="/images//svgs/location.svg"
                width={18}
                height={18}
                className="md:mr-4"
                alt="location"
              ></Image>

              <select
                className="bg-transparent w-full mr-2 outline-none"
                {...register("originId")}
              >
                <option>مبدا</option>
                <option value={1}>تهران</option>
                <option value={2}>سنندج</option>
              </select>
            </div>
          </div>
          <div className=" col-span-6  md:col-span-3 border rounded-lg p-2 md:border-none  ">
            <div className="flex item-center w-full mr-3 md:border-r-2 md:border-gray-300  ">
              <Image
                src="/images/svgs/to.svg"
                width={18}
                height={18}
                className="md:mr-4"
                alt="to"
              ></Image>
              <select
                className="bg-transparent w-2/3 mr-2 outline-none"
                {...register("destinationId")}
              >
                <option className="text-gray-200">مقصد</option>
                <option value={1}>تهران</option>
                <option value={2}>سنندج</option>
              </select>
            </div>
          </div>
          <div className=" col-span-12 md:col-span-3   border border-gray-200  rounded-lg p-2  md:border-none ">
            <div className="flex items-center mr-3 md:border-r-2 md:border-gray-300  ">
              <Image
                src="/images/svgs/calendar.svg"
                width={18}
                height={18}
                className="md:mr-4"
                alt="date"
              ></Image>
              <Controller
                name="date"
                control={control}
                render={({ field: { onChange } }) => (
                  <DatePicker
                    onChange={(dates) => {
                      if (dates && dates.length === 2) {
                        // تبدیل تاریخ‌های شمسی به میلادی
                        const startDate = new Date(dates[0]).toISOString(); // تبدیل به فرمت ISO
                        const endDate = new Date(dates[1]).toISOString(); // تبدیل به فرمت ISO
                        console.log(startDate, endDate);
                        onChange({ startDate, endDate }); // ارسال داده‌ها به react-hook-form
                      }
                    }}
                    range
                    locale={persian_fa}
                    calendar={persian}
                    placeholder="تاریخ"
                    style={{
                      border: "none",
                      width: "100%",
                      outline: "none",
                      boxShadow: "none",
                    }}
                  />
                )}
              />
            </div>
          </div>

          <div className="  col-span-12 md:col-span-3 bg-primary-green rounded-lg p-1 text-center text-white flex justify-center items-center cursor-pointer">
            <input type="submit" value="جستجو" className="cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
