"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

interface Category {
    id: string;
    name: string;
    slug: string;
    icon: string;
    image_url?: string;
}

export const CategoryList = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchCategories() {
            const { data, error } = await supabase
                .from("categories")
                .select("*")
                .limit(10);

            if (data) setCategories(data);
            setLoading(false);
        }
        fetchCategories();
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (loading) return (
        <div className="container mx-auto px-4 py-12 flex gap-4 overflow-hidden">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="w-32 h-36 bg-secondary/20 animate-pulse rounded-xl shrink-0"></div>
            ))}
        </div>
    );

    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-baseline gap-4">
                        <h2 className="text-2xl font-black text-foreground tracking-tight">Top Categories</h2>
                        <Link href="/categories" className="text-xs font-black uppercase text-primary hover:tracking-widest transition-all">View All</Link>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full h-10 w-10 border-gray-100 shadow-sm hover:bg-primary hover:text-white transition-all">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full h-10 w-10 border-gray-100 shadow-sm hover:bg-primary hover:text-white transition-all">
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -8 }}
                            className="flex-shrink-0 snap-start"
                        >
                            <Link href={`/products?category=${cat.id}`}>
                                <div className="w-36 h-40 p-6 border border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer bg-white group">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-secondary/30 group-hover:bg-primary/10 transition-colors shadow-inner">
                                        {cat.icon || "📦"}
                                    </div>
                                    <span className="text-sm font-black text-center leading-tight text-gray-800 group-hover:text-primary transition-colors">{cat.name}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
