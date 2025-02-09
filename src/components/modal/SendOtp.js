
import { MdClose } from "react-icons/md";
function SendOtp() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#00000080] fixed top-0 left-0 z-[10000]">
      <div className="w-[352px] h-[365px] rounded-lg bg-white p-5 relative ">
        <div className="flex justify-end">
         <MdClose size={15} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

export default SendOtp;
