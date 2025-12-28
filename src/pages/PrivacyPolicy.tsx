import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              Last updated: December 2025
            </p>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">1. Information We Collect</h2>
              <p>
                When you contact us or use our services, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Business details for website development</li>
                <li>Payment information for transactions</li>
                <li>Website usage data through cookies</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">2. How We Use Your Information</h2>
              <p>
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our web development services</li>
                <li>Communicate with you about your project</li>
                <li>Process payments and send invoices</li>
                <li>Send occasional updates about our services (with your consent)</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">3. Data Protection</h2>
              <p>
                We take appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction. Your data is stored securely and only accessed 
                by authorized personnel.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">4. Third-Party Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                information with trusted service providers who assist us in operating our business, 
                provided they agree to keep this information confidential.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">5. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable 
                cookies through your browser settings, though this may affect some website functionality.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">6. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page 
                with an updated revision date.
              </p>
            </section>

            <section className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-heading font-semibold text-foreground">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
