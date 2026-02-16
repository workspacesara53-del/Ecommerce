"use client";

import React from "react";
import {
    Layers,
    Plus,
    Search,
    Edit,
    Trash2,
    Eye,
    Filter,
    MoreVertical
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
    { id: 1, name: "Groceries", slug: "groceries", icon: "🍎", count: 120, color: "bg-orange-100 text-orange-600" },
    { id: 2, name: "Personal Care", slug: "personal-care", icon: "🧴", count: 85, color: "bg-blue-100 text-blue-600" },
    { id: 3, name: "Electronics", slug: "electronics", icon: "📱", count: 45, color: "bg-purple-100 text-purple-600" },
    { id: 4, name: "Fashion", slug: "fashion", icon: "👕", count: 210, color: "bg-pink-100 text-pink-600" },
    { id: 5, name: "Home & Garden", slug: "home-garden", icon: "🏡", count: 64, color: "bg-green-100 text-green-600" },
];

export default function AdminCategoriesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Categories</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage product categories and subcategories.</p>
                </div>
                <Link href="/admin/categories/add">
                    <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                        <Plus className="h-4 w-4 mr-2" /> Add Category
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                {/* Filters */}
                <div className="p-6 border-b flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary/5">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search categories..."
                            className="w-full bg-white border rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary outline-none shadow-sm"
                        />
                    </div>
                    <Button variant="outline" className="bg-white rounded-xl border-secondary">
                        <Filter className="h-4 w-4 mr-2" /> Filter
                    </Button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/20 text-muted-foreground font-black uppercase text-[10px] tracking-widest border-b">
                            <tr>
                                <th className="px-6 py-5">Icon</th>
                                <th className="px-4 py-5">Category Name</th>
                                <th className="px-4 py-5">Slug</th>
                                <th className="px-4 py-5 font-center">Total Products</th>
                                <th className="px-6 py-5 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {categories.map((category, idx) => (
                                <motion.tr
                                    key={category.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="hover:bg-secondary/5 transition-colors group"
                                >
                                    <td className="px-6 py-4">
                                        <div className={`w-12 h-12 rounded-2xl ${category.color} flex items-center justify-center text-2xl shadow-inner`}>
                                            {category.icon}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                                            {category.name}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <code className="bg-secondary/40 px-2 py-1 rounded text-[11px] font-bold text-muted-foreground">/{category.slug}</code>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="font-black text-foreground bg-secondary/30 px-3 py-1 rounded-full text-xs">
                                            {category.count} Products
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 rounded-xl bg-destructive/5 text-destructive hover:bg-destructive hover:text-white transition-all">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t flex items-center justify-between text-[11px] font-black uppercase text-muted-foreground">
                    <span>Showing 5 of 24 Categories</span>
                    <div className="flex gap-4">
                        <button className="opacity-50">Previous</button>
                        <button className="text-primary">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
