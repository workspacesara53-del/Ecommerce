"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface Product {
    id: string;
    name: string;
    price: number;
    old_price: number | null;
    rating: number;
    images: string[];
    discount_percent: number | null;
}

const ProductCard = ({ product, idx }: { product: Product, idx: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
        >
            {/* Badge */}
            {product.discount_percent && (
                <span className="absolute top-5 left-5 z-10 px-3 py-1 text-[10px] font-black text-white bg-destructive rounded-full uppercase tracking-widest shadow-lg shadow-destructive/20">
                    -{product.discount_percent}% Off
                </span>
            )}

            {/* Image Area */}
            <Link href={`/products/${product.id}`}>
                <div className="relative h-64 w-full bg-secondary/10 flex items-center justify-center p-6 overflow-hidden">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${product.images[0] || 'https://via.placeholder.com/400'})` }}
                    />

                    {/* Hover Actions */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <Button size="icon" variant="white" className="rounded-full shadow-xl hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                            <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="white" className="rounded-full shadow-xl hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                            <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="white" className="rounded-full shadow-xl hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                            <ShoppingCart className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < product.rating ? "text-orange-400 fill-orange-400" : "text-gray-200"}`} />
                    ))}
                    <span className="text-[10px] text-muted-foreground uppercase font-black ml-1 tracking-widest">({product.rating}.0)</span>
                </div>

                <Link href={`/products/${product.id}`}>
                    <h3 className="font-black text-lg mb-1 truncate text-gray-800 hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <p className="text-xs text-muted-foreground mb-4 font-bold uppercase tracking-widest">1 Unit • Fresh Stock</p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-2xl font-black text-primary tracking-tighter">${product.price.toFixed(2)}</span>
                        {product.old_price && (
                            <span className="text-xs text-muted-foreground line-through font-bold">${product.old_price.toFixed(2)}</span>
                        )}
                    </div>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-black uppercase text-[10px] tracking-widest h-10 px-5 shadow-lg shadow-primary/20 transition-all active:scale-95">
                        Add <PlusIcon />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

function PlusIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
}

export const ProductGrid = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .limit(8);

            if (data) setProducts(data);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    if (loading) return (
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="h-80 bg-secondary/20 animate-pulse rounded-[2rem]"></div>
            ))}
        </div>
    );

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">Popular Products</h2>
                        <p className="text-gray-500 font-medium">Hand-picked fresh products for your daily needs.</p>
                    </div>
                    <Link href="/products">
                        <Button variant="outline" className="rounded-full border-gray-200 font-black uppercase tracking-widest text-[10px] h-12 px-8 hover:bg-primary hover:text-white transition-all shadow-sm">
                            View All Products
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <ProductCard key={product.id} product={product} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}
