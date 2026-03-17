import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Easing } from 'framer-motion';
import {
    X, ArrowRight, CheckCircle, Globe, Zap, Brain, Briefcase,
    HeartPulse, Building2, MessageSquare, Wifi,
    Monitor, Gift, Search, GraduationCap, Phone, Mail, MapPin,
    Youtube, Facebook, ChevronRight, Code, Utensils, Award, Shield, Users, Download, Palette
} from 'lucide-react';

// Elegant easing for smooth animations
const smoothEasing: Easing = [0.25, 0.1, 0.25, 1];

// TikTok Logo SVG (Original - Authentic Brand Logo)
const TikTokIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

// ============================================================
// ANIMATED GALLERY COMPONENT - With hover effects and parallax
// ============================================================

const AnimatedGallery: React.FC<{ images: { src: string; label: string }[] }> = ({ images }) => {
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

    // Duplicate images to create a seamless infinite scrolling loop
    const duplicatedImages = [...images, ...images];

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            marginBottom: 52,
            marginTop: 40,
            padding: '10px 0',
            display: 'flex'
        }}>
            {/* Elegant fade gradients on the left and right edges for that premium look */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #04091a, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #04091a, transparent)', zIndex: 2, pointerEvents: 'none' }} />

            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                style={{ display: 'flex', gap: 12 }}
            >
                {duplicatedImages.map((img, idx) => (
                    <motion.div
                        key={`${img.src}-${idx}`}
                        onHoverStart={() => setHoveredIndex(img.src)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        style={{
                            height: window.innerWidth < 768 ? 140 : 180,
                            width: window.innerWidth < 768 ? 220 : 280, // Responsive width
                            flexShrink: 0,
                            borderRadius: 12,
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.08)',
                            position: 'relative',
                            cursor: 'pointer',
                        }}
                    >
                        <motion.img
                            src={img.src}
                            alt={img.label}
                            animate={{
                                scale: hoveredIndex === img.src ? 1.15 : 1.05,
                                rotate: hoveredIndex === img.src ? 1 : 0,
                            }}
                            transition={{
                                scale: { duration: 1.5, ease: smoothEasing },
                                rotate: { duration: 2, ease: smoothEasing }
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <motion.div
                            animate={{ opacity: hoveredIndex === img.src ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                padding: '12px',
                            }}
                        >
                            <span style={{
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                color: '#60a5fa',
                                letterSpacing: '0.1em',
                            }}>
                                {img.label}
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

// Official WhatsApp Logo SVG (Correct version with fill)
const WhatsAppIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

// Official X (Twitter) Logo SVG
const XIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25H20.97L14.236 9.51L21.51 21.75H15.21L10.971 15.255L5.505 21.75H2.775L9.99 12.915L3.27 2.25H9.99L14.001 9.48L18.244 2.25ZM17.271 19.605H18.891L7.053 4.395H5.295L17.271 19.605Z" fill="currentColor" />
    </svg>
);

// Instagram Logo SVG (Original - Authentic Brand Logo)
const InstagramIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

// ─── Shared overlay wrapper ────────────────────────────────────────────────
export interface PageOverlayProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const PageOverlay: React.FC<PageOverlayProps> = ({ open, onClose, children }) => (
    <AnimatePresence>
        {open && (
            <>
                {/* Backdrop */}
                <motion.div
                    key="page-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 200,
                        background: 'rgba(0,0,0,0.7)',
                        backdropFilter: 'blur(8px)',
                    }}
                />
                {/* Slide-up full page panel */}
                <motion.div
                    key="page-panel"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 32, stiffness: 280 }}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 210,
                        background: '#04091a',
                        overflowY: 'auto',
                        paddingTop: 24,
                    }}
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'fixed', top: 24, right: 28, zIndex: 220,
                            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 8, width: 40, height: 40,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', color: 'rgba(255,255,255,0.7)',
                            transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                    >
                        <X size={18} />
                    </button>
                    {children}
                </motion.div>
            </>
        )}
    </AnimatePresence>
);
// ─── Component Helpers ──────────────────────────────────────────────────
const KenBurnsSlideshow: React.FC<{ images: { src: string; alt: string }[]; interval?: number; seed?: number }> = ({ images, interval = 6000, seed = 0 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex(prev => (prev + 1) % images.length), interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    const getInitial = (idx: number) => {
        const variants = [
            { opacity: 0, scale: 1.15, x: '2%', y: '1%' },
            { opacity: 0, scale: 1.2, x: '-2%', y: '-1%' },
            { opacity: 0, scale: 1.12, rotate: 1 },
            { opacity: 0, scale: 1.18, y: '2%' }
        ];
        return variants[(idx + seed) % variants.length];
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={getInitial(index)}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 1.5 } }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: (interval / 1000) + 1, ease: "linear" },
                        x: { duration: interval / 1000, ease: "linear" },
                        y: { duration: interval / 1000, ease: "linear" }
                    }}
                    style={{ position: 'absolute', inset: 0 }}
                >
                    <img
                        src={images[index].src}
                        alt={images[index].alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>
            </AnimatePresence>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)', pointerEvents: 'none' }} />
        </div>
    );
};

// ─── Shared section helpers ────────────────────────────────────────────────
const PageHero: React.FC<{ badge: string; title: string; sub: string; className?: string }> = ({ badge, title, sub, className = "" }) => (
    <div style={{ padding: '24px 0 48px', borderBottom: '1px solid rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} className={`page-wrapper ${className}`}>
        <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)',
            borderRadius: 99, padding: '6px 16px',
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#60a5fa', marginBottom: 24,
        }}>{badge}</span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 20 }}
            dangerouslySetInnerHTML={{ __html: title }} />
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', maxWidth: 720, lineHeight: 1.8 }}>{sub}</p>
    </div>
);



const UseCaseCard: React.FC<{ icon: React.ReactNode; sector: string; problems: string[]; solutions: string[]; outcome: string }> =
    ({ icon, sector, problems, solutions, outcome }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'rgba(37,99,235,0.4)' }}
            transition={{ duration: 0.4, ease: smoothEasing }}
            style={{
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20, overflow: 'hidden', marginBottom: 24,
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
            }}>
            <div className="use-case-grid-tablet stack-on-mobile" style={{ gap: 0 }}>
                <div style={{ padding: '32px 24px', background: 'rgba(255,255,255,0.03)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{
                            width: 52, height: 52, borderRadius: 14,
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(37,99,235,0.1))',
                            border: '1px solid rgba(37,99,235,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: 20, color: '#60a5fa',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        }}>{icon}</motion.div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{sector}</h3>
                    <div style={{ width: 30, height: 2, background: '#2563EB', marginTop: 12, borderRadius: 2 }} />
                </div>
                <div style={{ padding: '32px 24px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', color: '#f87171', marginBottom: 16, textTransform: 'uppercase' }}>The Challenge</p>
                    {problems.map((p, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
                            <span style={{ color: '#f87171', marginTop: 0 }}>•</span> {p}
                        </div>
                    ))}
                </div>
                <div style={{ padding: '32px 24px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', color: '#60a5fa', marginBottom: 16, textTransform: 'uppercase' }}>OWA Integration</p>
                    {solutions.map((s, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10, fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                            <CheckCircle size={13} color="#2563EB" style={{ marginTop: 3, flexShrink: 0 }} /> {s}
                        </div>
                    ))}
                </div>
                <div style={{ padding: '32px 24px', background: 'rgba(37,99,235,0.03)' }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', color: '#60a5fa', marginBottom: 16, textTransform: 'uppercase' }}>Impact</p>
                    <p style={{ fontSize: '0.9rem', color: '#fff', fontStyle: 'italic', lineHeight: 1.6 }}>"{outcome}"</p>
                </div>
            </div>
        </motion.div>
    );

const PricingBlock: React.FC<{
    num: string; icon: React.ReactNode; title: string; children: React.ReactNode; note?: string;
}> = ({ num, icon, title, children, note }) => (
    <motion.div
        whileHover={{ scale: 1.01, zIndex: 10, borderColor: 'rgba(37,99,235,0.4)', transition: { duration: 0.3 } }}
        style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20, padding: '40px 40px 32px', marginBottom: 28,
            transition: 'border-color 0.3s ease',
            position: 'relative',
            backdropFilter: 'blur(8px)'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(37,99,235,0.1))',
                border: '1px solid rgba(37,99,235,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa',
            }}>{icon}</div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#60a5fa', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{num}. {title}</h2>
        </div>
        <div className="pricing-row-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 10, marginBottom: 10 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60a5fa', padding: '0 12px' }}>Capability</div>
            <div className="pricing-desc-hide" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60a5fa', padding: '0 12px' }}>Description</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#60a5fa', textAlign: 'right', padding: '0 12px' }}>Est. Range</div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 8 }}>
            {children}
        </div>
        {note && (
            <div style={{ marginTop: 24, padding: '12px 20px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: 8, borderLeft: '3px solid #2563EB' }}>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{note}</p>
            </div>
        )}
    </motion.div>
);

const PriceRow: React.FC<{ cap: string; desc: string; price: string; priceColor?: boolean; sub?: string }> =
    ({ cap, desc, price, priceColor = true, sub }) => (
        <div className="pricing-row-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            padding: '18px 12px', alignItems: 'center',
        }}>
            <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{cap}</p>
                {sub && <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{sub}</p>}
            </div>
            <p className="pricing-desc-hide" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
            <p style={{ textAlign: 'right', fontSize: '0.9rem', fontWeight: 700, color: priceColor ? '#60a5fa' : 'rgba(255,255,255,0.8)' }}>{price}</p>
        </div>
    );

