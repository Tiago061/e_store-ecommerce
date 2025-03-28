import TitleCategoryComponent from "./ui/titleCategoryComponent";

export default function TitleCategory(){
    return(
        <article className="flex justify-around">
            <TitleCategoryComponent title="New Arrival"/>
            <TitleCategoryComponent title="Bestseller"/>
            <TitleCategoryComponent title="Featured Product"/>
        </article>
    );

}