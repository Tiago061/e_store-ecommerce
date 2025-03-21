export default function Hero() {
    return(
        <section className="pt-24 bg-gradient-to-t from-[#211C24] to-[#211c24] flex flex-col items-center text-center md:flex-row">
            <div className="pb-16 flex flex-col gap-4 items-center">
                <p className="font-inter font-semibold text-[#909090] text-2xl leading-"> Pro.Beyond.</p>
                <p className="text-white font-inter-thin font-thin text-7xl leading-[72px] ">IPhone 14 <b className="font-bold">Pro</b></p>
                <p className="font-inter text-[#909090] text-center text-[19px] flex-wrap w-[343px]">Created to change everything for the better. For everyone</p>
                <button className="border border-white text-white font-inter rounded-[6px] h-14 w-48 bg-transparent mt-8">Shop Now</button>        
            </div>
            <img src="/img/hero/Iphone-mob.webp" alt="Iphone 14 pro" className="md:hidden"/>
            <img src="/img/hero/Iphone-Image.webp" alt="Iphone 14 pro" className="hidden md:block"/>
        </section>
    );
}