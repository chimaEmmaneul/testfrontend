import { deleteProduct } from "@/app/_actions/actions";
import React from "react";

type DeleModalProps = {
  closeModal: () => void;
  id: number;
};
const DeleteProduct = ({ closeModal, id }: DeleModalProps) => {
  const handleDeleteProduct = () => {
    deleteProduct(id);
    closeModal();
  };

  return (
    <div>
      <h1 className="text-center font-bold">
        Are you sure you want to delete this product?
      </h1>
      <div className="flex mt-4 items-center justify-center gap-4">
        <button
          onClick={handleDeleteProduct}
          className="px-4 py-2 bg-green-500 w-20 rounded-md text-center text-white"
        >
          confirm
        </button>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-red-500 w-20 rounded-md text-center text-white"
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
