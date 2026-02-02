# E-Commerce Platform

A modern, fully responsive e-commerce platform built with Next.js 16, TypeScript, and Tailwind CSS.

## 🌟 Features

### Implemented Pages
- ✅ **Home Page** (`/`) - Hero section, category carousel, featured products
- ✅ **Products Listing** (`/products`) - Grid view with filters, sorting, and pagination
- ✅ **Product Details** (`/products/[id]`) - Image gallery, reviews, related products
- ✅ **Shopping Cart** (`/cart`) - Cart management with totals summary

### Key Features
- 🎨 Modern, premium UI design with smooth animations (Framer Motion)
- 📱 Fully responsive (mobile-first approach)
- 🎯 Component-based architecture (DRY principle)
- ⚡ Fast performance with Next.js 16 (Turbopack)
- 🎭 Interactive hover effects and micro-animations
- 🔍 Product filtering and search capabilities
- ⭐ Product ratings and reviews system
- 🛒 Shopping cart functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ecomerse
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── products/          # Products pages
│   │   ├── page.tsx       # Products listing
│   │   └── [id]/page.tsx  # Product details
│   └── cart/              # Shopping cart
├── components/
│   ├── ui/                # Reusable UI components (Button, Input, etc.)
│   ├── layout/            # Layout components (Header, Footer)
│   ├── home/              # Home page components
│   ├── products/          # Product-related components
│   └── cart/              # Cart components
└── lib/
    └── utils.ts           # Utility functions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui patterns

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design Principles

- **Modern & Premium**: Vibrant colors, smooth gradients, and glassmorphism effects
- **User-Centric**: Intuitive navigation and clear call-to-actions
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🔄 Future Enhancements

- [ ] Checkout page
- [ ] User authentication
- [ ] Wishlist functionality
- [ ] Product search with autocomplete
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Payment integration
- [ ] Real backend API integration

## 📄 License

This project is for demonstration purposes.

---

Built with ❤️ using Next.js and TypeScript
