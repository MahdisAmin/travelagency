"use client";
import Image from "next/image";
import React, { useState } from "react";
import Menu from "../elements/Menu";
import Footer from "./Footer";
import Auth from "../modal/Auth";
import { useGetUserData } from "@/config/services/query";
import { FaChevronDown, FaUser } from "react-icons/fa";
import Dropdown from "../elements/DropDown";
import { toPersianNumber } from "@/utils/extras";
import Link from "next/link";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState();
  const { isPending, data } = useGetUserData();
  const phoneNumber = data?.data.mobile;
  const dropDownHandler = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header>
        <div className=" h-20 container mx-auto flex justify-between items-center">
          <div className="container mx-auto flex justify-between items-center h-full p-10">
            <div className="hidden md:flex items-center text-sm ">
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="logo"
              ></Image>
              <ul className="flex items-center  mr-9">
                <Link href="/" className="m-4">
                  صفحه اصلی
                </Link>
                <Link href="/" className="m-4">
                  خدمات گردشگری
                </Link>
                <Link href="/" className="m-4">
                  درباره ما
                </Link>
                <Link href="/" className="m-4">
                  تماس با ما
                </Link>
              </ul>
            </div>
            <Auth setShowModal={setShowModal} showModal={showModal} />
            <div onClick={() => setShowMenu(!showMenu)} className="md:hidden">
              <Image
                src="/images/svgs/menu.svg"
                width={20}
                height={20}
                alt="menu"
                className="cursor-pointer"
              ></Image>
            </div>
            {data?.data ? (
              <>
                <div
                  onClick={dropDownHandler}
                  className="relative cursor-pointer"
                >
                  <h4 className="flex text-primary-green items-center">
                    <FaUser
                      style={{
                        marginBottom: "2px",
                        marginLeft: "5px",
                        fontSize: "15px",
                      }}
                    />
                    {toPersianNumber(phoneNumber)}
                    <FaChevronDown
                      style={{
                        marginRight: "5px",
                        fontSize: "15px",
                      }}
                    />
                  </h4>
                  <Dropdown show={showDropdown} phone={phoneNumber} />
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() => setShowModal(true)}
                  className="hidden md:flex items-center border border-primary-green rounded-lg p-2 cursor-pointer"
                >
                  <Image
                    src="/images/svgs/profile.svg"
                    width={20}
                    height={20}
                    alt="user"
                  ></Image>
                  <span className="mr-1 text-primary-green text-md">
                    ورود | ثبت نام
                  </span>
                </div>
                <div className="md:hidden" onClick={() => setShowModal(true)}>
                  <Image
                    src="/images/svgs/signinbuttom.svg"
                    width={40}
                    height={40}
                    alt="logo"
                    className="cursor-pointer"
                  ></Image>
                </div>
              </>
            )}
          </div>
          {showMenu && <Menu setShoeMenu={setShowMenu} />}
        </div>
      </header>

      {children}
      <Footer />
    </>
  );
}

export default Layout;
