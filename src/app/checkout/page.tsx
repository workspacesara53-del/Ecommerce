"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample cart items (in real app, this would come from state management)
const cartItems = [
    { id: 1, name: "Fortune Sunflower Oil", image: "bg-yellow-50", price: 79.20, quantity: 1 },
    { id: 2, name: "Fresh Organic Apple", image: "bg-red-50", price: 45.00, quantity: 2 },
    { id: 3, name: "Whole Wheat Bread", image: "bg-amber-50", price: 23.90, quantity: 1 },
];

export default function CheckoutPage() {
    const [orderPlaced, setOrderPlaced] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 0; // Free shipping
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;

    const handleCheckout = (formData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }) => {
        console.log("Order placed:", formData);
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-secondary/10 px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold mb-3">Order Placed Successfully!</h1>
                    <p className="text-muted-foreground mb-8">
                        Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                    </p>
                    <div className="space-y-3">
                        <Link href="/products">
                            <Button className="w-full" size="lg">Continue Shopping</Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline" className="w-full" size="lg">Back to Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                <p className="text-muted-foreground mb-4">Add some products before checking out.</p>
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
                    <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
                    <p className="text-muted-foreground text-sm mt-2">
                        <Link href="/" className="hover:text-primary">Home</Link> /
                        <Link href="/cart" className="hover:text-primary mx-1">Cart</Link> /
                        <span className="text-foreground font-medium ml-1">Checkout</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Checkout Form */}
                    <div className="flex-1">
                        <CheckoutForm onSubmit={handleCheckout} />
                    </div>

                    {/* Right: Order Summary */}
                    <div className="lg:w-96 flex-shrink-0">
                        <OrderSummary
                            items={cartItems}
                            subtotal={subtotal}
                            shipping={shipping}
                            tax={tax}
                            total={total}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
