export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-6xl md:text-8xl mb-6 text-[#111827]">Crafted in the Heart of Wales.</h1>
        <p className="text-xl mb-10 text-[#111827]/80">From the rugged peaks of Eryri to your morning ritual, we bring the spirit of Wales to every roast. Experience coffee that’s as bold, authentic, and spirited as our home.</p>
        <div className="flex gap-4 justify-center">
          <a href="/blends" className="bg-[#C56A3C] text-white px-8 py-4 rounded-sm hover:bg-[#a85a32] transition">Explore Seasonal Blends</a>
          <a href="#visit" className="border border-[#C56A3C] text-[#C56A3C] px-8 py-4 rounded-sm hover:bg-[#C56A3C]/10 transition">Plan Your Visit</a>
        </div>
      </div>
    </section>
  );
}