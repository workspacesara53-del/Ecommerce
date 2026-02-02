"use client";

import Image from "next/image";
import { X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CartItemProps {
    id: number;
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    quantity: number;
    rating: number;
    onRemove: (id: number) => void;
}

export const CartItem = ({ item, onRemove }: { item: CartItemProps, onRemove: (id: number) => void }) => {
    const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 py-6 border-b last:border-0 hover:bg-secondary/5 transition-colors p-4 rounded-lg">
            {/* Product Image */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-secondary/20 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                <div className="text-4xl">📦</div>
                {/* <Image src={item.image} alt={item.name} fill className="object-cover" /> */}
            </div>

            {/* Product Details */}
            <div className="flex-1 text-center sm:text-left space-y-2 w-full">
                <h3 className="font-semibold text-lg line-clamp-2">{item.name}</h3>

                {/* Rating */}
                <div className="flex items-center justify-center sm:justify-start gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < item.rating ? "fill-current" : "text-gray-300"}`} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">(24)</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-3">
                    <span className="text-sm font-medium text-muted-foreground">QTY: <span className="text-foreground">{item.quantity}</span></span>
                    <div className="flex items-baseline gap-2">
                        <span className="font-bold text-primary text-lg">${item.price.toFixed(2)}</span>
                        <span className="text-sm text-muted-foreground line-through">${item.oldPrice.toFixed(2)}</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">{discount}% OFF</span>
                </div>
            </div>

            {/* Close Button */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove(item.id)}
                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 sm:self-start"
            >
                <X className="h-5 w-5" />
            </Button>
        </div>
    );
};
