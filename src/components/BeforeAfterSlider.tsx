import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const projects = [
  {
    name: "Coaching Institute",
    before: "Basic HTML page with no design, poor navigation, and no mobile support",
    after: "Modern responsive site with course listings, online enrollment, and student portal",
  },
  {
    name: "Local Bakery",
    before: "No online presence — relying only on walk-in customers and word of mouth",
    after: "Beautiful e-commerce site with online ordering, menu display, and 40% more orders",
  },
  {
    name: "Fitness Trainer",
    before: "Simple social media page with limited reach and no booking system",
    after: "Professional portfolio with class bookings, testimonials, and payment integration",
  },
];

const BeforeAfterSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Transformations</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
              Before & After <span className="text-gradient">WebForge</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we transform businesses with professional web presence
            </p>
          </div>
        </ScrollAnimation>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projects.map((project, i) => (
            <button
              key={project.name}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndex === i
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Before / After Cards */}
        <ScrollAnimation delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Before */}
            <div className="bg-card border border-destructive/30 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-destructive/20 text-destructive text-xs font-bold px-3 py-1 rounded-full">
                BEFORE
              </div>
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <span className="text-2xl">😞</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3">Without Website</h3>
              <p className="text-muted-foreground leading-relaxed">
                {projects[activeIndex].before}
              </p>
              <div className="mt-6 flex gap-2">
                <span className="bg-destructive/10 text-destructive text-xs px-3 py-1 rounded-full">No SEO</span>
                <span className="bg-destructive/10 text-destructive text-xs px-3 py-1 rounded-full">No Mobile</span>
                <span className="bg-destructive/10 text-destructive text-xs px-3 py-1 rounded-full">Low Trust</span>
              </div>
            </div>

            {/* After */}
            <div className="bg-card border border-primary/30 rounded-2xl p-6 lg:p-8 relative overflow-hidden glow-effect">
              <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                AFTER
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3">With WebForge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {projects[activeIndex].after}
              </p>
              <div className="mt-6 flex gap-2">
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">SEO Ready</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Responsive</span>
                <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">Premium</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
