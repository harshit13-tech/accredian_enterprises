const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'We start with a 30-minute call to understand your team size, skill gaps, business goals, and learning culture.',
    icon: '📞',
  },
  {
    step: '02',
    title: 'Custom Program Design',
    desc: 'Our curriculum team crafts a learning path tailored to your industry, role levels, and specific outcomes.',
    icon: '🎨',
  },
  {
    step: '03',
    title: 'Onboarding & Kickoff',
    desc: 'We handle all employee onboarding, LMS setup, and orientation — zero effort from your HR team.',
    icon: '🚀',
  },
  {
    step: '04',
    title: 'Live Learning + Mentorship',
    desc: 'Employees attend live sessions with industry experts, complete projects, and get 1:1 mentor support.',
    icon: '🧑‍🏫',
  },
  {
    step: '05',
    title: 'Track Progress in Real Time',
    desc: "HR and L&D leads get a live dashboard with attendance, completion, and skill growth data per employee.",
    icon: '📊',
  },
  {
    step: '06',
    title: 'Certification & Celebration',
    desc: 'Employees earn globally recognized certificates and get featured in our Hall of Fame.',
    icon: '🏆',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900" style={{fontFamily:'Manrope,sans-serif'}}>
            From sign-up to success — <br/>
            <span className="text-blue-600">in 6 simple steps</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            We handle the heavy lifting so you can focus on your people.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="card-hover relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
            >
              {/* Step number */}
              <div className="absolute top-6 right-6 text-4xl font-extrabold text-gray-100 select-none"
                style={{fontFamily:'Manrope,sans-serif'}}>
                {s.step}
              </div>

              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{fontFamily:'Manrope,sans-serif'}}>
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>

              {/* Connector arrow (not on last items) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300 text-xl z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
