"use client";

interface OrderItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface OrderSummaryProps {
    items: OrderItem[];
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
}

export const OrderSummary = ({ items, subtotal, shipping, tax, total }: OrderSummaryProps) => {
    return (
        <div className="bg-white rounded-xl border p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {/* Items List */}
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                        <div className={`relative w-16 h-16 ${item.image} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <span className="text-2xl">📦</span>
                            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {item.quantity}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                            <p className="text-sm font-bold text-primary mt-1">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-dashed">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-xl text-primary">${total.toFixed(2)}</span>
                </div>
            </div>

            {/* Promo Code */}
            <div className="mt-6 pt-6 border-t">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Promo code"
                        className="flex-1 h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <button className="px-4 h-10 bg-secondary hover:bg-secondary/80 rounded-md text-sm font-medium transition-colors">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};
