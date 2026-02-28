import { Check, Zap, Shield, Headphones, Code2, Clock } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  {
    icon: Check,
    title: "Tailor-Made Design",
    description: "Unique designs crafted for your brand — no templates, no copy-paste"
  },
  {
    icon: Zap,
    title: "SEO + Speed Optimized",
    description: "Fast loading websites optimized for Google rankings"
  },
  {
    icon: Headphones,
    title: "Lifetime Support Options",
    description: "We're here whenever you need updates or assistance"
  },
  {
    icon: Code2,
    title: "Any Tech Stack",
    description: "WordPress | React | Next.js | Shopify — we've got you covered"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Your website ready in just 3–10 days"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and reliable hosting"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
              What Makes <span className="text-gradient">WebForge</span> Different
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just build websites — we craft digital experiences that drive real business growth
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={index * 0.1}>
              <div className="group bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 card-shadow h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
