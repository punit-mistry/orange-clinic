import React, { Suspense, lazy } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/testimonials-data";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

// Lazy load the Star component
const Star = lazy(() => import("./Star"));

// Google Review Icon Component
const GoogleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

// Human avatar images - using a more positive and suitable avatar service
const getAvatarUrl = (seed: string) =>
  `https://api.dicebear.com/7.x/personas/svg?seed=${seed}&backgroundColor=ffdfbf,ffd5dc,b6e3f4,c0aede&mood=happy&style=circle`;

// Memoize the TestimonialCard component
const TestimonialCard = React.memo(
  ({
    testimonial,
    index,
  }: {
    testimonial: (typeof testimonials)[0];
    index: number;
  }) => (
    <div className="relative group m-3 cursor-pointer">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <Card className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all h-[320px] flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Google Reviews Header */}
          <div className="flex items-center gap-2 mb-4">
            <GoogleIcon />
            <span className="text-sm font-medium text-gray-600">
              Google Review
            </span>
          </div>

          {/* Star Rating */}
          <div className="mb-4 flex items-center gap-1">
            <Suspense
              fallback={
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-gray-200 animate-pulse rounded-sm"
                    ></div>
                  ))}
                </div>
              }
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <div key={`empty-${i}`} className="w-4 h-4 text-gray-300">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                ))}
              </div>
            </Suspense>
            <span className="text-sm text-gray-500 ml-2">
              {testimonial.rating}/5
            </span>
          </div>

          {/* Review Text */}
          <blockquote className="text-base text-gray-700 mb-6 flex-grow overflow-y-auto leading-relaxed">
            "{testimonial.review}"
          </blockquote>

          {/* User Info with Real Avatar */}
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
            <div className="relative">
              <img
                src={
                  getAvatarUrl(testimonial.name + index) || "/placeholder.svg"
                }
                alt={`${testimonial.name} avatar`}
                className="w-12 h-12 rounded-full border-2 border-gray-200 bg-gray-100"
                loading="lazy"
              />
              {/* Verified badge */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
            </div>
            <div className="flex-grow">
              <div className="font-semibold text-gray-900 text-sm">
                {testimonial.name}
              </div>
              <div className="text-xs text-gray-500">{testimonial.title}</div>
              <div className="text-xs text-gray-400 mt-1">Verified Patient</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
);

// Memoize the ClientFeedback component
const ClientFeedback = React.memo(() => {
  // Only load first 6 testimonials initially
  const initialTestimonials = testimonials.slice(0, 6);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex  justify-between flex-col md:flex-row">
          {/* Header with Google Reviews Branding */}
          <div>
            <div className="mb-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Client Feedback
              </h2>
            </div>
            <p className="text-lg md:text-xl  text-gray-600 font-bold">
              What our patients say about Dt. Aditi
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Real experiences from our valued patients
            </p>
          </div>

          {/* Overall Rating Display */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 inline-flex items-center gap-4 mb-8  flex-col md:flex-row min-w-[320px]">
              <div className="flex items-center gap-2">
                <span className="text-5xl font-bold text-gray-900">4.9</span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-6 h-6 text-yellow-400">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-gray-600 text-center ">
                <div className="font-semibold text-lg">Excellent</div>
                <div className="text-sm">Based on 50+ patient reviews</div>
              </div>
            </div>
          </div>
        </div>

        {initialTestimonials.length <= 2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initialTestimonials.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} index={idx} />
            ))}
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {initialTestimonials.map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={t} index={idx} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-2 border-gray-200 bg-white hover:bg-gray-50" />
            <CarouselNext className="hidden md:flex -right-12 border-2 border-gray-200 bg-white hover:bg-gray-50" />
          </Carousel>
        )}
      </div>
    </section>
  );
});

export default ClientFeedback;
