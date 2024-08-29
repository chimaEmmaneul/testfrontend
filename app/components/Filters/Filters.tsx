"use client";

import { CATEGORY_LIST } from "@/utils/constant";
import { useProductContext } from "@/app/context/ProductContext";
import { formatCurrency } from "@/utils/formatCurrency";

const Filters = () => {
  const { filters, setFilters } = useProductContext();
  console.log(filters);
  const handleOnChange = (category: string) => {
    const isAlreadyChecked = filters.category === category;
    if (isAlreadyChecked) {
      setFilters((prev) => ({
        ...prev,
        category: "",
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        category: category,
      }));
    }
  };

  return (
    <main className="mt-4 w-full">
      <h1 className="capitalize my-2 px-4 py-2 text-xl border-b-2 border-neutral-300 font-bold">
        Filters
      </h1>
      <section className="w-full px-4 space-y-5">
        <div className=" ">
          <h1 className="capitialize font-bold my-1">Category</h1>
          <div className="pl-4">
            {CATEGORY_LIST.map((category) => (
              <button
                key={category.label}
                className="flex items-center justify-center gap-2"
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={filters.category === category.label}
                  className=""
                  onChange={() => handleOnChange(category.label)}
                />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="capitialize font-bold my-1">Price</h1>
            <p>{formatCurrency(filters.price)}</p>
          </div>
          <input
            type="range"
            name=""
            id=""
            value={filters.price}
            min={10}
            max={10000}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                price: parseInt(e.target.value),
              }))
            }
            className="w-full block mt-2"
          />
        </div>
      </section>
    </main>
  );
};

export default Filters;
