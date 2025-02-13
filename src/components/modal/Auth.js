import React, { useState } from "react";
import SendOtp from "./SendOtp";
import CheckOtp from "./CheckOtp";

function Auth({ showModal, setShowModal }) {
  if (!showModal) return;
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtp
          setStep={setStep}
          setShowModal={setShowModal}
          mobile={mobile}
          setMobile={setMobile}
        />
      )}

      {step === 2 && (
        <CheckOtp
          mobile={mobile}
          setStep={setStep}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default Auth;
