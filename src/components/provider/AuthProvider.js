"use client";
import { useGetUserData } from "@/config/services/query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending } = useGetUserData();
  const [hasShownError, setHasShownError] = useState(false);
  useEffect(() => {
    if (!isPending && !data?.data) {
      toast.error("لطفا ابتدا وارد شوید");
      setHasShownError(true);
      router.push("/");
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  return children;
}

export default AuthProvider;
