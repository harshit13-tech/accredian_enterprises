const stats = [
  { num: '500+', label: 'Enterprise Clients', sub: 'Across 20+ industries' },
  { num: '50,000+', label: 'Employees Trained', sub: 'And counting' },
  { num: '95%', label: 'Completion Rate', sub: 'Industry avg is 60%' },
  { num: '4.8/5', label: 'Learner Satisfaction', sub: 'Based on 10K+ reviews' },
]

export default function Stats() {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white" style={{fontFamily:'Manrope,sans-serif'}}>
            Numbers that speak for themselves
          </h2>
          <p className="text-blue-200 mt-3 text-lg">
            Accredian is India's fastest growing enterprise learning partner
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-white counter-num mb-2">
                {stat.num}
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-blue-300 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
