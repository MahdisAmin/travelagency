"use client";
import Image from "next/image";

import React from "react";

export async function getTours(id) {
  const res = await fetch(`http://localhost:6500/tour/${id}`, {
    cache: "no-store",
  });
  const tours = await res.json();
  return tours;
}

async function TourDetails({params}) {
  const tours = await getTours(params.id);
  const { id, title, image, options, price } = tours;
  console.log(id)

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center m-3">
       <img src={image} className="w-[330px] h-[220px] overflow-hidden" alt={title} />
      </div>
      <div>
        <h1 className="text-[20px] font-semibold m-3">{title}</h1>
         <p></p>
      </div>
    </div>
  );
}

export default TourDetails;
