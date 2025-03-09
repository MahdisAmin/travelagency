"use client";
import { useGetUserData } from "@/config/services/query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../elements/Loader";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending) return <Loader />;
  return children;
}

export default AuthProvider;
