"use client"
import React, {FC} from 'react';
import {IProduct} from "@/core/types/product";
import Image from 'next/image'
import Link from 'next/link';

interface Props {
    product: IProduct
}

const ProductCard: FC<Props> = ({product}) => {
    const {images, brand, description, priceO, url,sizes,priceR} = product
    return (
        <Link href={url} className={"border rounded overflow-hidden"}>
            <div className={"relative w-full aspect-[0.75/1] bg-white"}>
                <Image src={images[0]}  alt={brand} fill className={"object-scale-down"}/>
            </div>
            <div className={"px-4 py-3 flex flex-col"}>
                <span className={"font-bold"}>{brand}</span>
                <span className={"text-sm"}>{description}</span>
                <span className={"mt-3"}>{priceO} €</span>
                <span className={"mt-3"}>{priceR} €</span>
            </div>
        </Link>
    );
};

export default ProductCard;
