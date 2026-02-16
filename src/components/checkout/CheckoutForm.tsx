"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, CreditCard, Truck, ShieldCheck } from "lucide-react";

interface CheckoutFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export const CheckoutForm = ({ onSubmit }: { onSubmit: (data: CheckoutFormData) => void }) => {
    const [formData, setFormData] = useState<CheckoutFormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "United States",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipping Address Section */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">Shipping Address</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">First Name *</label>
                        <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            required
                            className="h-11"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">Last Name *</label>
                        <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
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
                            placeholder="john.doe@example.com"
                            required
                            className="h-11"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
                        <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            required
                            className="h-11"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-sm font-medium mb-1.5 block">Street Address *</label>
                        <Input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="123 Main Street, Apt 4B"
                            required
                            className="h-11"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">City *</label>
                        <Input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="New York"
                            required
                            className="h-11"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">State / Province *</label>
                        <Input
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="NY"
                            required
                            className="h-11"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">ZIP / Postal Code *</label>
                        <Input
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="10001"
                            required
                            className="h-11"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">Country *</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                            <option>Australia</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Payment Method Section */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">Payment Method</h2>
                </div>

                <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-primary bg-primary/5 rounded-lg cursor-pointer">
                        <input type="radio" name="payment" value="card" defaultChecked className="w-4 h-4" />
                        <CreditCard className="h-5 w-5 text-primary" />
                        <span className="font-medium">Credit / Debit Card</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                        <input type="radio" name="payment" value="paypal" className="w-4 h-4" />
                        <span className="font-medium">PayPal</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                        <input type="radio" name="payment" value="cod" className="w-4 h-4" />
                        <Truck className="h-5 w-5" />
                        <span className="font-medium">Cash on Delivery</span>
                    </label>
                </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                    <p className="font-medium text-green-900">Secure Checkout</p>
                    <p className="text-green-700">Your payment information is encrypted and secure.</p>
                </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25">
                Place Order
                <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
        </form>
    );
};
