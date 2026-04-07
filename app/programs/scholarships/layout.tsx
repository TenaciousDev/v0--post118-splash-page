import type { Metadata } from 'next'
import './globals.css'   // Keep this if you want scholarship-specific styles

export const metadata: Metadata = {
  title: "O'Malley Scholarship Program | American Legion Post 118",
  description: "Apply for the O'Malley Scholarship Program sponsored by American Legion Post 118. Download the scholarship packet and submit your application.",
  // We can remove icons here — they are already handled in the root layout
}

export default function ScholarshipsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {children}
    </div>
  )
}