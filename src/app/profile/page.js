"use client";

import UserInfo from "@/components/elements/UserInfo";
import { useGetUserData } from "@/config/services/query";
import React from "react";

function UserProfile() {
  const { data } = useGetUserData();
  console.log(data);

    return <div>
        <UserInfo data={ data} />
  </div>;
}

export default UserProfile;
