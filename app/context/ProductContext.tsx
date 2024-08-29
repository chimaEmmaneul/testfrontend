"use client";
import { Filters } from "@/types/types";
import React, { createContext, useContext, useState } from "react";

type ProductContextType = {
  isUpdated: boolean;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    category: "",
    price: 20000,
  });
  return (
    <ProductContext.Provider
      value={{ isUpdated, setIsUpdated, filters, setFilters }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default AppContext;

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
