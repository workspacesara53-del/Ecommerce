export default function TermsPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
            <div className="bg-secondary/30 py-12 mb-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-foreground">Terms & Conditions</h1>
                    <p className="text-muted-foreground mt-2 font-medium">Agreement between you and E-Shop</p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl bg-white rounded-2xl border p-8 md:p-12 shadow-sm space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing and using this website, you agree to be bound by these Terms and Conditions.
                            If you do not agree with any part of these terms, you must not use our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Use of the Site</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You may use our site for lawful purposes only. You are prohibited from violating or attempting
                            to violate the security of the site, including accessing data not intended for you or
                            probing the vulnerability of the system.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Product Pricing & Availability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We strive to provide accurate pricing and product information. However, errors may occur.
                            We reserve the right to correct any errors and to change or update information at any time
                            without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Shipping & Delivery</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Delivery times are estimates and may vary depending on your location and other factors
                            beyond our control. We are not responsible for delays caused by shipping carriers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All content on this site, including text, graphics, logos, and images, is the property of
                            E-Shop and is protected by international copyright laws.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
