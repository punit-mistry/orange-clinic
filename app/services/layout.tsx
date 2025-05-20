import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of healthcare services at Orange Clinic. From primary care to specialized treatments, we provide exceptional medical care.',
  keywords: 'healthcare services, medical services, clinic services, Orange Clinic services',
  openGraph: {
    title: 'Our Services - Orange Clinic',
    description: 'Explore our comprehensive range of healthcare services at Orange Clinic.',
    type: 'website',
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 