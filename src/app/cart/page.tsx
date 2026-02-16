"use client";

import { useState } from "react";
import Link from "next/link";
import { CartItem, CartItemData } from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

// Dummy Cart Data
const initialCartItems: CartItemData[] = [
    { id: 1, name: "Fortune Sunflower Oil", image: "bg-yellow-50", price: 79.20, oldPrice: 206.50, quantity: 1, rating: 5 },
    { id: 2, name: "Fresh Organic Apple", image: "bg-red-50", price: 45.00, oldPrice: 50.00, quantity: 2, rating: 4 },
    { id: 3, name: "Whole Wheat Bread", image: "bg-amber-50", price: 23.90, oldPrice: 25.00, quantity: 1, rating: 5 },
    { id: 4, name: "Lays Potato Chips", image: "bg-green-50", price: 15.20, oldPrice: 18.00, quantity: 3, rating: 4 },
];

export default function CartPage() {
    const [items, setItems] = useState(initialCartItems);

    const handleRemove = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping logic
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                <p className="text-muted-foreground mb-4">It looks like you haven&apos;t added any products to your cart yet.</p>
                <Link href="/products">
                    <Button size="lg">Start Shopping</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Header */}
            <div className="bg-secondary/30 py-8 mb-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-foreground">Cart Page</h1>
                    <p className="text-muted-foreground text-sm mt-2">Home / Cart</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Cart Items List */}
                    <div className="flex-1">
                        <div className="bg-white rounded-xl shadow-sm border p-6">
                            <h2 className="text-xl font-bold mb-1">Your Cart</h2>
                            <p className="text-sm text-muted-foreground mb-6">There are {items.length} products in your cart</p>

                            <div className="divide-y">
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} onRemove={handleRemove} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cart Totals */}
                    <div className="lg:w-96 flex-shrink-0 h-fit">
                        <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Cart Totals</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center text-sm md:text-base">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm md:text-base">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <div className="text-right">
                                        <span className="font-semibold block">Free</span>
                                        <p className="text-xs text-muted-foreground">(Local Pickup)</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-sm md:text-base">
                                    <span className="text-muted-foreground">Estimate for</span>
                                    <span className="font-semibold">United Kingdom</span>
                                </div>

                                <div className="border-t border-dashed my-2"></div>

                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">Total</span>
                                    <span className="font-bold text-xl text-primary">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <Link href="/checkout">
                                <Button className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25">
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
