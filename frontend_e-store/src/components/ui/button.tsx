import React from "react";

type ButtonComponent = {
    borderColor: string;
    size: string;
    text: string;
}

export default function Button(props: ButtonComponent){

    return(
        <>
            <button className={`border ${props.borderColor} ${props.size} ${props.text} font-inter rounded-[6px] h-14 w-48 bg-transparent mt-8 md:mt-1`}>Shop Now</button> 
        </>
        );
}