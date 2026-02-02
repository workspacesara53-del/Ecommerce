"use client";

import { use } from "react";
import Link from "next/link";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductTabs } from "@/components/products/ProductTabs";
import { ProductCard, sampleProducts } from "@/components/products/ProductCard";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const { id } = use(params);
    const productId = parseInt(id);
    const product = sampleProducts.find((p) => p.id === productId);

    // Fallback product if ID doesn't match sample data exactly for demo
    const displayProduct = product || sampleProducts[0];

    const images = [
        displayProduct.image,
        "bg-green-50",
        "bg-blue-50",
        "bg-yellow-50"
    ];

    return (
        <div className="bg-background min-h-screen pb-12">
            {/* Breadcrumb Area */}
            <div className="bg-secondary/30 py-6 mb-8 border-b">
                <div className="container mx-auto px-4">
                    <nav className="text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary cursor-pointer">Home</Link> /
                        <Link href="/products" className="hover:text-primary cursor-pointer mx-1">Products</Link> /
                        <span className="text-foreground font-medium ml-1">{displayProduct.name}</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column: Gallery */}
                    <ProductGallery images={images} />

                    {/* Right Column: Info */}
                    <ProductInfo product={displayProduct} />
                </div>

                {/* Tabs Section */}
                <div className="mb-16">
                    <ProductTabs />
                </div>

                {/* Related Products */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">Related Products</h2>
                        <Link href="/products" className="text-sm text-primary hover:underline">View All</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sampleProducts.slice(0, 4).map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
