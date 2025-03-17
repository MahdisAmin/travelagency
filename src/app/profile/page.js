"use client";

import BankacoountInfo from "@/components/elements/BankacoountInfo";
import PersonalInfo from "@/components/elements/PersonalInfo";
import UserInfo from "@/components/elements/UserInfo";
import BankAccountForm from "@/components/templates/BankAccountForm";
import { useGetUserData, useGetUserTours } from "@/config/services/query";
import React from "react";

function UserProfile() {
  const { data , refetch } = useGetUserData();
  console.log(data);

  return (
    <div>
      <UserInfo data={data} refetch={refetch} />
      <PersonalInfo data={data} />
      <BankacoountInfo data={data} />
    </div>
  );
}

export default UserProfile;
