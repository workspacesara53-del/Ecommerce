-- 1. Refine Product Policies (Only Admin can Insert, Update, Delete)
DROP POLICY IF EXISTS "Allow public read on categories" ON categories;
DROP POLICY IF EXISTS "Allow public read on products" ON products;
DROP POLICY IF EXISTS "Allow public read on slides" ON slides;

-- Public Read for everyone
CREATE POLICY "Allow public read on categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Allow public read on products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read on slides" ON slides FOR SELECT USING (true);

-- Functions to check if user is admin
CREATE OR REPLACE FUNCTION is_admin() 
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT role = 'admin' 
    FROM profiles 
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Admin write policies
CREATE POLICY "Allow admin to insert products" ON products FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "Allow admin to update products" ON products FOR UPDATE USING (is_admin());
CREATE POLICY "Allow admin to delete products" ON products FOR DELETE USING (is_admin());

CREATE POLICY "Allow admin to insert categories" ON categories FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "Allow admin to update categories" ON categories FOR UPDATE USING (is_admin());
CREATE POLICY "Allow admin to delete categories" ON categories FOR DELETE USING (is_admin());

CREATE POLICY "Allow admin to modify slides" ON slides FOR ALL USING (is_admin());

-- How to make someone an admin (Run this after they register):
-- UPDATE profiles SET role = 'admin' WHERE full_name = 'Your Name';
