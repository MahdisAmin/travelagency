import Link from "next/link";
import React from "react";

function Cards({ tourList }) {
  const { id, title, image, options, price } = tourList;

  return (
    <div>
      <div className="flex justify-center items-center m-3">
        <div className="w-auto border border-[#0000001F] rounded-xl">
          <div className="mx-auto w-[300.44px] overflow-hidden">
            <img src={image} className="w-full overflow-hidden" alt={title} />
            <h1 className="text-[20px] font-semibold m-3">{title}</h1>
            <span className="mr-3 text-sm text-primary-gray">
              {options && options.length > 0
                ? `${options[0]} - ${options[1]} و ... `
                : "هیچ گزینه‌ای وجود ندارد"}
            </span>
          </div>
          <div className="border-t border-t-slate-300">
            <div className="flex justify-between items-center m-2">
              <Link
                href={`/tourDetail/${id}`}
                className="bg-primary-green p-1 w-[99px] text-center rounded-md text-white"
              >
                رزرو
              </Link>
              <p className="text-blue-500">
                {price} <span className="text-primary-gray mr-1">تومان</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
