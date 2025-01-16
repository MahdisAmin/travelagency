"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

function Input() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="container p-10 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto grid grid-cols-12 text-center gap-4 "
        >
          <div className="col-span-6 border md:col-span-3 border-gray-200 rounded-lg p-1 ">
            <div className="flex items-center mr-3 ">
              <Image src="/images/location.svg" width={18} height={18}></Image>
              <input type="text" placeholder="مبدا" {...register("from")} className="mr-2" />
            </div>
          </div>
          <div className="col-span-6  md:col-span-3 border rounded-lg p-1 ">
            <div className="flex item-center w-full mr-3 ">
              <Image src="/images/to.svg" width={18} height={18}></Image>
              <input
                type="text"
                placeholder="مقصد"
                {...register("from")}
                className="bg-transparent mr-2"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-3  border border-gray-200  rounded-lg p-1 ">
            <div className="flex items-center mr-3">
              <Image src="/images/calendar.svg" width={18} height={18}></Image>
              <input
                type="text"
                placeholder="تاریخ"
                {...register("from")}
                className="mr-2 "
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 bg-primary-green rounded-lg p-1 text-center text-white">
            <button type="submit">جستجو</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
