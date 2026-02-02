"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dummy Data
const products = [
    { id: 1, name: "Fresh Apple", price: 2.99, oldPrice: 4.00, rating: 5, image: "bg-red-100", label: "Organic" },
    { id: 2, name: "Organic Banana", price: 1.50, oldPrice: 2.00, rating: 4, image: "bg-yellow-100", label: null },
    { id: 3, name: "Whole Milk", price: 3.20, oldPrice: 3.50, rating: 5, image: "bg-blue-100", label: "Sale" },
    { id: 4, name: "Farm Eggs", price: 4.50, oldPrice: 5.00, rating: 4, image: "bg-orange-100", label: "Best Seller" },
    { id: 5, name: "Fresh Bread", price: 2.10, oldPrice: null, rating: 5, image: "bg-amber-100", label: null },
    { id: 6, name: "Orange Juice", price: 5.00, oldPrice: 6.50, rating: 4, image: "bg-orange-200", label: "-20%" },
    { id: 7, name: "Green Salad", price: 3.75, oldPrice: null, rating: 5, image: "bg-green-100", label: "Healthy" },
    { id: 8, name: "Steak", price: 15.99, oldPrice: 19.99, rating: 5, image: "bg-rose-100", label: "Premium" },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group relative bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
        >
            {/* Badge */}
            {product.label && (
                <span className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold text-white bg-primary rounded-md">
                    {product.label}
                </span>
            )}

            {/* Image Area (Placeholder) */}
            <div className={`relative h-48 w-full ${product.image} flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500`}>
                {/* Placeholder Icon */}
                <div className="text-4xl">📦</div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="icon" variant="secondary" className="rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <HeartIcon />
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                </div>
                <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">1 pc</p>

                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                        {product.oldPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                        )}
                    </div>
                    <Button size="sm" className="rounded-full h-8 px-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                        Add <ShoppingCart className="ml-1 h-3 w-3" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

// Helper Icon
function HeartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
    )
}

export const ProductGrid = () => {
    return (
        <section className="py-12 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">Popular Products</h2>
                    <Button variant="link" className="text-primary decoration-primary">
                        View All Products
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
