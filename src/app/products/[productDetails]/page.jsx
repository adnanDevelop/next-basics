"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const params = useParams();

  console.log(params.productDetails);
  return <div>Product details page</div>;
}
