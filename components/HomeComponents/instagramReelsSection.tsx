"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"
import ReelTofu from "@/public/reel-tofu.jpg"
import BeetRootThumbNail from "@/public/reel-beetroot.jpg" // Example thumbnail, replace with actual path
import KebabReel from "@/public/reel-kebab.jpg" // Example thumbnail, replace with actual path
export default function InstagramReelsSection() {
  const [hoveredReel, setHoveredReel] = useState<number | null>(null)

  const accountUrl = "https://www.instagram.com/clinicaldietitianaditi/?source=omni_redirect"

  const reels = [
    {
      id: 1,
      title: "BeetRoot Kanji Recipe",
      thumbnail: BeetRootThumbNail, // Replace with your actual image path
      reelUrl: "https://www.instagram.com/clinicaldietitianaditi/reel/DJzBCu5InPa/",
    },
    {
      id: 2,
      title: "Quick Nutrition Facts",
      thumbnail: KebabReel, // Replace with your actual image path
      reelUrl: "https://www.instagram.com/clinicaldietitianaditi/reel/DKZly_1ImFm/",
    },
    {
      id: 3,
      title: "Diet Plan Insights",
      thumbnail: ReelTofu, // Replace with your actual image path
      reelUrl: "https://www.instagram.com/reel/CstT61SAFqB/",
    },
  ]

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder.svg?height=400&width=300"
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-800">Follow My Journey</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">Get daily nutrition tips and healthy recipes on Instagram</p>
          <Button
            onClick={() => window.open(accountUrl, "_blank")}
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @clinicaldietitianaditi
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Reels Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <Card
              key={reel.id}
              className={`group h-[510px] p-0 cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredReel === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredReel(index)}
              onMouseLeave={() => setHoveredReel(null)}
              onClick={() => window.open(reel.reelUrl, "_blank")}
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={handleImageError}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-orange-500 fill-current" />
                    </div>
                  </div>

                  {/* Instagram Icon */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-white font-semibold text-lg drop-shadow-lg">{reel.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-gray-600 mb-4">{"Want to see more nutrition tips and healthy recipes?"}</p>
            <Button
              onClick={() => window.open(accountUrl, "_blank")}
              variant="outline"
              className="bg-white border-2 border-orange-400 text-orange-500 hover:bg-orange-400 hover:text-white transition-all duration-300 px-6 py-2 rounded-full font-medium"
            >
              View All Reels
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
