import React, { useState } from 'react'
import SendOtp from './SendOtp'
import CheckOtp from './CheckOtp'

function Auth({ showModal, setShowModal }) {
  if(!showModal)return
  const [step, setstep] = useState(1)
  const [mobile , setMobile]=useState("")
  return (
    <div>
      {step === 1 && (
        <SendOtp
          step={step}
          setShowModal={setShowModal}
          mobile={mobile}
          setMobile={setMobile}
        />
      )}
      {step === 2 && <CheckOtp />}
    </div>
  );
}

export default Auth