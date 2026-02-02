"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-background border-b z-50 sticky top-0">
            {/* Top Bar */}
            <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm text-center hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p>Get the best quality products at the lowest prices!</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:underline">Help</Link>
                        <Link href="#" className="hover:underline">Track Order</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-primary flex-shrink-0">
                        E-Shop
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
                        <Input
                            placeholder="Search for products..."
                            className="w-full pl-4 pr-10 rounded-full border-2 border-primary/20 focus-visible:border-primary transition-colors"
                        />
                        <Button size="icon" className="absolute right-1 top-1 bottom-1 rounded-full h-auto w-8 shadow-none bg-primary/90 hover:bg-primary text-white">
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <Button variant="ghost" size="icon" className="hidden md:flex">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hidden md:flex">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    2
                                </span>
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Search Bar - Mobile */}
                <div className="md:hidden mt-4">
                    <Input placeholder="Search..." className="w-full rounded-full" />
                </div>
            </div>

            {/* Navigation - Desktop */}
            <div className="hidden md:block border-t">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-8 py-3 text-sm font-medium">
                        <Link href="/" className="text-primary">Home</Link>
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <Link href="/deals" className="hover:text-primary transition-colors">Deals</Link>
                        <Link href="/new" className="hover:text-primary transition-colors">New Arrivals</Link>
                        <Link href="/brands" className="hover:text-primary transition-colors">Brands</Link>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-background border-t"
                    >
                        <nav className="flex flex-col p-4 space-y-4 font-medium">
                            <Link href="/" className="text-primary">Home</Link>
                            <Link href="/products">Products</Link>
                            <Link href="/cart">Cart</Link>
                            <Link href="/account">My Account</Link>
                            <Link href="/wishlist">Wishlist</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
