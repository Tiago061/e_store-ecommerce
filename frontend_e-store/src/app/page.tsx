import Category from "@/components/category";
import Hero from "@/components/hero";
import SectionNewProducts from "@/components/sectionnewproducts";
import SectionProducts from "@/components/sectionproducts";

export default function Home() {
    return (
      <main>
        <Hero />
        <SectionProducts />
        <Category />
        <SectionNewProducts />
      </main>
    );
  }