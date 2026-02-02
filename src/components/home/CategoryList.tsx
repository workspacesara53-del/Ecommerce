"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Apple, Beef, Croissant, Milk, Fish, Sandwich, Cake, Coffee, IceCream, Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
    { name: "Fruits & Veg", icon: Apple, color: "bg-red-50 text-red-500" },
    { name: "Meats & Seafood", icon: Beef, color: "bg-orange-50 text-orange-500" },
    { name: "Bakery", icon: Croissant, color: "bg-amber-50 text-amber-500" },
    { name: "Dairy & Eggs", icon: Milk, color: "bg-blue-50 text-blue-500" },
    { name: "Seafood", icon: Fish, color: "bg-cyan-50 text-cyan-500" },
    { name: "Snacks", icon: Sandwich, color: "bg-green-50 text-green-500" },
    { name: "Desserts", icon: Cake, color: "bg-pink-50 text-pink-500" },
    { name: "Beverages", icon: Coffee, color: "bg-yellow-50 text-yellow-500" },
    { name: "Frozen Foods", icon: IceCream, color: "bg-purple-50 text-purple-500" },
    { name: "Pizza", icon: Pizza, color: "bg-orange-50 text-orange-700" },
];

export const CategoryList = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">Top Categories</h2>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full h-8 w-8">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full h-8 w-8">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="flex-shrink-0 snap-start"
                        >
                            <div className="w-32 h-36 p-4 border rounded-xl flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow cursor-pointer bg-white">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${cat.color}`}>
                                    <cat.icon className="h-7 w-7" />
                                </div>
                                <span className="text-sm font-medium text-center leading-tight">{cat.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
