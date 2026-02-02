import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
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
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold mb-6">Top Categories</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Fresh Fruits</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Vegetables</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Dairy Products</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Meats</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Beverages</Link></li>
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
    );
};
