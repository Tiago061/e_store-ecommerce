import React from "react";

type ButtonComponent = {
    borderColor: 'border-black' | 'border-white';
    size: 'w-[343px]' | 'w-[191px]';
}

export default function Button({ borderColor, size }: ButtonComponent){

    return(
        <>
            <button className={`border ${borderColor} ${size} text-white font-inter rounded-[6px] h-14 w-48 bg-transparent mt-8 md:mt-1`}>Shop Now</button> 
        </>
        );
}