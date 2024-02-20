import {getProducts} from "@/core/requests/product";
import ProductCard from "@/components/ProductCard";
import {IProduct} from "@/core/types/product";
import FilterDropdown from "@/components/FilterDropdown";
import Products from "@/components/Products";

export default async function Home() {

  const products = await getProducts()

  return (
    <main className="">
        <div className={"container mx-auto mt-12"}>
            <Products products={products} />
        </div>
    </main>
  );
}
