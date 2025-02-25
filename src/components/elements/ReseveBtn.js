"use client";

import { useGetUserData } from "@/config/services/query";
import { useContext } from "react";
import { ModalContext } from "../layout/Layout";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

function ReserveBtn({ title, price , day , night }) {
  const { setShowModal } = useContext(ModalContext);
  const router = useRouter();
  const { data } = useGetUserData();

  const reservHandler = () => {
    if (!data?.data) {
      toast("برای رزرو و خرید ابتدا وارد شوید.", {
        style: {
          zIndex: 1000000,
          color: "#28A745",
        },
      });
      setShowModal(true);
    } else {
     return router.push(`/booking?title=${title}&price=${price}&day=${day}&night=${night}`);
    }
  };
  return (
    <div>
      <button
        className="bg-primary-green text-white  py-2 px-9 rounded-lg my-5 md:mx-14"
        onClick={reservHandler}
      >
        رزرو و خرید
      </button>
    </div>
  );
}

export default ReserveBtn;
