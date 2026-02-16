# Developer Guide - E-Shop

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

### Installation Steps
```bash
# 1. Clone the repository
git clone <your-repo-url>
cd ecomerse

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

---

## 📁 Project Structure

```
ecomerse/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── products/          # Products pages
│   │   │   ├── page.tsx       # Product listing
│   │   │   └── [id]/          # Dynamic product details
│   │   ├── cart/              # Shopping cart
│   │   ├── checkout/          # Checkout flow
│   │   ├── wishlist/          # Wishlist page
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   │
│   ├── components/
│   │   ├── ui/                # Base UI components
│   │   │   ├── button.tsx
│   │   │   └── input.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/              # Home page components
│   │   ├── products/          # Product components
│   │   ├── cart/              # Cart components
│   │   └── checkout/          # Checkout components
│   │
│   └── lib/
│       └── utils.ts           # Utility functions
│
├── public/                     # Static assets
├── .env.example               # Environment variables template
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind CSS config
├── next.config.ts             # Next.js config
├── README.md                  # Project overview
└── FEATURES.md                # Detailed features

```

---

## 🛠️ Development Workflow

### Adding a New Page

1. **Create page file**:
```bash
# Example: Create a new "Blog" page
touch src/app/blog/page.tsx
```

2. **Implement the page**:
```tsx
export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      {/* Your content */}
    </div>
  );
}
```

3. **Add navigation link**:
Update `src/components/layout/Header.tsx` to include the new link.

---

### Creating a New Component

1. **Create component file**:
```bash
# Example: Create a ProductBadge component
touch src/components/products/ProductBadge.tsx
```

2. **Implement the component**:
```tsx
"use client";

interface ProductBadgeProps {
  label: string;
  variant?: "sale" | "new" | "featured";
}

export const ProductBadge = ({ label, variant = "sale" }: ProductBadgeProps) => {
  return (
    <span className={`badge badge-${variant}`}>
      {label}
    </span>
  );
};
```

3. **Export and use**:
```tsx
import { ProductBadge } from "@/components/products/ProductBadge";

// Use in your component
<ProductBadge label="Sale" variant="sale" />
```

---

## 🎨 Styling Guidelines

### Using Tailwind CSS
```tsx
// ✅ Good - Utility classes
<div className="flex items-center gap-4 p-6 rounded-lg bg-white shadow-sm">

// ❌ Avoid - Inline styles
<div style={{ display: 'flex', padding: '24px' }}>
```

### Custom Utilities
Use the `cn()` utility for conditional classes:
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" && "primary-class"
)}>
```

### Color System
```tsx
// Use CSS variables from globals.css
className="bg-primary text-primary-foreground"
className="bg-secondary text-secondary-foreground"
className="text-muted-foreground"
```

---

## 📦 State Management

### Local State (Current)
```tsx
"use client";
import { useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Future: Global State with Zustand
```typescript
// stores/cart.ts
import { create } from 'zustand';

interface CartStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addItem: (product) => set((state) => ({ 
    items: [...state.items, product] 
  })),
  removeItem: (id) => set((state) => ({ 
    items: state.items.filter(item => item.id !== id) 
  })),
}));
```

---

## 🔧 Common Tasks

### Adding a New Product
```tsx
// Update sampleProducts in ProductCard.tsx
export const sampleProducts: Product[] = [
  // ... existing products
  { 
    id: 13, 
    name: "New Product", 
    price: 29.99, 
    oldPrice: 39.99, 
    rating: 5, 
    image: "bg-purple-50", 
    label: "New" 
  },
];
```

### Updating Navigation
```tsx
// src/components/layout/Header.tsx
<nav>
  <Link href="/new-page">New Page</Link>
</nav>
```

### Adding Form Validation
```tsx
const [errors, setErrors] = useState<Record<string, string>>({});

const validate = () => {
  const newErrors: Record<string, string> = {};
  
  if (!formData.email) {
    newErrors.email = "Email is required";
  }
  
  if (!formData.email.includes("@")) {
    newErrors.email = "Invalid email format";
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

---

## 🧪 Testing (Future)

### Unit Tests
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

### Example Test
```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

## 🐛 Debugging

### Common Issues

**Issue**: "Module not found"
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**Issue**: TypeScript errors
```bash
# Solution: Check types
npm run type-check
```

**Issue**: Styling not applying
```bash
# Solution: Restart dev server
# Press Ctrl+C, then npm run dev
```

---

## 📝 Code Style

### TypeScript
```tsx
// ✅ Good - Explicit types
interface Props {
  title: string;
  count: number;
}

// ❌ Avoid - any type
const data: any = fetchData();
```

### Component Structure
```tsx
"use client"; // If using hooks/state

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MyComponentProps {
  title: string;
}

export const MyComponent = ({ title }: MyComponentProps) => {
  const [state, setState] = useState(false);
  
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={() => setState(!state)}>
        Toggle
      </Button>
    </div>
  );
};
```

---

## 🔗 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

## 💡 Tips & Best Practices

1. **Always use TypeScript types** - Avoid `any`
2. **Keep components small** - Single responsibility
3. **Reuse components** - DRY principle
4. **Use semantic HTML** - Better accessibility
5. **Mobile-first design** - Start with mobile, scale up
6. **Optimize images** - Use Next.js Image component (future)
7. **Test responsiveness** - Check all breakpoints
8. **Comment complex logic** - Help future developers
9. **Use meaningful names** - Clear variable/function names
10. **Keep dependencies updated** - Regular maintenance

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request
5. Wait for review

---

## 📞 Support

For questions or issues:
- Check FEATURES.md for detailed documentation
- Review existing code for examples
- Open an issue on GitHub

---

Happy coding! 🎉
