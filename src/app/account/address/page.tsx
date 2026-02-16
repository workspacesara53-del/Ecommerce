"use client";

import { Button } from "@/components/ui/button";
import { MoreVertical, Plus } from "lucide-react";

export default function AddressPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6">
                <div>
                    <h2 className="text-2xl font-bold">Address</h2>
                    <p className="text-sm text-muted-foreground mt-1">Manage Your Addresses</p>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 h-10 px-6 font-semibold transition-all">
                    Add Address
                </Button>
            </div>

            <div className="space-y-4">
                {[
                    { tag: "Home", name: "JHON DOE", phone: "+1 555-0123", address: "123 Market St, Suite 456, San Francisco, CA 94103, USA" },
                    { tag: "Office", name: "JHON DOE", phone: "+1 555-4567", address: "456 Tech Blvd, Floor 12, Silicon Valley, CA 94025, USA" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white border rounded-xl p-5 hover:shadow-md transition-shadow group relative">
                        <div className="flex justify-between items-start mb-3">
                            <span className="px-3 py-1 bg-secondary/30 text-muted-foreground text-[10px] font-bold rounded uppercase tracking-wider">
                                {item.tag}
                            </span>
                            <button className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-full hover:bg-secondary/50">
                                <MoreVertical className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="space-y-1">
                            <div className="flex flex-wrap items-baseline gap-2">
                                <h4 className="font-bold text-base">{item.name}</h4>
                                <span className="text-foreground/80 font-bold text-sm tracking-tight">{item.phone}</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                                {item.address}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder for when no addresses - optional but good for complete feel */}
            <div className="hidden border-2 border-dashed rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-1">No Address Found</h3>
                <p className="text-sm text-muted-foreground mb-6">Added addresses will appear here</p>
                <Button>Add New Address</Button>
            </div>
        </div>
    );
}
