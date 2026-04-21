CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved reviews
CREATE POLICY "reviews_select_all" ON public.reviews
  FOR SELECT USING (true);

-- Anyone can insert a review (no auth required for clients)
CREATE POLICY "reviews_insert_all" ON public.reviews
  FOR INSERT WITH CHECK (true);
