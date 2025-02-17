import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="container m-auto text-center p-20 ">
      <div className="md:flex md:justify-around md:items-center md:flex-row-reverse">
        <div className="flex justify-center items-center">
          <Image
            src="/images/404.png"
            width={322}
            height={322}
            alt="notfound"
          ></Image>
        </div>
        <div >
          <div className="mb-10">
            <h2 className="font-bold text-2xl ">صفحه مورد نظر یافت نشد!</h2>
          </div>
          <div className="mt-3">
            <Link
              href="/"
              className="mt-5 bg-[#D8FFE1] rounded-lg py-3 px-6 text-primary-green font-bold"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
