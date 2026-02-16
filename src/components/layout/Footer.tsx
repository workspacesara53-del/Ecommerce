import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Features } from "./Features";

export const Footer = () => {
    return (
        <div className="flex flex-col">
            <Features />
            <footer className="bg-secondary/30 pt-16 pb-8 border-t">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Brand */}
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-4">E-Shop</h3>
                            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                                We provide the best quality products for your daily needs with the best service in the market.
                            </p>
                            <div className="flex gap-4">
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                                <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                                <li><Link href="/deals" className="hover:text-primary transition-colors">Special Deals</Link></li>
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h4 className="font-semibold mb-6">Customer Service</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
                                <li><Link href="/wishlist" className="hover:text-primary transition-colors">My Wishlist</Link></li>
                                <li><Link href="/cart" className="hover:text-primary transition-colors">Shopping Cart</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="font-semibold mb-6">Newsletter</h4>
                            <p className="text-muted-foreground text-sm mb-4">
                                Subscribe to get the latest news and updates.
                            </p>
                            <div className="flex gap-2">
                                <Input placeholder="Your email" className="bg-background" />
                                <Button size="icon" className="shrink-0">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-8 text-center text-sm text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
