import { FaUser } from "react-icons/fa6";
import { PiSignOutLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { toPersianNumber } from "@/utils/extras";

function Dropdown({ show, phone }) {
  if (!show) return;

  return (
    <div className="flex flex-col justify-around absolute top-10  w-[246px] -left-10 h-[151px] bg-white overflow-hidden rounded-lg">
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
        <div className="mr-1">
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
        <div className="mr-1">
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
          <h4>خروج از حساب کاربری</h4>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
