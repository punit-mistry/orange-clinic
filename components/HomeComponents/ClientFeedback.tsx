import React from 'react';

const testimonials = [
  {
    name: 'Emily Johnson',
    title: 'Patient, Wellness Advocate',
    review:
      'The team at Orange Clinic truly cares about your health and well-being. Their holistic approach made a significant difference in my life.',
    rating: 5,
  },
  {
    name: 'Michael Smith',
    title: 'Client, Fitness Coach',
    review:
      "I felt welcomed and supported throughout my journey. The staff's expertise and compassion are unmatched!",
    rating: 5,
  },
];

const Star = () => (
  <svg className="w-5 h-5 inline-block text-[#FF9800]" fill="#FF9800" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36"/></svg>
);

const ClientFeedback = () => (
  <section className="w-full bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Client Feedback</h2>
      <p className="text-lg text-black/70 mb-10">Transformative experience with exceptional care.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white border border-[#FF9800] rounded-xl p-8 shadow hover:shadow-lg transition-all">
            <div className="mb-4">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} />)}</div>
            <blockquote className="text-lg font-semibold text-black mb-6">"{t.review}"</blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-black font-bold">{t.name[0]}</div>
              <div>
                <div className="font-bold text-black text-sm">{t.name}</div>
                <div className="text-xs text-black/60">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientFeedback; 