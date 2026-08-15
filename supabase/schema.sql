-- The Aviary Guide — Supabase Schema
-- Run this in your Supabase SQL editor to set up production database

CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS birds (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  "scientificName" TEXT,
  category TEXT,
  "categorySlug" TEXT,
  origin TEXT,
  "nativeRange" TEXT,
  colors TEXT,
  height TEXT,
  weight TEXT,
  lifespan TEXT,
  habitat TEXT,
  diet TEXT,
  "feedingGuide" TEXT,
  temperament TEXT,
  behavior TEXT,
  "careLevel" TEXT,
  "whereToFind" TEXT,
  "conservationStatus" TEXT,
  "heroImage" TEXT,
  gallery JSONB DEFAULT '[]',
  featured BOOLEAN DEFAULT false,
  description TEXT,
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  "coverImage" TEXT,
  category TEXT,
  author TEXT,
  "publishedAt" TIMESTAMPTZ,
  status TEXT DEFAULT 'draft'
);

CREATE TABLE IF NOT EXISTS testimonials (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  avatar TEXT,
  quote TEXT NOT NULL,
  bird TEXT,
  approved BOOLEAN DEFAULT false,
  "createdAt" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS resources (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT,
  description TEXT,
  url TEXT,
  thumbnail TEXT
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  "subscribedAt" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  "createdAt" TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_birds_category ON birds("categorySlug");
CREATE INDEX IF NOT EXISTS idx_birds_featured ON birds(featured);
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);

-- Enable Row Level Security
ALTER TABLE birds ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read birds" ON birds FOR SELECT USING (true);
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read published articles" ON articles FOR SELECT USING (status = 'published');
CREATE POLICY "Public read approved testimonials" ON testimonials FOR SELECT USING (approved = true);
CREATE POLICY "Public read resources" ON resources FOR SELECT USING (true);

-- Admin write policies (requires authenticated admin user)
CREATE POLICY "Admin write birds" ON birds FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin write categories" ON categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin write articles" ON articles FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin write testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin write resources" ON resources FOR ALL USING (auth.role() = 'authenticated');
