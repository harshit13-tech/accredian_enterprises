import './globals.css'

export const metadata = {
  title: 'Accredian Enterprise | Upskill Your Workforce',
  description: 'Partner with Accredian to deliver world-class learning programs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
