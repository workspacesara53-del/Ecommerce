"use client";

import React from "react";
import {
    Layers,
    Upload,
    ArrowLeft,
    Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AddCategoryPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/categories">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-white border">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold">Add New Category</h1>
                        <p className="text-sm text-muted-foreground mt-1">Create a new category to organize your products.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white">Cancel</Button>
                    <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-8">
                        Save Category
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border p-8 shadow-sm space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground">Category Name *</label>
                            <Input placeholder="e.g. Organic Vegetables" className="h-12 border-secondary focus:border-primary transition-all bg-secondary/5" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground">Category Slug</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-secondary bg-secondary/20 text-muted-foreground text-sm font-bold">
                                    /
                                </span>
                                <Input placeholder="organic-vegetables" className="rounded-l-none h-12 border-secondary focus:border-primary transition-all bg-secondary/5 shadow-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground">Icon / Emoji</label>
                            <Input placeholder="e.g. 🥦" className="h-12 border-secondary focus:border-primary transition-all bg-secondary/5" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground">Description</label>
                            <textarea
                                placeholder="Short description for this category..."
                                rows={4}
                                className="w-full rounded-md border border-secondary bg-secondary/5 p-4 text-sm focus:ring-1 focus:ring-primary outline-none resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Media & Meta */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border p-8 shadow-sm space-y-6">
                        <h2 className="font-bold text-lg border-b pb-4">Category Image</h2>
                        <div className="aspect-square border-2 border-dashed border-secondary/60 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer bg-secondary/5 group">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <Upload className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Upload Image</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border p-8 shadow-sm space-y-6">
                        <h2 className="font-bold text-lg border-b pb-4">Settings</h2>
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-5 h-5 rounded border border-primary flex items-center justify-center bg-primary">
                                    <Check className="h-3 w-3 text-white" />
                                </div>
                                <span className="text-sm font-bold group-hover:text-primary transition-colors">Visible in Menu</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-5 h-5 rounded border border-secondary"></div>
                                <span className="text-sm font-bold group-hover:text-primary transition-colors">Featured Category</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
