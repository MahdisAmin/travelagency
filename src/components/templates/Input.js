"use client";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/layouts/mobile.css";

import { useEffect, useState } from "react";
import { DateToIso, flattenObject } from "@/utils/helper";
import useQuery from "@/config/hooks/query";
import QueryString from "qs";
import { useRouter } from "next/navigation";
import { useGetTours } from "@/config/services/query";

function Input() {
  const router = useRouter();
  const { register, handleSubmit, control, reset } = useForm();
  const { getQuery } = useQuery();

  const { data } = useGetTours();
  const tour = data?.data;
  const uniqueOrigins = tour
    ? [...new Map(tour.map((t) => [t.origin.id, t.origin])).values()]
    : [];
  const uniqueDestination = tour
    ? [...new Map(tour.map((t) => [t.destination.id, t.destination])).values()]
    : [];
  console.log(uniqueOrigins);

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    const startDate = getQuery("startDate");
    const endDate = getQuery("endDate");
    if (originId && destinationId && startDate && endDate)
      reset({ originId, destinationId, startDate, endDate });
  }, []);

  const onSubmit = (form) => {
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
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
                className="bg-transparent w-full mr-2 outline-none cursor-pointer"
                {...register("originId")}
              >
                <option value="">مبدا</option>
                {uniqueOrigins.map((origin) => (
                  <option key={origin.id} value={origin.id}>
                    {origin.name}
                  </option>
                ))}
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
                className="bg-transparent w-2/3 mr-2 outline-none cursor-pointer"
                {...register("destinationId")}
              >
                <option className="text-gray-200" value="">
                  مقصد
                </option>
                {uniqueDestination.map((destination) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.name}
                  </option>
                ))}
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
                        const startDate = DateToIso(dates[0]);
                        const endDate = DateToIso(dates[1]);
                        console.log(startDate, endDate);
                        onChange({ startDate, endDate });
                      } else {
                        onChange(undefined);
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
