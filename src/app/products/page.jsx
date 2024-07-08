"use client";
import { useRouter } from "next/navigation";

export default function Product() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <button className="btn btn-success" onClick={() => router.push("/")}>
        Navigate to home page
      </button>
    </div>
  );
}
