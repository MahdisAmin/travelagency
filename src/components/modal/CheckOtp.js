import { checkOtp } from '@/config/services/mutations'
import React, { useState } from 'react'

function CheckOtp({ mobile, step, setShowModal }) {
  const [code, setCode] = useState("");
  const { isPending, mutate } = checkOtp();
  if (code.length !== 6) return;
  if (isPending) return;
  mutate({ mobile, code } , {
     on
  })
  return <div>CheckOtp</div>;
}

export default CheckOtp