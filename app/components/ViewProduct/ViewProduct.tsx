"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import SelectInput from "../SelectInput/Input";
import { Product } from "@/types/types";
import { getSingleProduct, updateProduct } from "@/app/_actions/actions";
import { CATEGORY_LIST } from "@/utils/constant";
import { useProductContext } from "@/app/context/ProductContext";

type ViewProductProps = {
  closeModal: () => void;
  id: number;
};

const ViewProduct = ({ closeModal, id }: ViewProductProps) => {
  // const [product, setProduct] = useState<Product>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [product, setProduct] = useState<Product>({
    id: Math.random(),
    name: "",
    description: "",
    image: "",
    price: 0,
    category: "",
  });
  const [fileInput, setFileInput] = useState<string | null>(null);
  const { setIsUpdated } = useProductContext();

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevObj) => ({
      ...prevObj,
      [name]: value,
      image: fileInput as string,
    }));
  };

  useEffect(() => {
    setIsLoading(true);
    const data = getSingleProduct(id);
    setProduct(data);

    setIsLoading(false);
  }, []);
  console.log(product);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      setFileInput(URL.createObjectURL(file));
    }
  };

  const handleOnSubmit = () => {
    updateProduct(id, product);
    closeModal();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>
        <form action="" className="  gap-8">
          <div className="w-full h-full flex-[3] ">
            <div className="w-full max-h-full ">
              <Image
                src={
                  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                }
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
                  value={""}
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
                value={product?.name as string}
                onChange={handleOnChange}
                placeholder="Product name"
                className=""
              />

              <Input
                label="Product price"
                id="product-price"
                type="text"
                name="price"
                value={product?.price as number}
                onChange={handleOnChange}
                placeholder="Product price"
                className=""
              />

              <Input
                label="Product Description"
                id="product-desc"
                type="text"
                name="description"
                value={product?.description as string}
                onChange={handleOnChange}
                placeholder="Product description"
                className=""
              />

              <SelectInput
                options={CATEGORY_LIST}
                value={product?.category as string}
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

export default ViewProduct;
