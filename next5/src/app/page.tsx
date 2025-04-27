"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/views/heading/Heading";
import Link from "next/link";
import { useState } from "react";

interface ButtonItems {
  id: number;
  content: string;
  btnHref: string;
}

export default function Home() {
  const [btn] = useState<ButtonItems[]>([
    {
      id: 1,
      content: "Go to About",
      btnHref: "/about",
    },
    {
      id: 2,
      content: "Go to Blog",
      btnHref: "/blog",
    },
  ]);

  return (
    <>
      <Heading />
      <h1>App Page</h1>
      <div className="flex gap-2 mt-2">
        {btn.map((item) => (
          <Link key={item.id} href={item.btnHref}>
            <Button>{item.content}</Button>
          </Link>
        ))}
      </div>
    </>
  );
}
