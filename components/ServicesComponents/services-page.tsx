"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import ServiceCard from "./service-card"
import ServiceModal from "./service-modal"
import { corporateServices, clinicalServices, searchServices, type Service } from "@/lib/services-data"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("corporate")
  const [filteredCorporateServices, setFilteredCorporateServices] = useState(corporateServices)
  const [filteredClinicalServices, setFilteredClinicalServices] = useState(clinicalServices)

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      // If search is empty, reset to original lists
      setFilteredCorporateServices(corporateServices)
      setFilteredClinicalServices(clinicalServices)
      return
    }

    // Get all services that match the search query
    const allFilteredServices = searchServices(searchQuery)

    // Split the filtered services back into their respective categories
    setFilteredCorporateServices(allFilteredServices.filter((service) => service.id.startsWith("corp-")))

    setFilteredClinicalServices(allFilteredServices.filter((service) => service.id.startsWith("clin-")))
  }, [searchQuery])

  const handleServiceClick = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our trusted wellness and personal care services.
        </p>
      </motion.div>

      {/* Search bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search services..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-orange-400 focus:border-orange-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="corporate" className="w-full" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-2">
          <TabsTrigger value="corporate" className="data-[state=active]:bg-orange-400 data-[state=active]:text-white">
            Corporate Services
          </TabsTrigger>
          <TabsTrigger value="clinical" className="data-[state=active]:bg-orange-400 data-[state=active]:text-white">
            Clinical Services
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="corporate" className="mt-0">
            {filteredCorporateServices.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCorporateServices.map((service) => (
                  <ServiceCard key={service.id} service={service} onClick={() => handleServiceClick(service)} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No corporate services found matching your search.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="clinical" className="mt-0">
            {filteredClinicalServices.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredClinicalServices.map((service) => (
                  <ServiceCard key={service.id} service={service} onClick={() => handleServiceClick(service)} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No clinical services found matching your search.</p>
              </div>
            )}
          </TabsContent>
        </AnimatePresence>
      </Tabs>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={selectedService} />
    </div>
  )
}
