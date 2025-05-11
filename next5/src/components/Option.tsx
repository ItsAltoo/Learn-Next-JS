"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonItems {
  content: string;
  btnHref: string;
}

export const Option = () => {
  const [btn] = useState<ButtonItems[]>([
    {
      content: "Go to About",
      btnHref: "/about",
    },
    {
      content: "Go to Blog",
      btnHref: "/blog",
    },
    {
      content: "Go to Home",
      btnHref: "/",
    },
  ]);
  return (
    <>
      <div className="flex gap-2 mt-8 justify-center items-center">
        {btn.map((item, index) => (
          <Link key={index} href={item.btnHref}>
            <Button className="cursor-pointer">{item.content}</Button>
          </Link>
        ))}
      </div>
    </>
  );
};
