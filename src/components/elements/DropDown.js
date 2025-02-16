import { FaUser } from "react-icons/fa6";
import { PiSignOutLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { toPersianNumber } from "@/utils/extras";

function Dropdown({ show, phone }) {
  if (!show) return;

  return (
    <div className="w-[151px] h-[114px] flex flex-col justify-around absolute top-10  md:w-[246px] md:-left-10 md:h-[151px] bg-white overflow-hidden rounded-lg">
      <div className="flex bg-gray-100 w-full h-1/3 items-center ">
        <div className="flex mr-2  w-7 h-7  bg-gray-200 rounded-full items-center justify-center">
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
          <CiUser
            style={{
              fontSize: "20px",
              color: "#696969",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div className="mr-1 text-[12px] md:text-sm">
          <Link href="/">اطلاعات حساب کاربری</Link>
        </div>
      </div>
      <div className="flex h-1/3 items-center mr-2">
        <div>
          <PiSignOutLight
            style={{
              fontSize: "20px",
              color: "#D40000",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div className="mr-1 cursor-pointer">
          <h4 className="text-[12px] md:text-sm">خروج از حساب کاربری</h4>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
