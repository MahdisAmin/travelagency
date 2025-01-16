import Image from 'next/image'
import React from 'react'

function Cards({ tourList }) {
    const {title , image ,options} = tourList
  return (
    <div className="flex justify-center items-center m-4">
      <div className="w-auto   border border-[#0000001F] rounded-lg ">
        <div className="mx-auto w-[327.44px]  overflow-hidden">
          <img src={image} className="w-full overflow-hidden" />
                  <h1 className="text-[20px] font-semibold m-3">{title}</h1>
                  <span className='mr-3 text-sm text-primary-gray'>{`${options[0]} - ${options[1]} و ... `}</span>
        </div>
      </div>
    </div>
  );
}

export default Cards