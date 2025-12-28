import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Paintbrush, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Tell Us About Your Business",
    description: "Share your vision, goals, and requirements. We listen carefully to understand what makes your business unique."
  },
  {
    icon: Paintbrush,
    step: "02",
    title: "We Design a Demo",
    description: "Our team creates a custom design mockup. We discuss, iterate, and refine until you love it."
  },
  {
    icon: Users,
    step: "03",
    title: "Website Built With Your Branding",
    description: "We develop your website with your colors, content, and brand identity perfectly integrated."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch + Support + Updates",
    description: "Your website goes live! We provide ongoing support and handle updates whenever you need."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            From Idea to Launch in <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures your website is delivered on time, every time
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative z-10 text-center group">
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-heading font-bold">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Button variant="hero" size="lg">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
