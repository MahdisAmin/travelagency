"use client"
import Image from "next/image";
function ServerError({ error, reset }) {
  return (
    <div className="container m-auto text-center p-20 ">
      <div className="md:flex md:justify-around md:items-center md:flex-row-reverse">
        <div className="flex justify-center items-center">
          <Image
            src="/images/500.png"
            width={555}
            height={555}
            alt="error"
          ></Image>
        </div>
        <div>
          <div >
            <h2 className="font-bold text-2xl ">اتصال با سرور برقرا نیست </h2>
          </div>
          <div className="mt-3 text-lg font-bold">
            <p>
              لطفا بعدا دوباره امتحان کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerError;
