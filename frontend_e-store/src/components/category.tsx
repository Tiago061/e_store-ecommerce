import CategoryItemProps from "./ui/categoryItemprops";
import Image from 'next/image';

export default function Category(){
    return(
        <section className="pt-16 pb-16 bg-[#FAFAFA]">
            <div className="flex justify-around">
                <h2 className="font-inter text-2xl lg:pr-[20rem]">Browse By Category</h2>
                <div className="flex gap-7">
                    <Image 
                        src="/img/categorys/arrowleft.png"
                        alt="Arrows Next"
                        width={13}
                        height={23}
                        className="object-contain"

                    />

                    <Image 
                        src="/img/categorys/arrowrigth.png"
                        alt="Arrows Next"
                        width={13}
                        height={23}
                        className="object-contain"
                    />
                 </div>
          </div>

            <article className="flex justify-center gap-3.5 pt-12 lg:flex-row">
                <div className="flex flex-col gap-4 lg:flex-row">
                    <CategoryItemProps icon="/img/categorys/Phones.png" title="Phones"/>
                    <CategoryItemProps icon="/img/categorys/Cameras.png" title="Cameras"/>
                    <CategoryItemProps icon="/img/categorys/Computers.png" title="Computers"/>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <CategoryItemProps icon="/img/categorys/Smart Watches.png" title="Smart Watches"/>
                    <CategoryItemProps icon="/img/categorys/Headphones.png" title="Headphones"/>
                    <CategoryItemProps icon="/img/categorys/Gaming.png" title="Gaming"/>
                </div>
                
            </article>
        </section>
    );

}