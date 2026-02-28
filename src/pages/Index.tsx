import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import LiveShowcase from "@/components/LiveShowcase";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="WebForge Studio — Design Forge by Vinkal | Custom Website Development India"
        description="WebForge Studio by Vinkal Prajapati (vinkal041) — Custom websites, WordPress, E-Commerce, Landing Pages. Fast delivery in 3-10 days with lifetime support. Get your business online today!"
        keywords="Design Forge Vinkal, Vinkal Prajapati, vinkal041, WebForge Studio, custom website development, web design India, WordPress development, e-commerce website, landing page design, SEO services, responsive web design, affordable website India, website developer India, Vinkal web developer"
        canonical="https://vinkal041.lovable.app"
      />
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <HowItWorks />
        <ServicesSection />
        <LiveShowcase />
        <BeforeAfterSlider />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
