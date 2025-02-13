import { checkOtp } from "@/config/services/mutations";
import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

function CheckOtp({ mobile, setStep, setShowModal }) {
  const [code, setCode] = useState("");
  const { isPending, mutate } = checkOtp();
  const checkCodeHandler = () => {
    if (code.length !== 6) return;
    if (isPending) return;
    mutate(
      { mobile, code },
      {
        onSuccess: async (data) => {
          setShowModal(false);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  const handleChange = (enteredOtp) => {
    setCode(enteredOtp);
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
        <div className="flex justify-end">
          <span onClick={() => setStep(1)}>
            <FaArrowLeft className="text-sm cursor-pointer" />
          </span>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mt-5">
            <h2 className="font-bold text-2xl mt-8 mb-2">
              کد تایید را وارد کنید
            </h2>
            <p>کد تایید به شماره {mobile} ارسال شد</p>
          </div>
          <div
            style={{ direction: "ltr", marginTop: "10px" }}
            className="md:flex justify-center items-center"
          >
            <OtpInput
              value={code}
              onChange={handleChange}
              numInputs={6}
              inputStyle={{
                border: "1px solid silver",
                borderRadius: "5px",
                width: "49px",
                height: "45px",
                marginRight: "5px",
              }}
            />
          </div>
          <div className="flex flex-col p-4">
            <span className="text-center text-sm">تا ارسال کد مجدد</span>
            <button onClick={checkCodeHandler} className="bg-primary-green mt-6 text-white p-2 rounded-lg">ورود به تورینو</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CheckOtp;
