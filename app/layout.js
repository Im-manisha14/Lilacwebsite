import './globals.css'
import ParallaxWrapper from '@/components/ParallaxWrapper'

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA',
  description: 'Licensed clinical psychologist specializing in anxiety, trauma, and burnout therapy. EMDR, CBT, and mindfulness-based therapy in Santa Monica. In-person and telehealth sessions available.',
  keywords: 'anxiety therapy Santa Monica, trauma therapist California, EMDR therapy, burnout treatment, panic attack help, Santa Monica psychologist',
  openGraph: {
    title: 'Dr. Maya Reynolds - Anxiety & Trauma Therapy Santa Monica',
    description: 'Find calm in the chaos. Evidence-based therapy for anxiety, trauma, and burnout in Santa Monica, CA.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Grounded • Therapy',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ParallaxWrapper>{children}</ParallaxWrapper>
      </body>
    </html>
  )
}
