"use client";

import { UserSidebar } from "@/components/layout/UserSidebar";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Header Area */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 mb-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        My Account
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <UserSidebar />

                    {/* Main Content */}
                    <div className="flex-1 bg-white rounded-2xl border shadow-sm p-8 min-h-[500px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
