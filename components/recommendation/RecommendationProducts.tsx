import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Image from "next/image";
import Magnesium from "@/public/recommendation/Magnesium-Bisglycinate-Powder.png";
import ActiveBComplex from "@/public/recommendation/Active-B-Complex.png";
import VitaminD3K2inMCTOil from "@/public/recommendation/Vitamin-D3-K2-in-MCT-Oil.png";
import Maiva from "@/public/recommendation/Maiva.png";
import NutritionalYeast from "@/public/recommendation/Nutritional-Yeast.jpg";
import GlassTiffin200  from "@/public/recommendation/glass-tiffin-200ml.jpg";
import GlassTiffin300 from "@/public/recommendation/glass-tiffin-300ml.jpg";
import GlassTiffinDivided from "@/public/recommendation/glass-tiffin-divided.jpg";
import GiffyMeasuringSet from "@/public/recommendation/Giffy-Measuring-Set.jpg";
import AXIOMMeasuringSet from "@/public/recommendation/AXIOM-Measuring.jpg";
import WeightScale from "@/public/recommendation/weight-scale.jpg";
const recommendedProducts = [
  {
    name: "Magnesium",
    url: "https://www.ithrive.shop/products/magnesium?ref=FIT2025",
    image: Magnesium,
    description: "Premium quality magnesium supplement for optimal health",
  },
  {
    name: "Active B-Complex",
    url: "https://www.ithrive.shop/products/b-complex?ref=FIT2025",
    image: ActiveBComplex,
    description: "Advanced B-vitamin complex for energy and vitality",
  },
  {
    name: "Vitamin D3 + K2 in MCT Oil",
    url: "https://www.ithrive.shop/products/liquid-vitamin-d3-k2-drops?ref=FIT2025",
    image: VitaminD3K2inMCTOil,
    description: "Luxury vitamin D3 and K2 in premium MCT oil",
  },
  {
    name: "Nutritional Yeast",
    url: "https://amzn.to/4l99dmv",
    image: NutritionalYeast,
    description:
      "Nutritional yeast flakes, a versatile and healthy seasoning and Gluten Free Vegetarian Nutritional Yeast",
  },
  {
    name: "Glass tiffin box (200ml)", 
    url: " https://amzn.to/4jTsGGU",
    image: GlassTiffin200,
    description:
      "Premium glass tiffin box with airtight lid, perfect for meal prep and storage, microwave and dishwasher safe.",
  },
  {
    name: "Glass tiffin box (300ml)",
    url: " https://amzn.to/3TivHWB ",
    image: GlassTiffin300,
    description:
      "Premium Material: Crafted from high borosilicate glass, ensuring a food-safe and lead-free container that is microwave-safe and eco-friendly.",
  },
  {
    name: "Glass tiffin box (Divided)", 
    url: " https://amzn.to/4kH0Izk ",
    image: GlassTiffinDivided,
    description:
      "Secure and Airtight: Equipped with a four-sided clip-lock system and an airtight top lid featuring a silicone ring, this glass tiffin box is perfect for meal prep and storage.",
  },

  {
    name: "Weight Scale",
    url: "https://amzn.to/3HNMvC6",
    image: WeightScale,
    description:
      "Smart digital weight scale with body composition analysis, Bluetooth connectivity, and app integration for comprehensive health tracking",
  },
  {
    name: "Giffy Measuring Set",
    url: " https://amzn.to/40elyOj",
    image: GiffyMeasuringSet,
    description:
      "Premium Food Grade Material- The measuring cups set made of food-grade stainless steel and PP plastic, 100% rust-resistant, BPA fre",
  },
  {
    name: "AXIOM Measuring Set",
    url: "https://amzn.to/4jUeDRe",
    image: AXIOMMeasuringSet,
    description:
      "Measuring Cups and Spoons have ultra fine stainless steel construction, Matte finished surface, smooth edges to ensure safety, no rough spots or scratch marks",
  },
  {
    name: "Maiva",
    url: null,
    image: Maiva,

    // image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=500&auto=format&fit=crop&q=60",
    description: "Exclusive wellness products for the discerning individual",
    coupon_code: "MAIVA3023",
    redirect_url: "https://www.maiva.co/?ref=MAIVA3023",
  },
];

const RecommendationProducts = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      toast.success("Coupon code copied to clipboard!", {
        duration: 2000,
        position: "bottom-center",
        style: {
          background: "#4BB543",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
        },
      });
    } catch (err) {
      toast.error("Failed to copy code. Please try again.", {
        duration: 2000,
        position: "bottom-center",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center py-24 px-4 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="max-w-7xl w-full mx-auto p-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="uppercase text-sm text-orange-400 font-semibold mb-4 tracking-[0.2em] animate-slide-down">
            Recommendation Selection
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent animate-slide-up">
            Premium Products
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Discover our meticulously curated collection of premium wellness
            products, crafted for those who seek excellence in every detail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {recommendedProducts.map((product, idx) => (
            <div
              key={product.name}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]  transition-all duration-500  transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200">
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    width={1000}
                    height={1000}
                    priority
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                </div>
                <div className="p-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex justify-center">
                    {product.url ? (
                      <Button
                        onClick={() => window.open(product.url, "_blank")}
                        className="  text-base font-semibold text-orange-400 border-2 border-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white cursor-pointer"
                      >
                        Explore Product
                      </Button>
                    ) : (
                      <div className="flex flex-col items-center gap-4">
                        <div className="text-sm text-gray-500">
                          Use this coupon code:
                        </div>
                        <Button
                          onClick={() =>
                            product.coupon_code &&
                            handleCopyCode(product.coupon_code)
                          }
                          className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-orange-400 border-2 border-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white  cursor-pointer"
                        >
                          {product.coupon_code}
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              copiedCode === product.coupon_code
                                ? "text-green-500"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {copiedCode === product.coupon_code ? (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                              />
                            )}
                          </svg>
                        </Button>
                        {copiedCode === product.coupon_code && (
                          <Button
                            onClick={() =>
                              window.open(product.redirect_url, "_blank")
                            }
                            className="text-base font-semibold text-orange-400 border-2 border-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white cursor-pointer"
                          >
                            Visit Website
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationProducts;
