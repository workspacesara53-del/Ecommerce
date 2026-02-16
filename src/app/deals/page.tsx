"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductCard, sampleProducts } from "@/components/products/ProductCard";
import { Clock, Flame, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

const dealCategories = [
    { id: "flash", name: "Flash Sale", icon: Zap, color: "text-orange-500", bg: "bg-orange-50" },
    { id: "trending", name: "Trending", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-50" },
    { id: "hot", name: "Hot Deals", icon: Flame, color: "text-red-500", bg: "bg-red-50" },
    { id: "limited", name: "Limited Time", icon: Clock, color: "text-purple-500", bg: "bg-purple-50" },
];

export default function DealsPage() {
    const [activeCategory, setActiveCategory] = useState("flash");

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Amazing Deals & Offers
                        </h1>
                        <p className="text-xl text-primary-foreground/90 mb-8">
                            Save big on your favorite products. Limited time offers you don&apos;t want to miss!
                        </p>
                        <div className="flex items-center justify-center gap-8 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5" />
                                <span>Ends in 24h</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Flame className="h-5 w-5" />
                                <span>Up to 70% Off</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8">
                {/* Category Filters */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {dealCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all ${activeCategory === category.id
                                            ? `${category.bg} ${category.color} shadow-md scale-105`
                                            : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Deal Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { label: "Active Deals", value: "50+" },
                        { label: "Happy Customers", value: "10K+" },
                        { label: "Average Savings", value: "45%" },
                        { label: "Products on Sale", value: "200+" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-xl border p-6 text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">
                            {dealCategories.find((c) => c.id === activeCategory)?.name} Products
                        </h2>
                        <Link href="/products" className="text-primary hover:underline text-sm font-medium">
                            View All Products →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sampleProducts.slice(0, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-2xl p-12 text-center border">
                    <h3 className="text-3xl font-bold mb-4">Don&apos;t Miss Out!</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Subscribe to our newsletter and be the first to know about exclusive deals and new arrivals.
                    </p>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-shadow">
                            Get Notified
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
