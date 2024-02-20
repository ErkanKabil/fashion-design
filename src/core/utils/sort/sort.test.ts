// sort.test.ts
import { sortByParam } from "./sort";
import { mockProducts } from "../../mock/product";

describe("sortByParam", () => {
  it("sorts by ascending price when value is BY_PRICE_ASCENDING", () => {
    const sorted = sortByParam(mockProducts, "BY_PRICE_ASCENDING");

    expect(sorted).toEqual(mockProducts.sort((a, b) => b.priceO - a.priceO));
  });

  it("sorts by descending price when value is BY_PRICE_DESCENDING", () => {
    const sorted = sortByParam(mockProducts, "BY_PRICE_DESCENDING");

    expect(sorted).toEqual(mockProducts.sort((a, b) => a.priceO - b.priceO));
  });
});
