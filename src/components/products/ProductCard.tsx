"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice: number | null;
    rating: number;
    image: string;
    label: string | null;
}

// Dummy Data that can be exported or moved
export const sampleProducts: Product[] = [
    { id: 1, name: "Fresh Apple", price: 221.99, oldPrice: 226.50, rating: 5, image: "bg-red-50", label: "Organic" },
    { id: 2, name: "Organic Banana", price: 221.50, oldPrice: 222.00, rating: 4, image: "bg-yellow-50", label: null },
    { id: 3, name: "Whole Milk", price: 223.20, oldPrice: 223.50, rating: 5, image: "bg-blue-50", label: "Sale" },
    { id: 4, name: "Farm Eggs", price: 224.50, oldPrice: 225.00, rating: 4, image: "bg-orange-50", label: "Best Seller" },
    { id: 5, name: "Fresh Bread", price: 212.10, oldPrice: null, rating: 5, image: "bg-amber-50", label: null },
    { id: 6, name: "Orange Juice", price: 225.00, oldPrice: 226.50, rating: 4, image: "bg-orange-100", label: "-20%" },
    { id: 7, name: "Green Salad", price: 213.75, oldPrice: null, rating: 5, image: "bg-green-50", label: "Healthy" },
    { id: 8, name: "Steak", price: 255.99, oldPrice: 219.99, rating: 5, image: "bg-rose-50", label: "Premium" },
    { id: 9, name: "Fresh Apple", price: 221.99, oldPrice: 226.50, rating: 5, image: "bg-red-50", label: "Organic" },
    { id: 10, name: "Organic Banana", price: 221.50, oldPrice: 222.00, rating: 4, image: "bg-yellow-50", label: null },
    { id: 11, name: "Whole Milk", price: 223.20, oldPrice: 223.50, rating: 5, image: "bg-blue-50", label: "Sale" },
    { id: 12, name: "Farm Eggs", price: 224.50, oldPrice: 225.00, rating: 4, image: "bg-orange-50", label: "Best Seller" },
];

export const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/products/${product.id}`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card/60 backdrop-blur-sm border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col cursor-pointer"
            >
                {/* Badge */}
                {product.label && (
                    <span className="absolute top-3 left-3 z-10 px-2 py-0.5 text-[10px] font-bold text-white bg-primary rounded-full shadow-sm">
                        {product.label}
                    </span>
                )}

                {/* Image Area */}
                <div className={`relative aspect-square w-full ${product.image} flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500`}>
                    <div className="text-6xl drop-shadow-md">📦</div>

                    {/* Hover Actions */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-md bg-white hover:bg-white hover:text-primary">
                            <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-md bg-white hover:bg-white hover:text-destructive">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t">
                    <div>
                        <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-3 w-3 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
                            ))}
                        </div>
                        <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">{product.name} juice - 240 oz Bottle</h3>
                        <p className="text-xs text-muted-foreground mb-3">1 pc</p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed">
                        <div className="flex flex-col">
                            <span className="text-base font-bold text-primary">${product.price.toFixed(2)}</span>
                            {product.oldPrice && (
                                <span className="text-xs text-muted-foreground line-through decoration-destructive/50">${product.oldPrice.toFixed(2)}</span>
                            )}
                        </div>
                        <Button size="sm" variant="outline" className="h-8 text-xs font-semibold px-3 hover:bg-primary hover:text-primary-foreground transition-colors rounded-full border-primary/20 text-primary">
                            Add <ShoppingCart className="ml-1 h-3 w-3" />
                        </Button>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};
