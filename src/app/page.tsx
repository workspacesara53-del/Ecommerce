import { Hero } from "@/components/home/Hero";
import { CategoryList } from "@/components/home/CategoryList";
import { ProductGrid } from "@/components/home/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <CategoryList />
      <ProductGrid />

      {/* Additional Section: Banner/Promotion */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border flex items-center p-6 hover:shadow-lg transition-shadow bg-card">
              <div>
                <span className="text-xs uppercase font-bold text-muted-foreground mb-2 block">Weekly Best</span>
                <h3 className="text-xl font-bold mb-4">Grocery Store <br /> with best deals</h3>
                <button className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-primary">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
