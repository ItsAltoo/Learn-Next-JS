"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface DataItems {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const BlogView = () => {
  const [itemData, setItemData] = useState<DataItems[]>([]);
  const [btn, setBtn] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${1 + btn}`);
      const datas = await res.json();
      setItemData([datas]);
      console.log([datas]);
    };
    fetchData();
  }, [btn]);

  return (
    <>
      <h1>Blog</h1>

      <Button
        onClick={() => {
          setBtn(() => btn + 1);
        }}
      >
        click : {btn}
      </Button>

      <div>
        {itemData.map((items) => (
          <div key={items.id} className="flex flex-col items-center justify-center mt-10 gap-8">
            <h5><b>{items.title}</b></h5>
            <p className="text-center">{items.description}</p>
            <Image
              src={items.image}
              alt={items.title}
              width={120}
              height={120}
            />
            <p><b>{items.price}$</b></p>
            <p>{items.category}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogView;
