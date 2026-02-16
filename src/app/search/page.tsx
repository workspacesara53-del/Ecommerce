"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ProductCard, sampleProducts } from "@/components/products/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, SlidersHorizontal } from "lucide-react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const [searchQuery, setSearchQuery] = useState(query);

    // Filter products based on search query
    const filteredProducts = sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Header */}
            <div className="bg-secondary/30 py-8 mb-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Search Results</h1>

                    {/* Search Bar */}
                    <div className="max-w-2xl">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search for products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-10 h-12 text-base"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Results Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                        {searchQuery ? (
                            <>
                                <p className="text-sm text-muted-foreground mb-1">
                                    Search results for &quot;{searchQuery}&quot;
                                </p>
                                <p className="font-semibold">
                                    {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
                                </p>
                            </>
                        ) : (
                            <p className="text-muted-foreground">Enter a search term to find products</p>
                        )}
                    </div>

                    <Button variant="outline" size="sm">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filters
                    </Button>
                </div>

                {/* Results Grid */}
                {searchQuery ? (
                    filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">No products found</h3>
                            <p className="text-muted-foreground mb-6">
                                Try adjusting your search or browse our categories
                            </p>
                            <Link href="/products">
                                <Button>Browse All Products</Button>
                            </Link>
                        </div>
                    )
                ) : (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Start Searching</h3>
                        <p className="text-muted-foreground mb-6">
                            Enter keywords to find your desired products
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Electronics", "Fashion", "Home", "Sports"].map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSearchQuery(category)}
                                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-sm font-medium transition-colors"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Popular Searches */}
                {!searchQuery && (
                    <div className="mt-16 p-8 bg-secondary/20 rounded-xl">
                        <h3 className="font-bold mb-4">Popular Searches</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Organic Food", "Fresh Fruits", "Vegetables", "Dairy Products", "Snacks", "Beverages"].map(
                                (term) => (
                                    <button
                                        key={term}
                                        onClick={() => setSearchQuery(term)}
                                        className="px-4 py-2 bg-white hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-colors"
                                    >
                                        {term}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
