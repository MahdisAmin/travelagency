import Image from "next/image";
import React from "react";

function WhyTorino() {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary-green to-[#10411B] w-10 h-10 rounded-full mx-10 flex justify-center items-center">
        <Image
          src="/images/svgs/questionmark.svg"
          width={10}
          height={10}
          alt="questionMark"
        ></Image>
      </div>
    </div>
  );
}

export default WhyTorino;
