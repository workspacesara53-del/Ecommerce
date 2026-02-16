"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            content: "support@eshop.com",
            link: "mailto:support@eshop.com",
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+1 (555) 123-4567",
            link: "tel:+15551234567",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            content: "123 Commerce St, New York, NY 10001",
            link: "#",
        },
        {
            icon: Clock,
            title: "Working Hours",
            content: "Mon - Fri: 9AM - 6PM",
            link: "#",
        },
    ];

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a question or need assistance? We&apos;re here to help!
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, idx) => {
                        const Icon = info.icon;
                        return (
                            <a
                                key={idx}
                                href={info.link}
                                className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center group"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">{info.title}</h3>
                                <p className="text-sm text-muted-foreground">{info.content}</p>
                            </a>
                        );
                    })}
                </div>

                {/* Contact Form & Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white rounded-xl border p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                        {submitted && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                                ✓ Thank you! Your message has been sent successfully.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="text-sm font-medium mb-1.5 block">Your Name *</label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="h-11"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    className="h-11"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-1.5 block">Subject *</label>
                                <Input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    required
                                    className="h-11"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-1.5 block">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your inquiry..."
                                    required
                                    rows={5}
                                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-white rounded-xl border overflow-hidden shadow-sm">
                        <div className="h-full min-h-[500px] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                            <div className="text-center p-8">
                                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                                <p className="text-muted-foreground">
                                    123 Commerce Street
                                    <br />
                                    New York, NY 10001
                                    <br />
                                    United States
                                </p>
                                <Button variant="outline" className="mt-6">
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-secondary/10 rounded-xl p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div>
                            <h3 className="font-semibold mb-2">What are your shipping options?</h3>
                            <p className="text-sm text-muted-foreground">
                                We offer free standard shipping on orders over $50 and express shipping options.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">How can I track my order?</h3>
                            <p className="text-sm text-muted-foreground">
                                You&apos;ll receive a tracking number via email once your order ships.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">What is your return policy?</h3>
                            <p className="text-sm text-muted-foreground">
                                We offer a 30-day return policy for most items in original condition.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
                            <p className="text-sm text-muted-foreground">
                                Yes, we ship to most countries worldwide. Shipping costs vary by location.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
