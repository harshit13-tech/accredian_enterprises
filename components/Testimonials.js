const testimonials = [
  {
    quote: "Accredian's AI program transformed how our data team works. Within 3 months, we had 40 analysts using machine learning in their daily workflows.",
    name: 'Priya Sharma',
    role: 'Head of L&D, Flipkart',
    initials: 'PS',
    color: 'bg-blue-600',
    company: 'Flipkart',
    metric: '40 analysts upskilled',
  },
  {
    quote: "The completion rate was what surprised us most — 94% of our team finished the program. The live sessions and dedicated mentor made all the difference.",
    name: 'Rahul Mehta',
    role: 'CHRO, Infosys BPM',
    initials: 'RM',
    color: 'bg-indigo-600',
    company: 'Infosys BPM',
    metric: '94% completion rate',
  },
  {
    quote: "We ran a custom Product Management program for 200 PMs. The ROI was visible within a quarter — faster launches, better alignment with engineering.",
    name: 'Anjali Kapoor',
    role: 'VP People, Myntra',
    initials: 'AK',
    color: 'bg-violet-600',
    company: 'Myntra',
    metric: '200 PMs trained',
  },
]

export default function Testimonials() {
  return (
    <section id="success-stories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900" style={{fontFamily:'Manrope,sans-serif'}}>
            What our enterprise partners say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="card-hover bg-gray-50 border border-gray-100 rounded-2xl p-8 relative"
            >
              {/* Metric badge */}
              <div className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-5">
                🏆 {t.metric}
              </div>

              {/* Quote */}
              <div className="text-gray-400 text-4xl font-serif leading-none mb-3">"</div>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
