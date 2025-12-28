import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLinkClick = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const column1Links = [
    { name: t("home"), href: "/#home" },
    { name: t("services"), href: "/#services" },
    { name: t("showcase"), href: "/#showcase" },
    { name: t("pricing"), href: "/#pricing" },
    { name: t("contact"), href: "/#contact" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "WordPress", href: "/services/wordpress" },
    { name: "E-Commerce", href: "/services/ecommerce" },
  ];

  const column2Links = [
    { name: "Landing Pages", href: "/services/landing-page" },
    { name: "Portfolio", href: "/services/portfolio" },
    { name: "Coaching Sites", href: "/services/coaching" },
    { name: "Corporate Sites", href: "/services/corporate" },
    { name: "Blog & SEO", href: "/services/blog-seo" },
    { name: t("termsOfUse"), to: "/terms-of-use" },
    { name: t("privacyPolicy"), to: "/privacy-policy" },
    { name: t("aboutDeveloper"), to: "/about-developer" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">W</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Web<span className="text-primary">Forge</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Custom Websites + Branding + SEO
            </p>
            <p className="text-foreground font-medium italic text-sm">
              "Your Business. Your Brand. Your Website."
            </p>
          </div>

          {/* Column 1 - Navigation & Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("navigation")}</h4>
            <ul className="space-y-2">
              {column1Links.map((link) => (
                <li key={link.name}>
                  {link.href?.startsWith("/services") ? (
                    <button
                      onClick={() => handleLinkClick(link.href!)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - More Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("services")}</h4>
            <ul className="space-y-2">
              {column2Links.map((link) => (
                <li key={link.name}>
                  {link.to ? (
                    <button
                      onClick={() => handleLinkClick(link.to!)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleLinkClick(link.href!)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("contact")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919118245636"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 9118245636
                </a>
              </li>
              <li>
                <a
                  href="mailto:vinkal93041@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  vinkal93041@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919118245636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Tagline */}
            <p className="text-muted-foreground text-sm italic">
              "Your Business. Your Brand. Your Website."
            </p>

            {/* Copyright with logo */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">W</span>
              </div>
              <span>© {currentYear} WebForge Studio. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
