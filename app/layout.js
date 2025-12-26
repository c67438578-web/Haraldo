import './globals.css'

export const metadata = {
  title: 'Orlando Air Conditioning | AC Repair & Installation',
  description: 'Professional AC installation and repair services in Orlando, FL. Same day service. Call 407-489-1867',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
