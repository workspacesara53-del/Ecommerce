"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Apple, Beef, Croissant, Milk, Fish, Sandwich,
    Cake, Coffee, IceCream, Pizza, ShoppingBag, Carrot, Soup, Wine
} from "lucide-react";

export const categories = [
    { name: "Fruits & Veg", icon: Apple, color: "bg-red-50 text-red-500", count: 125 },
    { name: "Meats & Seafood", icon: Beef, color: "bg-orange-50 text-orange-500", count: 86 },
    { name: "Bakery", icon: Croissant, color: "bg-amber-50 text-amber-500", count: 94 },
    { name: "Dairy & Eggs", icon: Milk, color: "bg-blue-50 text-blue-500", count: 112 },
    { name: "Fresh Seafood", icon: Fish, color: "bg-cyan-50 text-cyan-500", count: 48 },
    { name: "Snacks & Chips", icon: Sandwich, color: "bg-green-50 text-green-500", count: 210 },
    { name: "Desserts", icon: Cake, color: "bg-pink-50 text-pink-500", count: 75 },
    { name: "Beverages", icon: Coffee, color: "bg-yellow-50 text-yellow-500", count: 156 },
    { name: "Frozen Foods", icon: IceCream, color: "bg-purple-50 text-purple-500", count: 64 },
    { name: "Pizza & Pasta", icon: Pizza, color: "bg-orange-50 text-orange-700", count: 52 },
    { name: "Organic Veggies", icon: Carrot, color: "bg-green-100 text-green-700", count: 118 },
    { name: "Canned Food", icon: Soup, color: "bg-gray-100 text-gray-700", count: 142 },
    { name: "Wines & Drinks", icon: Wine, color: "bg-rose-100 text-rose-700", count: 230 },
    { name: "Household", icon: ShoppingBag, color: "bg-indigo-100 text-indigo-700", count: 320 },
];

export default function CategoriesPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">All Categories</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our wide range of organic and fresh products across various categories.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -8 }}
                            >
                                <Link href={`/products?category=${encodeURIComponent(cat.name)}`}>
                                    <div className="bg-white border rounded-2xl p-6 flex flex-col items-center text-center group hover:shadow-xl hover:border-primary transition-all duration-300">
                                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="h-10 w-10" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{cat.name}</h3>
                                        <p className="text-sm text-muted-foreground">{cat.count} Products</p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 mt-20">
                <div className="bg-primary/5 border rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Don&apos;t see what you&apos;re looking for?</h2>
                        <p className="text-muted-foreground text-lg">Our inventory is constantly expanding. Check back soon for new categories!</p>
                    </div>
                    <Link href="/products">
                        <Button size="lg" className="relative z-10 h-14 px-10 shadow-lg shadow-primary/20">
                            Browse All Products
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
