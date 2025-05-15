"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Service } from "@/lib/services-data"

interface ServiceCardProps {
  service: Service
  onClick: () => void
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }} 
      whileTap={{ scale: 0.98 }} 
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Card
        className="cursor-pointer h-full overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100 relative bg-gradient-to-b from-white to-orange-50/30"
        onClick={onClick}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardDescription className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{service.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
