import CategoryItemProps from "./props/categoryItemprops";
import Image from 'next/image';

export default function Category(){
    return(
        <section>
            <div>
                <h2 className="">Browse By Category</h2>
                <Image 
                    src="/img/categorys/Phones.png"
                    alt="Arrows Next"
                    width={48}
                    height={48}
                    className="object-contain"

                />

                <Image 
                    src="/img/categorys/Phones.png"
                    alt="Arrows Next"
                    width={48}
                    height={48}
                    className="object-contain"
                 />
          </div>

            <article>
                <div>
                    <CategoryItemProps icon="/img/categorys/Phones.png" title="Phones"/>
                    <CategoryItemProps icon="/img/categorys/Cameras.png" title="Cameras"/>
                    <CategoryItemProps icon="/img/categorys/Computers.png" title="Computers"/>
                </div>
                <div>
                    <CategoryItemProps icon="/img/categorys/Smart Watches.png" title="Smart Watches"/>
                    <CategoryItemProps icon="/img/categorys/Headphones.png" title="Headphones"/>
                    <CategoryItemProps icon="/img/categorys/Gaming.png" title="Gaming"/>
                </div>
                
            </article>
        </section>
    );

}