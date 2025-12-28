import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: isHomePage ? "#home" : "/#home" },
    { name: t("services"), href: isHomePage ? "#services" : "/#services" },
    { name: t("showcase"), href: isHomePage ? "#showcase" : "/#showcase" },
    { name: t("pricing"), href: isHomePage ? "#pricing" : "/#pricing" },
    { name: t("contact"), href: isHomePage ? "#contact" : "/#contact" },
  ];

  const handleGoogleFormRedirect = () => {
    window.open("https://forms.gle/szcGyWgnXACAQGe86", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">W</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Web<span className="text-primary">Forge</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-muted">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("hi")} className={language === "hi" ? "bg-muted" : ""}>
                  🇮🇳 हिंदी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-muted">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Button variant="hero" size="lg" onClick={handleGoogleFormRedirect}>
              {t("startWebsite")}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle Mobile */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-muted">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={28} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-background border-r border-border p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-6 border-b border-border">
                    <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-heading font-bold text-xl">W</span>
                      </div>
                      <span className="font-heading font-bold text-xl text-foreground">
                        Web<span className="text-primary">Forge</span>
                      </span>
                    </Link>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-2">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                      <Link
                        to="/about-developer"
                        className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {t("aboutDeveloper")}
                      </Link>
                    </div>

                    {/* Language Switcher Mobile */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-3 px-4">Language</p>
                      <div className="flex gap-2 px-4">
                        <Button
                          variant={language === "en" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage("en")}
                          className="flex-1"
                        >
                          English
                        </Button>
                        <Button
                          variant={language === "hi" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLanguage("hi")}
                          className="flex-1"
                        >
                          हिंदी
                        </Button>
                      </div>
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="p-6 border-t border-border">
                    <Button variant="hero" size="lg" className="w-full" onClick={() => {
                      handleGoogleFormRedirect();
                      setIsOpen(false);
                    }}>
                      {t("startWebsite")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
