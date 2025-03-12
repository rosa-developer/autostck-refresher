
import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "AutoStock has completely transformed how we manage our inventory. The intuitive interface and powerful analytics have helped us reduce stockouts by 75%.",
    author: "Sarah Johnson",
    role: "Operations Manager, TechCorp",
    rating: 5
  },
  {
    quote: "I'm blown away by the simplicity and effectiveness of this platform. What used to take us days now happens automatically in the background.",
    author: "David Chen",
    role: "CEO, Retail Solutions",
    rating: 5
  },
  {
    quote: "The forecasting tool alone has saved us thousands in preventing overstocking. This is hands-down the best inventory management system we've used.",
    author: "Michael Rodriguez",
    role: "Supply Chain Director, GlobalGoods",
    rating: 5
  },
  {
    quote: "After switching to AutoStock, we've seen a 30% increase in inventory turnover. The ROI on this platform is incredible.",
    author: "Emily Parker",
    role: "Inventory Specialist, FastTrack Logistics",
    rating: 5
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: activeIndex * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary">
            <span className="font-medium">Customer Stories</span>
          </div>
          <h2 className={cn(
            "section-title mb-4",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}>
            Trusted by businesses worldwide
          </h2>
          <p className={cn(
            "section-subtitle",
            isVisible ? "animate-slide-up animation-delay-100" : "opacity-0"
          )}>
            See what our customers are saying about how AutoStock has transformed their inventory management.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className={cn(
              "overflow-hidden rounded-2xl",
              isVisible ? "animate-fade-in" : "opacity-0"
            )}
          >
            <div 
              ref={scrollRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx} 
                  className="w-full p-8 md:p-12 glass"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                        className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-6">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cn(
            "flex justify-between mt-8",
            isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
          )}>
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-background border shadow-sm hover:bg-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-background border shadow-sm hover:bg-accent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
