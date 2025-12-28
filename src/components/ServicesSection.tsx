import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Globe, 
  Layout, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Building, 
  PenTool,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Palette,
    title: "Web Design (Custom)",
    description: "Unique, branded designs that capture your vision and stand out",
    link: "/services/web-design"
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Feature-rich WordPress sites with easy content management",
    link: "/services/wordpress"
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    description: "High-converting landing pages optimized for leads & sales",
    link: "/services/landing-page"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Setup",
    description: "Complete online stores with payment gateway integration",
    link: "/services/ecommerce"
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Showcase your work beautifully with stunning portfolios",
    link: "/services/portfolio"
  },
  {
    icon: GraduationCap,
    title: "Coaching / Institute Websites",
    description: "Professional sites for educators and training institutes",
    link: "/services/coaching"
  },
  {
    icon: Building,
    title: "Business Corporate Websites",
    description: "Establish credibility with professional corporate sites",
    link: "/services/corporate"
  },
  {
    icon: PenTool,
    title: "Blog Setup & SEO",
    description: "SEO-optimized blogs to drive organic traffic to your business",
    link: "/services/blog-seo"
  }
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("ourServices")}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            {t("websiteSolutions")} <span className="text-gradient">{t("everyBusiness")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From simple portfolios to complex e-commerce — we build websites that work for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
              <div className="flex gap-2">
                <Link to={service.link} className="flex-1">
                  <Button variant="card" size="sm" className="w-full">
                    {t("viewDetails")}
                  </Button>
                </Link>
                <Link to={service.link}>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
