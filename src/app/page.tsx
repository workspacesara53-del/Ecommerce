import { Hero } from "@/components/home/Hero";
import { CategoryList } from "@/components/home/CategoryList";
import { ProductGrid } from "@/components/home/ProductGrid";
import { DealsSection } from "@/components/home/DealsSection";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoryList />
      <ProductGrid />
      <DealsSection />
      <Newsletter />
    </div>
  );
}
