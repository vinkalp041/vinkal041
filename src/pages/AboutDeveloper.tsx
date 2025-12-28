import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, ExternalLink, Code, Palette, Globe } from "lucide-react";

const AboutDeveloper = () => {
  const skills = [
    { name: "React / Next.js", icon: Code },
    { name: "WordPress", icon: Globe },
    { name: "UI/UX Design", icon: Palette },
    { name: "E-Commerce", icon: Globe },
    { name: "SEO Optimization", icon: Globe },
    { name: "Responsive Design", icon: Code },
  ];

  const projects = [
    { name: "Personal Portfolio", url: "https://vinkal93.github.io/vinkal-prajapati/" },
    { name: "SBCIFMS", url: "https://vinkal93.github.io/SBCIFMS" },
    { name: "SBCI", url: "https://vinkal93.github.io/SBCI" },
    { name: "Typing Master", url: "https://typingmaster2.vercel.app/" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-5xl font-heading font-bold text-gradient">VP</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Vinkal <span className="text-gradient">Prajapati</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Web Developer & Designer | Founder of WebForge Studio
            </p>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate about creating beautiful, functional, and user-friendly websites that help businesses 
              establish a strong online presence. With expertise in modern web technologies, I deliver 
              high-quality websites tailored to each client's unique needs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://wa.me/919118245636" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="mailto:vinkal93041@gmail.com">
                <Button variant="heroOutline">
                  <Mail className="mr-2 w-5 h-5" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <a 
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:border-primary/50 transition-all group"
                >
                  <span className="font-heading font-semibold">{project.name}</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">
                Let's Work <span className="text-gradient">Together</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Have a project in mind? Let's discuss how I can help bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://wa.me/919118245636" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  +91 9118245636
                </a>
                <a 
                  href="mailto:vinkal93041@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  vinkal93041@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6">
                <a 
                  href="https://github.com/vinkal93" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutDeveloper;
