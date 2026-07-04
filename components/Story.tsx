export function Story() {
  return (
    <section id="story" className="py-24 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl mb-8">Rooted in Tradition, Roasted for Today.</h2>
        <p className="text-lg leading-relaxed mb-12">Coffi was born from a simple belief: that the best coffee reflects the landscape it’s enjoyed in. We don’t just roast beans; we honor a heritage of craftsmanship. By sourcing locally where possible and roasting in small, meticulous batches, we ensure that every cup tells a story of community, quality, and our deep love for Wales.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {['Welsh Pride', 'Artisan Craft', 'Local Connection'].map((val) => (
            <div key={val} className="p-6 border border-[#C56A3C]/20 rounded">
              <h3 className="text-2xl mb-2 text-[#C56A3C]">{val}</h3>
              <p className="text-sm">Honoring our roots, one small batch at a time.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}