import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    title: "Vinkal Prajapati Portfolio",
    category: "Portfolio",
    description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design",
    url: "https://vinkal93.github.io/vinkal-prajapati/"
  },
  {
    title: "SBCIFMS",
    category: "Institution",
    description: "Comprehensive institutional management system website for educational organization",
    url: "https://vinkal93.github.io/SBCIFMS"
  },
  {
    title: "SBCI",
    category: "Institution",
    description: "Professional website for SBCI educational institute with courses and enrollment info",
    url: "https://vinkal93.github.io/SBCI"
  },
  {
    title: "Vin-Quiz Privacy Policy",
    category: "Legal",
    description: "Clean and professional privacy policy page design for mobile application",
    url: "https://vinkal93.github.io/Vin-Quiz-Privacy-policy/"
  },
  {
    title: "Typing Master",
    category: "Web App",
    description: "Interactive typing practice application to improve typing speed and accuracy",
    url: "https://typingmaster2.vercel.app/"
  }
];

const LiveShowcase = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="showcase" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("showcase")}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            {t("websitesCrafted")} <span className="text-gradient">{t("crafted")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results — see what we've built for businesses like yours
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div 
                className={`relative transition-transform duration-500 transform-style-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
                style={{ minHeight: '320px' }}
              >
                {/* Front Side */}
                <div 
                  className={`absolute inset-0 bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow backface-hidden ${
                    flippedCard === index ? 'invisible' : ''
                  }`}
                >
                  {/* Live Preview Frame */}
                  <div className="relative overflow-hidden aspect-video bg-muted">
                    <iframe
                      src={project.url}
                      title={project.title}
                      className="w-full h-full pointer-events-none"
                      style={{ 
                        transform: "scale(0.35)", 
                        transformOrigin: "top left",
                        width: "286%", 
                        height: "286%" 
                      }}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-heading font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className={`absolute inset-0 bg-card border border-primary/50 rounded-2xl overflow-hidden shadow-2xl rotate-y-180 backface-hidden flex flex-col items-center justify-center p-6 ${
                    flippedCard !== index ? 'invisible' : ''
                  }`}
                >
                  <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-center">{project.title}</h3>
                  <p className="text-muted-foreground text-sm text-center mb-6">{project.description}</p>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="hero" 
                      size="default"
                      onClick={() => setPreviewUrl(project.url)}
                    >
                      <Eye className="mr-2 w-4 h-4" />
                      {t("preview")}
                    </Button>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="heroOutline" size="default">
                        {t("visit")}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://forms.gle/szcGyWgnXACAQGe86" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              {t("getYourOwn")}
            </Button>
          </a>
        </div>
      </div>

      {/* Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-6xl h-[80vh] relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 hover:bg-muted"
              onClick={() => setPreviewUrl(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="w-full h-full rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
              <iframe
                src={previewUrl}
                title="Website Preview"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center mt-4">
              <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="hero">
                  Open Full Website
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LiveShowcase;
