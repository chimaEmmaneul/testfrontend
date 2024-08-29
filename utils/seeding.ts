import { Product } from "@/types/types";

export function seedLocalStorage(data: Product[]) {
  const storageKey = "products";
  const existingProduct = getLocalStorageData(storageKey);

  if (existingProduct) {
    return existingProduct;
  }
  const jsonData = JSON.stringify(data);
  localStorage.setItem(storageKey, jsonData);
}

// seedLocalStorage(products);

export function getLocalStorageData(storageKey: string | null) {
  if (!storageKey) return null;
  const jsonData = localStorage.getItem(storageKey);
  return JSON.parse(jsonData!);
}


