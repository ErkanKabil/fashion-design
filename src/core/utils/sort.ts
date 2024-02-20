import {IProduct} from "@/core/types/product";

export const sortByParam = (items: IProduct[], value: string) => {
    let sorted = items;
    if (value === "BY_PRICE_ASCENDING") {
        sorted = items.sort((a,b) => b.priceO - a.priceO)
    }else if (value === "BY_PRICE_DESCENDING") {
        sorted = items.sort((a,b) => a.priceO - b.priceO)
    }
    return sorted
}
