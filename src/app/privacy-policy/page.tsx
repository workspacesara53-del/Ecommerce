export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
            <div className="bg-secondary/30 py-12 mb-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
                    <p className="text-muted-foreground mt-2 font-medium">Last updated: October 2024</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl bg-white rounded-2xl border p-8 md:p-12 shadow-sm space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We collect information you provide directly to us, such as when you create an account,
                            place an order, or communicate with our customer support team. This may include your
                            name, email address, phone number, and shipping address.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                            <li>To process and fulfill your orders</li>
                            <li>To send you updates about your order status</li>
                            <li>To provide customer support</li>
                            <li>To send promotional emails (if you opt-in)</li>
                            <li>To improve our website and services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We take reasonable measures to protect your personal information from unauthorized access,
                            use, or disclosure. However, no method of transmission over the internet or electronic
                            storage is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use cookies and similar technologies to enhance your browsing experience, analyze
                            site traffic, and personalize content. You can disable cookies in your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at
                            <span className="text-primary font-bold"> support@e-shop.com</span>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
