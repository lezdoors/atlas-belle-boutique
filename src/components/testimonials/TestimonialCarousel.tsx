
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Testimonial } from './testimonialsData';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="md:hidden mb-16">
      <div className="relative">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 luxury-shadow">
          {/* Quote Icon */}
          <div className="mb-6">
            <div className="w-12 h-12 copper-gradient rounded-full flex items-center justify-center">
              <Quote className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="h-5 w-5 text-copper-500 fill-current mr-1" 
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="elegant-text text-clay-700 mb-6 leading-relaxed text-lg">
            "{current.text}"
          </blockquote>

          {/* Product Reference */}
          <div className="mb-6 pb-6 border-b border-pearl-200">
            <span className="inline-block bg-copper-100 text-copper-700 px-4 py-2 rounded-full text-sm font-medium">
              {current.product}
            </span>
          </div>

          {/* Customer Info */}
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 rounded-full overflow-hidden luxury-shadow mr-4">
              <img 
                src={current.image} 
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-display font-semibold text-clay-800 mb-1 text-lg">
                {current.name}
              </h4>
              <p className="text-sm text-clay-600">
                {current.location}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <Button 
            onClick={prevTestimonial}
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 p-0 border-copper-300 hover:bg-copper-50"
          >
            <ChevronLeft className="h-5 w-5 text-copper-600" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-copper-500 scale-125' 
                    : 'bg-copper-200 hover:bg-copper-300'
                }`}
              />
            ))}
          </div>

          <Button 
            onClick={nextTestimonial}
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 p-0 border-copper-300 hover:bg-copper-50"
          >
            <ChevronRight className="h-5 w-5 text-copper-600" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
