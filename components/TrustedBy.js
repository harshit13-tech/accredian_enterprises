const companies = [
  'Google', 'Microsoft', 'Amazon', 'Flipkart', 'Infosys',
  'Wipro', 'TCS', 'HCL', 'Myntra', 'Paytm',
]

export default function TrustedBy() {
  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Trusted by teams at leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {companies.map(name => (
            <div
              key={name}
              className="text-gray-400 font-bold text-lg tracking-tight hover:text-blue-600 transition-colors cursor-default"
              style={{fontFamily:'Manrope,sans-serif'}}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
