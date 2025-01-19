import Image from "next/image";
import React from "react";

function InfoBanner() {
  return (
    <div className="p-9 mx-auto max-w-[1200px]">
      <div className="w-[376px] h-[220px]  m-auto md:w-full md:h-[251px] md:flex md:mx-auto  md:p-8 ">
        <div className="bg-primary-green w-full h-[128px] p-3 flex rounded-t-xl md:w-[70%] md:h-full md:justify-between md:rounded-lg md:pr-1 lg:pr-7">
          <div>
            <h1 className="font-bold text-[22px] text-white md:text-[40px]">
              {" "}
              خرید تلفی از <span className="text-[#10411B]">تورینو</span>
            </h1>
            <p className="text-white md:text-[28px]">به هرکجا که میخواهید!</p>
          </div>
          <div>
            <Image
              src="/images/man.png"
              width={195}
              height={158}
              alt="man"
              className="-mt-6 md:mt-8  md:ml-8"
            ></Image>
          </div>
        </div>
        <div className="border border-gray-300 rounded-b-lg w-full h-[62px] flex justify-between md:w-[30%] md:h-full md:flex-col md:justify-center md:items-center md:rounded-lg">
          <div className="flex items-center p-3 w-100 ">
            <p className="font-bold mt-1">021-1840</p>
            <Image
              src="images/svgs/callIcon.svg"
              width={20}
              height={20}
              alt="call"
            ></Image>
          </div>
          <div className=" p-3">
            <button className="w-[136px] h-[38px] text-white bg-[#10411b] rounded-md">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBanner;
