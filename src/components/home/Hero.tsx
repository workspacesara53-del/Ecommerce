"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-secondary/30">
            <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-8">
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center md:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                            100% Organic Products
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                            Get the best quality <br className="hidden md:block" />
                            products at the <br className="hidden md:block" />
                            lowest prices
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0"
                    >
                        We have prepared special discounts for you on organic breakfast products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            Shop Now
                        </Button>
                        <div className="flex items-center gap-2 text-lg font-bold">
                            <span className="text-3xl text-destructive">$21.97</span>
                            <span className="text-muted-foreground line-through decoration-destructive/50 decoration-2 text-base">$30.00</span>
                        </div>
                    </motion.div>
                </div>

                {/* Image/Visual */}
                <div className="flex-1 relative w-full max-w-lg aspect-square">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-200/50 to-transparent rounded-full blur-3xl -z-10" />

                    {/* Placeholder for Product Image */}
                    <div className="w-full h-full relative flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* 
                 In real app, use next/image here. 
                 Since I don't have the assets, I'm creating a CSS visual representation or SVG 
               */}
                            <div className="w-full h-full bg-orange-100/50 rounded-3xl border-2 border-white/50 shadow-xl flex items-center justify-center p-8">
                                <PackageIcon className="w-32 h-32 text-orange-400 opacity-80" />
                                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 font-bold rounded-full w-20 h-20 flex items-center justify-center -rotate-12 shadow-lg z-20">
                                    <span className="text-center text-xs leading-tight">SUPER<br />OMEGA<br />SQUARES</span>
                                </div>
                                <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm max-w-[150px]">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                        <LeafIcon className="w-4 w-4 text-green-600" />
                                    </div>
                                    <p className="text-xs font-semibold text-green-800">100% Organic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simple visual components for the placeholder
function PackageIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16.5 9.4 7.5 4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" />
        </svg>
    )
}

function LeafIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}
