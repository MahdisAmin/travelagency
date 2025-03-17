"use client";

import { useUpdatePersonalInfo } from "@/config/services/mutations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankAcountSchema } from "@/config/schema";
import toast from "react-hot-toast";

function BankAccountForm({ cancel, setIsEditing, refetch }) {
  const { mutate, isPending } = useUpdatePersonalInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          console.log(data?.data?.payment);

          toast.success(data?.data?.message);
          setIsEditing(false);
          refetch();
        },
        onError: (error) => {
          toast.success(error);
        },
      }
    );
  };
  const cancelHandler = () => {
    cancel();
  };
  return (
    <div>
      <p className="border-0 font-bold">اطلاعات حساب بانکی</p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className=" *:m-2 p-1 flex flex-col md:block"
      >
        <input
          {...register("shaba_code")}
          placeholder="شماره شبا"
          className="border border-gray-300 rounded-lg p-2"
        />
        {!!errors?.shaba_code && (
          <span className=" text-rose-500 text-[10px]">
            {errors?.shaba_code?.message}
          </span>
        )}
        <input
          {...register("debitCard_code")}
          placeholder="شماره کارت"
          className="border border-gray-300 rounded-lg p-2"
        />
        {!!errors?.debitCard_code && (
          <span className=" text-rose-500 text-[10px]">
            {errors?.debitCard_code?.message}
          </span>
        )}

        <input
          {...register("accountIdentifier")}
          placeholder="شماره حساب"
          className="border border-gray-300 rounded-lg p-2"
        />
        {!!errors?.accountIdentifier && (
          <span className=" text-rose-500 text-[10px]">
            {errors?.accountIdentifier?.message}
          </span>
        )}

        <button
          type="submit"
          className="!bg-green-500  text-white !border-0 px-5 py-1 rounded"
        >
          ثبت
        </button>
        <button
          onClick={cancelHandler}
          className="!bg-gray-300  text-gray-500 !border-0 px-5 py-1 rounded"
        >
          انصراف
        </button>
      </form>
    </div>
  );
}

export default BankAccountForm;
