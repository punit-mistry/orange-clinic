'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const RecommendationProducts = dynamic(() => import('@/components/recommendation/RecommendationProducts'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 rounded-lg" />
})

const RecommendataionFaq = dynamic(() => import('@/components/recommendation/RecommendationFaq'), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />
})

const RecommendationPage = () => {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-gray-100 rounded-lg" />}>
        <RecommendationProducts />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-gray-100 rounded-lg" />}>
        <RecommendataionFaq />
      </Suspense>
    </main>
  )
}

export default RecommendationPage