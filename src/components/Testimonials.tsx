
import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "AutoStock has completely transformed how we advertise vehicles. Our inventory turnover increased by 35% in just three months after joining the platform.",
    author: "Sarah Johnson",
    role: "Marketing Director, Premium Auto Group",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    quote: "I'm blown away by the quality of leads we get through this platform. The targeting capabilities help us reach serious buyers who are ready to purchase.",
    author: "David Chen",
    role: "Sales Manager, Luxury Motors",
    rating: 5,
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    quote: "The analytics dashboard alone justifies the investment. We can track exactly which listings perform best and optimize our advertising strategy accordingly.",
    author: "Michael Rodriguez",
    role: "Digital Marketing Lead, City Auto Mall",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    quote: "After switching to AutoStock, we've seen a 40% increase in qualified leads. The ROI on this platform is incredible compared to traditional advertising channels.",
    author: "Emily Parker",
    role: "Owner, Parker Family Dealerships",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
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
    <section className="py-24 bg-background" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary">
            <span className="font-medium">SUCCESS STORIES</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-5",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}>
            Trusted by automotive professionals
          </h2>
          <p className={cn(
            "text-xl text-muted-foreground max-w-3xl mx-auto",
            isVisible ? "animate-slide-up animation-delay-100" : "opacity-0"
          )}>
            Hear from dealerships and private sellers who have transformed their automotive advertising strategy.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
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
                  className="w-full"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-secondary/50">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.author}
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full">
                              <Quote size={16} />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
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
                          <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">"{testimonial.quote}"</blockquote>
                          <div>
                            <p className="font-semibold text-lg">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
              className="p-4 rounded-full bg-white border shadow-sm hover:bg-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeIndex ? "bg-primary scale-125 w-6" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-4 rounded-full bg-white border shadow-sm hover:bg-accent transition-colors"
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
