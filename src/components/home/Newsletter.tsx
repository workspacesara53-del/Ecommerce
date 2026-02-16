"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Mail } from "lucide-react";
import { useState } from "react";

export const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 border-y">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="h-8 w-8 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Get the latest updates on new products and exclusive deals directly in your inbox.
                    </p>

                    {subscribed ? (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium">
                            ✓ Thank you for subscribing! Check your email for confirmation.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-12 flex-1"
                            />
                            <Button type="submit" size="lg" className="h-12 px-8 shadow-lg shadow-primary/25">
                                <Send className="mr-2 h-4 w-4" />
                                Subscribe
                            </Button>
                        </form>
                    )}

                    <p className="text-xs text-muted-foreground mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
};
