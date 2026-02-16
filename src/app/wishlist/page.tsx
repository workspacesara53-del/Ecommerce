"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductCard, sampleProducts } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState(sampleProducts.slice(0, 6));

    const handleRemove = (id: number) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
                <p className="text-muted-foreground mb-4">Save your favorite products to buy them later.</p>
                <Link href="/products">
                    <Button size="lg">Browse Products</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Header */}
            <div className="bg-secondary/30 py-8 mb-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
                    <p className="text-muted-foreground text-sm mt-2">
                        <Link href="/" className="hover:text-primary">Home</Link> /
                        <span className="text-foreground font-medium ml-1">Wishlist</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Stats Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-white rounded-xl border">
                    <div>
                        <p className="text-sm text-muted-foreground">Total Items</p>
                        <p className="text-2xl font-bold">{wishlistItems.length}</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={() => setWishlistItems([])}>
                            Clear All
                        </Button>
                        <Link href="/cart">
                            <Button>
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                View Cart
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {wishlistItems.map((product) => (
                        <div key={product.id} className="relative">
                            <ProductCard product={product} />
                            <button
                                onClick={() => handleRemove(product.id)}
                                className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-destructive hover:text-white transition-colors"
                            >
                                <Heart className="h-4 w-4 fill-current text-destructive" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
