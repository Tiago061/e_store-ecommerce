import Button from "./ui/button";

export default function SectionProducts(){
    return(
            <article className="flex flex-col lg:grid lg:grid-flow-col lg:grid-rows-1">
                <div className="flex flex-col items-center bg-[#EDEDED] gap-4 p-8 lg:flex-row ">
                    <img src="/img/products/airpods.webp" alt="Apple AirPods Max" className="hover:scale-105 lg:hidden"/>
                    <img src="/img/products/airpod-desk.webp" alt="" className="hidden lg:block lg:relative lg:right-8"/>
                    <div>
                        <p className="font-inter-thin font-thin text-black text-[34px]">Apple AirPods <b className="font-bold">Max</b></p>
                        <p className="font-inter font-medium text-[#909090]">Computational audio. Listen, its powerful</p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-[#353535] gap-4 p-8 lg:flex-row">
                    <img src="/img/products/vision.webp" alt="Apple Vision Pro" className="hover:scale-105 lg:hidden"/>
                    <img src="/img/products/vision-pro-desk.webp" alt="" className="hidden lg:block lg:relative lg:right-8"/>
                    <div className="text-center">
                        <p className="font-inter-thin font-thin text-[34px] text-white">Apple Vision <b className="font-bold">Pro</b></p>
                        <p className="font-inter font-medium text-[#909090] text-center">An immersive way to experience entertainment</p>
                    </div>
                </div>
                <div className="flex flex-col items-center flex-wrap lg:flex-rowgap-4 p-8 lg:col-start-1 lg:flex lg:col-end-4 ">
                    <img src="/img/products/PlayStation.webp" alt="PlayStation 5" className="hover:scale-105 lg:hidden "/>
                    <img src="/img/products/PlayStation-desk.webp" alt="" className="hidden lg:block lg:relative lg:right-57"/>
                    
                        <p className="font-inter-thin font-thin text-black text-[34px]">Playstation <b className="font-bold">5</b></p>
                        <p className="font-inter font-medium text-[#909090] text-center">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                   
                </div>
                <div className="flex flex-col items-center flex-wrap bg-[#EDEDED] gap-4 p-8 lg:row-span-2 lg:flex-row-reverse">
                    <img src="/img/products/MacBook-Pro-14.webp" alt="MacBook Pro 14" className="hover:scale-105 lg:hidden"/>
                    <img src="/img/products/macbook-desk.webp" alt="" className="hidden lg:block lg:relative lg:left-8"/>
                    <p className="font-inter-thin font-thin text-black text-[34px]"><b className="font-bold">Macbook</b> Air</p>
                    <p className="font-inter font-medium text-[#909090] text-center">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    
                    <Button borderColor="border-black" size="w-[343px]" text="text-black"/>
                </div>
            </article>
    );
}