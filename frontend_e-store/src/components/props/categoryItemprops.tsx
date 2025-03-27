import React from "react";
import Image from 'next/image';

type categorysComponentProps = {
    icon: string;
    title: string;
}

export default function CategoryItemProps(props: categorysComponentProps){
    
    return(
        <div>
            <div className="bg-[#EDEDED] w-40 h-32 flex flex-col justify-center items-center rounded-2xl">
            <Image 
                src={props.icon} 
                alt={props.title} 
                width={48}
                height={48}                
                className="object-contain"
            />
                <p>{props.title}</p>
            </div>
        </div>
    );
}