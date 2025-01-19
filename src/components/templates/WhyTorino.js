import Image from "next/image";
import React from "react";
import ImageSlider from "../elements/ImageSlider";

function WhyTorino() {
  const images = [
    "/images/pic4.png",
    "/images/pic3.png",
    "/images/pic2.png",
    "/images/pic1.png",
  ];
  return (
    <div>
      <div className="flex items-center  lg:mr-[130px] justify-center lg:justify-start">
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
          چرا
          <span className="font-extrabold text-primary-green text-3xl mr-2">
            {" "}
            تورینو
          </span>{" "}
          ؟
        </h1>
      </div>
      <div className="lg:flex mt-9 lg:justify-around lg:mr-4">
        <div className="hidden lg:block lg:mt-10  ">
          <h1 className="lg:font-medium lg:text-2xl ">تور طبیعت گردی و تاریخی</h1>
          <p className="lg:w-[400px] lg:mt-3 lg:text-justify ">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
        <div>
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  );
}

export default WhyTorino;