const wrapClass = "page-wrapper";

const Slideshow: React.FC<{ images: { src: string; alt: string }[] }> = ({ images }) => {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => setIndex(prev => (prev + 1) % images.length), 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 20 }}>
            {images.map((img, i) => (
                <motion.img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
            ))}
            <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
                {images.map((_, i) => (
                    <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i === index ? '#60a5fa' : 'rgba(255,255,255,0.3)', transition: 'all 0.3s' }} />
                ))}
            </div>
        </div>
    );
};

// ════════════════════════════════════════════════════════════════
// 1. SOLUTIONS PAGE
// ════════════════════════════════════════════════════════════════
export const SolutionsPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero
            badge="Our Services"
            title="Intelligent Solutions<br/>Built for African Business"
            sub="We architect enterprise-grade AI agents, high-speed automation systems, and strategic digital infrastructure — designed for the realities of doing business in Africa and beyond."
        />
        <div className={wrapClass}>
            {/* Quote banner */}
            <div className="stack-on-mobile" style={{ marginBottom: 60, alignItems: 'center' }}>
                <div style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: 16, padding: '32px 24px', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', fontWeight: 600, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                        "We don't sell tools. We build systems that support real business growth."
                    </p>
                </div>
                <div style={{ height: 200, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src="/assets/owa_blogs/img_proficiencies_small.png" alt="Engineering Proficiency" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>

            {/* Service cards */}
            {[
                {
                    icon: <Globe size={22} />, title: 'Web Architecture & Development',
                    desc: 'From static landing pages to advanced AI-embedded web applications. We engineer digital presence that converts.',
                    points: ['Entry-Level Static Sites', 'Dynamic CMS Systems', 'E-Commerce Platforms', '3D Animated & Immersive', 'Advanced Web Solutions with AI'],
                },
                {
                    icon: <Zap size={22} />, title: 'Automation & WhatsApp Agents',
                    desc: 'Deploy intelligent agents that handle customer inquiries, lead qualification, CRM sync, and appointment booking — 24/7.',
                    points: ['FAQ Bots (Rule-based)', 'Smart Lead Qualification Agents', 'Enterprise AI (GPT/Claude Integration)', 'Multilingual 24/7 CRM Agents', 'WhatsApp & Web Integration'],
                },
                {
                    icon: <Wifi size={22} />, title: 'Connectivity — Starlink Authorized',
                    desc: 'Official Starlink hardware retail, professional installation, and enterprise bandwidth orchestration.',
                    points: ['Starlink Kit Sales (Official)', 'Professional Installation & Setup', 'Enterprise Connectivity & Reliability Testing'],
                },
                {
                    icon: <Monitor size={22} />, title: 'Corporate Identity & Media',
                    desc: 'In partnership with GANDS ARTS MEDIA — branding, photography, video ads, and legal documentation.',
                    points: ['Logo Design & Company Profiles', 'Business Cards & Letterheads', 'AI Video Advertisements', 'Photoshooting (Indoor/Outdoor)', 'Business Contract Drafting'],
                },
                {
                    icon: <Monitor size={22} />, title: 'Gadget Sales — Hardware Solutions',
                    desc: 'Premium laptops, workstations, and peripherals for developers and AI teams.',
                    points: ['High-End Laptops', 'Workstations & Desktops for AI Processing', 'Monitors, Accessories & Server Hardware'],
                },
                {
                    icon: <Search size={22} />, title: 'Strategic AI Architecture Hub',
                    desc: 'Senior-level consulting, infrastructure audits, and AI roadmap design by LYKART06 and OWA senior consultants.',
                    points: ['AI System Audits', 'Infrastructure Review', 'Technology Roadmap Development'],
                },
            ].map((s, i) => (
                <div key={i} className="stack-on-mobile" style={{
                    padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                    alignItems: 'start',
                }}>
                    <div>
                        <div style={{
                            width: 52, height: 52, borderRadius: 12, marginBottom: 20,
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(37,99,235,0.1))',
                            border: '1px solid rgba(37,99,235,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa',
                        }}>{s.icon}</div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 16 }}>{s.title}</h2>
                        <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.95rem' }}>{s.desc}</p>
                    </div>
                    <div>
                        {s.points.map((p, j) => (
                            <div key={j} style={{
                                display: 'flex', alignItems: 'center', gap: 12,
                                padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.04)',
                                fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)',
                            }}>
                                <ChevronRight size={14} color="#60a5fa" style={{ flexShrink: 0 }} />{p}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <AnimatedGallery images={[
                { src: '/assets/owa_blogs/0-information-technology-workshop-thumb.jpg', label: 'Systems Hub' },
                { src: '/assets/owa_blogs/000_1923u1.d927e160435.w640.webp', label: 'AI Integration' },
                { src: '/assets/owa_blogs/img_proficiencies_small.png', label: 'Architecture' },
                { src: '/assets/owa_blogs/Innovative-Fintech-Offices-Banner.jpg', label: 'Enterprise' },
                { src: '/assets/owa_blogs/business-partnership-handshake.jpg', label: 'Solutions' }
            ]} />

            <div style={{ textAlign: 'center', marginTop: 60 }}>
                <a href="#contact" onClick={onClose} className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1rem' }}>
                    Book Free Consultation <ArrowRight size={16} />
                </a>
            </div>

            {/* Service Highlights */}
            <div style={{ marginTop: 60, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 40 }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: 32 }}>Why Choose Our Solutions</h2>
                <div className="stack-on-tablet">
                    {[
                        { title: 'Expert Team', desc: 'Certified professionals', icon: '🎯' },
                        { title: 'Fast Delivery', desc: 'Quick turnaround times', icon: '⚡' },
                        { title: '24/7 Support', desc: 'Always here to help', icon: '🛟' }
                    ].map((item, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '24px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: 12 }}>{item.icon}</div>
                            <h4 style={{ fontWeight: 800, marginBottom: 8 }}>{item.title}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 2. INDUSTRY USE CASES PAGE
// ════════════════════════════════════════════════════════════════
export const IndustryUseCasesPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero
            badge="Case Studies"
            title="Intelligent Solutions<br/>for Every Industry"
            sub="Explore how OWA Technologies transforms traditional business models through bespoke AI integration and automated digital infrastructure."
        />
        <div className={wrapClass}>
            {/* Featured: Agriculture */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="stack-on-mobile"
                style={{ marginBottom: 60, alignItems: 'center', background: 'linear-gradient(135deg, rgba(16,185,129,0.05), transparent)', border: '1px solid rgba(16,185,129,0.1)', borderRadius: 24, padding: '32px' }}>
                <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', color: '#10b981', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>Prime Case: Modern Agriculture</span>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 20, lineHeight: 1.2 }}>AI-Powered Yield<br />Optimization</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 24 }}>
                        By merging neural networks with real-time drone telemetry, we help commercial farmers across Zimbabwe maximize output while cutting resource waste by 30%.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                        {['Neural Mapping', 'Soil Analytics', 'Yield Prediction', 'Smart Irrigation'].map((t, i) => (
                            <span key={i} style={{ padding: '6px 14px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 700, background: 'rgba(16,185,129,0.1)', color: '#4ade80', border: '1px solid rgba(16,185,129,0.2)' }}>{t}</span>
                        ))}
                    </div>
                </div>
                <div style={{ borderRadius: 20, overflow: 'hidden', height: 320, border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                    <KenBurnsSlideshow images={[
                        { src: '/assets/blog/african_farmers_drone_tech_zimbabwe.png', alt: 'Agriculture drone technology' },
                        { src: '/assets/blog/smart_farming_collage.png', alt: 'Smart Farming Dashboard' },
                        { src: '/assets/blog/farmer_tablet_ai.jpg', alt: 'Farmer using tablet AI overlay' },
                        { src: '/assets/blog/smart_farming_drone_ai.jpg', alt: 'AI Drone scanning agricultural field' }
                    ]} />
                </div>
            </motion.div>

            <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 12 }}>Strategic Vertical Integration</h2>
                <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>We build specialized AI wrappers and automation logic for the world's most critical sectors.</p>
            </div>

            <UseCaseCard
                icon={<Briefcase size={22} />}
                sector="Small & Medium Enterprise"
                problems={['Fragmented customer data', 'Manual lead qualification', 'High operational friction']}
                solutions={['Unified CRM + AI Voice Chatbott', 'Automated intake workflows', 'Predictive sales analytics']}
                outcome="40% reduction in admin load, higher lead conversion rates, and 24/7 responsiveness."
            />
            <UseCaseCard
                icon={<HeartPulse size={22} />}
                sector="Healthcare & Biotech"
                problems={['Critical appointment drift', 'Data entry errors', 'Patient follow-up bottlenecks']}
                solutions={['AI-orchestrated scheduling', 'Natural Language patient intake', 'Automated diagnostic logging']}
                outcome="Zero missed appointments, secure data handling, and streamlined patient journeys."
            />
            <UseCaseCard
                icon={<Building2 size={22} />}
                sector="Real Estate & Infrastructure"
                problems={['Manual lead routing', 'Listing update delays', 'Poor tenant engagement']}
                solutions={['AI Property Concierges', 'Dynamic listing automation', 'Smart tenant management portals']}
                outcome="Properties move 2x faster, automated qualification, and 95% tenant satisfaction."
            />
            <UseCaseCard
                icon={<Wifi size={22} />}
                sector="Logistics & Supply Chain"
                problems={['Route inefficiency', 'Inventory blind spots', 'Communication breakdowns']}
                solutions={['AI route optimization', 'Predictive inventory bots', 'Fleet management automation']}
                outcome="Reduced fuel costs by 15%, real-time visibility, and perfect fulfillment rates."
            />
            <UseCaseCard
                icon={<GraduationCap size={22} />}
                sector="Education & EdTech"
                problems={['One-size-fits-all curricula', 'Teacher burnout', 'Accessibility gaps']}
                solutions={['Adaptive learning algorithms', 'AI Teaching Assistants', 'Offline-first digital content']}
                outcome="Personalized student progress, 50% faster lesson prep, and wider access to literacy."
            />
            <UseCaseCard
                icon={<Globe size={22} />}
                sector="Government & Public Infrastructure"
                problems={['Manual permit processing', 'Citizen service delays', 'Inefficient resource allocation']}
                solutions={['AI-driven e-Gov portals', 'Automated document verification', 'Predictive infrastructure planning']}
                outcome="Faster citizen response times, reduced corruption through automation, and smarter cities."
            />

            <div style={{ marginTop: 60 }}>
                <div style={{ marginBottom: 30 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Visual Showcase</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)' }}>Real-world impact across our primary development tracks.</p>
                </div>
                <AnimatedGallery images={[
                    { src: '/assets/owa_blogs/Buy-Now-Pay-Later-in-Iran.png', label: 'Fintech Solutions' },
                    { src: '/assets/owa_blogs/UAE-Ranks-First-Globally-in-AI-Adoption-Fueled-by-Government-Support.jpg', label: 'Government AI' },
                    { src: '/assets/owa_blogs/healthcare-technology.jpg', label: 'E-Health Systems' },
                    { src: '/assets/owa_blogs/0-information-technology-workshop-thumb.jpg', label: 'Tech Workshops' },
                    { src: '/assets/blog/african_tech_office_collaboration_ai.png', label: 'Corporate AI' },
                    { src: '/assets/owa_blogs/diHPYGSCyNdqdo7SHr5FTY-1200-80.jpg', label: 'Digital Logistics' },
                    { src: '/assets/blog/african_student_ai_learning_high_tech.png', label: 'Student EdTech' },
                    { src: '/assets/owa_blogs/South-Africa-digital-students.webp', label: 'Digital Literacy' },
                    { src: '/BBF PICS/IMG-20240728-WA0039.jpg', label: 'Hospitality Training' },
                    { src: '/PAIVEPO/476249544_595226256636942_3277987789476881716_n.jpg', label: 'Heritage Tech' },
                    { src: '/OPPAH\'S HOME AND DECO/IMG-20251128-WA0006.jpg', label: 'Interior Automation' },
                    { src: '/assets/owa_blogs/potential-threats-automated-factories-Blog-1024x598-1.png', label: 'Manufacturing' },
                    { src: '/OSIX/people-working-with-ai-operated-devices.jpg', label: 'AI Operations' },
                    { src: '/assets/owa_blogs/ITAD_AFRICA_NEW_LAPTOPS-958345_1200x800.jpg', label: 'Tech Supply' },
                    { src: '/PAIVEPO/480686289_605497398943161_452631945375857340_n.jpg', label: 'Career Growth' },
                ]} />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', marginTop: 80, padding: '48px', background: 'rgba(37,99,235,0.05)', borderRadius: 24, border: '1px solid rgba(37,99,235,0.1)' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16 }}>Ready to Automate Your Industry?</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
                    Every business is unique. We don't just sell software; we engineer competitive advantages tailored to your specific market challenges.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                    <a href="#contact" onClick={onClose} className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
                        Book A Strategy Call <ArrowRight size={16} />
                    </a>
                </div>
            </motion.div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 3. DETAILED PRICING PAGE
// ════════════════════════════════════════════════════════════════
export const DetailedPricingPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const [showPricingNotice, setShowPricingNotice] = useState(true);

    return (
        <PageOverlay open={open} onClose={onClose}>
            <PageHero
                badge="Official Pricing"
                title="Transparent Pricing.<br/>Zero Surprises."
                sub="NO FEES ARE TO BE PAID until you have been shown and approved a demo review. This is OWA's culture — you only proceed when you have total trust and clarity in the solution."
            />
            <div className={wrapClass}>
                {showPricingNotice && (
                    <motion.div
                        className="animate-cookie"
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.45, ease: smoothEasing }}
                        style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 25,
                            marginBottom: 24,
                            marginTop: -12,
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.25), rgba(16,185,129,0.15))',
                            border: '1px solid rgba(96,165,250,0.35)',
                            borderRadius: 14,
                            padding: '14px 40px 14px 16px',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.28)',
                            backdropFilter: 'blur(6px)'
                        }}
                    >
                        <motion.button
                            type="button"
                            aria-label="Close pricing notice"
                            onClick={() => setShowPricingNotice(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.88 }}
                            transition={{ duration: 0.18 }}
                            style={{
                                position: 'absolute',
                                top: 8,
                                right: 10,
                                width: 24,
                                height: 24,
                                borderRadius: 999,
                                border: '1px solid rgba(255,255,255,0.25)',
                                background: 'rgba(0,0,0,0.25)',
                                color: '#fff',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                lineHeight: 1
                            }}
                        >
                            ×
                        </motion.button>
                        <p style={{ margin: 0, fontSize: '0.86rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.6 }}>
                            Prices vary by location. Local and international fees differ depending on currency and current exchange rates. Inbox us for a quotation — we create custom-tailored budget packages, and our pricing remains affordable. Enquiry and booking a meeting with us is free.
                        </p>
                    </motion.div>
                )}

                {/* Trust Mandate */}
                <div style={{
                    borderLeft: '3px solid #2563EB', paddingLeft: 24, marginBottom: 52,
                    display: 'flex', flexDirection: 'column', gap: 12,
                }}>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        {['LOCAL & INTERNATIONAL PAYMENTS', 'REFERRAL COMMISSIONS'].map((tag, i) => (
                            <span key={i} style={{
                                padding: '6px 16px', borderRadius: 99, fontSize: '0.72rem', fontWeight: 700,
                                letterSpacing: '0.1em', background: 'rgba(37,99,235,0.12)',
                                border: '1px solid rgba(37,99,235,0.25)', color: '#60a5fa',
                            }}>{tag}</span>
                        ))}
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', maxWidth: 640 }}>
                        All listed figures are rough architectural estimates. We encourage you to contact us directly to structure a package that aligns precisely with your specific budget.
                    </p>
                </div>


                {/* Desktop Pricing Grid - Visible only on laptop/desktop */}
                <div className="hide-on-mobile">
                    <PricingBlock num="01" icon={<Globe size={22} />} title="Web Architecture & Development">
                        <PriceRow cap="Entry Level (Basic)" desc="Static Landing Page, Portfolio, or Blog. 3–5 Pages. Mobile Responsive." price="$150 – $350" />
                        <PriceRow cap="Professional Level" desc="Dynamic CMS, SEO Optimization, 5–10 Pages, Social Integration." price="$350 – $650" />
                        <PriceRow cap="E-Commerce" desc="Online Store, Payment Gateway Integration, Inventory Management." price="$650 – $1,200" />
                        <PriceRow cap="3D Animated & Immersive" desc="Interactive 3D Models, WebGL/Three.js Integration, High-End Visual Effects." price="$1,000 – $2,500+" />
                        <PriceRow cap="Advanced Web Solutions" desc="Custom AI features, Embedded Chatbot, Automated Workflows, High-Fidelity UX." price="Custom Quote" />
                    </PricingBlock>

                    <PricingBlock num="02" icon={<MessageSquare size={22} />} title="Automation & WhatsApp Agents" note="WE PROVIDE MULTILINGUAL 24/7 CRM AGENTS FOR ALL LEVEL 3 ENTERPRISE SOLUTIONS TO ENSURE NON-STOP GLOBAL ENGAGEMENT.">
                        <PriceRow cap="Level 1: FAQ Bot" desc="Rule-based WhatsApp/Web responses. Auto-reply." price="Setup: $250–$300" sub="Retainer: $50+/mo" />
                        <PriceRow cap="Level 2: Smart Agent" desc="Lead Qualification, CRM Integration, Appointment Booking." price="Setup: $300–$500" sub="Retainer: $120+/mo" />
                        <PriceRow cap="Level 3: Enterprise AI" desc="Full LLM Integration (GPT/Claude), Context Awareness, Complex Logic. Multilingual 24/7 CRM Agents." price="Setup: $800+" sub="Retainer: $300+/mo" />
                    </PricingBlock>

                    <PricingBlock num="03" icon={<Wifi size={22} />} title="Connectivity (Starlink Authorized)" note="PLEASE INBOX ANY OF OUR CONTACTS FOR AN OFFICIAL STARLINK KIT HARDWARE QUOTE AND DELIVERY AVAILABILITY.">
                        <PriceRow cap="Starlink Kits (Hardware)" desc="Official Authorized Retail of Starlink Kits. Hardware availability varies." price="Contact for Quote" />
                        <PriceRow cap="Installation & Setup" desc="Professional mounting, alignment, and network optimization." price="Contact for Quote" />
                        <PriceRow cap="Enterprise Connectivity" desc="Custom bandwidth orchestration and reliability testing for business nodes." price="Inbox for Quote" />
                    </PricingBlock>

                    <PricingBlock num="04" icon={<Brain size={22} />} title="Corporate Identity & Media (OWA Partner GANDS ARTS MEDIA)">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                            <div style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: '#60a5fa', padding: '16px 24px', textTransform: 'uppercase' }}>Graphic Design & Branding</p>
                                <PriceRow cap="Professional Logo" desc="" price="$50 – $150" />
                                <PriceRow cap="Digital Flyer/Poster" desc="" price="$20 – $50" />
                                <PriceRow cap="Company Profile" desc="" price="$100 – $250" />
                                <PriceRow cap="Business Cards (Design)" desc="" price="$15 – $40" />
                                <PriceRow cap="Letterhead Design" desc="" price="$15 – $30" />
                                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: '#60a5fa', padding: '20px 24px 12px', textTransform: 'uppercase' }}>Legal & Admin Documents</p>
                                <PriceRow cap="Business Contract Draft" desc="" price="$40 – $100" />
                                <PriceRow cap="MOU / NDA Drafting" desc="" price="$30 – $80" />
                                <PriceRow cap="Project Proposal" desc="" price="$50 – $120" />
                                <PriceRow cap="CV / Resume Design" desc="" price="$15 – $40" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: '#60a5fa', padding: '16px 24px', textTransform: 'uppercase' }}>Professional Media Services</p>
                                <PriceRow cap="Photoshooting (Indoor/Outdoor)" desc="" price="Inbox for Pricing" />
                                <PriceRow cap="AI Video Advertisements" desc="" price="Contact for Quote" />
                                <PriceRow cap="Product Photography" desc="" price="Inbox for Quote" />
                            </div>
                        </div>
                    </PricingBlock>

                    <PricingBlock num="05" icon={<Monitor size={22} />} title="Gadget Sales (Hardware Solutions)" note="CONTACT ANY OF OUR OFFICIAL CHANNELS TO RECEIVE A PERSONALIZED QUOTE AND PRICING FOR CURRENT GADGET STOCK.">
                        <PriceRow cap="High-End Laptops" desc="Premium laptops for developers, designers, and executives." price="Contact for Full Quote" />
                        <PriceRow cap="Workstations & Desktops" desc="High-performance setups for AI processing and heavy workloads." price="Contact for Full Quote" />
                        <PriceRow cap="Accessories & Peripherals" desc="Monitors, keyboards, and server hardware." price="Inbox for Prices" />
                    </PricingBlock>

                    <PricingBlock num="06" icon={<Search size={22} />} title="Strategic AI Architecture Hub" note="FEES FOR ARCHITECTURAL CONSULTING ARE PRIVATE AND DETERMINED BASED ON ENTERPRISE SCALE. REACH OUT VIA OFFICIAL CHANNELS.">
                        <PriceRow cap="AI Consulting & Auditing" desc="High-level strategic analysis, infrastructure review, and roadmap development by LYKART06 and senior consultants." price="Contact for Pricing" />
                    </PricingBlock>

                    <PricingBlock num="07" icon={<GraduationCap size={22} />} title="OWA Academy & Tactical Training">
                        <PriceRow cap="Basic AI Onboarding" desc="Introduction to utilizing AI agents for everyday professional tasks." price="Inbox to Enquire" />
                        <PriceRow cap="Architect Masterclass" desc="One-on-one training on building complex automation logic and CRM sync." price="Inbox to Enquire" />
                    </PricingBlock>

                    <PricingBlock num="08" icon={<Gift size={22} />} title="Rewards, Referrals & Promotions" note="REFERRAL COMMISSIONS ARE PAID OUT UPON SUCCESSFUL PROJECT AUTHORIZATION. CONTACT US TO JOIN THE PARTNER NETWORK.">
                        <PriceRow cap="Referral Commission" desc="Earn a high-value commission for every client successfully onboarded through your network." price="5% – 15% (Contact us)" />
                        <PriceRow cap="Loyalty Discounts" desc="Reduced rates for returning partners and multi-phase digital transformations." price="Up to 20% Off" />
                        <PriceRow cap="Strategic Promotions" desc="Limited-time offers on specific automation nodes and branding packages." price="Inbox for Details" />
                    </PricingBlock>
                </div>

                {/* Mobile Pricing Section - Visible only on mobile */}
                <div className="show-on-mobile-block" style={{ display: 'none', marginBottom: 52 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: 24,
                            padding: '40px 24px',
                            textAlign: 'center',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <div style={{
                            width: 64, height: 64, borderRadius: 16,
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(37,99,235,0.1))',
                            border: '1px solid rgba(37,99,235,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#60a5fa', margin: '0 auto 24px',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                        }}>
                            <Download size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: 12 }}>Download Official Pricing</h3>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 32 }}>
                            Get our complete 2026 pricing architecture in a high-fidelity PDF format for offline review and strategic planning.
                        </p>
                        <a
                            href="/OWA_Official_Pricing_2026.pdf"
                            download="OWA_Official_Pricing_2026.pdf"
                            className="btn btn-primary"
                            style={{
                                width: '100%',
                                padding: '16px 24px',
                                borderRadius: 12,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                                textDecoration: 'none'
                            }}
                        >
                            <Download size={18} /> DOWNLOAD PRICING PDF
                        </a>
                    </motion.div>
                </div>

                <div style={{
                    marginTop: 60,
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: 40,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 24,
                    marginBottom: 40
                }}>
                    <motion.div
                        whileHover={{ scale: 1.02, borderColor: 'rgba(37,99,235,0.4)' }}
                        style={{
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(30,64,175,0.1) 100%)',
                            borderRadius: 20, padding: 32, border: '1px solid rgba(37,99,235,0.2)', transition: 'all 0.3s ease'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>💰</div>
                        <h3 style={{ fontWeight: 900, marginBottom: 12, fontSize: '1.2rem' }}>ROI on AI Automation</h3>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Calculate operational savings when transitioning from manual support to Level 3 Neural Agents.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02, borderColor: 'rgba(16,185,129,0.4)' }}
                        style={{
                            background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.1) 100%)',
                            borderRadius: 20, padding: 32, border: '1px solid rgba(16,185,129,0.2)', transition: 'all 0.3s ease'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>📈</div>
                        <h3 style={{ fontWeight: 900, marginBottom: 12, fontSize: '1.2rem' }}>The Cost of Scaling</h3>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Structural digital infrastructure as a capital asset in the 2026 African tech market.
                        </p>
                    </motion.div>
                </div>

                {/* World-Class Discovery Call CTA Section (Talk with Us) */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(27,63,160,0.05))',
                    borderRadius: 24,
                    border: '1px solid rgba(37,99,235,0.2)',
                    padding: '64px 40px',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'radial-gradient(circle at 50% 120%, rgba(37,99,235,0.15), transparent 70%)',
                        pointerEvents: 'none'
                    }} />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span style={{
                            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
                            color: '#60a5fa', background: 'rgba(37,99,235,0.1)', padding: '6px 16px', borderRadius: 99,
                            marginBottom: 24, display: 'inline-block'
                        }}>Talk With Us</span>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: 20, lineHeight: 1.2 }}>READY TO INITIALIZE YOUR PROJECT?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 640, margin: '0 auto 40px', fontSize: '1rem', lineHeight: 1.8 }}>
                            The final architectural roadmap is defined during your <strong>Discovery Call</strong>.
                            No project is too complex—from localized automations to global enterprise AI nodes.
                        </p>

                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20interested%20in%20exploring%20your%20AI%20Solutions%20for%20my%20business.%20I%20would%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20OWA%20can%20help%20automate%20and%20grow%20my%20operations.%20Thank%20you!"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                                style={{ padding: '16px 36px', borderRadius: 99, fontSize: '0.88rem' }}
                            >
                                <WhatsAppIcon size={20} /> INITIALIZE VIA WHATSAPP
                            </a>
                            <a
                                href="mailto:info@owatech-ai.com"
                                className="btn btn-outline"
                                style={{ padding: '16px 36px', borderRadius: 99, fontSize: '0.88rem' }}
                            >
                                SECURE EMAIL ENQUIRY
                            </a>
                        </div>

                        <div style={{ marginTop: 40, display: 'flex', gap: 32, justifyContent: 'center', opacity: 0.4 }}>
                            {['NDA GUARANTEED', '30-DAY SUPPORT INCLUDED', 'PROMPT DELIVERY'].map((cred, i) => (
                                <span key={i} style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em' }}>{cred}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageOverlay >
    );
};

// ════════════════════════════════════════════════════════════════
// 4. ACADEMY PAGE
// ════════════════════════════════════════════════════════════════
export const AcademyPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero
            badge="OWA Academy & Insights"
            title="Learn With<br/><span style='color:#60a5fa'>OWA Technologies</span>"
            sub="We believe informed clients make better decisions. Our education tracks bridge the gap between AI curiosity and enterprise implementation."
        />
        <div className={wrapClass}>
            {/* 3 Track cards */}
            <div className="academy-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 72 }}>
                {[
                    {
                        badge: 'FOUNDATION', badgeColor: '#2563EB', title: 'For Beginners',
                        sub: 'Understanding the essentials of AI Automation.',
                        section: 'CORE CONCEPTS',
                        items: [
                            { b: 'AI Automation:', rest: ' Intelligent systems handling tasks that normally require human effort.' },
                            { b: 'Chatbots:', rest: ' AI communicating via text on WhatsApp, websites, or apps.' },
                            { b: 'Voice Agents:', rest: ' AI that answers calls, speaks naturally, and handles inquiries.' },
                        ],
                        quote: '"Faster response times, 24/7 availability, and reduced workload for your team."',
                        cta: 'GET BASICS GUIDE',
                        actionUrl: 'https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20would%20like%20to%20get%20the%20Foundation%20AI%20Automation%20Basics%20Guide%20for%20Beginners.%20Please%20send%20it%20to%20me.'
                    },
                    {
                        badge: 'APPLICATION', badgeColor: '#0891b2', title: 'Intermediate',
                        sub: 'Practical use cases and tangible business value.',
                        section: 'BUSINESS IMPACT',
                        items: [
                            { b: '', rest: 'Automated Lead Capture & Qualification' },
                            { b: '', rest: 'Appointment Scheduling without manual work' },
                            { b: '', rest: 'Industry-specific workflows for sales & support' },
                        ],
                        quote: 'MORE EFFICIENCY, LESS STRESS, BETTER SCALABILITY.',
                        cta: 'EXPLORE USE CASES',
                        actionUrl: 'https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20interested%20in%20exploring%20Intermediate%20practical%20AI%20use%20cases%20and%20business%20impact%20applications.%20I%20want%20to%20learn%20more.'
                    },
                    {
                        badge: 'ARCHITECTURE', badgeColor: '#7c3aed', title: 'Expert Level',
                        sub: 'For Advanced Users & System Architects.',
                        section: 'ADVANCED TOPICS',
                        items: [
                            { b: '', rest: 'AI System Design & Logic' },
                            { b: '', rest: 'Workflow Orchestration (n8n/Make)' },
                            { b: '', rest: 'CRM & API Deep Integrations' },
                            { b: '', rest: 'Ethical & Responsible AI Governance' },
                        ],
                        quote: '"Automation should augment human teams, not replace strategic thinking."',
                        cta: 'CONSULT EXPERTS',
                        actionUrl: 'https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20looking%20for%20Expert%20Level%20advanced%20AI%20architecture.%20I%20would%20like%20to%20consult%20with%20your%20expert%20designers%20and%20architects.'
                    },
                ].map((track, i) => (
                    <div key={i} style={{
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column',
                    }}>
                        <span style={{
                            display: 'inline-block', background: track.badgeColor, color: 'white',
                            padding: '4px 14px', borderRadius: 99, fontSize: '0.68rem', fontWeight: 700,
                            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, alignSelf: 'flex-start',
                        }}>{track.badge}</span>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 8 }}>{track.title}</h2>
                        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', marginBottom: 28 }}>{track.sub}</p>
                        <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: '#60a5fa', textTransform: 'uppercase', marginBottom: 14 }}>{track.section}</p>
                        {track.items.map((it, j) => (
                            <div key={j} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                {it.b ? (
                                    <><CheckCircle size={13} color="#2563EB" style={{ marginTop: 3, flexShrink: 0 }} /><span><strong>{it.b}</strong>{it.rest}</span></>
                                ) : (
                                    <><ChevronRight size={13} color="#60a5fa" style={{ marginTop: 3, flexShrink: 0 }} /><span>{it.rest}</span></>
                                )}
                            </div>
                        ))}
                        <div style={{ flex: 1 }} />
                        <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: 8, fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
                            {track.quote}
                        </div>
                        <a href={track.actionUrl} target="_blank" rel="noreferrer" style={{
                            marginTop: 24, background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)',
                            color: '#60a5fa', borderRadius: 8, padding: '12px 16px', fontSize: '0.75rem', fontWeight: 700,
                            letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', width: '100%',
                            display: 'inline-block', textAlign: 'center', transition: 'all 0.2s',
                            textDecoration: 'none'
                        }}>{track.cta}</a>
                    </div>
                ))}
            </div>

            {/* Academic Visuals */}
            <div className="res-academic-grid" style={{ marginBottom: 72 }}>
                <div className="res-h-400" style={{ height: 400, borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <Slideshow images={[
                        { src: '/assets/owa_blogs/WikiAfrica_Schools_training_African_School_for_Excellence_(3).webp', alt: 'School Training' },
                        { src: '/assets/owa_blogs/Students_on_laptop_(1).jpg', alt: 'Student Collaboration' },
                        { src: '/assets/owa_blogs/South-Africa-digital-students.webp', alt: 'Digital Students' }
                    ]} />
                </div>
                <div className="hide-on-mobile" style={{ borderRadius: 24, overflow: 'hidden', height: 400, border: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
                    <img src="/assets/blog/zimbabwean_teacher_classroom.png" alt="Teacher classroom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                        <h4 style={{ fontWeight: 800, marginBottom: 8 }}>Empowering Educators</h4>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Bridging the digital divide through AI-First teacher workshops.</p>
                    </div>
                </div>
            </div>

            {/* 7 Misconceptions */}
            <div style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', marginBottom: 8 }}>
                    7 Misconceptions About <span style={{ color: '#60a5fa' }}>Artificial Intelligence</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 40 }}>Separating AI myths from reality — what you've heard vs. what's actually true.</p>

                {[
                    { myth: 'AI will replace all human jobs', truth: 'AI will change jobs, not eliminate all of them. It automates repetitive tasks and creates new roles that need human judgment.' },
                    { myth: 'You must be a math genius to learn AI', truth: 'Strong basics help, but you can start with logic, curiosity, and practical projects. Math improves over time.' },
                    { myth: 'AI is only for big tech companies', truth: 'Startups, small businesses, healthcare, education, marketing — AI is everywhere now.' },
                    { myth: 'AI can think and feel like humans', truth: 'AI doesn\'t "think" or "feel." It recognizes patterns from data and follows instructions — nothing more.' },
                    { myth: 'You need to build AI models from scratch', truth: 'Most real-world AI uses pre-trained models, APIs, and tools. Building from scratch is optional.' },
                    { myth: 'AI always gives correct answers', truth: 'AI can be biased, wrong, or outdated. Human validation is critical.' },
                    { myth: 'Learning AI means nonstop coding', truth: 'AI also involves problem understanding, data preparation, ethics, and decision-making, not just code.' },
                ].map((item, i) => (
                    <div key={i} style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
                        border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12,
                        overflow: 'hidden', marginBottom: 16,
                    }}>
                        <div style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                <span style={{ color: '#f87171', fontSize: '1.2rem' }}>✗</span>
                                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f87171', textTransform: 'uppercase' }}>Misconception</p>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through' }}>{item.myth}</p>
                        </div>
                        <div style={{ padding: '24px 28px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                <span style={{ color: '#4ade80', fontSize: '1.2rem' }}>✓</span>
                                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: '#4ade80', textTransform: 'uppercase' }}>Actual Truth</p>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>{item.truth}</p>
                        </div>
                    </div>
                ))}

                <div style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: 16, padding: '36px 40px', textAlign: 'center', marginTop: 40 }}>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}>Understanding AI starts with unlearning myths. Ready to discover what AI can actually do for you?</p>
                    <a href="#contact" onClick={onClose} className="btn btn-primary" style={{ padding: '14px 40px' }}>
                        Talk to Our AI Expert <ArrowRight size={15} />
                    </a>
                </div>

                <div style={{
                    marginTop: 60,
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: 40,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 24
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(126,34,156,0.1) 100%)',
                        borderRadius: 20,
                        padding: 32,
                        border: '1px solid rgba(168,85,247,0.2)'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🧠</div>
                        <h3 style={{ fontWeight: 900, marginBottom: 12, fontSize: '1.2rem' }}>The 2026 AI Roadmap</h3>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Key milestones for students and professionals dominating the digital landscape through continuous neural learning.
                        </p>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(194,65,12,0.1) 100%)',
                        borderRadius: 20,
                        padding: 32,
                        border: '1px solid rgba(249,115,22,0.2)'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🚀</div>
                        <h3 style={{ fontWeight: 900, marginBottom: 12, fontSize: '1.2rem' }}>From Theory to Execution</h3>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Case studies of students who launched successful SaaS platforms using OWA's automation frameworks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 5. CONTACT HUB PAGE
