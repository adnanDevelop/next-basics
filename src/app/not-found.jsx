import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-[50px] font-semibold flex items-center justify-center h-[91vh] text-red flex-col gap-4">
      <h2>Page Not Found</h2>
      <Link href={"/"} className="btn btn-success">
        Go to home page
      </Link>
    </div>
  );
}
