
import { Star, Quote } from 'lucide-react';
import { Testimonial } from './testimonialsData';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const TestimonialCard = ({ testimonial, index = 0 }: TestimonialCardProps) => {
  return (
    <div 
      className="group animate-fade-in hover-scale"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 luxury-shadow h-full flex flex-col transition-all duration-300 hover:bg-white">
        {/* Quote Icon */}
        <div className="mb-6">
          <div className="w-12 h-12 copper-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Quote className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star 
              key={i} 
              className="h-5 w-5 text-copper-500 fill-current mr-1" 
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="elegant-text text-clay-700 mb-6 flex-grow leading-relaxed text-lg">
          "{testimonial.text}"
        </blockquote>

        {/* Product Reference */}
        <div className="mb-6 pb-6 border-b border-pearl-200">
          <span className="inline-block bg-copper-100 text-copper-700 px-4 py-2 rounded-full text-sm font-medium">
            {testimonial.product}
          </span>
        </div>

        {/* Customer Info */}
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden luxury-shadow mr-4 group-hover:scale-105 transition-transform duration-300">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-display font-semibold text-clay-800 mb-1 text-lg">
              {testimonial.name}
            </h4>
            <p className="text-sm text-clay-600">
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
