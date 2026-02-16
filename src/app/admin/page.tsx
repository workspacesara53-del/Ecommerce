"use client";

import React from "react";
import {
    Users,
    ShoppingBag,
    ShoppingCart,
    Layers,
    Plus,
    Search,
    Star,
    Edit,
    Trash2,
    Eye,
    TrendingUp,
    ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
    { label: "Total Users", value: "3209", icon: Users, color: "bg-[#10b981]", iconBg: "bg-white/20" },
    { label: "Total Orders", value: "837", icon: ShoppingCart, color: "bg-[#3b82f6]", iconBg: "bg-white/20" },
    { label: "Total Products", value: "50", icon: ShoppingBag, color: "bg-[#6366f1]", iconBg: "bg-white/20" },
    { label: "Total Category", value: "8", icon: Layers, color: "bg-[#f43f5e]", iconBg: "bg-white/20" },
];

const products = [
    { id: 1, name: "Surf Excel Matic Front Load Liquid", brand: "Surf Excel", category: "Groceries", price: 199.00, oldPrice: 220.00, sales: 5, stock: 7489, rating: 4 },
    { id: 2, name: "Saffola Gold Pro Healthy Lifestyle", brand: "Saffola", category: "Groceries", price: 235.00, oldPrice: 245.00, sales: 2, stock: 14583, rating: 5 },
    { id: 3, name: "Good Life Refined Rice Bran Oil", brand: "Good Life", category: "Groceries", price: 300.00, oldPrice: 320.00, sales: 2, stock: 47652, rating: 3 },
    { id: 4, name: "Lays American Style Cream & Onion", brand: "Lays", category: "Groceries", price: 45.00, oldPrice: 55.00, sales: 15, stock: 74852, rating: 5 },
    { id: 5, name: "Gemini Refined Sunflower Oil", brand: "Gemini", category: "Groceries", price: 180.00, oldPrice: 199.00, sales: 27, stock: 4775, rating: 4 },
];

const recentUsers = [
    { id: 1, name: "Digivister DEV 2", email: "**********", phone: "**********", created: "2023-09-24" },
    { id: 2, name: "Sufiyan Malik", email: "**********", phone: "**********", created: "2023-09-24" },
    { id: 3, name: "Sadaad", email: "**********", phone: "**********", created: "2023-09-24" },
    { id: 4, name: "Areeba", email: "**********", phone: "**********", created: "2023-09-24" },
    { id: 5, name: "Rahul", email: "**********", phone: "**********", created: "2023-09-24" },
];

const chartData = [30, 45, 35, 60, 55, 40, 50, 45, 30, 25, 20];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

