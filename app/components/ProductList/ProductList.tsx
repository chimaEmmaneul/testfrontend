"use client";
import { useEffect, useState } from "react";

import { Product } from "@/types/types";
import ProductListItem from "@/app/components/ProductListItem/ProductListItem";
import Modal from "@/app/components/Modal/Modal";
import AddProduct from "../AddProduct/AddProduct";
import { useProductContext } from "@/app/context/ProductContext";
import { filterProducts } from "@/app/_actions/actions";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | null>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const {
    isUpdated,
    filters: { category, price },
  } = useProductContext();

  useEffect(() => {
    setIsLoading(true);
    const data = filterProducts(category, price);

    setProducts(data);
    setIsLoading(false);
  }, [isModalOpen, isUpdated, category, price]);

  return (
    <main className="w-full">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddProduct closeModal={closeModal} />
      </Modal>

      <div className="flex items-center justify-between mt-4 mb-8">
        <h1 className="font-bold text-sm md:text-xl">Browse Products</h1>
        <p
          onClick={() => setIsModalOpen(true)}
          className="rounded-xl px-2 py-1 bg-blue-500 text-white cursor-pointer"
        >
          Add New Product
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-6 gap-y-8">
        {products
          ? products.map((product: Product) => (
              <ProductListItem {...product} key={product.description} />
            ))
          : new Array(10).fill(null).map((_, index) => (
              <div key={index} className="relative animate-pulse  ">
                <div className="h-[80] bg-gray-200">
                  <div className="h-full w-full lg:h-80 bg-gray-200"></div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <div className="bg-gray-200 h-4 w-full" />
                  <div className="bg-gray-200 h-4 w-full" />
                </div>
              </div>
            ))}
      </div>
    </main>
  );
};

export default ProductList;
