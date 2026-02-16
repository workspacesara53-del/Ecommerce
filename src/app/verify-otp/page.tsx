"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ShieldCheck } from "lucide-react";

export default function VerifyOtpPage() {
    return (
        <div className="min-h-screen bg-[#fcfcfc] relative overflow-hidden flex items-center justify-center py-12 px-4">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="polyPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 100 50 L 50 100 L 0 50 Z" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#polyPattern)" />
                </svg>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[500px] bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative z-10 overflow-hidden"
            >
                {/* Auth Header */}
                <div className="px-8 pt-8 pb-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <ShoppingBag className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">BoroBazar</span>
                    </Link>
                    <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <button className="hover:text-primary transition-colors">Help</button>
                        <button className="hover:text-primary transition-colors">English</button>
                    </div>
                </div>

                <div className="px-8 pb-12 pt-10 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-inner">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-black text-gray-900 mb-2">Verify OTP</h1>
                    <p className="text-sm text-gray-500 font-medium px-4 mb-8 leading-relaxed">
                        OTP sent to <span className="text-primary font-bold">jhon.doe@example.com</span>
                    </p>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex justify-center gap-3">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength={1}
                                    className="w-12 h-14 border-2 border-gray-100 rounded-xl text-center text-xl font-black focus:border-primary focus:ring-0 outline-none transition-all shadow-sm"
                                />
                            ))}
                        </div>

                        <Button className="w-full h-12 text-sm font-black bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 uppercase tracking-[0.2em] transition-all transform active:scale-[0.98]">
                            Verify OTP
                        </Button>

                        <div className="pt-2">
                            <p className="text-sm text-gray-500 font-medium">
                                Didn&apos;t receive code?{" "}
                                <button className="text-primary font-black hover:underline ml-1">
                                    Resend OTP
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
