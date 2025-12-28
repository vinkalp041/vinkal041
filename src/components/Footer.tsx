import { Phone, Mail, MessageCircle, MapPin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "/#home" },
      { name: "Services", href: "/#services" },
      { name: "Live Showcase", href: "/#showcase" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Contact", href: "/#contact" },
    ],
    services: [
      { name: "Web Design", href: "/#services" },
      { name: "WordPress", href: "/#services" },
      { name: "E-Commerce", href: "/#services" },
      { name: "Landing Pages", href: "/#services" },
      { name: "SEO Setup", href: "/#services" },
    ],
  };

  const githubStyleLinks = [
    { name: "Terms", to: "/terms-of-use" },
    { name: "Privacy", to: "/privacy-policy" },
    { name: "About Developer", to: "/about-developer" },
    { name: "Contact", href: "/#contact" },
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

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
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

        {/* GitHub Style Footer Links */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col items-center gap-4">
            {/* Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              {githubStyleLinks.map((link) => (
                link.to ? (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            {/* Do not share info */}
            <p className="text-muted-foreground text-xs">
              Do not share my personal information
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
