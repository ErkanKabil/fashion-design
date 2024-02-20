import React from "react";
import { getProducts } from "@/core/requests/product";
import { IProduct } from "@/core/types/product";

const StatisticsPage = async () => {
  const products = (await getProducts()) as IProduct[];

  // Question 1: Which brand has the most products that cost less than 40 EUR?
  const brandProductsUnder40 = products
    .filter((product) => product.priceO < 40)
    .map((product) => product.brand)
    .reduce(
      (acc, brand) => ({ ...acc, [brand]: (acc[brand] || 0) + 1 }),
      {} as Record<string, number>,
    );
  const brandWithMostProductsUnder40 = Object.keys(brandProductsUnder40).reduce(
    (a, b) => (brandProductsUnder40[a] > brandProductsUnder40[b] ? a : b),
  );

  // Question 2: Which brand offers the largest selection of sizes to the customer?
  const brandSizes = products.reduce(
    (acc, product) => {
      acc[product.brand] = acc[product.brand] || new Set<string>();
      product.sizes.forEach((size) => acc[product.brand].add(size));
      return acc;
    },
    {} as Record<string, Set<string>>,
  );
  const brandWithLargestSizeSelection = Object.keys(brandSizes).reduce(
    (a, b) => (brandSizes[a].size > brandSizes[b].size ? a : b),
  );

  // Question 3: Which brand offers the lowest average price for customers wearing size "32"?
  const brandPricesForSize32 = products
    .filter((product) => product.sizes.includes("32"))
    .reduce(
      (acc, product) => {
        acc[product.brand] = (acc[product.brand] || 0) + product.priceO;
        return acc;
      },
      {} as Record<string, number>,
    );
  const brandProductCountForSize32 = products
    .filter((product) => product.sizes.includes("32"))
    .reduce(
      (acc, product) => {
        acc[product.brand] = (acc[product.brand] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  const brandAveragePricesForSize32 = Object.keys(brandPricesForSize32).reduce(
    (acc, brand) => {
      acc[brand] =
        brandPricesForSize32[brand] / brandProductCountForSize32[brand];
      return acc;
    },
    {} as Record<string, number>,
  );
  const brandWithLowestAveragePriceForSize32 = Object.keys(
    brandAveragePricesForSize32,
  ).reduce((a, b) =>
    brandAveragePricesForSize32[a] < brandAveragePricesForSize32[b] ? a : b,
  );

  return (
    <main>
      <div className="container mx-auto py-4">
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-3"}>
          <div className={"border rounded text-center flex flex-col"}>
            <h2 className={"font-bold p-4 "}>
              Which brand has the most products that cost less than 40 EUR
            </h2>
            <p className={"bg-blue-500 p-3 text-white text-lg mt-auto"}>
              {brandWithMostProductsUnder40}
            </p>
          </div>
          <div className={"border rounded text-center flex flex-col"}>
            <h2 className={"font-bold p-4 "}>
              Which brand offers the largest selection of sizes to the customer
            </h2>
            <p className={"bg-blue-500 p-3 text-white text-lg mt-auto"}>
              {brandWithLargestSizeSelection}
            </p>
          </div>
          <div className={"border rounded text-center flex flex-col"}>
            <h2 className={"font-bold p-4 "}>
              Which brand offers the lowest average price for customers wearing
              size “32”
            </h2>
            <p className={"bg-blue-500 p-3 text-white text-lg mt-auto"}>
              {brandWithLowestAveragePriceForSize32}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatisticsPage;
