import Image from "next/image";
import React from "react";

function WhyTorino() {
  return (
    <div className="flex items-center mr-11 md:mr-[80px]">
      <div className="bg-gradient-to-r from-primary-green to-[#10411B] w-10 h-10 rounded-full  flex justify-center items-center">
        <Image
          src="/images/svgs/questionmark.svg"
          width={10}
          height={10}
          alt="questionMark"
        ></Image>
      </div>
      <h1 className="font-extrabold text-3xl mr-2">
        {" "}
        چرا<span className="font-extrabold text-primary-green text-3xl mr-2"> تورینو</span> ؟
      </h1>
    </div>
  );
}

export default WhyTorino;
