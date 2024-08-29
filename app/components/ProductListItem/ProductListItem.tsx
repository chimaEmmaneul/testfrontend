"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import { useProductContext } from "@/app/context/ProductContext";
import { Product } from "@/types/types";
import Testimage from "@/app/assets/testimage.avif";
import { formatCurrency } from "@/utils/formatCurrency";
import Edit from "@/app/assets/edit.svg";
import Delete from "@/app/assets/delete.svg";
import Modal from "../Modal/Modal";
import ViewProduct from "../ViewProduct/ViewProduct";
import DeleteProduct from "../DeleteProduct/DeleteModal";

const ProductListItem = ({
  id,
  name,
  description,
  image,
  price,
  category,
}: Product) => {
  const router = useRouter();
  const [isIconOpen, setIsIconOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isdeleting, setIsdeleting] = useState(false);
  const { setIsUpdated, isUpdated } = useProductContext();
  const closeModal = () => {
    setIsModalOpen(false);
    setIsdeleting(false);
    setIsUpdated(!isUpdated);
  };

  return (
    <main
      onMouseEnter={() => setIsIconOpen(true)}
      onMouseLeave={() => setIsIconOpen(false)}
      className="group relative"
    >
      <div
        onClick={() => router.push(`/product/${id}`)}
        className="rounded-md group-hover:scale-[1.01] duration-150 cursor-pointer bg-white pb-8 overflow-hidden"
      >
        <div className="w-full relative aspect-h-1 aspect-w-1">
          <Image src={Testimage} alt={name} />
        </div>

        <div className="flex justify-between items-center pt-2 px-2">
          <p className="capitalize">{name}</p>
          <p className="font-bold">{formatCurrency(price)}</p>
        </div>
      </div>

      {isIconOpen && (
        <div className="absolute top-2 right-4 space-y-2">
          <Image
            src={Edit}
            alt="edit"
            className="bg-white h-8 w-8 rounded-full cursor-pointer p-2"
            onClick={() => setIsModalOpen(true)}
          />
          <Image
            src={Delete}
            alt="Delete"
            className="bg-white h-8 w-8 rounded-full cursor-pointer p-2"
            onClick={() => setIsdeleting(true)}
          />
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ViewProduct closeModal={closeModal} id={id} />
      </Modal>

      <Modal isOpen={isdeleting} onClose={closeModal}>
        <DeleteProduct closeModal={closeModal} id={id} />
      </Modal>
    </main>
  );
};

export default ProductListItem;
