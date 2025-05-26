import React, { Suspense, lazy } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from '@/lib/testimonials-data';
import { Button } from "@/components/ui/button";
import Autoplay from 'embla-carousel-autoplay';

// Lazy load the Star component
const Star = lazy(() => import('./Star'));

// Memoize the TestimonialCard component
const TestimonialCard = React.memo(({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="relative group m-3 cursor-pointer">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF9800] to-[#FF5722] rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <Card className="relative bg-white border border-[#FF9800] rounded-xl p-8 shadow hover:shadow-lg transition-all h-[300px] flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="mb-4">
          <Suspense fallback={<div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>}>
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} />
            ))}
          </Suspense>
        </div>
        <blockquote className="text-lg font-semibold text-black mb-6 flex-grow overflow-y-auto">"{testimonial.review}"</blockquote>
        <div className="flex items-center gap-4 mt-auto">
          <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-black font-bold">{testimonial.name[0]}</div>
          <div className="flex-grow">
            <div className="font-bold text-black text-sm">{testimonial.name}</div>
            <div className="text-xs text-black/60">{testimonial.title}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
));

// Memoize the ClientFeedback component
const ClientFeedback = React.memo(() => {
  // Only load first 6 testimonials initially
  const initialTestimonials = testimonials.slice(0, 6);

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Client Feedback</h2>
        <p className="text-lg text-black/70 mb-10">Transformative experience with exceptional care.</p>
        
        {initialTestimonials.length <= 2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initialTestimonials.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
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
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              })
            ]}
            className="w-full"
          >
            <CarouselContent>
              {initialTestimonials.map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2">
                  <TestimonialCard testimonial={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        )}
      </div>
    </section>
  );
});

export default ClientFeedback; 