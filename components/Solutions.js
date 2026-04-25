const solutions = [
  {
    icon: '🎯',
    title: 'Customized Learning Paths',
    desc: 'Programs tailored to your industry, role, and business goals — not a one-size-fits-all curriculum.',
  },
  {
    icon: '🏆',
    title: 'Industry-Certified Programs',
    desc: 'Certificates from top universities and global bodies that your employees will be proud to earn.',
  },
  {
    icon: '📊',
    title: 'Real-Time Progress Tracking',
    desc: 'HR dashboards with live data on enrollment, completion rates, and skill progress per team.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Success Manager',
    desc: 'A dedicated partner for every enterprise client to ensure smooth onboarding and high completion.',
  },
  {
    icon: '💻',
    title: 'Live + Self-Paced Learning',
    desc: 'Flexible format — weekend live sessions with mentors, plus on-demand videos for busy professionals.',
  },
  {
    icon: '🌐',
    title: 'Pan-India & Remote Delivery',
    desc: 'Deliver to teams across locations, time zones, and departments without logistical hassle.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Accredian</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900" style={{fontFamily:'Manrope,sans-serif'}}>
            Everything your L&D team needs,<br />
            <span className="text-blue-600">all in one place</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            We handle the entire learning experience so your team can focus on business outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map(sol => (
            <div
              key={sol.title}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-7 shadow-sm"
            >
              <div className="text-4xl mb-5">{sol.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{fontFamily:'Manrope,sans-serif'}}>
                {sol.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
