"use client"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Service } from "@/lib/services-data"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: Service | null
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-white rounded-lg min-w-7xl min-h-[70vh]">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="relative w-full md:w-[40%] h-64 md:h-auto">
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          </div>

          {/* Right side - Content */}
          <div className="p-6 md:w-[60%] flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{service.details.title}</h2>

            <div className="space-y-4 flex-grow">
              {service.details.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="bg-black hover:bg-gray-800 text-white">Contact Me</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
