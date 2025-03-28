import React from "react";
import TitleCategory from "./titlecategory";
import ProductCard, { Product } from "./ui/productCard";


export default function SectionNewProducts(){

    const products: Product[] = [
        {
            id: 1,
            img: "",
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: 900
        },
        {
            id: 2,
            img: "",
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: 900
        },
        {
            id: 3,
            img: "",
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: 900
        },
        {
            id: 4,
            img: "",
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: 900
        },
        {
            id: 5,
            img: "",
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: 900
        },
        {
            id: 6,
            img: "",
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            price: 900
        },
    ]
    return(
        <section>
               <TitleCategory />
               <div>
                    {products.map((product) => (
                        <ProductCard key={product.id} products={product}/>
                    ))}
               </div>
        </section>
    );
}