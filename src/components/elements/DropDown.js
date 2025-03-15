import { FaUser } from "react-icons/fa6";
import Link from "next/link";
import { toPersianNumber } from "@/utils/extras";
import Image from "next/image";
import { setCookie } from "@/utils/cookie";

function Dropdown({ show, phone }) {
  if (!show) return;

  const logOutHandler = () => {
    setCookie("accessToken", "");
    window.location.reload();
  };

  return (
    <div className="w-[151px] h-[114px] flex flex-col justify-around absolute top-10  md:w-[246px] md:-left-10 md:h-[151px] bg-white overflow-hidden rounded-lg">
      <div className="flex bg-gray-100 w-full h-1/3 items-center ">
        <div className="flex mr-1  w-7 h-7  bg-gray-200 rounded-full items-center justify-center">
          <FaUser
            style={{
              fontSize: "12px",
              color: "#696969",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div className="text-[12px] md:text-sm mr-1">
          <h4>{toPersianNumber(phone)}</h4>
        </div>
      </div>
      <div className="flex h-1/3 items-center mr-2 ">
        <div>
          <Image
            src="/images/svgs/user.svg"
            height={16}
            width={16}
            alt="logout"
          ></Image>
        </div>
        <div className="mr-1 text-[12px] md:text-sm">
          <Link href="/profile">اطلاعات حساب کاربری</Link>
        </div>
      </div>
      <div className="flex h-1/3 items-center mr-2">
        <div>
          <Image
            src="/images/svgs/logout.svg"
            height={16}
            width={16}
            alt="logout"
          ></Image>
        </div>
        <div className="mr-1 cursor-pointer" onClick={logOutHandler}>
          <h4 className="text-[12px] md:text-sm">خروج از حساب کاربری</h4>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
