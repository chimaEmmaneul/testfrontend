"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Product } from "@/types/types";
import { getSingleProduct } from "@/app/_actions/actions";

import Testing from "@/app/assets/testimage.avif";

const SingleProduct = ({ params }: { params: { productname: string } }) => {
  const [SingleProduct, setSingleProduct] = useState<Product | null>(null);

  useEffect(() => {
    const data = getSingleProduct(parseInt(params.productname));
    setSingleProduct(data);
  }, []);

  return (
    <main className="w-full max-w-screen-lg mx-auto px-6">
      <div className="flex gap-8 mt-16">
        <div className="w-1/2 h-24">
          <Image src={Testing} alt={SingleProduct?.name!} />
        </div>
        <div>
          <h1 className="font-bold">{SingleProduct?.name}</h1>
          <p className="font-semibold">{SingleProduct?.price}</p>
          <p className="font-semibold">{SingleProduct?.description}</p>
          <p>{SingleProduct?.category}</p>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
