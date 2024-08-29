import { Product } from "@/types/types";

export function seedLocalStorage(data: Product[]) {
  const isClient = typeof window !== "undefined";
  //   if (!isClient) return null;
  if (isClient) {
    const storageKey = "products";
    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData);
  }
}

// seedLocalStorage(products);

export function getLocalStorageData(storageKey: string | null) {
  if (!storageKey) return null;
  const jsonData = localStorage.getItem(storageKey);
  return JSON.parse(jsonData!);
}

// // example usage:
// const storedProducts = getLocalStorageData("products");
// console.log(storedProducts);
