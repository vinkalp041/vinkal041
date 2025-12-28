import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary font-semibold text-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Ready to Get Started?
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-6">
            Let's Build Your{" "}
            <span className="text-gradient">Dream Website</span>{" "}
            Together
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Share your details — we'll call you and show you demo options. 
            No commitments, just a friendly conversation about your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Start My Website
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <MessageCircle className="mr-2" />
              Talk on WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-border/50">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="w-2 h-2 bg-accent rounded-full" />
              </span>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="w-2 h-2 bg-accent rounded-full" />
              </span>
              <span className="text-sm">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="w-2 h-2 bg-accent rounded-full" />
              </span>
              <span className="text-sm">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="w-2 h-2 bg-accent rounded-full" />
              </span>
              <span className="text-sm">Lifetime Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
