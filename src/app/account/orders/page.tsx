"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag, Package } from "lucide-react";

const orders = [
    { id: "#ORD-12345", date: "Oct 24, 2024", total: 156.00, status: "Delivered", items: 3 },
    { id: "#ORD-12344", date: "Oct 20, 2024", total: 45.50, status: "Processing", items: 1 },
    { id: "#ORD-12343", date: "Oct 15, 2024", total: 210.20, status: "Delivered", items: 5 },
];

export default function OrdersPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-1">My Orders</h2>
                <p className="text-muted-foreground">Check the status of your orders and view order details.</p>
            </div>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                                    <Package className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold">{order.id}</h4>
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${order.status === "Delivered"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-blue-100 text-blue-700"
                                            }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Placed on {order.date}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Total</p>
                                    <p className="font-bold">${order.total.toFixed(2)}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">Items</p>
                                    <p className="font-bold">{order.items}</p>
                                </div>
                                <Button variant="outline" size="sm">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {orders.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed rounded-2xl">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">No orders yet</h3>
                    <p className="text-muted-foreground mb-6">Start shopping to see your orders here.</p>
                    <Button>Shop Now</Button>
                </div>
            )}
        </div>
    );
}
