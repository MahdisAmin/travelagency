import React from "react";
import Input from "./Input";
import Tours from "./Tours";
import InfoBanner from "../elements/InfoBanner";
import WhyTorino from "./WhyTorino";
import Image from "next/image";

function Main({tours}) {
  return (
    <div>
      <div>
        <Image
          src="/images/banner.jpg"
          width={1440}
          height={350}
          alt="banner"
          className="w-full"
        ></Image>
      </div>
      <div className="mt-8 text-center text-base font-semibold  md:text-[28px]">
        <span className="text-primary-green">تورینو</span>
        <span className="text-[#595959]">
          {" "}
          برگزار کننده بهترین تور های داخلی و خارجی
        </span>
      </div>
      <Input />
      <Tours tours={tours} />
      <InfoBanner />
      <WhyTorino />
    </div>
  );
}

export default Main;
