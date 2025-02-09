import React, { useState } from 'react'
import SendOtp from './SendOtp'
import CheckOtp from './CheckOtp'

function Auth({ showModal, setShowModal }) {
  if(!showModal)return
    const [step , setstep] = useState(1)
  return (
    <div >
      {step === 1 && <SendOtp step={step} setstep={setstep} />}
      {step === 2 && <CheckOtp/>}
    </div>
  )
}

export default Auth