"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    return (
        <div className="space-y-12">
            {/* Profile Information Section */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold">My Profile</h2>
                        <p className="text-sm text-muted-foreground mt-1">All your personal information is safe with us.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Full Name</label>
                        <Input defaultValue="Jhon Doe" className="h-12 border-secondary focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Email</label>
                        <Input defaultValue="jhon.doe@example.com" disabled className="h-12 bg-secondary/20 cursor-not-allowed opacity-70" />
                        <p className="text-[10px] text-muted-foreground italic pl-1">* Email address cannot be changed</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-semibold text-foreground">Phone Number</label>
                        <div className="flex gap-2">
                            <div className="w-20 border rounded-md flex items-center justify-center bg-secondary/10 text-xs font-bold">🇺🇸 +1</div>
                            <Input defaultValue="555-0123" className="h-12 border-secondary focus:border-primary transition-colors flex-1" />
                        </div>
                    </div>
                </div>

                <Button className="h-12 px-8 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                    Update Profile
                </Button>
            </div>

            {/* Change Password Section */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold">Change Password</h2>
                    <p className="text-sm text-muted-foreground mt-1">Keep your account secure by updating your password periodically.</p>
                </div>

                <div className="space-y-6 max-w-2xl">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Old Password</label>
                        <Input type="password" placeholder="••••••••" className="h-12 border-secondary focus:border-primary transition-colors" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">New Password</label>
                            <Input type="password" placeholder="••••••••" className="h-12 border-secondary focus:border-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">Confirm Password</label>
                            <Input type="password" placeholder="••••••••" className="h-12 border-secondary focus:border-primary transition-colors" />
                        </div>
                    </div>

                    <div className="pt-2">
                        <Button className="h-12 px-8 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                            Change Password
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
