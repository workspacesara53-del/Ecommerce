"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Percent } from "lucide-react";
import Link from "next/link";

const deals = [
    {
        icon: Clock,
        badge: "Limited Time",
        title: "Flash Sale",
        description: "Up to 50% off on selected items",
        color: "from-orange-500/10 to-orange-500/5",
        iconColor: "text-orange-500",
    },
    {
        icon: TrendingUp,
        badge: "Best Sellers",
        title: "Top Products",
        description: "Most popular items this week",
        color: "from-blue-500/10 to-blue-500/5",
        iconColor: "text-blue-500",
    },
    {
        icon: Percent,
        badge: "Save More",
        title: "Bundle Deals",
        description: "Buy more, save more offers",
        color: "from-green-500/10 to-green-500/5",
        iconColor: "text-green-500",
    },
];

export const DealsSection = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">Special Deals</h2>
                <p className="text-muted-foreground">Don&apos;t miss out on our exclusive offers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deals.map((deal, idx) => {
                    const Icon = deal.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href="/products">
                                <div
                                    className={`relative h-56 rounded-2xl bg-gradient-to-br ${deal.color} border p-6 hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-current rounded-full -translate-y-16 translate-x-16"></div>
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-current rounded-full translate-y-12 -translate-x-12"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-foreground mb-4">
                                                {deal.badge}
                                            </span>
                                            <div className={`w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                                <Icon className={`h-7 w-7 ${deal.iconColor}`} />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-4">{deal.description}</p>
                                            <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                                                Shop Now
                                                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
