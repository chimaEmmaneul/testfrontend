"use client";
import { useEffect } from "react";

import ProductList from "@/app/components/ProductList/ProductList";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper/MaxWidthWrapper";
import Filters from "@/app/components/Filters/Filters";
import { seedLocalStorage } from "@/utils/seeding";
import { PRODUCT_LIST } from "@/utils/constant";

export default function Home() {
  useEffect(() => {
    seedLocalStorage(PRODUCT_LIST);
  }, []);

  seedLocalStorage(PRODUCT_LIST);
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen flex gap-8 ">
        <div className="w-72 hidden md:block border-r border-neutral-100 h-screen  sticky top-0 left-0  ">
          <Filters />
        </div>
        <ProductList />
      </div>
    </MaxWidthWrapper>
  );
}
