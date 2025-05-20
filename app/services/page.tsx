'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const ServicesPage = dynamic(() => import("@/components/ServicesComponents/services-page"), {
  loading: () => <div className="min-h-screen animate-pulse bg-gray-100" />
})

export default function Page() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="min-h-screen animate-pulse bg-gray-100" />}>
        <ServicesPage />
      </Suspense>
    </main>
  )
}
