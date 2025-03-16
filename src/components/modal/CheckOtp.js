import { checkOtp, resendOtp, sendOtp } from "@/config/services/mutations";
import React, { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function CheckOtp({ mobile, setStep, setShowModal }) {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(90);
  const [isOtpError, setIsOtpError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { isPending, mutate } = checkOtp();
  const { mutate: resendOtpMutate } = resendOtp();

  useEffect(() => {
    if (timer === 0) return;

    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const checkCodeHandler = () => {
    if (code.length !== 6) {
      setIsOtpError(true);
      setErrorMessage("کد باید 6 رقم باشد");
      return;
    }
    setIsOtpError(false);
    setErrorMessage("");
    if (isPending) return;
    mutate(
      { mobile, code },
      {
        onSuccess: async (data) => {
          setShowModal(false);
          setStep(1);
        },
        onError: (error) => {
          setIsOtpError(true);
          setErrorMessage("کد وارد شده اشتباه است");
          console.log(error);
        },
      }
    );
  };

  const handleChange = (enteredOtp) => {
    setCode(enteredOtp);
    if (enteredOtp.length === 6) {
      setIsOtpError(false);
      setErrorMessage("");
    }
  };

  const resendCodeHandler = () => {
    
    resendOtpMutate(
      { mobile }, 
      {
        onSuccess: () => {
          setTimer(90); 
          setErrorMessage(""); 
          setIsOtpError(false); 
          console.log("کد تایید مجدد ارسال شد");
        },
        onError: () => {
          setErrorMessage("ارسال کد مجدد با مشکل مواجه شد");
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-[#00000080] fixed top-0 left-0 z-[9999]">
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
                border: isOtpError ? "1px solid red" : "1px solid silver",
                borderRadius: "5px",
                width: "49px",
                height: "45px",
                marginRight: "5px",
              }}
            />
          </div>
          {isOtpError && (
            <p className="text-red-500 text-sm text-center mt-2">
              {errorMessage}
            </p>
          )}
          <div className="flex flex-col p-4">
            <span className="text-center text-sm">
              {timer > 0 ? (
                `تا ارسال مجدد کد ${Math.floor(timer / 60)}:${(timer % 60)
                  .toString()
                  .padStart(2, "0")}`
              ) : (
                <button
                  onClick={resendCodeHandler}
                  className="text-primary-green"
                >
                  ارسال مجدد کد
                </button>
              )}
            </span>
            <button
              onClick={checkCodeHandler}
              className="bg-primary-green mt-6 text-white p-2 rounded-lg"
              disabled={isPending}
            >
              ورود به تورینو
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CheckOtp;
