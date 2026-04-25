const footerLinks = {
  Programs: ['AI & Machine Learning', 'Data Science', 'Product Management', 'Cloud & DevOps', 'Leadership', 'Generative AI'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Contact'],
  Resources: ['Case Studies', 'Whitepapers', 'Webinars', 'Learning Reports', 'ROI Calculator'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-white text-lg" style={{fontFamily:'Manrope,sans-serif'}}>
                Accredian
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              India's leading enterprise learning platform. Upskilling 50,000+ professionals across 500+ companies.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'YouTube'].map(s => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-xs font-bold text-gray-400 hover:text-white">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4" style={{fontFamily:'Manrope,sans-serif'}}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-gray-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
