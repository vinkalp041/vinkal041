import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8">
            Terms of <span className="text-gradient">Use</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              Last updated: December 2025
            </p>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using WebForge Studio's services, you agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">2. Services</h2>
              <p>
                WebForge Studio provides web design and development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom website design and development</li>
                <li>WordPress development</li>
                <li>E-commerce solutions</li>
                <li>Landing page design</li>
                <li>SEO optimization</li>
                <li>Website maintenance and support</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">3. Payment Terms</h2>
              <p>
                We operate on a 50% advance payment model. The remaining 50% is due upon project completion 
                before the final website handover. Payment can be made via UPI, bank transfer, or online payments.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">4. Intellectual Property</h2>
              <p>
                Upon full payment, all website design and code created for your project becomes your property. 
                However, we reserve the right to showcase the work in our portfolio unless otherwise agreed in writing.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">5. Revisions</h2>
              <p>
                Each plan includes a specific number of revision rounds as mentioned in the pricing. 
                Additional revisions may incur extra charges as discussed before starting the project.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">6. Delivery Timeline</h2>
              <p>
                Delivery timelines (3-10 days) are estimates and may vary based on project complexity and 
                client response times. Delays in providing content or feedback may extend the timeline.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">7. Limitation of Liability</h2>
              <p>
                WebForge Studio shall not be liable for any indirect, incidental, or consequential damages 
                arising from the use of our services or websites created.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">8. Contact</h2>
              <p>
                For any questions regarding these terms, please contact us at:
              </p>
              <p className="text-primary">
                Email: vinkal93041@gmail.com<br />
                WhatsApp: +91 9118245636
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
