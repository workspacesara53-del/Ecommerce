"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag } from "lucide-react";

export default function LoginPage() {
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

                <div className="px-8 pb-10 pt-6">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-black text-gray-900 mb-2">Welcome Back!</h1>
                        <p className="text-gray-500 font-medium">Sign in with your credentials.</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <Button
                            variant="outline"
                            className="w-full h-12 border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-3 transition-all font-bold text-sm tracking-tight text-gray-700"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Sign in with Google
                        </Button>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                            <div className="relative flex justify-center text-[10px] uppercase">
                                <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or sign in with email</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                                <Input
                                    type="email"
                                    placeholder="demo@demo.com"
                                    className="h-12 border-gray-200 focus:border-primary focus:ring-0 transition-all bg-white font-medium"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                                <Input
                                    type="password"
                                    placeholder="********"
                                    className="h-12 border-gray-200 focus:border-primary focus:ring-0 transition-all bg-white font-medium"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-primary transition-colors flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-sm bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
                                </div>
                                <span className="text-sm text-gray-500 font-medium">Remember Me</span>
                            </label>
                            <Link href="/forgot-password" title="Forgot Password" className="text-sm text-primary font-bold hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        <Button className="w-full h-12 text-sm font-black bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 uppercase tracking-[0.2em] transition-all transform active:scale-[0.98]">
                            Login
                        </Button>

                        <div className="text-center pt-4">
                            <p className="text-sm text-gray-500 font-medium">
                                Don&apos;t have an account?{" "}
                                <Link href="/register" className="text-primary font-black hover:underline ml-1">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
