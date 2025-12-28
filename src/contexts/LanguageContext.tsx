import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  home: { en: "Home", hi: "होम" },
  services: { en: "Services", hi: "सेवाएं" },
  showcase: { en: "Live Showcase", hi: "लाइव शोकेस" },
  pricing: { en: "Pricing", hi: "मूल्य" },
  contact: { en: "Contact", hi: "संपर्क" },
  startWebsite: { en: "Start Your Website", hi: "वेबसाइट शुरू करें" },
  heroTitle1: { en: "Custom Websites That", hi: "कस्टम वेबसाइट जो" },
  heroTitle2: { en: "Bring Your Vision", hi: "आपके विज़न को" },
  heroTitle3: { en: "To Life", hi: "जीवन में लाएं" },
  heroSubtext: { 
    en: "We build unique, high-speed & responsive websites — Whether you want WordPress, Custom Code or E-Commerce. Your business deserves a digital identity that stands out.", 
    hi: "हम अद्वितीय, तेज़ और रेस्पॉन्सिव वेबसाइट बनाते हैं — चाहे आपको WordPress, Custom Code या E-Commerce चाहिए।" 
  },
  viewWork: { en: "View Our Work", hi: "हमारा काम देखें" },
  whyChooseUs: { en: "Why Choose Us", hi: "हमें क्यों चुनें" },
  howItWorks: { en: "How It Works", hi: "यह कैसे काम करता है" },
  testimonials: { en: "Testimonials", hi: "प्रशंसापत्र" },
  faq: { en: "FAQ", hi: "सवाल-जवाब" },
  aboutDeveloper: { en: "About Developer", hi: "डेवलपर के बारे में" },
  termsOfUse: { en: "Terms of Use", hi: "उपयोग की शर्तें" },
  privacyPolicy: { en: "Privacy Policy", hi: "गोपनीयता नीति" },
  talkWhatsApp: { en: "Talk on WhatsApp", hi: "WhatsApp पर बात करें" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("webforge-lang") as Language;
    return stored || "en";
  });

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("webforge-lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
