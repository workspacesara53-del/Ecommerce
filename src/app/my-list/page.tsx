"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard, sampleProducts } from "@/components/products/ProductCard";
import { CartItem, CartItemData } from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const initialWishlist = sampleProducts.slice(0, 4);
const initialCart: CartItemData[] = [
    { id: 1, name: "Fortune Sunflower Oil", image: "bg-yellow-50", price: 79.20, oldPrice: 206.50, quantity: 1, rating: 5 },
    { id: 2, name: "Fresh Organic Apple", image: "bg-red-50", price: 45.00, oldPrice: 50.00, quantity: 2, rating: 4 },
];

export default function MyListPage() {
    const [wishlistItems, setWishlistItems] = useState(initialWishlist);
    const [cartItems, setCartItems] = useState(initialCart);

    const handleRemoveWishlist = (id: number) => {
        setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleRemoveCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-12 mb-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                        My List
                    </h1>
                    <p className="text-muted-foreground">
                        <Link href="/" className="hover:text-primary">Home</Link> /
                        <span className="text-foreground font-medium ml-1">My List</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <Tabs defaultValue="wishlist" className="w-full">
                    {/* Tabs Header */}
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-12 bg-secondary/30">
                        <TabsTrigger value="wishlist" className="flex items-center gap-2 data-[state=active]:bg-white">
                            <Heart className="h-4 w-4" />
                            Wishlist ({wishlistItems.length})
                        </TabsTrigger>
                        <TabsTrigger value="cart" className="flex items-center gap-2 data-[state=active]:bg-white">
                            <ShoppingCart className="h-4 w-4" />
                            Cart ({cartItems.length})
                        </TabsTrigger>
                    </TabsList>

                    {/* Wishlist Tab */}
                    <TabsContent value="wishlist" className="mt-0">
                        {wishlistItems.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Your wishlist is empty</h3>
                                <p className="text-muted-foreground mb-6">Save your favorite products here</p>
                                <Link href="/products">
                                    <Button>Browse Products</Button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-6">
                                    <p className="text-muted-foreground">
                                        {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} saved
                                    </p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setWishlistItems([])}
                                        className="text-destructive hover:text-destructive"
                                    >
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Clear All
                                    </Button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {wishlistItems.map((product) => (
                                        <div key={product.id} className="relative">
                                            <ProductCard product={product} />
                                            <button
                                                onClick={() => handleRemoveWishlist(product.id)}
                                                className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-destructive hover:text-white transition-colors"
                                            >
                                                <Heart className="h-4 w-4 fill-current text-destructive" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </TabsContent>

                    {/* Cart Tab */}
                    <TabsContent value="cart" className="mt-0">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShoppingCart className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
                                <p className="text-muted-foreground mb-6">Add products to get started</p>
                                <Link href="/products">
                                    <Button>Start Shopping</Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Cart Items */}
                                <div className="lg:col-span-2">
                                    <div className="bg-white rounded-xl border p-6 shadow-sm">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-xl font-bold">Shopping Cart</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                                            </p>
                                        </div>

                                        <div className="divide-y">
                                            {cartItems.map((item) => (
                                                <CartItem key={item.id} item={item} onRemove={handleRemoveCart} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Cart Summary */}
                                <div className="lg:col-span-1">
                                    <div className="bg-white rounded-xl border p-6 shadow-sm sticky top-24">
                                        <h3 className="text-xl font-bold mb-6">Order Summary</h3>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Subtotal</span>
                                                <span className="font-medium">${cartSubtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">Shipping</span>
                                                <span className="font-medium text-green-600">Free</span>
                                            </div>
                                            <div className="border-t pt-4">
                                                <div className="flex justify-between">
                                                    <span className="font-bold text-lg">Total</span>
                                                    <span className="font-bold text-xl text-primary">${cartSubtotal.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="/checkout">
                                            <Button className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25">
                                                Proceed to Checkout
                                            </Button>
                                        </Link>

                                        <Link href="/products">
                                            <Button variant="outline" className="w-full mt-3">
                                                Continue Shopping
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
