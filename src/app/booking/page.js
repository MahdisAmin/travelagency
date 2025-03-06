"use client"
import { useGetUserData } from '@/config/services/query'
import React from 'react'
import CheckOutPage from './CheckoutPage'

function Booking() {
    const {data}=useGetUserData()
  return (
      <div>
          <CheckOutPage userData={data} />
    </div>
  )
}

export default Booking