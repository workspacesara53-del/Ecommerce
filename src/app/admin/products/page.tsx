"use client";

import React, { useEffect, useState } from "react";
import {
    Plus,
    Search,
    Star,
    Edit,
    Trash2,
    Eye,
    Filter,
    ArrowUpDown,
    Download,
    Package
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    old_price: number;
    stock_quantity: number;
    rating: number;
    images: string[];
    categories?: { name: string };
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const { data, error } = await supabase
                .from("products")
                .select(`
                    *,
                    categories (name)
                `)
                .order("created_at", { ascending: false });

            if (data) setProducts(data);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    const deleteProduct = async (id: string) => {
        if (!confirm("Are you sure you want to delete this product?")) return;
        const { error } = await supabase.from("products").delete().eq("id", id);
        if (!error) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Products List</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage and track your inventory across all categories.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white border-primary/20 text-primary hover:bg-primary/5">
                        <Download className="h-4 w-4 mr-2" /> Export
                    </Button>
                    <Link href="/admin/products/add">
                        <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                            <Plus className="h-4 w-4 mr-2" /> Add Product
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col min-h-[600px]">
                {/* Filters Bar */}
                <div className="p-6 border-b bg-secondary/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-[300px]">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full bg-white border border-secondary rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                        <Button variant="outline" className="bg-white border-secondary">
                            <Filter className="h-4 w-4 mr-2" /> Filter
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/20 text-muted-foreground font-bold uppercase text-[10px] tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Product</th>
                                <th className="px-4 py-4">Category</th>
                                <th className="px-4 py-4">Price</th>
                                <th className="px-4 py-4 text-primary">In Stock</th>
                                <th className="px-4 py-4">Rating</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {loading ? (
                                <tr><td colSpan={6} className="text-center py-20 text-muted-foreground font-bold">Fetching Products...</td></tr>
                            ) : products.length === 0 ? (
                                <tr><td colSpan={6} className="text-center py-20 text-muted-foreground font-bold">No products found.</td></tr>
                            ) : products.map((product, idx) => (
                                <motion.tr
                                    key={product.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="hover:bg-secondary/10 transition-colors group"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-12 h-12 rounded-xl bg-secondary/30 flex-shrink-0 border bg-cover bg-center"
                                                style={{ backgroundImage: `url(${product.images[0] || ''})` }}
                                            >
                                                {!product.images[0] && <Package className="w-5 h-5 m-3 text-muted-foreground/40" />}
                                            </div>
                                            <div className="max-w-[200px]">
                                                <p className="font-bold text-foreground group-hover:text-primary transition-colors truncate" title={product.name}>{product.name}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">{product.brand}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="font-medium text-muted-foreground">{product.categories?.name || 'Uncategorized'}</div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="font-bold text-primary text-base">${product.price.toFixed(2)}</div>
                                        {product.old_price && <div className="text-[10px] text-muted-foreground line-through italic">${product.old_price.toFixed(2)}</div>}
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className={cn(
                                            "inline-flex flex-col px-3 py-1 rounded-lg border",
                                            product.stock_quantity < 10 ? "bg-red-50 border-red-200 text-red-700" : "bg-blue-50 border-blue-200 text-blue-700"
                                        )}>
                                            <span className="font-black leading-none">{product.stock_quantity}</span>
                                            <span className="text-[8px] font-black uppercase tracking-widest mt-1 opacity-70">Remaining</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={cn("h-3.5 w-3.5", i < product.rating ? "fill-orange-400 text-orange-400" : "text-muted-foreground/20")} />
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 translate-x-2 group-hover:translate-x-0 transition-transform">
                                            <button className="p-2 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"><Edit className="h-4 w-4" /></button>
                                            <button onClick={() => deleteProduct(product.id)} className="p-2 rounded-xl bg-destructive/5 text-destructive hover:bg-destructive hover:text-white transition-all shadow-sm"><Trash2 className="h-4 w-4" /></button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
