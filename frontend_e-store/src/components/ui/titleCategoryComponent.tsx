
import React from "react";



type CategoryTitleComponent = {
    title: string;
    
}




export default function TitleCategoryComponent(props: CategoryTitleComponent){
    return(
        <>
            <p className="font-inter text-[16px] text-[#8B8B8B]">{props.title}</p>      
        </>
    );

}