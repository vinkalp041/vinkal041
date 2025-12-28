import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    title: "Vinkal Prajapati Portfolio",
    category: "Portfolio",
    url: "https://vinkal93.github.io/vinkal-prajapati/"
  },
  {
    title: "SBCIFMS",
    category: "Institution",
    url: "https://vinkal93.github.io/SBCIFMS"
  },
  {
    title: "SBCI",
    category: "Institution",
    url: "https://vinkal93.github.io/SBCI"
  },
  {
    title: "Vin-Quiz Privacy Policy",
    category: "Legal",
    url: "https://vinkal93.github.io/Vin-Quiz-Privacy-policy/"
  },
  {
    title: "Typing Master",
    category: "Web App",
    url: "https://typingmaster2.vercel.app/"
  }
];

const LiveShowcase = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <section id="showcase" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Live Showcase</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            Websites We've <span className="text-gradient">Crafted</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results — see what we've built for businesses like yours
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden card-shadow hover:border-primary/50 transition-all duration-300"
            >
              {/* Live Preview Frame */}
              <div className="relative overflow-hidden aspect-video bg-muted">
                <iframe
                  src={project.url}
                  title={project.title}
                  className="w-full h-full pointer-events-none scale-[0.5] origin-top-left"
                  style={{ width: "200%", height: "200%" }}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="hero" 
                    size="default"
                    onClick={() => setPreviewUrl(project.url)}
                  >
                    Preview
                  </Button>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="heroOutline" size="default">
                      Visit
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-lg font-heading font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://forms.gle/szcGyWgnXACAQGe86" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Get Your Own Website
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
            <div className="w-full h-full rounded-xl overflow-hidden border border-border bg-card">
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
