import { mockProducts } from "../../mock/product";
import { filterBySize } from "./filter";

describe("filterBySize", () => {
  it("filter products with size XS, 2", () => {
    const filtered = filterBySize(mockProducts, ["XS", "2"]);

    const expected = mockProducts.filter((item) => {
      return (
        ["XS", "2"].some((selected) => item.sizes.includes(selected)) ||
        ["XS", "2"].length === 0
      ); // @ts-ignore
    });

    expect(filtered).toEqual(expected);
  });
});
