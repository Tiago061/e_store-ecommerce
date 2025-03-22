import Button from "./ui/button";

export default function SectionProducts(){
    const
    return(
            <article className="flex flex-col">
                <div className="flex flex-col items-center bg-[#EDEDED] gap-4 p-8">
                    <img src="/img/products/airpods.webp" alt="Apple AirPods Max" />
                    <p className="font-inter-thin font-thin text-black text-[34px]">Apple AirPods <b className="font-bold">Max</b></p>
                    <p className="font-inter font-medium text-[#909090]">Computational audio. Listen, its powerful</p>
                </div>
                <div className="flex flex-col items-center bg-[#353535] gap-4 p-8">
                    <img src="/img/products/vision.webp" alt="Apple Vision Pro" />
                    <p className="font-inter-thin font-thin text-[34px] text-white">Apple Vision <b className="font-bold">Pro</b></p>
                    <p className="font-inter font-medium text-[#909090] text-center">An immersive way to experience entertainment</p>
                </div>
                <div className="flex flex-col items-center flex-wrap gap-4 p-8">
                    <img src="/img/products/PlayStation.webp" alt="PlayStation 5" />
                    <p className="font-inter-thin font-thin text-black text-[34px]">Playstation <b className="font-bold">5</b></p>
                    <p className="font-inter font-medium text-[#909090] text-center">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                </div>
                <div className="flex flex-col items-center flex-wrap bg-[#EDEDED] gap-4 p-8">
                    <img src="/img/products/MacBook-Pro-14.webp" alt="MacBook Pro 14" />
                    <p className="font-inter-thin font-thin text-black text-[34px]"><b className="font-bold">Macbook</b> Air</p>
                    <p className="font-inter font-medium text-[#909090] text-center">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    <Button />
                </div>
            </article>
    );
}