"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, MapPin, Heart, ShoppingBag, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { name: "My Profile", href: "/account/profile", icon: User },
    { name: "Address", href: "/account/address", icon: MapPin },
    { name: "My List", href: "/my-list", icon: Heart },
    { name: "My Orders", href: "/account/orders", icon: ShoppingBag },
];

export const UserSidebar = () => {
    const pathname = usePathname();

    return (
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden flex-shrink-0 w-full lg:w-72">
            {/* User Info */}
            <div className="p-6 bg-secondary/10 border-b flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative group">
                    <User className="w-10 h-10 text-primary" />
                    <button className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold">
                        CHANGE
                    </button>
                </div>
                <h3 className="font-bold text-lg">Jhon Doe</h3>
                <p className="text-xs text-muted-foreground">jhon.doe@example.com</p>
            </div>

            {/* Menu */}
            <nav className="p-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center justify-between p-3 rounded-xl transition-all group",
                                isActive
                                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 font-semibold"
                                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary")} />
                                <span>{item.name}</span>
                            </div>
                            <ChevronRight className={cn("h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100", isActive && "opacity-100")} />
                        </Link>
                    );
                })}

                <div className="my-2 border-t mx-2 opacity-50"></div>

                <button className="w-full flex items-center gap-3 p-3 rounded-xl transition-all text-destructive hover:bg-destructive/10">
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </nav>
        </div>
    );
};
