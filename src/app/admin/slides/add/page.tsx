"use client";

import React from "react";
import {
    Image as ImageIcon,
    Upload,
    ArrowLeft,
    Link as LinkIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AddSlidePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/slides">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-white border">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold">Add Home Slide</h1>
                        <p className="text-sm text-muted-foreground mt-1">Create a new promotional banner for the home page hero section.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white">Cancel</Button>
                    <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-8">
                        Save Slide
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border p-8 shadow-sm space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground">Slide Title *</label>
                            <Input placeholder="e.g. Summer Organic Sale" className="h-12 border-secondary focus:border-primary transition-all bg-secondary/5" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground">Subtitle / Offer Text</label>
                            <Input placeholder="e.g. Up to 50% Off on all products" className="h-12 border-secondary focus:border-primary transition-all bg-secondary/5" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground flex items-center gap-2">
                                <LinkIcon className="h-4 w-4" /> Redirect Link
                            </label>
                            <Input placeholder="e.g. /products/vegetables" className="h-12 border-secondary focus:border-primary transition-all bg-secondary/5" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground">Button Text</label>
                                <Input placeholder="e.g. Shop Now" className="h-12 border-secondary focus:border-primary transition-all bg-secondary/5" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground">Status</label>
                                <select className="w-full h-12 rounded-md border border-secondary bg-secondary/5 px-3 text-sm focus:ring-1 focus:ring-primary outline-none">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Media */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border p-8 shadow-sm space-y-6">
                        <h2 className="font-bold text-lg border-b pb-4">Background Image</h2>
                        <div className="aspect-[16/9] border-2 border-dashed border-secondary/60 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer bg-secondary/5 group">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <Upload className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Upload Slide Image</span>
                            <p className="text-[8px] text-muted-foreground opacity-60">Recommended size: 1920x600px</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
