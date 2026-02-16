"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Image,
    Layers,
    ShoppingBag,
    Users,
    ClipboardList,
    Flag,
    LogOut,
    ChevronDown,
    ChevronRight,
    Search,
    Bell
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/admin", color: "text-blue-500" },
    {
        title: "Home Slides",
        icon: Image,
        href: "/admin/slides",
        hasSubmenu: true,
        submenu: [
            { title: "Slides List", href: "/admin/slides" },
            { title: "Add Slide", href: "/admin/slides/add" },
        ]
    },
    {
        title: "Category",
        icon: Layers,
        href: "/admin/categories",
        hasSubmenu: true,
        submenu: [
            { title: "Categories List", href: "/admin/categories" },
            { title: "Add Category", href: "/admin/categories/add" },
        ]
    },
    {
        title: "Products",
        icon: ShoppingBag,
        href: "/admin/products",
        hasSubmenu: true,
        submenu: [
            { title: "Products List", href: "/admin/products" },
            { title: "Add Product", href: "/admin/products/add" },
        ]
    },
    { title: "Users", icon: Users, href: "/admin/users" },
    { title: "Orders", icon: ClipboardList, href: "/admin/orders" },
    { title: "Banners", icon: Flag, href: "/admin/banners" },
    { title: "Logout", icon: LogOut, href: "/login", isLogout: true },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [openMenus, setOpenMenus] = useState<string[]>(["Products"]);

    const toggleMenu = (title: string) => {
        setOpenMenus(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    return (
        <div className="flex min-h-screen bg-secondary/10">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r flex flex-col sticky top-0 h-screen overflow-y-auto">
                <div className="p-6 border-b flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <ShoppingBag className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-primary tracking-tighter">BoroBazar</span>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {sidebarLinks.map((link) => {
                        const Icon = link.icon;
                        const isSubmenuOpen = openMenus.includes(link.title);
                        const isActive = pathname === link.href || (link.submenu?.some(sub => pathname === sub.href));

                        return (
                            <div key={link.title}>
                                {link.hasSubmenu ? (
                                    <button
                                        onClick={() => toggleMenu(link.title)}
                                        className={cn(
                                            "w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group hover:bg-secondary/20",
                                            isActive ? "bg-primary/5 text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "group-hover:text-primary")} />
                                            <span className="font-semibold">{link.title}</span>
                                        </div>
                                        {isSubmenuOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group hover:bg-secondary/20",
                                            isActive && !link.isLogout ? "bg-primary/5 text-primary" : "text-muted-foreground",
                                            link.isLogout && "mt-10 hover:bg-destructive/10 hover:text-destructive"
                                        )}
                                    >
                                        <Icon className={cn("h-5 w-5", isActive && !link.isLogout ? "text-primary" : "group-hover:text-primary", link.isLogout && "group-hover:text-destructive")} />
                                        <span className="font-semibold">{link.title}</span>
                                    </Link>
                                )}

                                {link.hasSubmenu && isSubmenuOpen && (
                                    <div className="ml-9 mt-1 space-y-1">
                                        {link.submenu?.map((sub) => (
                                            <Link
                                                key={sub.title}
                                                href={sub.href}
                                                className={cn(
                                                    "block p-2 rounded-lg text-sm font-medium transition-colors hover:text-primary",
                                                    pathname === sub.href ? "text-primary" : "text-muted-foreground"
                                                )}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className={cn("w-1.5 h-1.5 rounded-full", pathname === sub.href ? "bg-primary" : "bg-muted-foreground/30")} />
                                                    {sub.title}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-20">
                    <div className="relative w-96 max-w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full bg-secondary/20 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-white"></span>
                        </Button>
                        <div className="flex items-center gap-3 border-l pl-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold">Admin User</p>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter text-primary">Super Admin</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-bold text-primary">
                                AD
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
