"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/layout/SearchBar";
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
                        <Link href="/contact" className="hover:underline">Help</Link>
                        <Link href="/track-order" className="hover:underline">Track Order</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-black text-primary flex-shrink-0 tracking-tighter">
                        BoroBazar
                    </Link>

                    {/* Search Bar - Desktop */}
                    <SearchBar className="hidden md:flex flex-1 max-w-xl mx-8 relative" />

                    {/* Icons */}
                    <div className="flex items-center gap-2 md:gap-5">
                        <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-muted-foreground mr-2">
                            <Link href="/login" className="hover:text-primary transition-colors uppercase">Login</Link>
                            <span className="opacity-30">|</span>
                            <Link href="/register" className="hover:text-primary transition-colors uppercase">Register</Link>
                        </div>

                        <Link href="/account/profile">
                            <Button variant="ghost" size="icon" className="hidden md:flex">
                                <User className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/wishlist">
                            <Button variant="ghost" size="icon" className="hidden md:flex relative">
                                <Heart className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    0
                                </span>
                            </Button>
                        </Link>
                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 bg-destructive text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">
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
                    <SearchBar className="relative" />
                </div>
            </div>

            {/* Navigation - Desktop */}
            <div className="hidden md:block border-t">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-8 py-3 text-sm font-medium">
                        <Link href="/" className="text-primary">Home</Link>
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        <Link href="/deals" className="hover:text-primary transition-colors">Deals</Link>
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
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/cart">Cart</Link>
                            <Link href="/account/profile">My Account</Link>
                            <Link href="/wishlist">Wishlist</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
