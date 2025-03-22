import Button from "./ui/button";

export default function Hero() {
    return(
        <section className="pt-24 bg-gradient-to-t from-[#211C24] to-[#211c24] flex flex-col items-center text-center lg:flex-row lg:justify-around">
            <div className="pb-16 flex flex-col gap-4 items-center lg:items-start">
                <p className="font-inter font-semibold text-[#909090] text-2xl "> Pro.Beyond.</p>
                <p className="text-white font-inter-thin font-thin text-7xl leading-[72px] lg:text-8xl">IPhone 14 <b className="font-bold">Pro</b></p>
                <p className="font-inter text-[#909090] text-center text-[19px] flex-wrap w-[343px] lg:w-auto lg:mt-1">Created to change everything for the better. For everyone</p>
                <Button borderColor="border-white" size="w-[191px]" text="text-white"/>      
            </div>
            <img src="/img/hero/Iphone-mob.webp" alt="Iphone 14 pro" className="lg:hidden hover:scale-105"/>
            <img src="/img/hero/Iphone-Image.webp" alt="Iphone 14 pro" className="hidden lg:block hover:scale-105"/>
        </section>
    );
}