import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants, useInView, animate } from 'framer-motion';
import {
  Menu, X, ChevronRight, Globe, Zap, Shield, Users, GraduationCap,
  Code2, Cpu, Network, TrendingUp, BookOpen, ArrowRight, CheckCircle, Mail, Star, MoreHorizontal,
  Facebook, Youtube
} from 'lucide-react';

// Official WhatsApp Logo SVG
const WhatsAppIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Official X (Twitter) Logo SVG
const XIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25H20.97L14.236 9.51L21.51 21.75H15.21L10.971 15.255L5.505 21.75H2.775L9.99 12.915L3.27 2.25H9.99L14.001 9.48L18.244 2.25ZM17.271 19.605H18.891L7.053 4.395H5.295L17.271 19.605Z" fill="currentColor" />
  </svg>
);

// TikTok Logo SVG (Original - Authentic Brand Logo)
const TikTokIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// Instagram Logo SVG (Original - Authentic Brand Logo)
const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
import './index.css';
import './App.css';
import {
  SolutionsPage,
  IndustryUseCasesPage,
  DetailedPricingPage,
  AcademyPage,
  ContactHubPage,
  ProgramsPage,
  BlogPage,
  PrivacyPolicyPage,
} from './SidebarPages';
import {
  AIforEducationPage,
  PartnersPage,
  AboutOWAPage,
  ReferralPage,
  WebDevPage,
  AIAgentsPage,
  StarlinkPage,
  CorporatePage,
  GadgetPage,
  OWATechPage,
} from './SidebarPages2';

// ============================================================
// ANIMATION VARIANTS
// ============================================================

// Elegant bezier curves for Stripe-like smooth animations
const smoothEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: smoothEasing
    },
  }),
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// Hero slideshow images — OWA Brand + Original (all in /assets/hero/)
const heroImages = [
  '/assets/hero/Africa_Neural_map.png',
  '/assets/hero/hero_africa_team.png',
  '/assets/hero/hero_phenomenal.jpg',
  '/assets/hero/hero_automation.jpg',
  '/assets/hero/hero_owa_tech.jpg',
  '/assets/hero/hero_owa_ai.jpg',
  '/assets/hero/hero_unsplash_1.jpg',
  '/assets/hero/hero_unsplash_2.jpg',
  '/assets/hero/hero_unsplash_3.jpg',
  '/assets/hero/hero_unsplash_4.jpg',
  '/assets/blog/bbf_college_education_ai.png',
  '/assets/blog/gands_arts_media_studio.png',
  '/assets/blog/paivepo_domboshava_eco_tourism.png',
];

// ============================================================
// HERO SLIDESHOW COMPONENT - Stripe-like smooth animations
// ============================================================

const HeroSlideshow: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const interval = 8000; // Slower, more cinematic speed for hero

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % heroImages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isPaused, interval]);

  // Premium animation variations for the main hero
  const getInitial = (idx: number) => {
    const variants = [
      { opacity: 0, scale: 1.1, x: '2%', y: '1%' },
      { opacity: 0, scale: 1.15, x: '-2%', y: '-1%' },
      { opacity: 0, scale: 1.05, rotate: 1 },
      { opacity: 0, scale: 1.12, y: '2%' }
    ];
    return variants[idx % variants.length];
  };

  return (
    <div
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#000' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={getInitial(index)}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 2 } }}
          transition={{
            opacity: { duration: 2, ease: "easeInOut" },
            scale: { duration: interval / 1000 + 1, ease: "linear" },
            x: { duration: interval / 1000, ease: "linear" },
            y: { duration: interval / 1000, ease: "linear" }
          }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <img
            src={heroImages[index]}
            alt={`Hero ${index + 1}`}
            className="hero-slide-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.45) contrast(1.1)', // Deeper contrast for high-end look
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Premium Multi-Stage Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'radial-gradient(circle at 20% 50%, transparent 0%, rgba(0,0,0,0.4) 100%), linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

// ============================================================
// KEN BURNS SLIDESHOW - World-class Stripe-style animations
// ============================================================

const KenBurnsSlideshow: React.FC<{ images: string[]; interval?: number; seed?: number }> = ({ images, interval = 7000, seed = 0 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    // Stagger the initial start based on seed to prevent synchronization
    const initialDelay = (seed % 3) * 1000;
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        setIndex((prev: number) => (prev + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }, initialDelay);
    return () => clearTimeout(timeout);
  }, [images.length, interval, seed]);

  if (images.length === 0) return null;

  // Determine randomized animation direction based on index and seed
  const getInitial = () => {
    const directions = [
      { opacity: 0, scale: 1.2, x: seed % 2 === 0 ? '5%' : '-5%' },
      { opacity: 0, scale: 1.15, y: seed % 2 === 0 ? '5%' : '-5%' },
      { opacity: 0, scale: 1.25, rotate: seed % 2 === 0 ? 2 : -2 }
    ];
    return directions[index % directions.length];
  };

  const getExit = () => {
    const exits = [
      { opacity: 0, scale: 0.9, x: seed % 2 === 0 ? '-5%' : '5%' },
      { opacity: 0, scale: 0.95, y: seed % 2 === 0 ? '-2%' : '2%' },
      { opacity: 0, filter: 'blur(10px)', scale: 1.1 }
    ];
    return exits[index % exits.length];
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#050505' }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={getInitial()}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0, filter: 'blur(0px)' }}
          exit={getExit()}
          transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
            scale: { duration: interval / 1000 + 1, ease: "linear" }
          }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <img
            src={images[index]}
            alt="Training Showcase"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
      </AnimatePresence>
      {/* Dynamic Overlay for Depth */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(0,0,0,0.5) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.5) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)', pointerEvents: 'none' }} />
    </div>
  );
};

// ============================================================
// ANIMATED IMAGE GALLERY - With hover effects and smooth reveals
// ============================================================

