"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(router);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-[50px] text-red-500">next app</h1>
      <button
        className="btn btn-success"
        onClick={() => router.push("/products")}
      >
        Navigate to products page
      </button>
    </main>
  );
}
