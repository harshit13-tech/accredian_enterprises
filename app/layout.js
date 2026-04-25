import './globals.css'

export const metadata = {
  title: 'Accredian Enterprise | Upskill Your Workforce',
  description: 'Partner with Accredian to deliver world-class learning programs for your enterprise. Trusted by 500+ companies across India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
