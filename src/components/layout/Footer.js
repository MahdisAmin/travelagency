import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="w-[400px] border-t border-t-gray-400 mx-auto lg:w-[900px]"></div>
      <div className="flex flex-col items-center justify-center  md:flex-row">
        <div className="flex items-center justify-center m-4 w-[350px]">
          <Image
            src="/images/best-price.png"
            width={60}
            height={50}
            alt="price"
          ></Image>
          <div className="mr-3">
            <h1 className="font-bold ">بصرفه ترین قیمت </h1>
            <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
          </div>
        </div>
        <div className="flex items-center justify-center m-4 w-[350px]">
          <Image
            src="/images/support.png"
            width={60}
            height={50}
            alt="price"
          ></Image>
          <div className="mr-3">
            <h1 className="font-bold ">پشتیبانی</h1>
            <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
          </div>
        </div>
        <div className="flex items-center justify-center m-4 w-[350px]">
          <Image
            src="/images/heart.png"
            width={60}
            height={50}
            alt="price"
          ></Image>
          <div className="mr-3 w-[500px]">
            <h1 className="font-bold ">رضایت کاربران</h1>
            <p>رضایت بیش از 10هزار کاربر از تور های ما.</p>
          </div>
        </div>
      </div>
      <div className="w-[400px] border-b border-dashed border-b-gray-400 mx-auto lg:w-[900px]"></div>
      <div>
        <div className="flex items-center justify-around m-6 ">
          <div>
            <h1 className="font-bold text-2xl">تورینو</h1>
            <ul className="flex flex-col mt-2 p-1 text-base">
              <Link href="/">درباره ما</Link>
              <Link href="/">تماس با ما</Link>
              <Link href="/">تماس با ما</Link>
              <Link href="/">بیمه مسافرتی</Link>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl ">خدمات مشتریان</h1>
            <ul className="flex flex-col mt-2 p-1 text-base">
              <Link href="/">پشتیبانی آنلاین</Link>
              <Link href="/">راهنمای خرید</Link>
              <Link href="/">راهنمای استرداد</Link>
              <Link href="/">پرسش و پاسخ</Link>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
