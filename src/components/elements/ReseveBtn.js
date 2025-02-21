"use client";

import { useGetUserData } from "@/config/services/query";
import Link from "next/link";
import { useContext } from "react";
import { ModalContext } from "../layout/Layout";
import { useRouter } from "next/navigation";

function ReserveBtn() {
  const { setShowModal } = useContext(ModalContext);
  const router = useRouter();
  const { data } = useGetUserData();
  const reservHandler = () => {
    if (!data?.data) {
      setShowModal(true);
    } else {
      return router.push("/booking");
    }
  };
  return (
    <div>
      <button
        className="bg-primary-green text-white  py-2 px-9 rounded-lg my-5 md:mx-14"
        onClick={reservHandler}
      >
        {/* <Link
          href={{
            pathname: "/booking",
            // query: {
            //   title,
            //   price,
            //   day,
            //   night,
            // },
          }}
        >
        </Link> */}
        رزرو و خرید
      </button>
    </div>
  );
}

export default ReserveBtn;
