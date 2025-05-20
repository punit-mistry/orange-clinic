import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recommended Products',
  description: 'Discover our carefully curated selection of healthcare products and supplements recommended by Orange Clinic professionals.',
  keywords: 'healthcare products, medical supplements, recommended products, Orange Clinic recommendations',
  openGraph: {
    title: 'Recommended Products - Orange Clinic',
    description: 'Discover our carefully curated selection of healthcare products and supplements.',
    type: 'website',
  }
}

export default function RecommendationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 