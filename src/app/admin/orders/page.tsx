"use client";

import React from "react";
import {
    ClipboardList,
    Search,
    Filter,
    Download,
    Eye,
    Package,
    Truck,
    CheckCircle2,
    Clock,
    XCircle,
    MoreHorizontal,
    ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const orders = [
    { id: "ORD-9842", customer: "Digivister DEV 2", date: "2024-02-12", amount: 156.00, status: "Delivered", method: "Mastercard" },
    { id: "ORD-9841", customer: "Sufiyan Malik", date: "2024-02-12", amount: 45.50, status: "Processing", method: "Cash on delivery" },
    { id: "ORD-9840", customer: "Areeba Khan", date: "2024-02-11", amount: 210.20, status: "Shipped", method: "Visa" },
    { id: "ORD-9839", customer: "John Doe", date: "2024-02-11", amount: 89.99, status: "Pending", method: "PayPal" },
    { id: "ORD-9838", customer: "Sarah Smith", date: "2024-02-10", amount: 120.00, status: "Cancelled", method: "Visa" },
    { id: "ORD-9837", customer: "Mike Johnson", date: "2024-02-10", amount: 315.40, status: "Delivered", method: "Mastercard" },
];

const getStatusStyles = (status: string) => {
    switch (status) {
        case "Delivered": return { bg: "bg-green-100", text: "text-green-700", border: "border-green-200", icon: CheckCircle2 };
        case "Processing": return { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200", icon: Clock };
        case "Shipped": return { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200", icon: Truck };
        case "Pending": return { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-200", icon: Clock };
        case "Cancelled": return { bg: "bg-red-100", text: "text-red-700", border: "border-red-200", icon: XCircle };
        default: return { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200", icon: Clock };
    }
};

export default function AdminOrdersPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Order History</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage, Track and Analyze all customer orders across the store.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white rounded-xl shadow-sm">
                        <Download className="h-4 w-4 mr-2" /> Export Orders
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-xl px-6">
                        Bulk Actions
                    </Button>
                </div>
            </div>

            {/* Order Stats Mini Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "New Orders", value: "24", icon: Package, color: "text-orange-600" },
                    { label: "Pending Ship", value: "12", icon: Clock, color: "text-blue-600" },
                    { label: "In Transit", value: "35", icon: Truck, color: "text-purple-600" },
                    { label: "Completed", value: "148", icon: CheckCircle2, color: "text-green-600" },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border shadow-sm flex items-center gap-4 group hover:border-primary/50 transition-colors">
                        <div className={cn("p-3 rounded-xl bg-secondary/20", stat.color)}>
                            <stat.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">{stat.label}</p>
                            <h4 className="text-xl font-black text-foreground">{stat.value}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden min-h-[500px] flex flex-col">
                {/* Search & Tabs */}
                <div className="p-6 border-b flex flex-wrap items-center justify-between gap-4">
                    <div className="flex bg-secondary/20 p-1 rounded-xl">
                        {["All", "Processing", "Shipped", "Delivered"].map((tab) => (
                            <button
                                key={tab}
                                className={cn(
                                    "px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-tighter transition-all",
                                    tab === "All" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search orders..."
                                className="bg-secondary/10 border-none rounded-xl py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary outline-none"
                            />
                        </div>
                        <Button variant="ghost" size="icon" className="border rounded-xl">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/10 text-muted-foreground font-black uppercase text-[10px] tracking-widest border-b">
                            <tr>
                                <th className="px-6 py-5">Order ID</th>
                                <th className="px-4 py-5">Customer</th>
                                <th className="px-4 py-5">Date</th>
                                <th className="px-4 py-5">Amount</th>
                                <th className="px-4 py-5">Status</th>
                                <th className="px-4 py-5">Payment</th>
                                <th className="px-6 py-5 text-right">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {orders.map((order, idx) => {
                                const status = getStatusStyles(order.status);
                                const StatusIcon = status.icon;
                                return (
                                    <motion.tr
                                        key={order.id}
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="hover:bg-secondary/5 transition-colors group cursor-pointer"
                                    >
                                        <td className="px-6 py-4">
                                            <span className="font-black text-primary bg-primary/5 px-2 py-1 rounded-lg border border-primary/10">#{order.id}</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs uppercase border">
                                                    {order.customer.charAt(0)}
                                                </div>
                                                <span className="font-bold text-foreground group-hover:text-primary transition-colors">{order.customer}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 font-bold text-muted-foreground">
                                            <div className="flex flex-col">
                                                <span>{order.date}</span>
                                                <span className="text-[10px] uppercase opacity-60">12:30 PM</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="text-base font-black text-foreground">${order.amount.toFixed(2)}</span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className={cn(
                                                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm",
                                                status.bg, status.text, status.border
                                            )}>
                                                <StatusIcon className="h-3 w-3" />
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-muted-foreground text-[11px] uppercase tracking-tighter">{order.method}</span>
                                                <span className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Paid</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                                <ArrowUpRight className="h-5 w-5" />
                                            </Button>
                                        </td>
                                    </motion.tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                    <span>Showing 6 of 1,250 Orders</span>
                    <div className="flex items-center gap-8">
                        <select className="bg-transparent font-black cursor-pointer">
                            <option>10 per page</option>
                            <option>20 per page</option>
                            <option>50 per page</option>
                        </select>
                        <div className="flex gap-4">
                            <button className="opacity-50 hover:text-primary transition-colors">Previous</button>
                            <button className="hover:text-primary transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
