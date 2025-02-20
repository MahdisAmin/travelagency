import React from 'react'

function Booking({ searchParams }) {
const {title , price , day , night}= searchParams
    
  return (
    <div className="container m-auto">
      <div className="flex justify-between">
        <div>
          <form className="grid grid-cols-12 gap-3 md:border md:border-gray-200 rounded-lg p-1 md:max-w-[800px]">
            <input
              type="text"
              placeholder="نام"
              className="col-span-6 md:col-span-3 border rounded-lg p-2 md:border-none"
            />
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-400">تعداد شب ها: {night}</p>
            <p className="text-sm text-gray-400">تعداد روز ها: {day}</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{price} تومان</h1>
            <p className="text-sm text-gray-400">هزینه کل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking