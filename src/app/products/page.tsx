"use client";

import { FilterSidebar } from "@/components/products/FilterSidebar";
import { ProductCard } from "@/components/products/ProductCard";
import { Pagination } from "@/components/products/Pagination";
import { Button } from "@/components/ui/button";
import { LayoutGrid, ListFilter } from "lucide-react";
import { useState } from "react";

// Reuse products array or fetch from API
const products = [
    { id: 1, name: "Fresh Apple", price: 221.99, oldPrice: 226.50, rating: 5, image: "bg-red-50", label: "Organic" },
    { id: 2, name: "Organic Banana", price: 221.50, oldPrice: 222.00, rating: 4, image: "bg-yellow-50", label: null },
    { id: 3, name: "Whole Milk", price: 223.20, oldPrice: 223.50, rating: 5, image: "bg-blue-50", label: "Sale" },
    { id: 4, name: "Farm Eggs", price: 224.50, oldPrice: 225.00, rating: 4, image: "bg-orange-50", label: "Best Seller" },
    { id: 5, name: "Fresh Bread", price: 212.10, oldPrice: null, rating: 5, image: "bg-amber-50", label: null },
    { id: 6, name: "Orange Juice", price: 225.00, oldPrice: 226.50, rating: 4, image: "bg-orange-100", label: "-20%" },
    { id: 7, name: "Green Salad", price: 213.75, oldPrice: null, rating: 5, image: "bg-green-50", label: "Healthy" },
    { id: 8, name: "Steak", price: 255.99, oldPrice: 219.99, rating: 5, image: "bg-rose-50", label: "Premium" },
    { id: 9, name: "Yogurt", price: 205.99, oldPrice: 208.50, rating: 4, image: "bg-pink-50", label: null },
    { id: 10, name: "Honey", price: 215.50, oldPrice: null, rating: 5, image: "bg-yellow-100", label: "Pure" },
    { id: 11, name: "Cheese", price: 218.20, oldPrice: 220.00, rating: 4, image: "bg-orange-50", label: null },
    { id: 12, name: "Coffee", price: 214.50, oldPrice: 218.00, rating: 5, image: "bg-amber-100", label: "Strong" },
];

export default function ProductsPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-background min-h-screen pb-12">
            {/* Breadcrumb / Title Area */}
            <div className="bg-secondary/30 py-8 mb-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-foreground">Product Listing</h1>
                    <p className="text-muted-foreground text-sm mt-2">Home / Products</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar - Desktop */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <FilterSidebar />
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-secondary/10 p-4 rounded-xl border border-border/50">
                            <div className="text-sm text-muted-foreground">
                                Showing <span className="font-medium text-foreground">1-12</span> of <span className="font-medium text-foreground">32</span> results
                            </div>

                            <div className="flex items-center gap-4 ml-auto">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">Sort by:</span>
                                    <select className="bg-background border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                                        <option>Latest</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Best Selling</option>
                                    </select>
                                </div>
                                <div className="h-6 w-px bg-border hidden sm:block"></div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary bg-primary/10">
                                        <LayoutGrid className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                        <ListFilter className="h-4 w-4" />
                                    </Button>
                                </div>

                                {/* Mobile Filter Toggle */}
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="lg:hidden ml-2"
                                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                >
                                    Filter
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Filter View */}
                        {isSidebarOpen && (
                            <div className="lg:hidden mb-6 p-4 border rounded-xl bg-card">
                                <FilterSidebar />
                            </div>
                        )}

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}
