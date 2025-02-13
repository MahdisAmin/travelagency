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
        <div >
          <span onClick={() => setStep(1)}>
            <FaArrowLeft />
          </span>
        </div>
        <div>
          <h2>کد تایید را وارد کنید</h2>
          <p>کد تایید به شماره {mobile} ارسال شد</p>
          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={6}
            
          />
          <span>تا ارسال کد مجدد</span>
          <button onClick={checkCodeHandler}>ورود به تورینو</button>
        </div>
      </motion.div>
    </div>
  );
}

export default CheckOtp;
