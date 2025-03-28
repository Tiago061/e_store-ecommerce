import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface Product {
    id?: number;
    img: string | "";
    name: string;
    price: number
    
}


export default function ProductCard({ products }: {products: Product}){
    return(
        <div className=""> 
            <Heart />
            <Image
                src={products.img}
                alt={products.name}
                width={104}
                height={104}
                className=""
                />
            <h3>{products.name}</h3>
            <p>${products.price}</p>
        </div>
    );
}