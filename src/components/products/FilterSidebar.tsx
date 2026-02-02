"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const categories = [
    "Fruits & Vegetables",
    "Meats & Seafood",
    "Breakfast & Dairy",
    "Frozen Foods",
    "Beverages",
    "Grocery & Staples"
];

const ratings = [5, 4, 3, 2, 1];

export const FilterSidebar = () => {
    return (
        <div className="space-y-8">
            {/* Categories */}
            <div>
                <h3 className="font-bold text-lg mb-4">Shop by Category</h3>
                <ul className="space-y-2">
                    {categories.map((cat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <div className="h-4 w-4 border rounded flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                                {/* Simple Checkbox Mockup */}
                            </div>
                            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                                {cat}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Filter */}
            <div>
                <h3 className="font-bold text-lg mb-4">Filter by Price</h3>
                {/* Visual Slider Mockup */}
                <div className="h-1 w-full bg-secondary rounded-full mb-4 relative">
                    <div className="absolute left-[0%] right-[30%] h-full bg-primary rounded-full" />
                    <div className="absolute left-[0%] top-1/2 -translate-y-1/2 h-3 w-3 bg-primary rounded-full border border-white shadow cursor-pointer" />
                    <div className="absolute right-[30%] top-1/2 -translate-y-1/2 h-3 w-3 bg-primary rounded-full border border-white shadow cursor-pointer" />
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Price: <span className="text-foreground font-medium">$0 - $100</span></span>
                    <Button variant="link" className="h-auto p-0 text-primary">Filter</Button>
                </div>
            </div>

            {/* Rating Filter */}
            <div>
                <h3 className="font-bold text-lg mb-4">Filter by Rating</h3>
                <ul className="space-y-2">
                    {ratings.map((rating) => (
                        <li key={rating} className="flex items-center gap-2 cursor-pointer group">
                            <div className="h-4 w-4 border rounded flex items-center justify-center group-hover:border-primary transition-colors" />
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn(
                                            "h-3 w-3",
                                            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                        )}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-muted-foreground">(24)</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
