-- 1. Insert Categories
INSERT INTO categories (name, slug, icon, description) VALUES
('Fruits & Vegetables', 'fruits-vegetables', '🍎', 'Fresh seasonal fruits and organic vegetables'),
('Snacks', 'snacks', '🍪', 'Tasty snacks and chips'),
('Dairy & Eggs', 'dairy-eggs', '🥛', 'Fresh milk, cheese and organic eggs'),
('Beverages', 'beverages', '🥤', 'Soft drinks, juices and coffee'),
('Bakery', 'bakery', '🥖', 'Freshly baked bread and pastries');

-- 2. Insert Home Slides
INSERT INTO slides (title, subtitle, image_url, order_index) VALUES
('Fresh Organic Vegetables', 'Save up to 30% off your first order', 'https://images.unsplash.com/photo-1542838132-92c53300491e', 1),
('Premium Meat & Poultry', 'High quality meat delivered home', 'https://images.unsplash.com/photo-1607623273573-599d00b036b6', 2);

-- 3. Insert Products
INSERT INTO products (name, description, price, old_price, discount_percent, stock_quantity, brand, is_featured, rating, images) VALUES
('Fresh Red Apples', 'Sweet and crunchy organic red apples.', 2.99, 3.99, 25, 100, 'NatureFarm', true, 5, ARRAY['https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6']),
('Whole Wheat Bread', 'Freshly baked whole wheat bread.', 1.50, 2.00, 25, 50, 'BakeryBest', true, 4, ARRAY['https://images.unsplash.com/photo-1509440159596-0249088772ff']),
('Organic Whole Milk', 'Rich and creamy organic whole milk.', 4.20, 5.00, 16, 200, 'DairyGold', true, 5, ARRAY['https://images.unsplash.com/photo-1550583724-125581f77833']),
('Mixed Salted Nuts', 'A healthy mix of roasted and salted nuts.', 8.99, 10.50, 14, 150, 'SnackWise', false, 4, ARRAY['https://images.unsplash.com/photo-1536591040330-8049f572714a']);
