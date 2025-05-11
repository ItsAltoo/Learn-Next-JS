"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CatImageItems {
  id: string;
  url: string;
  width: number;
  height: number;
}

const AboutView = () => {
  const [btn, setBtn] = useState(0);
  const [count, setCount] = useState(0);
  const [catImage, setCatImage] = useState<CatImageItems[]>([]);

  const handleClick = () => {
    setBtn(btn + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  },[count]);

  useEffect(() => {
    const fetchCatImage = async () => {
      const res = await fetch(`https://api.thecatapi.com/v1/images/search`);
      const data = await res.json();
      console.log(data);
      setCatImage(data);
    };

    fetchCatImage();

    console.log("btn", btn);
  }, [btn]);

  return (
    <>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        Click : {btn}
      </Button>

      <h1>Cat Click Count: {count}</h1>

      <div className="flex flex-wrap justify-center mt-20">
        {catImage.map((cat) => (
          <Image
            className="rounded-lg"
            key={cat.id}
            src={cat.url}
            alt="Cat"
            width={200}
            height={200}
          />
        ))}
      </div>
    </>
  );
};

export default AboutView;
