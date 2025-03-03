"use client";

import { useGetUserData } from "@/config/services/query";
import { useContext } from "react";
import { ModalContext } from "../layout/Layout";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useAddToBasket } from "@/config/services/mutations";

function ReserveBtn({ id }) {
  const { setShowModal } = useContext(ModalContext);
  const router = useRouter();
  const { data } = useGetUserData();

  const { mutate, isPending } = useAddToBasket();

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
      if (isPending) return;
      mutate(id, {
        onSuccess: (data) => {
       
          toast.success("تور با موفقیت به سبد خرید شما اضافه شد");
          router.push(
            `/booking`
          );
        },
        onError: (error) => {
          console.log(error);

          toast.error("مشکلی پیش آمد ");
        },
      });
      // return
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