export default function AdminDashboard() {
    return (
        <div className="space-y-8 pb-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <p className="text-sm text-muted-foreground mt-1">Welcome back, here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white border-primary/20 text-primary hover:bg-primary/5">
                        Download Report
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                        <Plus className="h-4 w-4 mr-2" /> Add Product
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${stat.color} rounded-2xl p-6 text-white relative overflow-hidden group transition-all hover:scale-[1.02] hover:shadow-xl`}
                        >
                            <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                                    <h3 className="text-3xl font-bold mt-1 tracking-tight">{stat.value}</h3>
                                </div>
                                <div className={`${stat.iconBg} p-3 rounded-xl`}>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm font-medium text-white/90">
                                <TrendingUp className="h-4 w-4 mr-1" />
                                <span>+12.5%</span>
                                <span className="ml-1 text-white/60">from last month</span>
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Main Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Products Table Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border shadow-sm flex flex-col min-h-[500px]">
                        <div className="p-6 border-b flex items-center justify-between">
                            <h2 className="text-xl font-bold">Products</h2>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="bg-secondary/20 border-none rounded-lg py-1.5 pl-9 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary outline-none"
                                    />
                                </div>
                                <Button className="bg-[#10b981] hover:bg-[#059669]">ADD PRODUCT</Button>
                            </div>
                        </div>
                        <div className="overflow-x-auto flex-1">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-secondary/20 text-muted-foreground font-bold uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4">Product</th>
                                        <th className="px-4 py-4">Category</th>
                                        <th className="px-4 py-4">Price</th>
                                        <th className="px-4 py-4">Sales</th>
                                        <th className="px-4 py-4">Stock</th>
                                        <th className="px-4 py-4">Rating</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {products.map((product) => (
                                        <tr key={product.id} className="hover:bg-secondary/5 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-secondary/30 flex-shrink-0"></div>
                                                    <div className="max-w-[180px]">
                                                        <p className="font-bold truncate" title={product.name}>{product.name}</p>
                                                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">{product.brand}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 font-medium text-muted-foreground">{product.category}</td>
                                            <td className="px-4 py-4">
                                                <div className="font-bold text-primary">${product.price.toFixed(2)}</div>
                                                <div className="text-[10px] text-muted-foreground line-through decoration-destructive/50">${product.oldPrice.toFixed(2)}</div>
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className="font-bold">{product.sales}</span>
                                                <span className="text-[10px] text-muted-foreground ml-1 uppercase">sale</span>
                                            </td>
                                            <td className="px-4 py-4 font-bold text-blue-600">{product.stock}</td>
                                            <td className="px-4 py-4">
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={cn("h-3 w-3", i < product.rating ? "fill-orange-400 text-orange-400" : "text-muted-foreground/30")} />
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-1.5 rounded-lg hover:bg-primary/10 text-primary transition-colors"><Edit className="h-4 w-4" /></button>
                                                    <button className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-500 transition-colors"><Eye className="h-4 w-4" /></button>
                                                    <button className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors"><Trash2 className="h-4 w-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t flex items-center justify-between text-xs text-muted-foreground font-medium">
                            <span>Rows per page: 50</span>
                            <div className="flex items-center gap-4">
                                <span>1-50 of 50</span>
                                <div className="flex gap-4">
                                    <button className="opacity-50 cursor-not-allowed">←</button>
                                    <button className="opacity-50 cursor-not-allowed">→</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="bg-white rounded-2xl border shadow-sm p-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold">Total Users & Total Sales</h2>
                            <div className="flex items-center gap-4 text-xs font-bold">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                                    <span className="text-muted-foreground uppercase">Total Users</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                                    <span className="text-muted-foreground uppercase">Total Sales</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[250px] w-full flex items-end justify-between px-4 pb-6 pt-2 relative">
                            {/* Y-axis markers */}
                            <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] text-muted-foreground/50 font-bold -translate-x-full pr-4">
                                <span>600</span>
                                <span>450</span>
                                <span>300</span>
                                <span>150</span>
                                <span>0</span>
                            </div>
                            {chartData.map((val, idx) => (
                                <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                                    <div className="relative w-full flex justify-center items-end h-full gap-0.5">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${val}%` }}
                                            transition={{ duration: 1, delay: idx * 0.05 }}
                                            className="w-4 sm:w-6 bg-primary rounded-t-sm relative group cursor-pointer"
                                        >
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {val * 10} Users
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${val * 0.7}%` }}
                                            transition={{ duration: 1, delay: (idx * 0.05) + 0.1 }}
                                            className="w-4 sm:w-6 bg-[#10b981] rounded-t-sm relative group cursor-pointer opacity-80"
                                        >
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${val * 8} Sales
                                            </div>
                                        </motion.div>
                                    </div>
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">{months[idx]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Users Table Section */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border shadow-sm flex flex-col h-full">
                        <div className="p-6 border-b flex items-center justify-between">
                            <h2 className="text-xl font-bold">Users List</h2>
                            <button className="p-2 bg-secondary/20 rounded-lg hover:bg-secondary/40 transition-colors">
                                <Search className="h-4 w-4 text-muted-foreground" />
                            </button>
                        </div>
                        <div className="overflow-x-auto flex-1">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-secondary/20 text-muted-foreground font-bold uppercase text-[10px] tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4">User</th>
                                        <th className="px-4 py-4">Created</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-xs">
                                    {recentUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-secondary/5 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold">{user.name}</p>
                                                        <p className="text-[10px] text-muted-foreground">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-muted-foreground font-medium">{user.created}</td>
                                            <td className="px-6 py-4 text-right">
                                                <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold uppercase text-destructive border-destructive/20 hover:bg-destructive/10 hover:border-destructive transition-all">
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t flex items-center justify-between text-xs text-muted-foreground font-medium">
                            <div className="flex items-center gap-2">
                                <span>Rows per page:</span>
                                <select className="bg-transparent font-bold">
                                    <option>25</option>
                                    <option>50</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-3">
                                <span>1-25 of 3225</span>
                                <div className="flex gap-2">
                                    <button className="opacity-50">←</button>
                                    <button className="hover:text-primary">→</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Mini Cards */}
                    <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-primary">Conversion Rate</h3>
                            <div className="p-1 px-2 rounded-full bg-green-500/10 text-green-600 text-[10px] font-black uppercase">
                                +5.2%
                            </div>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black tracking-tighter">64.8%</span>
                            <span className="text-xs text-muted-foreground font-medium">Average conversion</span>
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
