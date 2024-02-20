import {IProduct} from "@/core/types/product";

export const filterBySize = (items: IProduct[], selectedItems: string[]) => {
    return items.filter(item => {
        return selectedItems.some(selected => item.sizes.includes(selected)) || selectedItems.length === 0; // @ts-ignore
    })
}
