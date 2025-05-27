"use client"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
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
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-white rounded-lg min-w-[90vw] sm:min-w-[600px] max-h-[90vh] sm:max-h-[80vh]">
        <DialogTitle className="sr-only">{service.details.title}</DialogTitle>
        <div className="flex flex-col md:flex-row h-full">
          {/* Left side - Image */}
          <div className="relative w-full md:w-[40%] h-48 sm:h-64 md:h-auto min-h-[200px]">
            <Image 
              src={service.image || "/placeholder.svg"} 
              alt={service.title} 
              fill 
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right side - Content */}
          <div className="p-4 sm:p-6 md:w-[60%] flex flex-col overflow-y-auto max-h-[50vh] md:max-h-none">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.details.title}</h2>

            <div className="space-y-3 sm:space-y-4 flex-grow">
              {service.details.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm sm:text-base text-gray-700"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 flex justify-center md:justify-end sticky bottom-0 bg-white pt-2">
              <Button 
                onClick={() => window.open("https://wa.me/919821790372?text=Hi%20Aditi!%20%F0%9F%91%8B%20I'm%20interested%20in%20learning%20more%20about%20my%20diet%20%F0%9F%A5%97%20and%20how%20to%20improve%20it%20%F0%9F%92%AA.%20I'd%20love%20to%20get%20your%20guidance%20%F0%9F%99%8F%20and%20see%20how%20you%20can%20help!%20%F0%9F%98%8A", "_blank")}
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
