"use client";

import React from "react";
import {
    Users,
    Search,
    MoreVertical,
    UserPlus,
    Filter,
    ArrowUpDown,
    Mail,
    Phone,
    MapPin,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Ban,
    Edit3
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const users = [
    { id: 1, name: "Digivister DEV 2", email: "digivister@gmail.com", phone: "+91 9876543210", created: "2023-09-24", orders: 12, status: "Active" },
    { id: 2, name: "Sufiyan Malik", email: "sufiyan.malik@outlook.com", phone: "+91 1234567890", created: "2023-10-12", orders: 5, status: "Active" },
    { id: 3, name: "Sadaad", email: "sadaad.ahmed@yahoo.com", phone: "+91 9988776655", created: "2023-11-05", orders: 1, status: "Inactive" },
    { id: 4, name: "Areeba", email: "areeba.khan@protonmail.com", phone: "+91 7766554433", created: "2024-01-20", orders: 24, status: "Active" },
    { id: 5, name: "Rahul Sharma", email: "rahul.sharma@gmail.com", phone: "+91 8877665544", created: "2024-02-14", orders: 0, status: "Blocked" },
];

export default function AdminUsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Users Management</h1>
                    <p className="text-sm text-muted-foreground mt-1">View and manage all registered customers on your platform.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white">
                        Export CSV
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                        <UserPlus className="h-4 w-4 mr-2" /> Add New User
                    </Button>
                </div>
            </div>

            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                    { label: "Active Customers", value: "2,450", color: "text-green-600", bg: "bg-green-50" },
                    { label: "New Users (This Week)", value: "128", color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Blocked Accounts", value: "14", color: "text-red-600", bg: "bg-red-50" },
                ].map((stat, idx) => (
                    <div key={idx} className={`${stat.bg} ${stat.color} rounded-2xl p-6 border border-current/10 shadow-sm`}>
                        <p className="text-xs font-black uppercase tracking-widest opacity-70">{stat.label}</p>
                        <h3 className="text-3xl font-black mt-1">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                {/* Search & Filter */}
                <div className="p-6 border-b flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary/5">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name, email or phone..."
                            className="w-full bg-white border rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary outline-none shadow-sm"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="bg-white rounded-xl h-10 border-secondary">
                            <Filter className="h-4 w-4 mr-2" /> Filter
                        </Button>
                        <select className="bg-white border text-sm font-bold rounded-xl px-4 h-10 outline-none focus:ring-1 focus:ring-primary shadow-sm">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Blocked</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/20 text-muted-foreground font-black uppercase text-[10px] tracking-widest border-b">
                            <tr>
                                <th className="px-6 py-5">User Profile</th>
                                <th className="px-4 py-5">Contact Info</th>
                                <th className="px-4 py-5">
                                    <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
                                        Joined Date <ArrowUpDown className="h-3 w-3" />
                                    </div>
                                </th>
                                <th className="px-4 py-5 text-center">Total Orders</th>
                                <th className="px-4 py-5">Status</th>
                                <th className="px-6 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {users.map((user, idx) => (
                                <motion.tr
                                    key={user.id}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="hover:bg-secondary/5 transition-colors group"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-primary text-xl shadow-inner border border-primary/20">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-foreground text-base group-hover:text-primary transition-colors">{user.name}</p>
                                                <p className="text-[11px] text-muted-foreground font-medium flex items-center gap-1">
                                                    <Mail className="h-3 w-3" /> {user.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <p className="font-bold text-muted-foreground flex items-center gap-1.5">
                                            <Phone className="h-3.5 w-3.5" /> {user.phone}
                                        </p>
                                    </td>
                                    <td className="px-4 py-4 font-bold text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-3.5 w-3.5 opacity-50" />
                                            {user.created}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/40 font-black text-foreground">
                                            {user.orders}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className={cn(
                                            "inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm",
                                            user.status === "Active" ? "bg-green-100 text-green-700 border-green-200" :
                                                user.status === "Blocked" ? "bg-red-100 text-red-700 border-red-200" :
                                                    "bg-gray-100 text-gray-700 border-gray-200"
                                        )}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button title="Edit User" className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                                <Edit3 className="h-4 w-4" />
                                            </button>
                                            <button title="Block User" className="p-2 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white transition-all shadow-sm">
                                                <Ban className="h-4 w-4" />
                                            </button>
                                            <button className="p-2 rounded-xl hover:bg-secondary/40 transition-colors">
                                                <MoreVertical className="h-4 w-4 text-muted-foreground" />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span>Entries:</span>
                            <select className="bg-secondary/20 rounded px-2 py-1 outline-none text-primary cursor-pointer">
                                <option>10</option>
                                <option>25</option>
                                <option selected>50</option>
                            </select>
                        </div>
                        <span className="opacity-60 text-[10px]">Page 1 of 65</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-3 rounded-xl bg-secondary/20 hover:bg-primary/10 transition-colors group">
                            <ChevronLeft className="h-4 w-4 group-hover:text-primary" />
                        </button>
                        {[1, 2, 3, "...", 65].map((p, i) => (
                            <button key={i} className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                                p === 1 ? "bg-primary text-white shadow-lg shadow-primary/20 border-2 border-primary" : "hover:bg-primary/5 hover:text-primary border border-transparent hover:border-primary/20"
                            )}>
                                {p}
                            </button>
                        ))}
                        <button className="p-3 rounded-xl bg-secondary/20 hover:bg-primary/10 transition-colors group">
                            <ChevronRight className="h-4 w-4 group-hover:text-primary" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
