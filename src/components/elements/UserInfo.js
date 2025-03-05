import { toPersianNumber } from '@/utils/extras'
import React from 'react'

function UserInfo({data}) {
  return (
    <div>
      <div>
        <p>اطلاعات حساب کاربری</p>
        <div>
          <p>شماره موبایل</p>
          <span>{toPersianNumber(+data?.data?.mobile)}</span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo