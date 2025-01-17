"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

function Input() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
              ></Image>
              <input
                type="text"
                placeholder="مبدا"
                {...register("from")}
                className="bg-transparent mr-2 outline-none"
              />
            </div>
          </div>
          <div className=" col-span-6  md:col-span-3 border rounded-lg p-2 md:border-none  ">
            <div className="flex item-center w-full mr-3 md:border-r-2 md:border-gray-300  ">
              <Image
                src="/images/svgs/to.svg"
                width={18}
                height={18}
                className="md:mr-4"
              ></Image>
              <input
                type="text"
                placeholder="مقصد"
                {...register("from")}
                className="bg-transparent mr-2 outline-none"
              />
            </div>
          </div>
          <div className=" col-span-12 md:col-span-3   border border-gray-200  rounded-lg p-2  md:border-none ">
            <div className="flex items-center mr-3 md:border-r-2 md:border-gray-300  ">
              <Image
                src="/images/svgs/calendar.svg"
                width={18}
                height={18}
                className="md:mr-4"
              ></Image>
              <input
                type="text"
                placeholder="تاریخ"
                {...register("from")}
                className="mr-2 outline-none "
              />
            </div>
          </div>

          <div className="  col-span-12 md:col-span-3 bg-primary-green rounded-lg p-1 text-center text-white ">
            <button type="submit">جستجو</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