// ════════════════════════════════════════════════════════════════
export const ContactHubPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero
            badge="Executive Contact Hub"
            title="Reach OWA Technologies<br/>Directly"
            sub="All contact channels are verified. Identity verification is required for voice calls. We respond within 24 business hours."
        />
        <div className={wrapClass}>
            <div className="res-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 60 }}>
                {[
                    {
                        icon: <WhatsAppIcon size={22} />, label: 'WHATSAPP CHANNELS',
                        lines: ['Primary: +263 772 479 492', 'Secondary: +263 716 944 086'],
                        href: 'https://wa.me/263772479492',
                    },
                    {
                        icon: <Phone size={22} />, label: 'DIRECT CALL / MESSAGE',
                        lines: ['Business Line: +263 786 367 366', 'Identity verification required for voice calls.'],
                        href: 'tel:+263786367366',
                    },
                    {
                        icon: <Mail size={22} />, label: 'DIGITAL MAILBOX',
                        lines: ['Official: info@owatech-ai.com', 'Support: osixworldartistics@gmail.com'],
                        href: 'mailto:info@owatech-ai.com',
                    },
                ].map((c, i) => (
                    <div key={i} style={{
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 16, padding: '32px 28px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, color: '#60a5fa' }}>
                            {c.icon}
                            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.label}</p>
                        </div>
                        {c.lines.map((l, j) => (
                            <p key={j} style={{ fontSize: '0.9rem', color: j === 0 ? '#fff' : 'rgba(255,255,255,0.45)', fontWeight: j === 0 ? 700 : 400, marginBottom: 8, fontStyle: j === 1 && c.label === 'DIRECT CALL / MESSAGE' ? 'italic' : 'normal' }}>{l}</p>
                        ))}
                        <a href={c.href} target="_blank" rel="noreferrer" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16,
                            fontSize: '0.75rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.08em', textTransform: 'uppercase',
                        }}>Connect <ChevronRight size={13} /></a>
                    </div>
                ))}
            </div>

            {/* Social & Location */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px' }}>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#60a5fa', textTransform: 'uppercase', marginBottom: 24 }}>Social Channels</p>
                    <div className="social-row-balanced" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'nowrap', gap: 12 }}>
                        {[
                            { icon: <WhatsAppIcon size={18} />, href: 'https://wa.me/263772479492', label: 'WhatsApp' },
                            { icon: <InstagramIcon size={18} />, href: 'https://instagram.com/owatech.ai', label: 'Instagram' },
                            { icon: <Youtube size={18} />, href: 'https://youtube.com/@owatech-ai', label: 'YouTube' },
                            { icon: <Facebook size={18} />, href: 'https://facebook.com/OwatechAI', label: 'Facebook' },
                            { icon: <XIcon size={18} />, href: 'https://x.com/owatech_ai', label: 'X' },
                            { icon: <TikTokIcon size={18} />, href: 'https://tiktok.com/@owatech.ai.com', label: 'TikTok' },
                        ].map((s, i) => (
                            <a key={i} href={s.href} title={s.label} style={{
                                width: 38, height: 38, borderRadius: 9, flexShrink: 0,
                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                            >{s.icon}</a>
                        ))}
                    </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px' }}>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#60a5fa', textTransform: 'uppercase', marginBottom: 16 }}>Location</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <MapPin size={16} color="#60a5fa" />
                        <div>
                            <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>HARARE NODE</p>
                            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>ZIMBABWE HQ</p>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', marginTop: 12, lineHeight: 1.7 }}>
                        Serving clients across Africa and internationally. Remote-first. Available globally.
                    </p>
                </div>
            </div>

            <div style={{ height: 400, borderRadius: 24, overflow: 'hidden', marginBottom: 52, border: '1px solid rgba(255,255,255,0.1)' }}>
                <Slideshow images={[
                    { src: '/assets/owa_blogs/Innovative-Fintech-Offices-Banner.jpg', alt: 'Global HQ' },
                    { src: '/assets/owa_blogs/business-partnership-handshake.jpg', alt: 'Strategic Partnerships' },
                    { src: '/assets/owa_blogs/IMG-20240811-WA0004.jpg', alt: 'OWA Executive Node' },
                    { src: '/assets/owa_blogs/paivepo_domboshava_eco_tourism.png', alt: 'Community Integration' }
                ]} />
            </div>

            <div style={{ textAlign: 'center', width: '100%', marginTop: 32 }}>
                <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20ready%20to%20take%20the%20next%20step.%20I%20would%20like%20to%20get%20onboarded%20and%20discuss%20my%20project%20or%20business%20requirements%20with%20your%20team.%20Please%20schedule%20a%20call%20or%20meeting.%20Thank%20you!"
                    target="_blank" rel="noreferrer"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: 10,
                        background: '#22c55e', color: 'white', fontWeight: 800,
                        padding: '16px 48px', borderRadius: 99, fontSize: '0.9rem', letterSpacing: '0.06em',
                        textTransform: 'uppercase', textDecoration: 'none',
                    }}>
                    UPLINK TO EXECUTIVE HUB <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 6. TRAINING & PROGRAMS HUB
