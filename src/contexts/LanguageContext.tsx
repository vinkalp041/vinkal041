import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi" | "ja" | "ru" | "zh" | "es" | "pt" | "ko";

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    ja: string;
    ru: string;
    zh: string;
    es: string;
    pt: string;
    ko: string;
  };
}

const translations: Translations = {
  home: { en: "Home", hi: "होम", ja: "ホーム", ru: "Главная", zh: "首页", es: "Inicio", pt: "Início", ko: "홈" },
  services: { en: "Services", hi: "सेवाएं", ja: "サービス", ru: "Услуги", zh: "服务", es: "Servicios", pt: "Serviços", ko: "서비스" },
  showcase: { en: "Live Showcase", hi: "लाइव शोकेस", ja: "ライブショーケース", ru: "Портфолио", zh: "作品展示", es: "Portafolio", pt: "Portfólio", ko: "포트폴리오" },
  pricing: { en: "Pricing", hi: "मूल्य", ja: "料金", ru: "Цены", zh: "价格", es: "Precios", pt: "Preços", ko: "가격" },
  contact: { en: "Contact", hi: "संपर्क", ja: "お問い合わせ", ru: "Контакты", zh: "联系我们", es: "Contacto", pt: "Contato", ko: "연락처" },
  startWebsite: { en: "Start Your Website", hi: "वेबसाइट शुरू करें", ja: "ウェブサイトを始める", ru: "Начать проект", zh: "开始您的网站", es: "Inicia tu sitio", pt: "Comece seu site", ko: "웹사이트 시작" },
  heroTitle1: { en: "Custom Websites That", hi: "कस्टम वेबसाइट जो", ja: "カスタムウェブサイト", ru: "Уникальные сайты", zh: "定制网站", es: "Sitios web personalizados", pt: "Sites personalizados", ko: "맞춤형 웹사이트" },
  heroTitle2: { en: "Bring Your Vision", hi: "आपके विज़न को", ja: "あなたのビジョンを", ru: "воплотят вашу", zh: "实现您的愿景", es: "que dan vida", pt: "que trazem sua visão", ko: "당신의 비전을" },
  heroTitle3: { en: "To Life", hi: "जीवन में लाएं", ja: "実現する", ru: "мечту в жизнь", zh: "变为现实", es: "a tu visión", pt: "à vida", ko: "현실로" },
  heroSubtext: { 
    en: "We build unique, high-speed & responsive websites — Whether you want WordPress, Custom Code or E-Commerce. Your business deserves a digital identity that stands out.", 
    hi: "हम अद्वितीय, तेज़ और रेस्पॉन्सिव वेबसाइट बनाते हैं — चाहे आपको WordPress, Custom Code या E-Commerce चाहिए।",
    ja: "WordPress、カスタムコード、Eコマースなど、高速でレスポンシブなウェブサイトを構築します。",
    ru: "Мы создаём уникальные, быстрые и адаптивные сайты — WordPress, индивидуальный код или интернет-магазин.",
    zh: "我们构建独特、高速且响应式的网站 - 无论您需要WordPress、定制代码还是电子商务。",
    es: "Construimos sitios web únicos, rápidos y responsivos — Ya sea WordPress, código personalizado o E-Commerce.",
    pt: "Construímos sites únicos, rápidos e responsivos — WordPress, código personalizado ou E-Commerce.",
    ko: "WordPress, 맞춤 코드 또는 E-Commerce 등 고유하고 빠르며 반응형인 웹사이트를 구축합니다."
  },
  viewWork: { en: "View Our Work", hi: "हमारा काम देखें", ja: "作品を見る", ru: "Наши работы", zh: "查看作品", es: "Ver trabajo", pt: "Ver trabalho", ko: "작업 보기" },
  whyChooseUs: { en: "Why Choose Us", hi: "हमें क्यों चुनें", ja: "選ばれる理由", ru: "Почему мы", zh: "为什么选择我们", es: "Por qué elegirnos", pt: "Por que nos escolher", ko: "우리를 선택하는 이유" },
  howItWorks: { en: "How It Works", hi: "यह कैसे काम करता है", ja: "仕組み", ru: "Как это работает", zh: "工作流程", es: "Cómo funciona", pt: "Como funciona", ko: "작동 방식" },
  testimonials: { en: "Testimonials", hi: "प्रशंसापत्र", ja: "お客様の声", ru: "Отзывы", zh: "客户评价", es: "Testimonios", pt: "Depoimentos", ko: "고객 후기" },
  faq: { en: "FAQ", hi: "सवाल-जवाब", ja: "よくある質問", ru: "Вопросы", zh: "常见问题", es: "Preguntas", pt: "Perguntas", ko: "자주 묻는 질문" },
  aboutDeveloper: { en: "About Developer", hi: "डेवलपर के बारे में", ja: "開発者について", ru: "О разработчике", zh: "关于开发者", es: "Sobre el desarrollador", pt: "Sobre o desenvolvedor", ko: "개발자 소개" },
  termsOfUse: { en: "Terms of Use", hi: "उपयोग की शर्तें", ja: "利用規約", ru: "Условия использования", zh: "使用条款", es: "Términos de uso", pt: "Termos de uso", ko: "이용약관" },
  privacyPolicy: { en: "Privacy Policy", hi: "गोपनीयता नीति", ja: "プライバシーポリシー", ru: "Политика конфиденциальности", zh: "隐私政策", es: "Política de privacidad", pt: "Política de privacidade", ko: "개인정보 처리방침" },
  talkWhatsApp: { en: "Talk on WhatsApp", hi: "WhatsApp पर बात करें", ja: "WhatsAppで話す", ru: "Связаться в WhatsApp", zh: "通过WhatsApp联系", es: "Hablar por WhatsApp", pt: "Falar no WhatsApp", ko: "WhatsApp으로 대화" },
  ourServices: { en: "Our Services", hi: "हमारी सेवाएं", ja: "サービス一覧", ru: "Наши услуги", zh: "我们的服务", es: "Nuestros servicios", pt: "Nossos serviços", ko: "우리의 서비스" },
  websiteSolutions: { en: "Website Solutions for", hi: "के लिए वेबसाइट समाधान", ja: "ウェブサイトソリューション", ru: "Решения для", zh: "网站解决方案", es: "Soluciones web para", pt: "Soluções web para", ko: "웹사이트 솔루션" },
  everyBusiness: { en: "Every Business", hi: "हर व्यवसाय", ja: "すべてのビジネス", ru: "каждого бизнеса", zh: "每个企业", es: "cada negocio", pt: "cada negócio", ko: "모든 비즈니스" },
  viewDetails: { en: "View Details", hi: "विवरण देखें", ja: "詳細を見る", ru: "Подробнее", zh: "查看详情", es: "Ver detalles", pt: "Ver detalhes", ko: "자세히 보기" },
  websitesCrafted: { en: "Websites We've", hi: "हमारे द्वारा बनाई गई", ja: "私たちが作った", ru: "Созданные нами", zh: "我们制作的", es: "Sitios que hemos", pt: "Sites que criamos", ko: "우리가 만든" },
  crafted: { en: "Crafted", hi: "वेबसाइटें", ja: "ウェブサイト", ru: "сайты", zh: "网站", es: "creado", pt: "criado", ko: "웹사이트" },
  preview: { en: "Preview", hi: "प्रीव्यू", ja: "プレビュー", ru: "Предпросмотр", zh: "预览", es: "Vista previa", pt: "Visualizar", ko: "미리보기" },
  visit: { en: "Visit", hi: "देखें", ja: "訪問", ru: "Посетить", zh: "访问", es: "Visitar", pt: "Visitar", ko: "방문" },
  getYourOwn: { en: "Get Your Own Website", hi: "अपनी वेबसाइट बनवाएं", ja: "ウェブサイトを作る", ru: "Заказать сайт", zh: "获取您的网站", es: "Obtén tu sitio", pt: "Tenha seu site", ko: "웹사이트 만들기" },
  whatClientsSay: { en: "What Our", hi: "हमारे ग्राहक", ja: "お客様の", ru: "Что говорят", zh: "客户", es: "Lo que dicen", pt: "O que nossos", ko: "고객의" },
  clientsSay: { en: "Clients Say", hi: "क्या कहते हैं", ja: "声", ru: "клиенты", zh: "评价", es: "nuestros clientes", pt: "clientes dizem", ko: "말씀" },
  readyToStart: { en: "Ready To Start?", hi: "शुरू करने के लिए तैयार?", ja: "始める準備はできましたか?", ru: "Готовы начать?", zh: "准备开始了吗？", es: "¿Listo para empezar?", pt: "Pronto para começar?", ko: "시작할 준비가 되셨나요?" },
  navigation: { en: "Navigation", hi: "नेविगेशन", ja: "ナビゲーション", ru: "Навигация", zh: "导航", es: "Navegación", pt: "Navegação", ko: "탐색" },
};

export const languageNames: Record<Language, string> = {
  en: "English",
  hi: "हिंदी",
  ja: "日本語",
  ru: "Русский",
  zh: "中文",
  es: "Español",
  pt: "Português",
  ko: "한국어"
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
    return translations[key]?.[language] || translations[key]?.["en"] || key;
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
