import { Suspense } from 'react';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="h-screen animate-pulse bg-neutral-200" />}>
        <Hero />
      </Suspense>
      <Story />
    </main>
  );
}