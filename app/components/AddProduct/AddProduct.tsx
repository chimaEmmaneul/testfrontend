"use client";
import React, { useState } from "react";
import Image from "next/image";

import Input from "../Input/Input";
import SelectInput from "../SelectInput/Input";
import { CATEGORY_LIST } from "@/utils/constant";
import camera from "@/app/assets/camera.svg";
import { Product } from "@/types/types";
import { addProduct } from "@/app/_actions/actions";
import { useProductContext } from "@/app/context/ProductContext";

type AddProductProps = {
  closeModal: () => void;
};
const AddProduct = ({ closeModal }: AddProductProps) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: Math.random(),
    name: "",
    description: "",
    image: "",
    price: 0,
    category: "",
  });
  const [fileInput, setFileInput] = useState<string | null>(null);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct((prevObj) => ({
      ...prevObj,
      [name]: value,
      image: fileInput as string,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      setFileInput(URL.createObjectURL(file));
    }
  };

  const handleOnSubmit = () => {
    addProduct(newProduct);
    closeModal();
  };

  return (
    <main>
      <div>
        <form action="" className="  gap-8">
          <div className="w-full h-full flex-[3] ">
            <div className="w-full max-h-full ">
              <Image
                src={fileInput ? fileInput : camera}
                alt="camera"
                className="mx-auto"
                width={100}
                height={100}
              />

              <div className=" relative mt-2">
                <div className="flex items-center justify-center ">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md mx-auto">
                    Upload an image
                  </button>
                </div>

                <Input
                  label=""
                  id="product-image"
                  type="file"
                  name="image"
                  value={newProduct.image}
                  onChange={handleFileChange}
                  placeholder="Product name"
                  className="z-10 absolute top-0 left-0 opacity-0 "
                />
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <Input
                label="Product name"
                id="product-name"
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleOnChange}
                placeholder="Product name"
                className=""
              />

              <Input
                label="Product price"
                id="product-price"
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleOnChange}
                placeholder="Product price"
                className=""
              />

              <Input
                label="Product Description"
                id="product-desc"
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleOnChange}
                placeholder="Product description"
                className=""
              />

              <SelectInput
                options={CATEGORY_LIST}
                value={newProduct.category}
                onChange={handleOnChange}
                label="Category"
                name="category"
                disabled={false}
              />
            </div>

            <div className="w-full flex items-center my-2 justify-center">
              <button
                type="button"
                onClick={handleOnSubmit}
                className="px-4 py-2 text-sm rounded-md mx-auto bg-blue-500 text-white"
              >
                Save Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddProduct;