// ════════════════════════════════════════════════════════════════

export const ProgramsPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero
            badge="The OWA Academy"
            title="Unified Growth &<br/><span style='color:#60a5fa'>Future Skills</span>"
            sub="Empowering the next generation of African professionals through specialized training in technology, hospitality, and career architecture."
            className="hero-spacing-adjust"
        />
        <div className={`${wrapClass} programs-section-spacing`}>
            {/* OWA TECHNOLOGIES - MAIN */}
            <section className="res-mb-80" style={{ marginBottom: 80 }}>
                <div className="centered-mobile res-mb-32" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', flexShrink: 0 }}>
                        <Code size={24} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 900 }}>OWA Technologies</h2>
                        <p style={{ color: '#60a5fa', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Primary Integration Node</p>
                    </div>
                </div>

                <div className="res-grid-300 res-mb-40" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 40 }}>
                    {[
                        { title: 'Artificial Intelligence', desc: 'Deep Learning, Neural Networks, and LLM implementation for enterprise systems.', icon: <Brain size={20} /> },
                        { title: 'Software Architecture', desc: 'World-class Web Development, Graphic Design, and System Integration.', icon: <Monitor size={20} /> },
                        { title: 'Digital Economy', desc: 'Machine Learning, Digital Marketing, and Strategic Content Creation.', icon: <Zap size={20} /> }
                    ].map((p, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 32 }}>
                            <div style={{ color: '#60a5fa', marginBottom: 16 }}>{p.icon}</div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 12 }}>{p.title}</h3>
                            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{p.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="res-h-250 res-mb-0" style={{ height: 350, borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Slideshow images={[
                        { src: '/side menu blogs/OWA Core/Whisk_7a2c3e8aeb58207a2544f55db851f494dr.png', alt: 'OWA Dev Hub' },
                        { src: '/side menu blogs/OWA Core/Whisk_9c456414f9d667c9fbf4729068a8d4eedr.png', alt: 'AI Future' },
                        { src: '/side menu blogs/OWA Core/ZHfo1O8H8PpzDiRGQexDwPBtZpA.png', alt: 'Digital Mastery' },
                        { src: '/assets/blog/african_tech_office_collaboration_ai.png', alt: 'AI Education' }
                    ]} />
                </div>
            </section>

            {/* BBF COLLEGE & PAIVEPO SECTION */}
            <div className="res-grid-400 res-gap-40 res-mb-80" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 40, marginBottom: 80 }}>
                {/* BBF College */}
                <div style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), transparent)', borderRadius: 24, border: '1px solid rgba(249,115,22,0.1)', padding: 40 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(249,115,22,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fb923c' }}>
                            <Utensils size={20} />
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 900 }}>BBF College</h3>
                    </div>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
                        Blessed Be Faith College integrates OWA's digital excellence into prestigious vocational training.
                    </p>
                    <div style={{ height: 200, borderRadius: 16, overflow: 'hidden', marginBottom: 24, border: '1px solid rgba(249,115,22,0.1)' }}>
                        <Slideshow images={[
                            { src: '/BBF PICS/IMG-20230719-WA0044.jpg', alt: 'Hospitality Lab' },
                            { src: '/BBF PICS/IMG-20240728-WA0039.jpg', alt: 'Culinary Students' },
                            { src: '/BBF PICS/IMG-20240811-WA0004.jpg', alt: 'BBF Classroom' },
                            { src: '/BBF PICS/IMG-20230719-WA0045.jpg', alt: 'Graduation Prep' }
                        ]} />
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
                        {['Catering & Culinary Arts', 'Professional Hospitality', 'Event Management'].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem' }}>
                                <CheckCircle size={14} color="#fb923c" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Artgalzim Mentorship */}
                <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.05), transparent)', borderRadius: 24, border: '1px solid rgba(37,99,235,0.1)', padding: 40 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
                            <Palette size={20} />
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 900 }}>Artgalzim Mentorship</h3>
                    </div>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
                        Nurturing emerging talent through creative hubs and contemporary art exhibitions.
                    </p>
                    <div style={{ height: 200, borderRadius: 16, overflow: 'hidden', marginBottom: 24, border: '1px solid rgba(37,99,235,0.1)' }}>
                        <Slideshow images={[
                            { src: '/ARTGALZIM/artgalzim_logo.jpg', alt: 'Artgalzim Identity' },
                            { src: '/ARTGALZIM/artgalzim_building.jpg', alt: 'Art Gallery Space' },
                            { src: '/ARTGALZIM/artgalzim_sunrise.jpg', alt: 'Domboshava Creative Scenery' }
                        ]} />
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
                        {['Artist Residency & Studios', 'Contemporary Art Mentorship', 'Cultural Heritage Preservation'].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem' }}>
                                <CheckCircle size={14} color="#60a5fa" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* PaiVepo Coaching */}
                <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.05), transparent)', borderRadius: 24, border: '1px solid rgba(16,185,129,0.1)', padding: 40 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                            <Award size={20} />
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 900 }}>PaiVepo Success</h3>
                    </div>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
                        Legacy-building and career architecture. We don't just train; we guide your professional destiny.
                    </p>
                    <div style={{ height: 200, borderRadius: 16, overflow: 'hidden', marginBottom: 24, border: '1px solid rgba(16,185,129,0.1)' }}>
                        <Slideshow images={[
                            { src: '/PAIVEPO/476278681_595239183302316_7350128413608806885_n.jpg', alt: 'Peer Learning' },
                            { src: '/PAIVEPO/480686289_605497398943161_452631945375857340_n.jpg', alt: 'Career Architecture' },
                            { src: '/PAIVEPO/WhatsApp Image 2026-03-02 at 17.44.45.jpeg', alt: 'Strategic Guidance' },
                            { src: '/PAIVEPO/482004118_610977468395154_2259091242149512423_n.jpg', alt: 'PaiVepo Mentors' }
                        ]} />
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 12 }}>
                        {['Executive Career Coaching', 'Personal Branding', 'Strategic Mentorship'].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem' }}>
                                <CheckCircle size={14} color="#34d399" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="res-pb-60" style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 60 }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 16 }}>Ready to Begin?</h2>
                <p style={{ maxWidth: 600, margin: '0 auto 40px', opacity: 0.6 }}>Enroll into our 2026 intake and claim your place in the global AI economy.</p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                    <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies,%20I'm%20interested%20in%20enrolling%20in%20one%20of%20your%20Academy%20programs.%20Please%20provide%20more%20details." target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '16px 40px', borderRadius: 99 }}>ENROLL VIA WHATSAPP</a>
                    <a href="mailto:info@owatech-ai.com" className="btn btn-outline" style={{ padding: '16px 40px', borderRadius: 99 }}>EMAIL ENQUIRY</a>
                </div>
            </div>
        </div>
    </PageOverlay>
);

