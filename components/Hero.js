import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="gradient-hero min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Trusted by 500+ companies across India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6" style={{fontFamily:'Manrope,sans-serif'}}>
              Upskill Your <br />
              Workforce with <br />
              <span className="gradient-text">World-Class</span> Learning
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl">
              Partner with Accredian to deliver industry-relevant programs in AI, Data Science, Product Management and more — directly to your employees.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
              >
                Schedule a Demo →
              </a>
              <a
                href="#success-stories"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition-all"
              >
                See Case Studies
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { num: '500+', label: 'Enterprise Partners' },
                { num: '50K+', label: 'Employees Trained' },
                { num: '95%', label: 'Completion Rate' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-white counter-num">{stat.num}</div>
                  <div className="text-blue-200 text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Lead Form */}
          <div className="w-full">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
