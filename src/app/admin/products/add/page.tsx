"use client";

import React, { useEffect, useState } from "react";
import {
    Image as ImageIcon,
    Star,
    ChevronDown,
    Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<{ id: string, name: string }[]>([]);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category_id: "",
        price: "",
        old_price: "",
        is_featured: false,
        stock_quantity: "",
        brand: "",
        discount_percent: "",
        image_url: "" // For now just one image URL
    });
    const [rating, setRating] = useState(0);

    useEffect(() => {
        async function fetchCategories() {
            const { data } = await supabase.from("categories").select("id, name");
            if (data) setCategories(data);
        }
        fetchCategories();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.from("products").insert([
            {
                name: formData.name,
                description: formData.description,
                price: parseFloat(formData.price),
                old_price: formData.old_price ? parseFloat(formData.old_price) : null,
                discount_percent: formData.discount_percent ? parseInt(formData.discount_percent) : null,
                stock_quantity: parseInt(formData.stock_quantity) || 0,
                brand: formData.brand,
                category_id: formData.category_id || null,
                is_featured: formData.is_featured,
                rating: rating,
                images: formData.image_url ? [formData.image_url] : []
            }
        ]);

        if (error) {
            alert("Error adding product: " + error.message);
        } else {
            router.push("/admin/products");
        }
        setLoading(false);
    };

    return (
        <div className="max-w-6xl mx-auto pb-20">
            <h1 className="text-xl font-bold mb-6 text-foreground/80">Add Product</h1>

            <div className="bg-white rounded-xl border shadow-sm p-8">
                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Basic Info */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Product Name</label>
                            <Input
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter product name"
                                className="h-11 border-secondary/60 focus:border-primary/50 bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Product Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Enter product description"
                                rows={6}
                                className="w-full rounded-md border border-secondary/60 bg-white p-4 text-sm focus:ring-1 focus:ring-primary/30 outline-none resize-none"
                            />
                        </div>
                    </div>

                    {/* Grid Fields 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Product Category</label>
                            <div className="relative">
                                <select
                                    value={formData.category_id}
                                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                                    className="w-full h-11 rounded-md border border-secondary/60 bg-white px-3 text-sm focus:ring-1 focus:ring-primary/30 outline-none appearance-none"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Product Price</label>
                            <Input
                                required
                                type="number" step="0.01"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                placeholder="0.00"
                                className="h-11 border-secondary/60 bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Product Old Price</label>
                            <Input
                                type="number" step="0.01"
                                value={formData.old_price}
                                onChange={(e) => setFormData({ ...formData, old_price: e.target.value })}
                                placeholder="0.00"
                                className="h-11 border-secondary/60 bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Is Featured?</label>
                            <div className="relative">
                                <select
                                    value={formData.is_featured ? "true" : "false"}
                                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.value === "true" })}
                                    className="w-full h-11 rounded-md border border-secondary/60 bg-white px-3 text-sm focus:ring-1 focus:ring-primary/30 outline-none appearance-none"
                                >
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Grid Fields 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Product Stock</label>
                            <Input
                                type="number"
                                value={formData.stock_quantity}
                                onChange={(e) => setFormData({ ...formData, stock_quantity: e.target.value })}
                                placeholder="0"
                                className="h-11 border-secondary/60 bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Product Brand</label>
                            <Input
                                value={formData.brand}
                                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                placeholder="Enter brand name"
                                className="h-11 border-secondary/60 bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Product Discount (%)</label>
                            <Input
                                type="number"
                                value={formData.discount_percent}
                                onChange={(e) => setFormData({ ...formData, discount_percent: e.target.value })}
                                placeholder="0%"
                                className="h-11 border-secondary/60 bg-white"
                            />
                        </div>
                    </div>

                    {/* Image URL (Temporary before proper storage) */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight">Image URL</label>
                        <Input
                            value={formData.image_url}
                            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                            placeholder="https://images.unsplash.com/..."
                            className="h-11 border-secondary/60 bg-white"
                        />
                    </div>

                    {/* Rating */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground/70 uppercase tracking-tight block">Product Rating</label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                >
                                    <Star
                                        className={`h-5 w-5 ${star <= rating ? "fill-orange-400 text-orange-400" : "text-secondary-foreground/20"}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action */}
                    <div className="pt-4">
                        <Button
                            disabled={loading}
                            className="bg-[#10b981] hover:bg-[#059669] text-white px-10 h-12 rounded-lg font-bold shadow-lg shadow-teal-500/20 disabled:opacity-50"
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Publish Product
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
