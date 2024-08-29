import { Product } from "@/types/types";
import { getLocalStorageData } from "@/utils/seeding";

export const addProduct = (newProduct: {
  id: number;
  name: string;
  price: number;
  category: string;
}) => {
  const products = getLocalStorageData("products");
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
};

export const updateProduct = (
  id: number,
  updatedProduct: {
    name?: string;
    price?: number;
    category?: string;
    description?: string;
    image?: string;
  }
) => {
  const products = getLocalStorageData("products");
  const productIndex = products.findIndex((product: any) => product.id === id);

  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    localStorage.setItem("products", JSON.stringify(products));
  }
};

export const deleteProduct = (id: number) => {
  const products = getLocalStorageData("products");
  const updatedProducts = products.filter((product: any) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(updatedProducts));
};

export const getSingleProduct = (id: number) => {

  const products = getLocalStorageData("products");
  return products.find((product: any) => product.id === id);
};

export function filterProducts(category = "", price = 10000) {
  const minPrice = 0;
  const maxPrice = price;
  // Retrieve the array from local storage
  const products: Product[] = getLocalStorageData("products");

  // Filter the array
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  return filteredProducts;
}
