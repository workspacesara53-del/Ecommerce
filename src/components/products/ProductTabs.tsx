"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const reviews = [
    { id: 1, name: "John Doe", rating: 5, date: "2 days ago", comment: "Great product! Highly recommend it." },
    { id: 2, name: "Jane Smith", rating: 4, date: "1 week ago", comment: "Good quality but shipping was slow." },
];

export const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");

    return (
        <div className="mt-12 bg-card rounded-2xl shadow-sm border p-6">
            {/* Tabs Header */}
            <div className="flex gap-8 border-b pb-4 mb-6">
                <button
                    onClick={() => setActiveTab("description")}
                    className={cn(
                        "text-lg font-semibold relative px-2 pb-2 transition-colors",
                        activeTab === "description" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    Description
                    {activeTab === "description" && (
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("reviews")}
                    className={cn(
                        "text-lg font-semibold relative px-2 pb-2 transition-colors",
                        activeTab === "reviews" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    Reviews ({reviews.length})
                    {activeTab === "reviews" && (
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300" />
                    )}
                </button>
            </div>

            {/* Content */}
            <div className="text-muted-foreground leading-relaxed">
                {activeTab === "description" ? (
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Product Details</h3>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <ul className="list-disc list-inside space-y-2 pl-4 marker:text-primary">
                            <li>100% Organic ingredients</li>
                            <li>Sustainably sourced</li>
                            <li>Gluten-free and vegan option available</li>
                            <li>Perfect for daily consumption</li>
                        </ul>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground mb-4">Customer Reviews</h3>

                        {/* Review List */}
                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-secondary/10 p-4 rounded-xl">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                                {review.name.charAt(0)}
                                            </div>
                                            <span className="font-semibold text-foreground">{review.name}</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">{review.date}</span>
                                    </div>
                                    <div className="flex text-yellow-500 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`h-3 w-3 ${i < review.rating ? "fill-current" : "text-gray-300"}`} />
                                        ))}
                                    </div>
                                    <p className="text-sm">{review.comment}</p>
                                </div>
                            ))}
                        </div>

                        {/* Add Review Form (Placeholder) */}
                        <div className="border-t pt-6 mt-6">
                            <h4 className="font-semibold text-foreground mb-4">Write a Review</h4>
                            <div className="space-y-4">
                                <div className="flex gap-1 text-gray-300 hover:text-yellow-400 cursor-pointer w-fit">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5" />
                                    ))}
                                </div>
                                <textarea
                                    className="w-full min-h-[100px] p-3 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                                    placeholder="Share your thoughts about this product..."
                                />
                                <Button>Submit Review</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
