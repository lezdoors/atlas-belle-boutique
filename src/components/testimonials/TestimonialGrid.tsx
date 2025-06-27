
import TestimonialCard from './TestimonialCard';
import { Testimonial } from './testimonialsData';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

const TestimonialGrid = ({ testimonials }: TestimonialGridProps) => {
  return (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
        />
      ))}
    </div>
  );
};

export default TestimonialGrid;
