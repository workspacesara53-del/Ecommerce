"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-secondary/10 rounded-xl overflow-hidden border">
                <div className="absolute inset-0 flex items-center justify-center text-9xl">
                    {/* Placeholder for real image */}
                    📦
                </div>
                {/* In real implementation: 
         <Image 
            src={images[selectedImage]} 
            alt="Product Image" 
            fill 
            className="object-cover" 
         /> 
         */}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={cn(
                            "relative w-20 h-20 flex-shrink-0 bg-secondary/10 rounded-lg overflow-hidden border-2 transition-all",
                            selectedImage === idx ? "border-primary" : "border-transparent hover:border-primary/50"
                        )}
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-2xl">
                            📦
                        </div>
                        {/* In real implementation: 
             <Image src={img} alt="Thumbnail" fill className="object-cover" /> 
             */}
                    </button>
                ))}
            </div>
        </div>
    );
};
