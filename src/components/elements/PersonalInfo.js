import React from 'react'

function PersonalInfo({ data }) {
    console.log(data)
  return (
    <div>
      <div className="p-3 border border-gray-300 rounded-lg mt-3">
        <div className='flex justify-between'>
          <p>اطلاعات شخصی</p>
          <button className="text-[#009ECA] flex">
            <img src="/images/svgs/edit.svg" alt="edit" className="ml-1" />
            ویرایش اطلاعات
          </button>
              </div>
              <div>
                  <p>نام و نام خانوادگی</p>
                  <span>{data?.data.firstName}</span>
              </div>
      </div>
    </div>
  );
}

export default PersonalInfo