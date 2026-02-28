import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  { question: "Website kitne din me ready hoti hai?", answer: "Depending on the project complexity, most websites are delivered within 3-10 days. Simple landing pages can be ready in 3-5 days, while complex e-commerce sites may take 7-10 days. We'll give you an exact timeline after understanding your requirements." },
  { question: "Custom code aur WordPress me difference?", answer: "WordPress is great for blogs, small business sites, and when you need to update content frequently yourself. Custom code (React/Next.js) is better for unique designs, high-performance apps, and when you need complete control. We'll recommend the best option based on your needs." },
  { question: "Logo nahi hai to?", answer: "No problem! We can create a professional logo for you as part of our branding services. We also offer logo design as an add-on service starting at ₹999. Your website will still look great with a text-based logo too." },
  { question: "Hosting/domain kaise hota hai?", answer: "We help you set up hosting and domain registration. Domain costs around ₹500-800/year and hosting starts from ₹1,500/year depending on your needs. We'll guide you through the entire process and can manage it for you if needed." },
  { question: "Support milega?", answer: "Yes! All our plans include free support. Starter plan includes 15 days, Professional includes 30 days, and Premium includes 90 days of free support. After that, we offer affordable maintenance packages or pay-per-update options." },
  { question: "Payment kaise karna hoga?", answer: "We accept UPI, bank transfer, and online payments. We work on a 50% advance and 50% on delivery model. For larger projects, we can discuss milestone-based payments. No hidden charges, ever." },
];

const FAQSection = () => {
  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/919118245636", "_blank");
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. If you don't find what you're looking for, just reach out!
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <ScrollAnimation delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50">
                  <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary py-5">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="hero" size="lg" onClick={handleWhatsAppRedirect}>
                <MessageCircle className="mr-2 w-5 h-5" />Talk on WhatsApp
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
