"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck } from "lucide-react";

export default function TrackOrderPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
            <div className="bg-secondary/30 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Truck className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-4">Track Order</h1>
                    <p className="text-muted-foreground max-w-xl mx-auto font-medium">
                        Enter your order ID and the email address used during purchase to track the status of your order.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto bg-white rounded-2xl border p-8 md:p-10 shadow-lg">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground ml-1">Order ID</label>
                                <Input
                                    placeholder="e.g. #ORD-12345"
                                    className="h-12 border-secondary focus:border-primary transition-all px-4 bg-secondary/5"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground ml-1">Billing Email</label>
                                <Input
                                    type="email"
                                    placeholder="Email address you used during checkout"
                                    className="h-12 border-secondary focus:border-primary transition-all px-4 bg-secondary/5"
                                />
                            </div>
                        </div>

                        <Button className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 uppercase tracking-widest">
                            Track Status
                        </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t text-center">
                        <p className="text-sm text-muted-foreground">
                            Order ID can be found in your order confirmation email.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
