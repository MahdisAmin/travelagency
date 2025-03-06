"use client";
import UserTours from "@/components/templates/UserTours";
import { useGetUserTours } from "@/config/services/query";
import React from "react";

function MyTours() {
  const { data } = useGetUserTours();
  console.log(data);
  return (
    <div>
      {data && data?.data?.map((tour) => (<UserTours key={tour.id} tour={tour} />))}
    </div>
  );
}

export default MyTours;
