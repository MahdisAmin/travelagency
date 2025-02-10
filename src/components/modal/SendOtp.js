
import { toPersianNumber } from "@/utils/extras";
import { MdClose } from "react-icons/md";
function SendOtp({ setShowModal }) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#00000080] fixed top-0 left-0 z-[10000]">
      <div className="w-[352px] h-[365px] rounded-lg bg-white p-5 relative md:w-[561px] ">
        <div className="flex justify-end" onClick={() => setShowModal(false)}>
          <MdClose size={15} className="cursor-pointer" />
        </div>
        <div className="flex flex-col justify-around h-full">
          <div className="flex flex-col justify-center items-center ">
            <h3 className="font-bold ">ورود به تورینو</h3>
          </div>
          <div>
            <label>شماره موبایل خود را وارد کنید</label>
            <input
              className=" mt-3 border border-gray-300 p-2 w-full rounded-lg"
              placeholder={toPersianNumber("4253***0912")}
            />
          </div>
          <div>
            <button className="bg-primary-green w-full p-2 text-white rounded-lg mt-3">
              ارسال کد تایید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendOtp;
