"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Product } from "@/types/types";
import { getSingleProduct } from "@/app/_actions/actions";


const SingleProduct = ({ params }: { params: { productname: string } }) => {
  const [SingleProduct, setSingleProduct] = useState<Product | null>(null);
  useEffect(() => {
    const data = getSingleProduct(Number(params.productname));
    setSingleProduct(data);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:grid sm:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Product Image */}
        <div className="w-64 h-[80%] mx-auto overflow-hidden aspect-[70/80] relative ">
          <Image
            src={SingleProduct?.image as string}
            alt={SingleProduct?.name as string}
            fill
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="mt-10 lg:mt-0 lg:pl-8">
          <h2 className="md:text-3xl font-bold text-gray-900">
            {SingleProduct?.name}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {SingleProduct?.category}
          </p>
          <p className="mt-4 text-xl font-semibold text-gray-900">
            ${SingleProduct?.price}
          </p>

          <div className="mt-6">
            <p className="text-gray-700">{SingleProduct?.description}</p>
          </div>

          <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    // <main className="w-full max-w-screen-lg mx-auto px-6">
    //   <div className="flex gap-8 mt-16">
    //     <div className="w-1/2 h-24">
    //       <Image src={Testing} alt={SingleProduct?.name!} />
    //     </div>
    //     <div>
    //       <h1 className="font-bold">{SingleProduct?.name}</h1>
    //       <p className="font-semibold">{SingleProduct?.price}</p>
    //       <p className="font-semibold">{SingleProduct?.description}</p>
    //       <p>{SingleProduct?.category}</p>
    //     </div>
    //   </div>
    // </main>
  );
};

export default SingleProduct;
