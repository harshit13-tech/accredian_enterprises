import LeadForm from './LeadForm'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6"
              style={{fontFamily:'Manrope,sans-serif'}}>
              Ready to upskill <br/>your team?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Talk to our enterprise team and get a free customized learning plan for your organization within 48 hours.
            </p>

            {/* What you get */}
            <div className="space-y-5">
              {[
                { icon: '✅', text: 'Free needs assessment with our L&D experts' },
                { icon: '✅', text: 'Custom program proposal within 48 hours' },
                { icon: '✅', text: 'Free 2-week pilot for up to 20 employees' },
                { icon: '✅', text: 'No commitment required' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-12 flex flex-col gap-3">
              <a href="mailto:enterprise@accredian.com"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-xl">📧</span>
                <span className="text-sm font-medium">enterprise@accredian.com</span>
              </a>
              <a href="tel:+918010003636"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-xl">📞</span>
                <span className="text-sm font-medium">+91 8010 003 636</span>
              </a>
            </div>
          </div>

          {/* Right — Lead Form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
