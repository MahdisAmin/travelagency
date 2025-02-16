import { FaUser } from "react-icons/fa6";
import { PiSignOutLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { toPersianNumber } from "@/utils/extras";

function Dropdown({ show, phone }) {
  if (!show) return;

  return (
    <div>
      <div>
        <div>
          <FaUser
            style={{
              fontSize: "15px",
              color: "#696969",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div >
          <h4>{toPersianNumber(phone)}</h4>
        </div>
      </div>
      <div >
        <div>
          <CiUser
            style={{
              fontSize: "20px",
              color: "#696969",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div>
          <Link href="/">اطلاعات حساب کاربری</Link>
        </div>
      </div>
      <div>
        <div>
          <PiSignOutLight
            style={{
              fontSize: "20px",
              color: "#D40000",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div>
          <h4>خروج از حساب کاربری</h4>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
