"use client";

import { Truck, RotateCcw, ShieldCheck, Gift, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Truck,
        title: "Free Shipping",
        description: "On all orders over $100",
    },
    {
        icon: RotateCcw,
        title: "30 Days Returns",
        description: "Money back guarantee",
    },
    {
        icon: ShieldCheck,
        title: "Secured Payment",
        description: "Safe and secure checkout",
    },
    {
        icon: Gift,
        title: "Special Offers",
        description: "20% off for first order",
    },
    {
        icon: Headphones,
        title: "Support 24/7",
        description: "Contact us anytime",
    },
];

export const Features = () => {
    return (
        <section className="bg-white border-y py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center space-y-4 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center transition-transform group-hover:scale-110">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-sm tracking-tight">{feature.title}</h4>
                                    <p className="text-xs text-muted-foreground whitespace-nowrap">{feature.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
