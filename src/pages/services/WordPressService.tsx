import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, CheckCircle, Clock, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const WordPressService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Premium WordPress theme customization",
    "Easy-to-use admin dashboard",
    "Plugin setup & configuration",
    "Contact forms & lead capture",
    "Blog functionality ready",
    "Security hardening & backup",
    "Speed optimization",
    "SEO plugin configuration"
  ];

  const process = [
    { step: "1", title: "Planning", desc: "Define site structure and features needed" },
    { step: "2", title: "Setup", desc: "Install WordPress with premium theme" },
    { step: "3", title: "Customize", desc: "Brand colors, fonts, and layout adjustments" },
    { step: "4", title: "Content", desc: "Add pages, posts, and media content" },
    { step: "5", title: "Launch", desc: "Testing, optimization, and go-live" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              WordPress <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a powerful, easy-to-manage WordPress website with premium themes, plugins, and full customization to match your brand perfectly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://forms.gle/szcGyWgnXACAQGe86" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">Get Started</Button>
              </a>
              <a href="https://wa.me/919118245636" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="lg">Talk to Expert</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            What You <span className="text-gradient">Get</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Our <span className="text-gradient">Process</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-8 lg:p-12 text-center card-shadow">
            <div className="flex justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" /> 5-10 Days
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4" /> Easy CMS
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4" /> Full Support
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-2">Starting from</h3>
            <div className="text-5xl font-heading font-bold text-primary mb-4">₹7,999</div>
            <p className="text-muted-foreground mb-8">Includes theme, plugins & customization</p>
            <a href="https://forms.gle/szcGyWgnXACAQGe86" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full">Request Quote</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WordPressService;
