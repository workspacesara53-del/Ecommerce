"use client";

import React from "react";
import {
    Image as ImageIcon,
    Plus,
    Edit,
    Trash2,
    Eye,
    MoveVertical,
    CheckCircle2,
    XCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
    { id: 1, title: "Fresh Organic Vegetables", subtitle: "Summer Sale", image: "bg-green-100", status: "Active", link: "/products" },
    { id: 2, title: "High Quality Meat", subtitle: "20% Discount", image: "bg-red-100", status: "Active", link: "/products" },
    { id: 3, title: "Premium Dairy Products", subtitle: "Daily Fresh", image: "bg-blue-100", status: "Inactive", link: "/products" },
];

export default function AdminSlidesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Home Slides</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage the hero section carousels and promotional slides.</p>
                </div>
                <Link href="/admin/slides/add">
                    <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                        <Plus className="h-4 w-4 mr-2" /> Add Slide
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {slides.map((slide, idx) => (
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl border shadow-sm p-4 flex items-center justify-between group hover:border-primary transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div className="cursor-move text-muted-foreground/30 hover:text-primary transition-colors">
                                <MoveVertical className="h-6 w-6" />
                            </div>
                            <div className={`w-40 h-24 rounded-xl ${slide.image} border flex items-center justify-center p-2 overflow-hidden shadow-inner`}>
                                <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-foreground">{slide.title}</h3>
                                <p className="text-sm font-bold text-primary italic">{slide.subtitle}</p>
                                <div className="mt-2 flex items-center gap-3">
                                    <span className={cn(
                                        "inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border",
                                        slide.status === "Active" ? "bg-green-100 text-green-700 border-green-200" : "bg-gray-100 text-gray-500 border-gray-200"
                                    )}>
                                        {slide.status === "Active" ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                                        {slide.status}
                                    </span>
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase opacity-50">Link: {slide.link}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pr-4">
                            <button className="p-3 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                                <Edit className="h-5 w-5" />
                            </button>
                            <button className="p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                                <Trash2 className="h-5 w-5" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-primary/5 border border-dashed border-primary/20 rounded-2xl p-6 text-center">
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Drag and drop slides to reorder them on the homepage</p>
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