// ============================================================
// BLOG PAGE
// ============================================================

interface BlogPost {
    id: number;
    title: string;
    category: string;
    summary: string;
    content: string;
    image: string;
    color: string;
}

export const BlogPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const posts: BlogPost[] = [
        {
            id: 1,
            title: "AI Literacy: The Key to Africa's Future Workforce",
            category: "Education",
            summary: "As artificial intelligence reshapes industries globally, African institutions must embrace AI education to prepare the next generation of innovators.",
            content: "Artificial Intelligence is not just a trend; it is the fundamental infrastructure of the 21st-century economy. For Africa, this presents a unique leapfrogging opportunity.\n\nBy integrating AI literacy at the secondary and tertiary levels, we are ensuring that our youth are not just consumers of technology, but its architects. OWA Technologies is committed to this vision through our specialized academy tracks, where we bridge the gap between traditional degrees and high-value technical demand.\n\nOur curriculum focuses on Prompt Engineering, LLM Fine-tuning, and AI Ethics—skills that are currently in massive global demand. We are building the bridge, and the traffic is meant to be global.",
            image: "/side menu blogs/OWA Core/people-working-with-ai-operated-devices.jpg",
            color: "#60a5fa"
        },
        {
            id: 2,
            title: "How AI Agents Are Transforming African SMBs",
            category: "Business",
            summary: "Small and medium businesses across Africa are leveraging AI agents to automate customer service and scale globally.",
            content: "The greatest barrier to growth for African SMBs has historically been operational bandwidth. Entrepreneurs often find themselves bogged down in repetitive admin tasks rather than focusing on strategy.\n\nAI Agents change this equation entirely. From automated WhatsApp booking systems to lead qualification bots that work 24/7, we are seeing productivity gains of over 300% in businesses we've partnered with. These are not just simple chatbots; they are intelligent entities capable of handling complex workflows, processing payments, and managing customer expectations with perfect consistency.\n\nThe democratization of AI means a fruit vendor in Harare can have the same digital efficiency as a tech startup in Silicon Valley.",
            image: "/section blogs/Solutions/business-partnership-handshake.jpg",
            color: "#a78bfa"
        },
        {
            id: 3,
            title: "Starlink: Connecting Africa's Unconnected",
            category: "Technology",
            summary: "Satellite internet is bridging the digital divide in rural Africa, enabling students and founders to compete globally.",
            content: "High-speed internet is no longer a luxury—it is a human right. Starlink's arrival in the African market has been a logistical game-changer.\n\nFor the first time, developers in rural outposts have the same latency as those in urban hubs. OWA Technologies is actively supporting the installation and optimization of Starlink kits for educational centers and corporate branches. When you combine low-latency connectivity with high-power AI models, you remove the 'geographical tax' on African talent.\n\nWe are seeing students in remote villages accessing real-time mentoring from global experts, and local founders launching SaaS products directly from the bush.",
            image: "/side menu blogs/Partners/68875c62276b2cb6970c19da-starlink-v2-satellite-dish-kit-with.webp",
            color: "#4ade80"
        },
        {
            id: 4,
            title: "AI in Healthcare: Revolutionizing Patient Care",
            category: "Healthcare",
            summary: "From diagnostic tools to treatment planning, AI is transforming healthcare delivery across the continent.",
            content: "The integration of AI into African healthcare systems is solving the critical challenge of doctor-to-patient ratios. By deploying AI-driven diagnostic assistants, rural clinics can now perform preliminary screenings for conditions that previously required a trip to a major city.\n\nOWA Technologies is focusing on 'Edge AI' for healthcare—models that can run on tablet devices without needing a constant high-speed connection. This ensures that life-saving technology works even in the most remote areas. We believe the future of health in Africa is predictive, preventative, and powered by intelligent data analysis.",
            image: "/section blogs/Agriculture/healthcare-technology.jpg",
            color: "#f472b6"
        },
        {
            id: 5,
            title: "The Rise of African Fintech",
            category: "Fintech",
            summary: "African fintech startups are disrupting traditional banking and creating new opportunities for financial inclusion.",
            content: "Africa is the global leader in mobile money, but the next wave is AI-driven financial services. We are moving beyond simple transfers into intelligent credit scoring, automated micro-insurance, and fraud detection that understands local spending patterns.\n\nAt OWA, we build the backend intelligence that allows fintech platforms to scale. By analyzing non-traditional data points, our AI models help financial institutions provide capital to the 'unbanked' with confidence. This is not just about technology; it's about building the financial rails for an entire generation of African entrepreneurs.",
            image: "/section blogs/Solutions/Innovative-Fintech-Offices-Banner.jpg",
            color: "#fb923c"
        },
        {
            id: 6,
            title: "Smart Agriculture with AI",
            category: "Agriculture",
            summary: "AI-powered solutions are helping African farmers increase yields and reduce waste through precision farming.",
            content: "Agriculture remains the backbone of many African economies, yet it faces massive challenges from climate volatility. AI offers a shield against this uncertainty.\n\nThrough satellite imagery analysis and soil sensor data, OWA provides farmers with precise 'Actionable Intelligence.' Whether it's predicting the optimal harvest window or detecting early-stage crop diseases via a smartphone camera, we are bringing precision farming to smallholder cooperatives. The goal is simple: maximize yield, minimize input costs, and ensure food security for the region.",
            image: "/section blogs/Agriculture/drone-agri.jpg",
            color: "#22c55e"
        },
        {
            id: 7,
            title: "The Future of Remote Work in Africa",
            category: "Remote Work",
            summary: "How AI and connectivity are enabling Africans to work for global companies from home, bridging the global talent gap.",
            content: "The 'Brain Drain' is being replaced by 'Digital Gain.' African talent no longer needs to leave the continent to build a global career. AI-powered collaboration tools and reliable connectivity (like Starlink) have leveled the playing field.\n\nOWA Technologies acts as a facilitator for this transition, providing the infrastructure and AI training needed for local talent to compete at the highest level. We are seeing a surge in 'distributed excellence,' where engineers in Lagos or Nairobi are the primary architects of systems used in London or New York. The office of the future is wherever there is a laptop and an' ambitious mind.",
            image: "/side menu blogs/OWA Core/iStock-1333390966-1.jpg",
            color: "#38bdf8"
        },
        {
            id: 8,
            title: "OWA Vision 2026: The Strategic Manifesto",
            category: "Strategy",
            summary: "Charting the course for OWA's expansion and its role in building Africa's sovereign digital infrastructure.",
            content: "As we look toward 2026, OWA's mission evolves from service provider to architectural catalyst. We are building the sovereign digital infrastructure that will define African commerce, education, and governance for the next decade.\n\nOur focus is triple-layered: establishing Tier-4 data resilience, cultivating deep-tech mastery in local talent, and deploying decentralized AI networks that respect continental data sovereignty. The manifesto is clear—Africa will not just participate in the fourth industrial revolution; we will lead it through localized innovation and unwavering ethical standards.",
            image: "/assets/hero/Africa_Neural_map.png",
            color: "#c026d3"
        }
    ];

    return (
        <PageOverlay open={open} onClose={onClose}>
            <PageHero
                badge="Latest Insights"
                title="OWA Blog"
                sub="Thoughts on AI, technology, and Africa's digital transformation."
            />
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px 100px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
                    {posts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: 24,
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.06)',
                                cursor: 'pointer'
                            }}
                            onClick={() => setSelectedPost(post)}
                            whileHover={{ y: -8, borderColor: `${post.color}44`, background: 'rgba(255,255,255,0.04)' }}
                        >
                            <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                                <motion.img
                                    src={post.image}
                                    initial={{ scale: 1.12, x: '0%', y: '0%' }}
                                    animate={{ scale: [1.12, 1.02, 1.1, 1.12], x: ['0%', '-1.5%', '1.5%', '0%'], y: ['0%', '1.5%', '-1.5%', '0%'] }}
                                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(0,0,0,0.8)', padding: '6px 12px', borderRadius: 8 }}>
                                    <span style={{ fontSize: '0.6rem', fontWeight: 800, color: post.color }}>{post.category}</span>
                                </div>
                            </div>
                            <div style={{ padding: 32 }}>
                                <h3 style={{ margin: '0 0 16px', fontSize: '1.25rem' }}>{post.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: 24 }}>{post.summary}</p>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <span style={{ color: post.color, fontWeight: 700, fontSize: '0.85rem' }}>READ MORE <ArrowRight size={14} style={{ marginLeft: 4 }} /></span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.98)', backdropFilter: 'blur(20px)', overflowY: 'auto', padding: '80px 20px' }}
                    >
                        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
                            <button onClick={() => setSelectedPost(null)} style={{ position: 'fixed', top: 40, right: 40, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 50, width: 50, height: 50, color: '#fff', cursor: 'pointer' }}><X /></button>
                            <img src={selectedPost.image} style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 24, marginBottom: 40 }} />
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 24 }}>{selectedPost.title}</h2>
                            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{selectedPost.content}</div>
                            <div style={{ marginTop: 60, padding: 40, borderRadius: 24, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h4 style={{ marginBottom: 16 }}>Interested in this solution?</h4>
                                <a
                                    href={`https://wa.me/263772479492?text=Hello%20OWA%20Technologies,%20I%20am%20enquiring%20about%20the%20"${selectedPost.title}"%20article%20I%20read%20on%20your%20blog.%20I'd%20like%20to%20learn%20more.`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                    style={{ textDecoration: 'none' }}
                                >
                                    ENQUIRE VIA WHATSAPP
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageOverlay>
    );
};

// ============================================================
// PRIVACY POLICY PAGE
// ============================================================

export const PrivacyPolicyPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const sections = [
        { id: 'data', title: 'Data Collection', icon: <Search size={18} /> },
        { id: 'usage', title: 'Usage Policy', icon: <Zap size={18} /> },
        { id: 'security', title: 'Security Protocol', icon: <Shield size={18} /> },
        { id: 'ethics', title: 'AI Ethics', icon: <Brain size={18} /> },
        { id: 'rights', title: 'User Rights', icon: <Users size={18} /> },
        { id: 'demo', title: 'Demo Mandate', icon: <Award size={18} /> },
    ];

    return (
        <PageOverlay open={open} onClose={onClose}>
            <PageHero
                badge="Legal & Trust"
                title="Privacy & Data<br/>Governance"
                sub="At OWA Technologies, we prioritize data sovereignty and transparent AI operations. This policy details our commitment to your privacy."
            />
            <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px 100px' }}>
                {/* Policy Navigation Bar */}
                <div style={{
                    display: 'flex', gap: 12, marginBottom: 60, overflowX: 'auto', paddingBottom: 12,
                    borderBottom: '1px solid rgba(255,255,255,0.05)', scrollbarWidth: 'none'
                }}>
                    {sections.map(s => (
                        <a key={s.id} href={`#${s.id}`} style={{
                            display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px',
                            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 12, fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)',
                            whiteSpace: 'nowrap', transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,99,235,0.1)'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                            {s.icon} {s.title}
                        </a>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 40 }}>
                    <motion.section
                        id="data"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ padding: 40, background: 'rgba(255,255,255,0.01)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                            <div style={{ padding: 12, borderRadius: 12, background: 'rgba(96,165,250,0.1)', color: '#60a5fa' }}><Search size={22} /></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>1. Intelligence Gathering</h3>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                            To build effective AI models, we collect data you provide during consultations and platform interactions.
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, listStyle: 'none', padding: 0 }}>
                            {['Corporate Identity Data', 'Project Specifications', 'Interaction Analytics', 'Technical Metadata'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                                    <CheckCircle size={14} color="#2563EB" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        id="usage"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <Zap size={20} color="#60a5fa" /> 2. Tactical Implementation
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                            Your information is exclusively used to train bespoke AI agents, optimize your business workflows, and refine our predictive delivery engines. We follow the principle of <strong>minimum data necessity</strong>.
                        </p>
                    </motion.section>

                    <motion.section
                        id="security"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ padding: 40, background: 'linear-gradient(135deg, rgba(37,99,235,0.05), transparent)', borderRadius: 24, border: '1px solid rgba(37,99,235,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                            <div style={{ padding: 12, borderRadius: 12, background: 'rgba(37,99,235,0.1)', color: '#60a5fa' }}><Shield size={22} /></div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>3. Sovereign Security</h3>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                            We utilize military-grade AES-256 encryption for data at rest and TLS 1.3 for all transmissions. Your data never leaves our sovereign African server clusters without explicit multi-party authorization.
                        </p>
                    </motion.section>

                    <motion.section
                        id="ethics"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <Brain size={20} color="#60a5fa" /> 4. AI Ethics & Accountability
                        </h3>
                        <div style={{ padding: 24, background: 'rgba(255,255,255,0.02)', borderRadius: 16, border: '1px dotted rgba(255,255,255,0.1)' }}>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.9rem' }}>
                                OWA Technologies commits to non-biased algorithm training. We perform monthly audits to ensure our AI systems operate transparently, ethically, and in alignment with human-centric progress.
                            </p>
                        </div>
                    </motion.section>

                    <motion.section
                        id="rights"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <Users size={20} color="#60a5fa" /> 5. Data Sovereignty Rights
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                            You maintain total ownership of your datasets. You have the right to request a complete "Memory Flush" (data deletion) or a portable export of your trained parameters at any time.
                        </p>
                    </motion.section>

                    <motion.section
                        id="demo"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <Award size={20} color="#60a5fa" /> 6. The Free Demo & Trust Mandate
                        </h3>
                        <div style={{ padding: 24, background: 'rgba(16,185,129,0.05)', borderRadius: 16, border: '1px solid rgba(16,185,129,0.1)' }}>
                            <p style={{ color: '#4ade80', fontWeight: 700, marginBottom: 12 }}>OWA Rule: Absolute Clarity Before Capital.</p>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1rem' }}>
                                OWA Technologies operates on a strict <strong style={{ fontWeight: 800, color: '#fff' }}>Zero-Fee Consultation Policy</strong>. We do not accept any financial commitment until we have demonstrated a functioning demo review of your specific project or showcased similar previous projects we have built to effectively communicate our capability. This <strong style={{ fontWeight: 800, color: '#fff' }}>"Demo First"</strong> approach is our core global mandate—ensuring that trust is earned through technical proof before any contract is signed or deposit paid.
                            </p>
                        </div>
                    </motion.section>
                </div>

                <div style={{
                    marginTop: 80, padding: 40, background: 'rgba(0,0,0,0.3)', borderRadius: 24,
                    border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center'
                }}>
                    <h4 style={{ fontWeight: 800, marginBottom: 12 }}>Questions or Inquiries?</h4>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: 24 }}>Our legal team and AI ethics board are available for consultation.</p>
                    <a href="mailto:legal@owatech-ai.com" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>legal@owatech-ai.com</a>
                    <div style={{ marginTop: 32, fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
                        Last Updated: March 4, 2026 • © OWA Technologies Infrastructure
                    </div>
                </div>
            </div>
        </PageOverlay>
    );
};
