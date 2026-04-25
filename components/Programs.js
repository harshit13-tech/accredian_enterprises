const programs = [
  {
    tag: 'Most Popular',
    tagColor: 'bg-orange-100 text-orange-600',
    title: 'AI & Machine Learning',
    duration: '6 months',
    level: 'Intermediate',
    outcomes: ['Build ML models from scratch', 'Deploy AI in production', 'Python, TensorFlow, PyTorch'],
    color: 'from-blue-600 to-indigo-600',
  },
  {
    tag: 'High Demand',
    tagColor: 'bg-green-100 text-green-600',
    title: 'Data Science & Analytics',
    duration: '4 months',
    level: 'Beginner to Advanced',
    outcomes: ['SQL, Python, Power BI', 'Statistical modelling', 'Real business case studies'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    tag: 'Leadership',
    tagColor: 'bg-purple-100 text-purple-600',
    title: 'Product Management',
    duration: '5 months',
    level: 'Mid to Senior',
    outcomes: ['Product roadmapping', 'Stakeholder management', 'GTM strategy'],
    color: 'from-violet-600 to-purple-700',
  },
  {
    tag: 'New',
    tagColor: 'bg-blue-100 text-blue-600',
    title: 'Generative AI for Business',
    duration: '3 months',
    level: 'All levels',
    outcomes: ['Prompt engineering', 'AI tools for productivity', 'LLM integration'],
    color: 'from-sky-500 to-blue-600',
  },
  {
    tag: 'Executive',
    tagColor: 'bg-amber-100 text-amber-600',
    title: 'Leadership & Strategy',
    duration: '6 months',
    level: 'Senior',
    outcomes: ['Strategic thinking', 'People management', 'Business communication'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    tag: 'Technical',
    tagColor: 'bg-red-100 text-red-600',
    title: 'Cloud & DevOps',
    duration: '4 months',
    level: 'Intermediate',
    outcomes: ['AWS, Azure, GCP', 'CI/CD pipelines', 'Kubernetes & Docker'],
    color: 'from-rose-500 to-pink-600',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Programs</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900" style={{fontFamily:'Manrope,sans-serif'}}>
            Industry-relevant programs <br/>your team will actually complete
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(prog => (
            <div key={prog.title} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Color header */}
              <div className={`bg-gradient-to-r ${prog.color} p-6`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-3`}>
                  {prog.tag}
                </span>
                <h3 className="text-xl font-bold text-white" style={{fontFamily:'Manrope,sans-serif'}}>
                  {prog.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex gap-4 mb-5">
                  <div className="text-xs font-medium text-gray-500">
                    ⏱ {prog.duration}
                  </div>
                  <div className="text-xs font-medium text-gray-500">
                    📈 {prog.level}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {prog.outcomes.map(o => (
                    <li key={o} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center text-blue-600 border border-blue-200 hover:bg-blue-600 hover:text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
