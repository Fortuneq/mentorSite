import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MentorSite - Step Into IT with Mentorship',
  description: 'We help developers and testers enter IT or transition into new roles through personalized mentorship, learning plans, and career support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
