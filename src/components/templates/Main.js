import React from 'react'
import Input from './Input';
import Tours from './Tours';
import InfoBanner from '../elements/InfoBanner';
import WhyTorino from './WhyTorino';

function Main() {
  return (
    <div>
      <div className="mt-8 text-center text-base font-semibold  md:text-[28px]">
        <span className="text-primary-green">تورینو</span>
        <span className="text-[#595959]">
          {" "}
          برگزار کننده بهترین تور های داخلی و خارجی
        </span>
      </div>
          <Input />
      <Tours />
      <InfoBanner />
      <WhyTorino/>
    </div>
  );
}

export default Main