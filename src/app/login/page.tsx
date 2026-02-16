"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { data, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (authError) {
            setError(authError.message);
            setLoading(false);
            return;
        }

        // Check user role for redirection
        const { data: profile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', data.user.id)
            .single();

        if (profile?.role === 'admin') {
            router.push("/admin");
        } else {
            router.push("/");
        }
        router.refresh(); // Refresh to update server components
    };

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

                    <form className="space-y-5" onSubmit={handleLogin}>
                        {error && (
                            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold p-4 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                                <Input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="demo@demo.com"
                                    className="h-12 border-gray-200 focus:border-primary focus:ring-0 transition-all bg-white font-medium"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                                <Input
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    className="h-12 border-gray-200 focus:border-primary focus:ring-0 transition-all bg-white font-medium"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="hidden" />
                                <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-primary transition-colors flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-sm bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
                                </div>
                                <span className="text-sm text-gray-500 font-medium">Remember Me</span>
                            </label>
                            <Link href="/forgot-password" title="Forgot Password" className="text-sm text-primary font-bold hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            disabled={loading}
                            className="w-full h-12 text-sm font-black bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 uppercase tracking-[0.2em] transition-all transform active:scale-[0.98]"
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
