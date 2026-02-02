"use client";

import { useState } from "react";
import { Star, Heart, Share2, Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "./ProductCard";

export const ProductInfo = ({ product }: { product: Product }) => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="space-y-6">
            {/* Title & Rating */}
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                    {product.name}
                </h1>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-current" : "text-input"}`} />
                        ))}
                    </div>
                    <span className="text-muted-foreground">(24 Reviews)</span>
                    <span className="text-green-500 font-medium bg-green-50 px-2 py-0.5 rounded-full">In Stock</span>
                </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-foreground">
                    ${product.price ? product.price.toFixed(2) : "0.00"}
                </span>
                {product.oldPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                        ${product.oldPrice.toFixed(2)}
                    </span>
                )}
                {product.oldPrice && (
                    <span className="text-sm font-semibold text-destructive px-2 py-0.5 bg-destructive/10 rounded">
                        Save {(product.oldPrice - product.price).toFixed(2)}%
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed border-y py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Quantity */}
                <div className="flex items-center border rounded-full overflow-hidden">
                    <Button variant="ghost" size="icon" onClick={decrement} className="rounded-none h-10 w-10 hover:bg-secondary">
                        <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                        type="number"
                        value={quantity}
                        readOnly
                        className="w-12 h-10 text-center border-none focus-visible:ring-0 rounded-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <Button variant="ghost" size="icon" onClick={increment} className="rounded-none h-10 w-10 hover:bg-secondary">
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>

                {/* Add to Cart */}
                <Button size="lg" className="flex-1 rounded-full text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                </Button>

                {/* Wishlist/Share */}
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full shadow-sm hover:text-destructive hover:border-destructive transition-colors">
                        <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full shadow-sm hover:text-blue-500 hover:border-blue-500 transition-colors">
                        <Share2 className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Meta Info */}
            <div className="text-sm space-y-2 pt-4">
                <div className="flex gap-2">
                    <span className="font-semibold text-foreground">SKU:</span>
                    <span className="text-muted-foreground">REF-12345</span>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold text-foreground">Categories:</span>
                    <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Juice, Beverages, Organic</span>
                </div>
            </div>
        </div>
    );
};
