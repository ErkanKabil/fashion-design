"use client";
import React, { FC, useEffect, useState } from "react";
import FilterDropdown from "@/components/FilterDropdown";
import { IProduct } from "@/core/types/product";
import ProductCard from "@/components/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortTypes } from "@/core/constants/sortTypes";
import { filterBySize } from "@/core/utils/filter";
import { sortByParam } from "@/core/utils/sort";

interface Props {
  products: IProduct[];
}

const Products: FC<Props> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>();
  const handleSizeFilter = (item: string) => {
    if (selectedSizes.includes(item)) {
      setSelectedSizes(selectedSizes.filter((size) => size !== item));
    } else {
      setSelectedSizes([...selectedSizes, item]);
    }
  };

  const sizes = products.map((product, index) => product.sizes);
  // @ts-ignore
  const uniqueSizes = [...new Set(sizes.flat())];

  useEffect(() => {
    const filtered = filterBySize(products, selectedSizes);
    const data = sortByParam(filtered, selectedSort);
    setFilteredProducts(data);
  }, [selectedSizes, selectedSort]);

  return (
    <>
      <div className={"flex justify-end gap-2 mb-4"}>
        <FilterDropdown
          items={uniqueSizes}
          title={"Size"}
          selectedItems={selectedSizes}
          handleChange={handleSizeFilter}
        />
        <Select onValueChange={setSelectedSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by: Featured" />
          </SelectTrigger>
          <SelectContent>
            {sortTypes.map((item) => {
              return (
                <SelectItem value={item.value} key={item.value}>
                  {item.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        }
      >
        {filteredProducts.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
