import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Coaching Institute Owner",
    content: "WebForge made my coaching website — students love it. The design is professional and the forms work perfectly. Highly recommended!",
    rating: 5
  },
  {
    name: "Rohan Sharma",
    role: "Rohan Bakery",
    content: "Perfect interface for our bakery — orders increased by 40% after launching the new website. The team understood our vision completely.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Fitness Trainer",
    content: "I needed a portfolio that showcases my work and attracts clients. WebForge delivered exactly that, and the mobile experience is amazing!",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "Tech Startup Founder",
    content: "Fast delivery, clean code, and excellent support. They built our SaaS landing page in just 5 days. Will definitely work with them again.",
    rating: 5
  },
  {
    name: "Sneha Gupta",
    role: "Fashion Boutique Owner",
    content: "Our e-commerce store looks beautiful and works flawlessly. Sales have doubled since we launched. Thank you WebForge team!",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Real Estate Agent",
    content: "Professional website with property listings, contact forms, and WhatsApp integration. My clients love how easy it is to reach me now.",
    rating: 5
  },
  {
    name: "Meera Joshi",
    role: "Yoga Instructor",
    content: "Beautiful, calming design that perfectly represents my yoga brand. Booking classes is now so simple for my students.",
    rating: 5
  },
  {
    name: "Arjun Reddy",
    role: "Restaurant Owner",
    content: "The menu display and online ordering system work great. Our digital presence has improved dramatically. Excellent work!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("testimonials")}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            {t("whatClientsSay")} <span className="text-gradient">{t("clientsSay")}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-lg">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg lg:text-xl text-center text-foreground mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-heading font-semibold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