// ============================================================
// SECTION LABEL COMPONENT
// ============================================================

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div variants={fadeUp} className="section-label-wrapper" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
    <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.4)' }} />
    <span className="text-label" style={{ color: 'var(--accent-blue)', opacity: 0.9 }}>{children}</span>
  </motion.div>
);

// ============================================================
// ANIMATED COUNTER COMPONENT
// ============================================================

const Counter: React.FC<{ target: string; duration?: number }> = ({ target, duration = 10.0 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericString = target.replace(/[^0-9]/g, '');
  const hasComma = target.includes(',');
  const suffix = target.replace(/[0-9,]/g, '');
  const targetNumber = parseInt(numericString, 10) || 0;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetNumber, {
        duration,
        ease: [0.33, 1, 0.68, 1],
        onUpdate: (latest) => {
          const rounded = Math.round(latest);
          const formatted = hasComma ? rounded.toLocaleString() : rounded.toString();
          setDisplayValue(formatted);
        }
      });
      return controls.stop;
    }
  }, [isInView, targetNumber, duration, hasComma]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

// ============================================================
// INFINITE MARQUEE COMPONENT
// ============================================================

const Marquee: React.FC<{
  children: React.ReactNode;
  speed?: number;
}> = ({ children }) => {
  return (
    <div className="marquee-root" style={{ cursor: 'grab' }}>
      <div className="marquee-content">
        <div key="set-1" style={{ display: 'flex', gap: '24px' }}>
          {children}
        </div>
        <div key="set-2" style={{ display: 'flex', gap: '24px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// APP
// ============================================================

type PageId = 'solutions' | 'use-cases' | 'pricing' | 'academy' | 'contact-hub' | 'programs' | 'ai-education' | 'partners' | 'about-owa' | 'referral' | 'web-dev' | 'ai-agents' | 'starlink' | 'corporate' | 'gadgets' | 'owa-tech' | 'blog' | 'privacy-policy' | null;

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<PageId>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Reset to hero section on page refresh/load
  useEffect(() => {
    // The active page defaults to null in useState anyway; removing setState to prevent lint error
  }, []);

  const openPage = (id: PageId) => {
    setSidebarOpen(false);
    setTimeout(() => setActivePage(id), 120);
  };
  const closePage = () => setActivePage(null);
  const [scrolled, setScrolled] = useState(false);
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [showContactPicker, setShowContactPicker] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in the required fields (Name, Email, and Message).");
      return;
    }
    setShowContactPicker(true);
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:info@owatech-ai.com?subject=${subject}&body=${body}`;
    setShowContactPicker(false);
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(`*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Company:* ${formData.company}\n\n*Message:*\n${formData.message}`);
    window.open(`https://wa.me/263772479492?text=${text}`, '_blank');
    setShowContactPicker(false);
  };

  // ── Right-side sidebar pages (grouped) ──────────────────────────────
  type SidebarEntry = { label: string; pageId?: PageId; href?: string; highlight?: boolean; isGroup?: boolean };
  const sidebarPages: SidebarEntry[] = [
    { label: 'SERVICES', isGroup: true },
    { label: 'Our Solutions', pageId: 'solutions' },
    { label: 'Web Development', pageId: 'web-dev' },
    { label: 'AI Agents & Automation', pageId: 'ai-agents' },
    { label: 'Starlink Connectivity', pageId: 'starlink' },
    { label: 'Corporate Identity', pageId: 'corporate' },
    { label: 'Gadget Sales', pageId: 'gadgets' },
    { label: 'Official Pricing', pageId: 'pricing' },
    { label: 'EDUCATION', isGroup: true },
    { label: 'OWA Academy', pageId: 'academy' },
    { label: 'Training & Programs', pageId: 'programs', highlight: true },
    { label: 'AI for Education', pageId: 'ai-education' },
    { label: 'Industry Use Cases', pageId: 'use-cases' },
    { label: 'COMPANY', isGroup: true },
    { label: 'About OWA', pageId: 'about-owa' },
    { label: 'Our Partners', pageId: 'partners' },
    { label: 'OWA Technologies', pageId: 'owa-tech', highlight: true },
    { label: 'REWARDS', isGroup: true },
    { label: 'Referral & Commissions', pageId: 'referral' },
    { label: 'Contact Hub', pageId: 'contact-hub' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'solutions', 'pricing', 'contact'];

    const onScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check initial position
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Services', href: '#about', id: 'about' },
    { label: 'AI Training', href: '#services', id: 'services' },
    { label: 'About', href: '#solutions', id: 'solutions' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const services: Array<{
    icon: React.ReactNode;
    title: string;
    pageId: PageId;
    desc: string;
    highlights: string[];
  }> = [
      {
        icon: <Cpu size={24} color="#60a5fa" />,
        title: 'AI-Powered Websites',
        pageId: 'solutions',
        desc: 'Intelligent websites that learn, adapt, and convert with integrated AI systems tailored for your market.',
        highlights: ['Natural Language Chatbots', 'Predictive UX', 'Smart Lead Capture'],
      },
      {
        icon: <Zap size={24} color="#60a5fa" />,
        title: 'Business Automation',
        pageId: 'ai-agents',
        desc: 'Eliminate repetitive workflows and scale operations with custom AI agents that run 24/7.',
        highlights: ['Process Automation', 'AI Agents', 'Data Pipelines'],
      },
      {
        icon: <Network size={24} color="#60a5fa" />,
        title: 'Digital Transformation',
        pageId: 'solutions',
        desc: 'End-to-end modernization journeys for businesses ready to embrace the AI-powered economy.',
        highlights: ['Infrastructure Audit', 'Cloud Migration', 'AI Strategy'],
      },
      {
        icon: <Code2 size={24} color="#60a5fa" />,
        title: 'Custom AI Systems',
        pageId: 'solutions',
        desc: 'Bespoke intelligent systems engineered from first principles to solve your unique business challenges.',
        highlights: ['LLM Integration', 'Custom Models', 'API Development'],
      },
      {
        icon: <GraduationCap size={24} color="#60a5fa" />,
        title: 'AI Training Programs',
        pageId: 'programs',
        desc: 'Structured learning pathways for students, graduates, and professionals entering the AI economy.',
        highlights: ['Bootcamps', 'Certifications', 'Mentorship'],
      },
      {
        icon: <BookOpen size={24} color="#60a5fa" />,
        title: 'Teacher & Educator Workshops',
        pageId: 'ai-education',
        desc: 'Empowering educators to integrate AI literacy and digital skills into the classroom of tomorrow.',
        highlights: ['Curriculum Design', 'AI Tools Training', 'Ongoing Support'],
      },
    ];

  const stats = [
    { value: '120+', label: 'Businesses Automated' },
    { value: '2,400+', label: 'Students Trained' },
    { value: '18', label: 'African Countries' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const whyUs = [
    { icon: <Globe size={20} />, title: 'Africa-First Design', desc: 'Built for low-bandwidth, diverse markets, and the realities of doing business on the continent.' },
    { icon: <Shield size={20} />, title: 'Responsible AI', desc: 'We deploy AI ethically — transparent systems with human oversight at every step.' },
    { icon: <TrendingUp size={20} />, title: 'Results-Driven', desc: 'We measure success in real business outcomes: revenue growth, cost reduction, efficiency gains.' },
    { icon: <Users size={20} />, title: 'Dedicated Partnership', desc: 'Not a vendor — a long-term growth partner embedded in your success story.' },
  ];

  type Testimonial = {
    quote: string;
    name: string;
    role: string;
    rating: number;
    isPartner?: boolean;
    isPromo?: boolean;
    image?: string;
  };

  const testimonials: Testimonial[] = [
    // --- PARTNERS ---
    {
      quote: "OWA's digital infrastructure has transformed our hub. We've seen a 20% increase in international bookings through their AI-powered hospitality systems.",
      name: "PaiVepo Domboshava",
      role: "Eco-Tourism & Heritage Partner",
      rating: 5,
      isPartner: true,
      image: "/PAIVEPO/476278681_595239183302316_7350128413608806885_n.jpg"
    },
    {
      quote: "Investing in the future of education? Blessed Be Faith College integrates OWA's AI training directly into our Hospitality & Digital curricula.",
      name: "BBF College",
      role: "Strategic Education Partner",
      rating: 5,
      isPartner: true,
      image: "/BBF PICS/IMG-20240811-WA0004.jpg"
    },
    {
      quote: "As authorized Starlink resellers, OWA brings high-speed connectivity to remote schools and homes, ensuring no learner is left behind.",
      name: "Starlink Connectivity",
      role: "Connectivity Partner",
      rating: 5,
      isPartner: true,
      image: "/assets/owa_blogs/68875c62276b2cb6970c19da-starlink-v2-satellite-dish-kit-with.webp"
    },
    {
      quote: "We bring warmth and elegance to every home. Oppah's Home and Deco handles interior decor, curtains, and stylish living solutions for OWA clients.",
      name: "Oppah's Home & Deco",
      role: "Interior & Living Partner",
      rating: 5,
      isPartner: true,
      image: "/OPPAH'S HOME AND DECO/IMG-20251124-WA0000.jpg"
    },
    // --- NARRATIVE CARDS (PICTURE-LESS) ---
    {
      quote: "Our mission is to create a generation of creators, not just consumers. The AI era is here, and OWA is making sure Africa leads the charge.",
      name: "The OWA Vision",
      role: "Empowerment Agenda",
      rating: 5,
      isPromo: true,
      image: "/OSIX/hero_africa_team.png"
    },
    {
      quote: "Our official media partner. GANDS ARTS MEDIA handles visual identity, professional photography, and AI video ads for our unified movement.",
      name: "GANDS ARTS MEDIA",
      role: "Media & Branding Partner",
      rating: 5,
      isPartner: true,
      image: "/assets/owa_blogs/FB_IMG_1730127872443_(1)_(1).jpg"
    },
    {
      quote: "In a world of rapidly shifting technologies, skills are the only true currency. We are building the infrastructure for youth to participate in global trade.",
      name: "Skill Monetization",
      role: "Marketplace Insight",
      rating: 5,
      image: "/OSIX/Students_on_laptop_(1).jpg"
    },
    // --- SUCCESS STORIES ---
    {
      quote: "The AI literacy workshop for our teachers was eye-opening. We are now integrating AI co-pilots in lesson planning for better student outcomes.",
      name: "Sekai Moyo",
      role: "Head of ICT, Harare Central School",
      rating: 5,
      image: "/assets/owa_blogs/ITAD_AFRICA_NEW_LAPTOPS-958345_1200x800.jpg"
    },
    {
      quote: "After the OWA training, I see AI as a powerful ally. It helps me grade assessments faster and identify early where students are struggling.",
      name: "Mrs. Chieza",
      role: "High School Educator",
      rating: 5,
      image: "/OSIX/people-working-with-ai-operated-devices.jpg"
    },
    {
      quote: "Collective progress requires a unified movement. From remote villages to urban centers, we are connecting talent to the international stage.",
      name: "Unified Movement",
      role: "Strategic Goal",
      rating: 5,
      isPartner: true,
      image: "/OSIX/partnership_1.jpg"
    },
    {
      quote: "My son's grades in Computer Science jumped from a C to an A since he started using OWA's AI study assist tools. He's ready for any university.",
      name: "Tendai Dube",
      role: "Parent of G12 Student",
      rating: 5,
      image: "/OSIX/hf_20260228_144929_34950cf9-5986-42c2-befa-5157cd87ad3a.jpeg"
    },
    {
      quote: "The gap between degree and job vanishes when you focus on technical demand. OWA is the bridge to that high-value marketplace.",
      name: "Job Market Gap",
      role: "Economic Vision",
      rating: 5,
      isPromo: true,
      image: "/OSIX/hands-holding-neon-sign.jpg"
    },
    {
      quote: "OWA automated our fleet dispatching using AI Agents. We've seen a 30% reduction in fuel waste and faster turnaround times. Truly world-class.",
      name: "Farai Mutamba",
      role: "CEO, ZimLogistic Services",
      rating: 5,
      image: "/OSIX/healthcare-technology.jpg"
    },
    {
      quote: "Practical skills in prompt engineering and model fine-tuning helped me land an internship at a top tech firm. OWA is bridging the digital divide.",
      name: "Nyasha Chidero",
      role: "Final Year IT Student",
      rating: 5,
      image: "/OSIX/Whisk_26f932acaba0ea1938049f65437f286fdr.jpeg"
    },
    // --- COMMISSIONS & PROMOS ---
    {
      quote: "Join the OWA Movement! Earn up to 40% commission on building our unified ecosystem. Collective monetization for African youth starts here.",
      name: "OWA REWARDS",
      role: "40% Referral Program",
      rating: 5,
      isPromo: true,
      image: "/private blogs/hero_automation.jpg"
    },
    {
      quote: "Sustainability through technology. We don't just teach AI; we build production systems that pay for themselves in months, not years.",
      name: "Sustainable Tech",
      role: "Business Model",
      rating: 5,
      image: "/OSIX/media_1e9527932a5ecf365f8b5c3431cb2ba1fcb038d74.png"
    },
    {
      quote: "Loyalty has its rewards. Get up to 50% off rewards and discounts for our organization partners and returning clients.",
      name: "OWA PROMOTIONS",
      role: "50% Off Rewards",
      rating: 5,
      isPromo: true,
      image: "/private blogs/hero_phenomenal.jpg"
    },
    {
      quote: "Need the perfect setup for coding? We supply high-performance laptops and specialized accessories designed for AI developers and academics.",
      name: "OWA Tech Gadgets",
      role: "Premium Workstation Supplies",
      rating: 5,
      isPromo: true,
      image: "/assets/owa_blogs/ITAD_AFRICA_NEW_LAPTOPS-958345_1200x800.jpg"
    },
    {
      quote: "Beyond work, we fuel innovation through play. Get the latest PlayStations and gaming accessories at OWA, supporting the gaming economy.",
      name: "Gaming Hub",
      role: "Entertainment Gear",
      rating: 5,
      isPromo: true,
      image: "/OSIX/Whisk_7a2c3e8aeb58207a2544f55db851f494dr.png"
    },
  ];

  const osixImages = [
    '/OSIX/1663608662927.jpg',
    '/OSIX/1671856511850.jpg',
    '/OSIX/AdvanceQuip-59.jpg',
    '/assets/owa_blogs/Buy-Now-Pay-Later-in-Iran.png',
    '/OSIX/ChatGPT Image Mar 3, 2026, 10_32_22 AM.png',
    '/OSIX/diHPYGSCyNdqdo7SHr5FTY-1200-80.jpg',
    '/OSIX/FB_IMG_1730127872443_(1)_(1).jpg',
    '/OSIX/hands-holding-neon-sign (1).jpg',
    '/OSIX/hands-holding-neon-sign.jpg',
    '/OSIX/healthcare-technology.jpg',
    '/OSIX/hf_20260228_144929_34950cf9-5986-42c2-befa-5157cd87ad3a.jpeg',
    '/OSIX/iStock-1333390966-1.jpg',
    '/OSIX/ITAD_AFRICA_NEW_LAPTOPS-958345_1200x800.jpg',
    '/OSIX/media_1e9527932a5ecf365f8b5c3431cb2ba1fcb038d74.png',
    '/OSIX/people-working-with-ai-operated-devices.jpg',
    '/OSIX/pupilsatthec.jpg',
    '/OSIX/WhatsApp Image 2025-07-14 at 15.10.20.jpeg',
    '/OSIX/Whisk_26f932acaba0ea1938049f65437f286fdr.jpeg',
    '/OSIX/Whisk_32deb3a19fdf1a8bd204171e1d3ba844dr.jpeg',
    '/OSIX/Whisk_4add2a7c97e169da1cf4a910eefc4c94dr.png',
    '/OSIX/Whisk_53efe76531da631a6d045a12bb09e938dr.png',
    '/OSIX/Whisk_7a2c3e8aeb58207a2544f55db851f494dr.png',
    '/OSIX/Whisk_8bfcbaa6de28f17aab1458cd5b9e532eeg.jpeg',
    '/OSIX/Whisk_9c456414f9d667c9fbf4729068a8d4eedr.png',
    '/OSIX/ZHfo1O8H8PpzDiRGQexDwPBtZpA.png',
    '/OSIX/SAoIlMxF8HNLNnT13r3a6_DzlfTjPNmlwmQ-MD3tgov-EZ5KSnbHWoWgRkcz4nzvfvOVEDVvEcaM2pKek47-uNo_O7b7aFjjlAc1yxeRAtPQQT5da-4brtUi5Y71uWwIxwb1UFtJoxKahya8tv119A.png'
  ];

  const training = [
    {
      audience: 'Students & Young Professionals',
      title: 'Break Into the AI Economy',
      desc: 'Intensive bootcamps and structured programs for graduates and tech-curious professionals across Africa. Earn industry-recognised certifications and get placed.',
      features: ['Prompt Engineering', 'AI Tool Mastery', 'No-Code Automation', 'Python for AI', 'Portfolio Projects', 'Job Placement Support'],
      cta: 'Apply Now',
      slideshow: osixImages.slice(0, 15),
      seed: 42
    },
    {
      audience: 'Educators & Teachers',
      title: 'Teach the Future, Today',
      desc: 'Practical workshops and teacher professional development designed to embed AI literacy into school and university curricula.',
      features: ['AI in Education Frameworks', 'Classroom AI Tools', 'Curriculum Co-Design', 'Ongoing CPD Support', 'Resource Libraries', 'Community of Practice'],
      cta: 'Register School',
      slideshow: osixImages.slice(15, 30),
      seed: 77
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$150',
      period: 'Starting from $49/mo',
      desc: 'Affordable AI entry point for small businesses and startups. Fully negotiable.',
      features: ['1 AI-powered workflow', 'Basic chatbot integration', 'Monthly performance report', 'Standard support'],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$350',
      period: 'Starting from $99/mo',
      desc: 'Comprehensive AI automation for growing SMEs. Flexible payment plans.',
      features: ['4 AI workflows', 'Custom AI chatbot', 'CRM integration', 'Weekly strategy call', 'Priority support'],
      cta: 'Most Popular',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Negotiable Rates',
      desc: 'Full-scale AI transformation tailored to your specific infrastructure and goals.',
      features: ['Unlimited workflows', 'Custom AI model training', 'Full digital transformation', 'Dedicated account manager', '24/7 support SLA'],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <>
      {/* ===================== NAV ===================== */}
      <nav
        className="main-nav"
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 100,
          padding: scrolled ? '16px 0' : '24px 0',
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0)'}`,
          transition: 'padding 0.4s ease, background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src="/assets/owa_logo.jpg"
              alt="OWA Technologies Logo"
              style={{
                height: 44,
                width: 44,
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
            <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.03em' }}>OWA TECHNOLOGIES</span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nav-link ${activeSection === l.id ? 'active' : ''}`}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px' }}>Get Started</a>
            {/* ··· Sidebar trigger — Starlink style */}
            <button
              id="sidebar-trigger"
              onClick={() => setSidebarOpen(true)}
              title="More pages"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,255,255,0.7)', padding: '4px 8px',
                display: 'flex', alignItems: 'center',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              <MoreHorizontal size={22} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'none' }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ===================== RIGHT SIDEBAR (Starlink-style) ===================== */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSidebarOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 110,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Panel */}
            <motion.div
              key="sidebar-panel"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: 300, zIndex: 120,
                background: '#111111',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', flexDirection: 'column',
                overflowY: 'auto',
              }}
            >
              {/* Panel Header */}
              <div style={{
                display: 'flex', justifyContent: 'flex-end',
                padding: '24px 24px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <button
                  onClick={() => setSidebarOpen(false)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'rgba(255,255,255,0.5)', padding: 4,
                    display: 'flex', alignItems: 'center',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Links */}
              <nav style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
                {sidebarPages.map((page, i) =>
                  page.isGroup ? (
                    <motion.div
                      key={page.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.03 }}
                      style={{
                        padding: '18px 28px 8px',
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        letterSpacing: '0.18em',
                        color: 'rgba(255,255,255,0.25)',
                        textTransform: 'uppercase',
                        borderTop: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        marginTop: i > 0 ? 4 : 0,
                      }}
                    >
                      {page.label}
                    </motion.div>
                  ) : (
                    <motion.button
                      key={page.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => {
                        if (page.pageId) {
                          openPage(page.pageId);
                        } else if (page.href) {
                          setSidebarOpen(false);
                          window.location.hash = page.href.replace('#', '');
                        }
                      }}
                      style={{
                        display: 'flex', width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 28px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: page.highlight ? '#60a5fa' : 'rgba(255,255,255,0.75)',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        transition: 'all 0.2s ease',
                        background: 'none', border: 'none', cursor: 'pointer',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                        e.currentTarget.style.color = page.highlight ? '#93c5fd' : '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = page.highlight ? '#60a5fa' : 'rgba(255,255,255,0.75)';
                      }}
                    >
                      {page.label}
                      <ChevronRight size={12} style={{ opacity: 0.35 }} />
                    </motion.button>
                  )
                )}
              </nav>

              {/* Panel Footer */}
              <div style={{
                padding: '24px 28px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  © 2026 OWA Technologies
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 90,
              background: 'rgba(0,0,0,0.97)',
              backdropFilter: 'blur(20px)',
              padding: '100px 32px 40px',
              display: 'flex', flexDirection: 'column', gap: 0,
            }}
          >
            <div style={{ flex: 1, overflowY: 'auto', paddingRight: 8 }}>
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0, transition: { delay: i * 0.04 } }
                  }}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em',
                    padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
                    color: 'white', display: 'block',
                  }}
                >
                  {l.label}
                </motion.a>
              ))}

              <div style={{ marginTop: 32 }}>
                <p style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: 20, textTransform: 'uppercase' }}>Discover More</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 8px' }}>
                  {sidebarPages.filter(p => !p.isGroup).map((p, i) => (
                    <motion.a
                      key={p.label}
                      href={p.href || '#'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.03) }}
                      onClick={(e) => {
                        e.preventDefault();
                        if (p.pageId) {
                          openPage(p.pageId);
                          setMenuOpen(false);
                        }
                      }}
                      style={{
                        fontSize: '0.8rem', fontWeight: 700, color: p.highlight ? '#60a5fa' : 'rgba(255,255,255,0.6)',
                        padding: '14px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.04)',
                        border: p.highlight ? '1px solid rgba(96,165,250,0.2)' : '1px solid transparent',
                        display: 'flex', alignItems: 'center', gap: 6
                      }}
                    >
                      {p.label} <ChevronRight size={12} opacity={0.5} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary"
              style={{ marginTop: 40, textAlign: 'center', fontSize: '1rem', padding: '18px' }}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== HERO ===================== */}
      <section id="hero" className="hero-section" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'flex-end', paddingBottom: 60, overflow: 'hidden' }}>
        {/* Animated Hero Slideshow */}
        <HeroSlideshow />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{ maxWidth: 760 }}
          >
            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.5)' }} />
              <span className="text-label">Africa's Leading AI Agency</span>
            </motion.div>
            <motion.h1 variants={fadeUp} style={{ marginBottom: 24, textTransform: 'uppercase' }}>
              Empowering Africa<br />With AI
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', maxWidth: 560, marginBottom: 48, fontWeight: 300, lineHeight: 1.8 }}
            >
              We build intelligent systems, automate business operations, and train the next generation of African AI talent — from Lagos to Cape Town and beyond.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#services" className="btn btn-primary">
                Explore Services <ChevronRight size={16} />
              </a>
              <button
                onClick={() => openPage('programs')}
                className="btn btn-outline"
                style={{ cursor: 'pointer' }}
              >
                View Training Programs
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute', bottom: 32, right: 40, zIndex: 2,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          }}
        >
          <span className="text-label" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>scroll</span>
          <div style={{ width: 1, height: 48, background: 'rgba(255,255,255,0.3)' }} />
        </motion.div>
      </section>

      {/* ===================== STATS ===================== */}
      <section style={{ padding: '40px 0', borderBottom: '1px solid var(--border)' }} className="reveal-on-scroll section-stats">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '48px 24px' }}>
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} style={{ textAlign: 'center' }}>
                <div className="stat-number">
                  <Counter target={s.value} />
                </div>
                <p className="text-label" style={{ marginTop: 8 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT PREVIEW ===================== */}
      <section id="about" className="py-24 reveal-on-scroll">
        <div className="container">
          <motion.div variants={fadeUp} style={{ marginBottom: 56, maxWidth: 640 }}>
            <SectionLabel>What We Do</SectionLabel>
            <h2>AI Solutions Built for<br />African Business</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 20, lineHeight: 1.8, fontSize: '1.05rem' }}>
              From intelligent websites to full-scale automation systems — we deliver measurable transformation across every domain of your business.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {services.map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="card"
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => svc.pageId && openPage(svc.pageId as PageId)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="service-icon" style={{ marginBottom: 24 }}>
                  {svc.icon}
                </div>
                <h3 style={{ marginBottom: 12, fontSize: '1.15rem' }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.92rem', marginBottom: 24 }}>{svc.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {svc.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                      <CheckCircle size={13} color="#2563EB" /> {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES PREVIEW ===================== */}
      <section id="services" className="py-24 border-t border-white/10 reveal-on-scroll">
        <div className="container">
          <motion.div variants={fadeUp} style={{ marginBottom: 56, maxWidth: 640 }}>
            <SectionLabel>Training & Education</SectionLabel>
            <h2>Powering Africa's AI<br />Talent Pipeline</h2>
          </motion.div>

          <div className="training-programs-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {training.map((program, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 80,
                  alignItems: 'center',
                  direction: i % 2 !== 0 ? 'rtl' : 'ltr',
                }}
                className="training-grid"
              >
                {/* Text */}
                <div style={{ direction: 'ltr' }}>
                  <span className="text-label" style={{ marginBottom: 16, display: 'block' }}>{program.audience}</span>
                  <h2 style={{ marginBottom: 20, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>{program.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 36, fontSize: '1rem' }}>{program.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: 40 }}>
                    {program.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)' }}>
                        <CheckCircle size={14} color="#2563EB" /> {f}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <a href="#contact" className="btn btn-primary">
                      {program.cta} <ArrowRight size={15} />
                    </a>
                    <button
                      onClick={() => openPage('programs')}
                      className="btn btn-outline"
                      style={{ padding: '0 24px', opacity: 0.8 }}
                    >
                      View Curriculum
                    </button>
                  </div>
                </div>
                {/* Image Slideshow using OSIX folder */}
                <div style={{
                  borderRadius: 16, overflow: 'hidden',
                  aspectRatio: '4/3',
                  border: '1px solid var(--border)',
                  direction: 'ltr',
                  background: '#000'
                }}>
                  <KenBurnsSlideshow images={program.slideshow || []} seed={program.seed} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 border-t border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#0A0A0A] reveal-on-scroll">
        {/* Decorative globe/network bg */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.4), transparent 50%)' }} />
        <div className="container relative z-10">
          <motion.div variants={fadeUp} style={{ marginBottom: 56, maxWidth: 600 }}>
            <SectionLabel>Why OWA Tech</SectionLabel>
            <h2>Built Different.<br />Built for Africa.</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {whyUs.map((w, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                style={{
                  padding: '36px 28px',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 8,
                  background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20, color: '#60a5fa',
                }}>
                  {w.icon}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>{w.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS (MARQUEE) ===================== */}
      <section className="py-20 border-t border-white/10 tech-grid-bg section-testimonials" style={{ overflow: 'hidden' }}>
        <div className="container">
          <motion.div variants={fadeUp} style={{ marginBottom: 56, maxWidth: 600 }}>
            <SectionLabel>Media & Success Stories</SectionLabel>
            <h2>Trusted Across<br />the Continent</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 16 }}>
              Real impact from the heart of Africa. Witness the digital transformation of local businesses.
            </p>
          </motion.div>
        </div>

        <Marquee>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`card-item ${t.isPartner ? 'card-partner' : t.isPromo ? 'card-promo' : ''}`}
              style={{
                width: 440,
                padding: '36px',
                borderRadius: 24,
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(12px)',
                flexShrink: 0,
                display: 'grid',
                gridTemplateColumns: t.image ? '120px 1fr' : '1fr',
                gap: 24,
                height: 320,
                whiteSpace: 'normal',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              whileHover={{
                y: -4,
                borderColor: t.isPartner ? 'rgba(37,99,235,0.4)' : t.isPromo ? 'rgba(249,115,22,0.4)' : 'rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t.image && (
                <div style={{ borderRadius: 16, overflow: 'hidden', height: '100%', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} fill={t.isPromo ? "#f97316" : "#fbbf24"} color={t.isPromo ? "#f97316" : "#fbbf24"} />
                    ))}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: 16, fontSize: '0.9rem', fontWeight: 500 }}>
                    "{t.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                  <p style={{ fontWeight: 800, fontSize: '0.94rem', color: t.isPartner ? '#60a5fa' : t.isPromo ? '#fb923c' : '#fff', marginBottom: 2 }}>{t.name}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.74rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </section>

      {/* ===================== PRICING ===================== */}
      <section id="pricing" className="py-16 border-t border-white/10 tech-grid-bg reveal-on-scroll section-pricing" style={{ padding: '48px 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.div variants={fadeUp} style={{ marginBottom: 48, textAlign: 'center' }}>
            <SectionLabel>Pricing</SectionLabel>
            <h2>Simple, Transparent Pricing</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 16, fontSize: '1.05rem' }}>
              All plans include onboarding, training, and 30-day support.
            </p>
          </motion.div>
          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto', position: 'relative', top: '-20px' }}>
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                style={{
                  padding: '44px 36px',
                  borderRadius: 16,
                  border: plan.highlighted ? '1px solid rgba(37,99,235,0.5)' : '1px solid var(--border)',
                  background: plan.highlighted ? 'linear-gradient(135deg, rgba(27,63,160,0.2), rgba(37,99,235,0.1))' : 'rgba(255,255,255,0.025)',
                  position: 'relative',
                  transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
                  zIndex: plan.highlighted ? 2 : 1,
                }}
              >
                {plan.highlighted && (
                  <span style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--secondary)', color: 'white',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                    padding: '4px 16px', borderRadius: 99, textTransform: 'uppercase',
                  }}>
                    Most Popular
                  </span>
                )}
                <span className="text-label" style={{ display: 'block', marginBottom: 16 }}>{plan.name}</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                  <span style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.04em' }}>{plan.price}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{plan.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 36, lineHeight: 1.7 }}>{plan.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)' }}>
                      <CheckCircle size={14} color="#2563EB" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'} `}
                  style={{ width: '100%' }}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="py-20 border-t border-white/10" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <motion.div
            variants={fadeUp}
            style={{
              background: 'linear-gradient(135deg, rgba(27,63,160,0.3), rgba(37,99,235,0.15))',
              border: '1px solid rgba(37,99,235,0.25)',
              borderRadius: 24,
              padding: '80px 64px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow orb */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400, height: 200,
              background: 'radial-gradient(ellipse, rgba(37,99,235,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <h2 style={{ position: 'relative', zIndex: 1, marginBottom: 20 }}>
              Ready to Transform<br />Your Business with AI?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
              Book a free 30-minute discovery call and let's map out your AI transformation roadmap.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <a href="#contact" className="btn btn-primary">Book Free Consultation</a>
              <a href="mailto:info@owatech-ai.com" className="btn btn-outline">info@owatech-ai.com</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="py-32 border-t border-white/10">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-start contact-grid">
          {/* Left info */}
          <motion.div variants={fadeUp}>
            <SectionLabel>Contact Us</SectionLabel>
            <h2 style={{ marginBottom: 24 }}>Let's Build Something<br />Extraordinary</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 48 }}>
              Whether you're a business looking to automate, or a student ready to launch your AI career — we'd love to hear from you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'info@owatech-ai.com' },
                { icon: <Globe size={16} />, label: 'Website', value: 'www.owatech-ai.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)',
                  }}>{item.icon}</div>
                  <div>
                    <p className="text-label">{item.label}</p>
                    <p style={{ fontSize: '0.95rem' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            style={{
              display: 'flex', flexDirection: 'column', gap: 20,
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '44px 40px',
            }}
            onSubmit={handleFormSubmit}
          >
            <div>
              <label className="text-label" style={{ display: 'block', marginBottom: 8 }}>Full Name</label>
              <input
                type="text"
                placeholder="LYKART OSIX"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%', padding: '14px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: 8, color: 'white',
                  fontFamily: 'inherit', fontSize: '0.9rem',
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(37,99,235,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <div>
              <label className="text-label" style={{ display: 'block', marginBottom: 8 }}>Email</label>
              <input
                type="email"
                placeholder="info@owatech-ai.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: '100%', padding: '14px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: 8, color: 'white',
                  fontFamily: 'inherit', fontSize: '0.9rem',
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(37,99,235,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <div>
              <label className="text-label" style={{ display: 'block', marginBottom: 8 }}>Company / Institution</label>
              <input
                type="text"
                placeholder="OWA TECHNOLOGIES"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                style={{
                  width: '100%', padding: '14px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: 8, color: 'white',
                  fontFamily: 'inherit', fontSize: '0.9rem',
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(37,99,235,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <div>
              <label className="text-label" style={{ display: 'block', marginBottom: 8 }}>Message</label>
              <textarea
                placeholder="Tell us about your project or goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                style={{
                  width: '100%', padding: '14px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: 8, color: 'white',
                  fontFamily: 'inherit', fontSize: '0.9rem',
                  outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(37,99,235,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }}>
              Send Message <ArrowRight size={15} />
            </button>
          </motion.form>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '80px 0 40px' }}>
        <div className="container">
          {/* Top */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px 24px', marginBottom: 60 }} className="footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <img
                  src="/assets/owa_logo.jpg"
                  alt="OWA Technologies Logo"
                  style={{
                    height: 44,
                    width: 44,
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
                <span style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>OWA TECHNOLOGIES</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.8, maxWidth: 280 }}>
                Empowering Africa with AI. Building intelligent systems and empowering digital talent from Cape Town to Cairo.
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
                {[
                  { icon: <WhatsAppIcon size={18} />, href: 'https://wa.me/263772479492', color: '#25D366', name: 'WhatsApp' },
                  { icon: <InstagramIcon size={18} />, href: 'https://instagram.com/owatech.ai', color: '#E1306C', name: 'Instagram' },
                  { icon: <Facebook size={18} />, href: 'https://facebook.com/OwatechAI', color: '#1877F2', name: 'Facebook' },
                  { icon: <XIcon size={18} />, href: 'https://x.com/owatech_ai', color: '#ffffff', name: 'X' },
                  { icon: <Youtube size={18} />, href: 'https://youtube.com/@owatech-ai', color: '#FF0000', name: 'YouTube' },
                  { icon: <TikTokIcon size={18} />, href: 'https://tiktok.com/@owatech.ai.com', color: '#ffffff', name: 'TikTok' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer" title={s.name} style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.color, transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: 'Services',
                links: [
                  { label: 'AI-Powered Websites', pageId: 'solutions' },
                  { label: 'Business Automation', pageId: 'ai-agents' },
                  { label: 'Digital Transformation', pageId: 'solutions' },
                  { label: 'Custom AI Systems', pageId: 'solutions' },
                ],
              },
              {
                title: 'Training',
                links: [
                  { label: 'Student Programs', pageId: 'programs' },
                  { label: 'Teacher Workshops', pageId: 'ai-education' },
                  { label: 'Certifications', pageId: 'academy' },
                  { label: 'Corporate Training', pageId: 'programs' },
                ],
              },
              {
                title: 'Company',
                links: [
                  { label: 'About Us', pageId: 'about-owa' as PageId },
                  { label: 'Careers', pageId: 'contact-hub' as PageId },
                  { label: 'Blog', pageId: 'blog' as PageId },
                  { label: 'Privacy Policy', pageId: 'privacy-policy' as PageId },
                ],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ marginBottom: 20, fontSize: '0.78rem' }}>{col.title}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {col.links.map((l, j) => (
                    <a
                      key={j}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (l.pageId) openPage(l.pageId as PageId);
                      }}
                      style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', transition: 'color 0.2s', cursor: l.pageId ? 'pointer' : 'default' }}
                      onMouseEnter={(e) => l.pageId && (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => l.pageId && (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >{l.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="footer-bottom-bar" style={{
            position: 'relative',
            borderTop: '1px solid var(--border)', paddingTop: 32,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 16,
          }}>
            <div className="powered-by-badge" style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate(-50%, -100%)',
              background: '#000',
              padding: '4px 18px 2px',
              fontSize: '0.62rem',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#60a5fa',
              fontWeight: 900,
              borderBottom: '1px solid #60a5fa',
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}>
              <span className="hide-on-mobile">WEBSITE POWERED BY OWA TECHNOLOGIES. BY LYKART06.</span>
              <span className="show-on-mobile" style={{ display: 'none' }}>POWERED BY LYKART06.</span>
            </div>
            <p className="footer-copyright" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              © 2026 OWA Technologies. All Rights Reserved.
            </p>
            <p className="footer-email" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              info@owatech-ai.com
            </p>
          </div>

        </div>
      </footer>
      {/* ===================== PAGE OVERLAYS ===================== */}
      <SolutionsPage open={activePage === 'solutions'} onClose={closePage} />
      <IndustryUseCasesPage open={activePage === 'use-cases'} onClose={closePage} />
      <DetailedPricingPage open={activePage === 'pricing'} onClose={closePage} />
      <AcademyPage open={activePage === 'academy'} onClose={closePage} />
      <ProgramsPage open={activePage === 'programs'} onClose={closePage} />
      <ContactHubPage open={activePage === 'contact-hub'} onClose={closePage} />
      <AIforEducationPage open={activePage === 'ai-education'} onClose={closePage} />
      <PartnersPage open={activePage === 'partners'} onClose={closePage} />
      <AboutOWAPage open={activePage === 'about-owa'} onClose={closePage} />
      <ReferralPage open={activePage === 'referral'} onClose={closePage} />
      <WebDevPage open={activePage === 'web-dev'} onClose={closePage} />
      <AIAgentsPage open={activePage === 'ai-agents'} onClose={closePage} />
      <StarlinkPage open={activePage === 'starlink'} onClose={closePage} />
      <CorporatePage open={activePage === 'corporate'} onClose={closePage} />
      <GadgetPage open={activePage === 'gadgets'} onClose={closePage} />
      <OWATechPage open={activePage === 'owa-tech'} onClose={closePage} />
      <BlogPage open={activePage === 'blog'} onClose={closePage} />
      <PrivacyPolicyPage open={activePage === 'privacy-policy'} onClose={closePage} />

      {/* Choice Modal for Contact */}
      <AnimatePresence>
        {showContactPicker && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactPicker(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 1000,
                background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                width: '90%', maxWidth: 440, height: 'fit-content',
                margin: 'auto', zIndex: 1001,
                background: '#111', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 24, padding: '40px 32px', textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>How would you like to proceed?</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: 32 }}>Choose your preferred method to send your message.</p>

              <div className="contact-picker-buttons" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendEmail}
                  className="btn"
                  style={{
                    background: '#ffffff', color: '#000000', fontWeight: 800,
                    border: 'none', width: '100%', padding: '18px',
                    cursor: 'pointer', transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 14, boxShadow: '0 4px 12px rgba(255,255,255,0.1)'
                  }}
                >
                  <Mail size={18} color="#2563EB" style={{ marginRight: 10 }} /> Proceed with Gmail
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendWhatsApp}
                  className="btn"
                  style={{
                    background: 'rgba(37,211,102,1)', border: 'none',
                    width: '100%', padding: '18px', color: '#fff',
                    fontWeight: 800, cursor: 'pointer', transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 14, boxShadow: '0 4px 12px rgba(37,211,102,0.3)'
                  }}
                >
                  <WhatsAppIcon size={18} /> <span style={{ marginLeft: 10 }}>Proceed with WhatsApp</span>
                </motion.button>
                <button
                  onClick={() => setShowContactPicker(false)}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginTop: 12, cursor: 'pointer' }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Footer Social Icons (Bottom Left) ────────────────────────── */}
    </>
  );
};

export default App;
