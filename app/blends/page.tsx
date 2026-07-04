import { Suspense } from 'react';
import { supabase } from '@/lib/supabaseClient';

async function BlendsList() {
  const { data: products } = await supabase.from('products').select('*');
  
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products?.map((product) => (
        <div key={product.id} className="bg-[#FFFFFF] p-6 border border-[#C56A3C]/10">
          <h3 className="text-2xl mb-2">{product.title}</h3>
          <p className="text-sm mb-4 line-clamp-2">{product.description}</p>
          <a href={`/blends/${product.id}`} className="text-[#C56A3C] font-semibold">View Roast Profile →</a>
        </div>
      ))}
    </div>
  );
}

export default function BlendsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl mb-6">The Harvest of the Season</h1>
      <p className="mb-12 text-lg">Our roasts change with the seasons to ensure peak freshness. Discover what’s currently brewing.</p>
      <Suspense fallback={<p>Loading blends...</p>}>
        <BlendsList />
      </Suspense>
    </main>
  );
}