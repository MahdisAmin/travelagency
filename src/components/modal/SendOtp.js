import { sendOtp } from "@/config/services/mutations";
import { isValidMobile, toPersianNumber } from "@/utils/extras";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdClose } from "react-icons/md";
function SendOtp({ setShowModal, mobile, setMobile, setStep }) {
  const { isPending, mutate } = sendOtp();
  const [error, setError] = useState("");
  const sendCodeHandler = () => {
    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    setError("");
    mutate(
      { mobile },
      {
        onSuccess: () => {
          // toast.success(data?.data?.message);
          // toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#00000080] fixed top-0 left-0 z-[10000]">
      <motion.div
        className="w-[352px] h-[365px] rounded-lg bg-white p-5 relative md:w-[561px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
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
              className=" mt-3 border border-gray-300 p-2 w-full rounded-lg outline-none"
              placeholder={toPersianNumber("4253***0912")}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {!!error && <span className="text-red-600 text-sm">{error}</span>}
          </div>
          <div>
            <button
              onClick={sendCodeHandler}
              className="bg-primary-green w-full p-2 text-white rounded-lg mt-3"
            >
              ارسال کد تایید
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SendOtp;
