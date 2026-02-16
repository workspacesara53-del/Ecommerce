import { Truck, ShieldCheck, Headphones, CreditCard, Users, Award, Target } from "lucide-react";

export default function AboutPage() {
    const features = [
        {
            icon: Truck,
            title: "Free Shipping",
            description: "On orders over $50",
        },
        {
            icon: ShieldCheck,
            title: "Secure Payment",
            description: "100% secure transactions",
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Dedicated customer service",
        },
        {
            icon: CreditCard,
            title: "Easy Returns",
            description: "30-day return policy",
        },
    ];

    const stats = [
        { value: "10K+", label: "Happy Customers" },
        { value: "5K+", label: "Products" },
        { value: "50+", label: "Categories" },
        { value: "99%", label: "Satisfaction Rate" },
    ];

    const values = [
        {
            icon: Users,
            title: "Customer First",
            description: "We prioritize our customers' needs and satisfaction above all else.",
        },
        {
            icon: Award,
            title: "Quality Products",
            description: "We source only the highest quality products from trusted suppliers.",
        },
        {
            icon: Target,
            title: "Innovation",
            description: "We continuously improve our platform to provide the best shopping experience.",
        },
    ];

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        About E-Shop
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Your trusted online marketplace for quality products at unbeatable prices.
                        We&apos;re committed to making online shopping easy, secure, and enjoyable.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-white border-y">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="text-center p-6 rounded-xl bg-white border hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="py-20 bg-secondary/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div key={idx} className="bg-white p-8 rounded-xl border">
                                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Founded in 2024, E-Shop started with a simple mission: to make quality products
                                accessible to everyone at fair prices. What began as a small online store has grown
                                into a trusted marketplace serving thousands of happy customers.
                            </p>
                            <p>
                                We believe that shopping should be convenient, secure, and enjoyable. That&apos;s why
                                we&apos;ve built a platform that combines the best products with exceptional customer
                                service and cutting-edge technology.
                            </p>
                            <p>
                                Today, we continue to expand our product range and improve our services, always
                                keeping our customers at the heart of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
