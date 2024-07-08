"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function DynamicProduct() {
  const params = useParams();
  console.log(params?.dynamicProducts);
  return <div>Dynamic product page</div>;
}
