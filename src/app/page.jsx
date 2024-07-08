"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center flex-col ">
      <h1 className="text-[50px] text-red-500">next app</h1>
      <button
        className="btn btn-success"
        onClick={() => router.push("/productsdkflj")}
      >
        Navigate to products page
      </button>
    </main>
  );
}
