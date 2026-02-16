"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, KeyRound } from "lucide-react";

export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center py-20 px-4">
            {/* Decorative Background Elements */}
            <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[100px] -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-[480px] bg-white rounded-2xl border shadow-xl p-8 md:p-12 relative z-10 text-center"
            >
                <div className="text-center mb-10">
                    <Link href="/" className="inline-block text-3xl font-black text-primary mb-6 tracking-tighter hover:opacity-80 transition-opacity">
                        E-Shop
                    </Link>
                    <h1 className="text-2xl font-bold text-foreground mb-2">Setup New Password</h1>
                    <p className="text-sm text-muted-foreground">
                        Please create a strong password for your account.
                    </p>
                </div>

                <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground/80 pl-1">New Password</label>
                            <div className="relative">
                                <Input
                                    type="password"
                                    placeholder="New Password"
                                    className="h-12 border-secondary focus:border-primary transition-all px-4 bg-secondary/5 pr-10"
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                                    <Eye className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground/80 pl-1">Confirm Password</label>
                            <div className="relative">
                                <Input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="h-12 border-secondary focus:border-primary transition-all px-4 bg-secondary/5 pr-10"
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                                    <Eye className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 uppercase tracking-widest">
                        Reset Password
                    </Button>
                </form>
            </motion.div>
        </div>
    );
}
