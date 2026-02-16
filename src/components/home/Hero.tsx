"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
    id: string;
    title: string;
    subtitle: string;
    image_url: string;
    link_url: string;
    button_text: string;
}

export const Hero = () => {
    const [slides, setSlides] = useState<Slide[]>([]);
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSlides() {
            const { data, error } = await supabase
                .from("slides")
                .select("*")
                .eq("is_active", true)
                .order("order_index", { ascending: true });

            if (data) setSlides(data);
            setLoading(false);
        }
        fetchSlides();
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    if (loading) return <div className="h-[500px] w-full bg-secondary/20 animate-pulse rounded-3xl container mx-auto my-8"></div>;
    if (slides.length === 0) return null;

    return (
        <section className="relative overflow-hidden group">
            <div className="container mx-auto px-4 py-8">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slides[current].id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            className="absolute inset-0"
                        >
                            {/* Background Image with Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-110 group-hover:scale-100"
                                style={{ backgroundImage: `url(${slides[current].image_url})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

                            {/* Content */}
                            <div className="relative h-full container mx-auto px-8 md:px-16 flex flex-col justify-center items-start text-white">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-lg"
                                >
                                    {slides[current].subtitle}
                                </motion.span>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    className="text-4xl md:text-7xl font-black mb-6 max-w-2xl leading-[1.1] tracking-tighter"
                                >
                                    {slides[current].title}
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <Link href={slides[current].link_url || "/products"}>
                                        <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:scale-105 active:scale-95">
                                            {slides[current].button_text || "Shop Now"}
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {slides.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </>
                    )}

                    {/* Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 transition-all rounded-full ${i === current ? "bg-primary w-8" : "bg-white/40 w-4 hover:bg-white/60"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
