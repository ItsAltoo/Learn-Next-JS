"use client"; // jangan lupa ini karena kita pakai hook

import React from "react";
import { usePathname } from "next/navigation";

export const Heading = () => {
  const pathname = usePathname(); // dapatkan path saat ini

  // Misal kita ambil bagian setelah "/"
  const pageName = pathname === "/" ? "Home" : pathname.replace("/", "");

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold">Welcome To my {pageName.toUpperCase()}</h1>
    </div>
  );
};
