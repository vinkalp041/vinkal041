import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const plans = [
  {
    name: "Starter", price: "₹3,999", description: "For Students / Portfolio / Simple pages",
    features: ["1 page professional design", "Contact form + WhatsApp button", "Mobile responsive", "Basic SEO setup", "1 revision round"],
    popular: false
  },
  {
    name: "Professional", price: "₹8,999", description: "For Business / Institutes",
    features: ["5 pages + custom colors + forms", "Google Business + SEO setup", "Blog ready", "Social media integration", "3 revision rounds", "30 days free support"],
    popular: true
  },
  {
    name: "Premium", price: "₹15,999+", description: "For Custom Brand Websites",
    features: ["Custom coded / WordPress", "Animations + SEO report", "Full branding support", "E-commerce ready", "Unlimited revisions", "90 days free support", "Priority delivery"],
    popular: false
  }
];

const PricingSection = () => {
  const handleStartProject = () => {
    window.open("https://forms.gle/szcGyWgnXACAQGe86", "_blank");
  };

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
              Transparent <span className="text-gradient">Pricing</span> Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No hidden fees, no surprises — choose the plan that fits your needs
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollAnimation key={plan.name} delay={index * 0.15}>
              <div className={`relative bg-card border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 h-full ${
                plan.popular ? "border-primary glow-effect scale-105 lg:scale-110" : "border-border card-shadow"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl lg:text-5xl font-heading font-bold text-gradient">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "hero" : "outline"} size="lg" className="w-full" onClick={handleStartProject}>
                  Start My Project
                </Button>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.3}>
          <p className="text-center text-muted-foreground text-sm mt-10">
            * All prices are one-time. Hosting & domain charges extra. Custom quotes available for larger projects.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PricingSection;
