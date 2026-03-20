import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Easing } from 'framer-motion';
import {
    ArrowRight, CheckCircle, ChevronRight, Globe, Zap,
    GraduationCap, Wifi, BookOpen, Home,
    Award, Lightbulb, Target,
    TrendingUp, Handshake, Rocket, Palette,
    ExternalLink, Shield, Users, Heart, Cpu, FileText, Download
} from 'lucide-react';
import { PageOverlay } from './SidebarPages';

// Elegant easing for Stripe-like smooth animations
const smoothEasing: Easing = [0.25, 0.1, 0.25, 1];

const wrapClass = "page-wrapper";

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
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>
            </AnimatePresence>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)', pointerEvents: 'none' }} />
        </div>
    );
};

// Vertical scroll slideshow with smooth transitions - no black screen
const HorizontalSlideshow: React.FC<{ images: { src: string; alt: string }[]; interval?: number; seed?: number }> = ({ images, interval = 5000, seed = 0 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex(prev => (prev + 1) % images.length), interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    const getInitial = (idx: number) => {
        // Diagonal combined scroll with zoom - distinct from left frame
        const variants = [
            { opacity: 0, scale: 1.15, x: '12%', y: '12%' },
            { opacity: 0, scale: 1.12, x: '-12%', y: '10%' },
            { opacity: 0, scale: 1.15, x: '10%', y: '-15%' },
            { opacity: 0, scale: 1.12, x: '-10%', y: '-12%' },
            { opacity: 0, scale: 1.08, x: '8%', y: '-6%' },
            { opacity: 0, scale: 1.08, x: '-8%', y: '6%' }
        ];
        return variants[(idx + seed) % variants.length];
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#000', borderRadius: 'inherit' }}>
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={getInitial(index)}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                        opacity: { duration: 1.2, ease: smoothEasing },
                        x: { duration: 2.5, ease: smoothEasing },
                        y: { duration: 2.5, ease: smoothEasing },
                        scale: { duration: 2.8, ease: smoothEasing }
                    }}
                    style={{ position: 'absolute', inset: 0 }}
                >
                    <img
                        src={images[index].src}
                        alt={images[index].alt}
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>
            </AnimatePresence>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 40%)', pointerEvents: 'none' }} />
        </div>
    );
};

const Slideshow: React.FC<{ images: { src: string; alt: string }[]; interval?: number }> = ({ images, interval = 5000 }) => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => setIndex(prev => (prev + 1) % images.length), interval);
        return () => clearInterval(timer);
    }, [images.length, isPaused, interval]);

    return (
        <div
            style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 20 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence>
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: '#000' }}
                >
                    <img
                        src={images[index].src}
                        alt={images[index].alt}
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};



const VideoPlayer: React.FC<{ src: string; poster?: string }> = ({ src, poster }) => (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#000' }}>
        <video
            src={src}
            poster={poster}
            preload="none"
            muted
            loop
            playsInline
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: 4, fontSize: '0.6rem', color: '#fff', pointerEvents: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
            OWA EXCLUSIVE
        </div>
    </div>
);

const PageHero: React.FC<{ badge: string; title: string; sub: string }> = ({ badge, title, sub }) => (
    <div style={{ padding: '24px 0 48px', borderBottom: '1px solid rgba(255,255,255,0.06)', maxWidth: 1200, margin: '0 auto' }} className="page-wrapper">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)', borderRadius: 99, padding: '6px 16px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#60a5fa', marginBottom: 24 }}>{badge}</span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 20 }} dangerouslySetInnerHTML={{ __html: title }} />
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', maxWidth: 720, lineHeight: 1.8 }}>{sub}</p>
    </div>
);

const PartnerGridItem: React.FC<{ images: string[]; label: string; delay: number }> = ({ images, label, delay }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                opacity: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }
            }}
            viewport={{ once: true, margin: '-50px' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ position: 'relative', height: 220, overflow: 'hidden', borderRadius: 12, cursor: 'pointer' }}
        >
            <div style={{ width: '100%', height: '100%' }}>
                <Slideshow
                    images={images.map(src => ({ src, alt: label }))}
                    interval={4000 + (delay * 1500)}
                />
                <motion.div
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                        background: isHovered ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)'
                    }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '16px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    zIndex: 2
                }}
            >
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    style={{ fontSize: '0.72rem', fontWeight: 800, color: '#60a5fa', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}
                >
                    {label}
                </motion.span>
            </motion.div>
        </motion.div>
    );
};

const TabBtn: React.FC<{ active: boolean; label: string; icon: React.ReactNode; onClick: () => void }> = ({ active, label, icon, onClick }) => (
    <button onClick={onClick} style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', borderRadius: 10, cursor: 'pointer', transition: 'all 0.25s', border: active ? '1px solid rgba(37,99,235,0.5)' : '1px solid rgba(255,255,255,0.08)',
        background: active ? 'rgba(37,99,235,0.15)' : 'rgba(255,255,255,0.03)', color: active ? '#60a5fa' : 'rgba(255,255,255,0.6)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const,
    }}>{icon} {label}</button>
);

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; items: string[]; accent?: string }> = ({ icon, title, items, accent = '#60a5fa' }) => (
    <motion.div
        whileHover={{ y: -8, borderColor: accent, background: 'rgba(255,255,255,0.04)' }}
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px', transition: 'all 0.3s ease' }}
    >
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `linear-gradient(135deg, ${accent}33, ${accent}15)`, border: `1px solid ${accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, marginBottom: 20 }}>{icon}</div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 18 }}>{title}</h3>
        {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                <CheckCircle size={14} color={accent} style={{ marginTop: 3, flexShrink: 0 }} /> {it}
            </div>
        ))}
    </motion.div>
);

// ════════════════════════════════════════════════════════════════
// 1. AI FOR EDUCATION PAGE (Teachers | Students sub-tabs)
// ════════════════════════════════════════════════════════════════
export const AIforEducationPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const [tab, setTab] = useState<'teachers' | 'students'>('teachers');
    return (
        <PageOverlay open={open} onClose={onClose}>
            <PageHero badge="AI for Education" title="Transform Education<br/>With <span style='color:#60a5fa'>Intelligent Systems</span>" sub="OWA Technologies bridges the gap between traditional education and the AI-powered future. Dedicated programs for teachers and students." />
            <div className={wrapClass}>
                {/* Tabs */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
                    <TabBtn active={tab === 'teachers'} label="For Teachers" icon={<BookOpen size={16} />} onClick={() => setTab('teachers')} />
                    <TabBtn active={tab === 'students'} label="For Students" icon={<GraduationCap size={16} />} onClick={() => setTab('students')} />
                </div>

                {tab === 'teachers' ? (
                    <motion.div key="teachers" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        {/* Teacher Hero Banner */}
                        <div className="stack-on-mobile" style={{ marginBottom: 48, alignItems: 'center' }}>
                            <div style={{ borderRadius: 20, overflow: 'hidden', height: 400, border: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
                                <Slideshow images={[
                                    { src: '/assets/blog/zimbabwean_teacher_classroom.png', alt: 'Teacher Classroom' },
                                    { src: '/assets/owa_blogs/GettyImages-595349163-adult-teacher-job-search-574cd2935f9b5851655ffb7d.jpg', alt: 'Professional Teacher' },
                                    { src: '/assets/owa_blogs/0-information-technology-workshop-thumb.jpg', alt: 'IT Workshop' }
                                ]} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,9,26,0.3), transparent)', pointerEvents: 'none' }} />
                            </div>
                            <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(16,185,129,0.08))', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 20, padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 900, marginBottom: 16 }}>Empower Every Classroom with AI</h2>
                                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>Give teachers the tools to work smarter, engage students deeper, and reclaim hours lost to administrative overhead.</p>
                            </div>
                        </div>

                        {/* Problems Solved */}
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f87171', textTransform: 'uppercase' as const, marginBottom: 24 }}>🔴 Problems AI Solves for Teachers</h3>
                        <div className="stack-on-mobile" style={{ marginBottom: 48 }}>
                            {['Manual grading consuming 10+ hours weekly — repetitive, error-prone, and exhausting', 'Lesson planning fatigue — creating fresh, engaging material every term is overwhelming', 'Disengaged students — traditional methods fail to capture digital-native attention spans', 'Data tracking overload — attendance, performance metrics, and reports buried in spreadsheets', 'One-size-fits-all teaching — no capacity to personalize learning for each student', 'Parent communication gaps — slow updates, missed reports, lack of real-time progress sharing'].map((p, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '20px 24px', background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.12)', borderRadius: 12, fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                                    <span style={{ color: '#f87171', fontSize: '1.1rem', marginTop: -2, flexShrink: 0 }}>✖</span> {p}
                                </div>
                            ))}
                        </div>

                        {/* Benefits */}
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#4ade80', textTransform: 'uppercase' as const, marginBottom: 24 }}>✅ Benefits of AI-Powered Teaching</h3>
                        <div className="stack-on-tablet" style={{ marginBottom: 48 }}>
                            <InfoCard icon={<Zap size={20} />} title="Save 10+ Hours Weekly" items={['AI auto-grades assignments & quizzes', 'Instant feedback generation for students', 'Automated attendance & report writing']} accent="#4ade80" />
                            <InfoCard icon={<Target size={20} />} title="Personalized at Scale" items={['AI analyzes each student\'s learning pace', 'Auto-generates differentiated worksheets', 'Real-time performance dashboards per student']} accent="#60a5fa" />
                            <InfoCard icon={<Lightbulb size={20} />} title="Engaging AI Content" items={['AI-powered lesson plan generators', 'Interactive quiz builders from any topic', 'Visual aids & presentation auto-creation']} accent="#a78bfa" />
                        </div>

                        {/* Training Available */}
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#60a5fa', textTransform: 'uppercase' as const, marginBottom: 24 }}>📚 Training Programs for Educators</h3>
                        <div className="stack-on-tablet" style={{ marginBottom: 48 }}>
                            {[
                                { badge: 'FOUNDATION', color: '#2563EB', title: 'Basic AI Toolkit', duration: '2-Day Workshop', items: ['Understanding AI fundamentals for education', 'Using ChatGPT/Gemini for lesson planning', 'AI-powered grading introduction', 'Ethics & responsible AI in classrooms'] },
                                { badge: 'INTEGRATION', color: '#0891b2', title: 'Classroom AI Integration', duration: '1-Week Intensive', items: ['Building automated grading workflows', 'Creating AI-powered student assessments', 'Data analytics for student performance', 'Parent communication automation'] },
                                { badge: 'ADVANCED', color: '#7c3aed', title: 'Curriculum Design with AI', duration: 'Custom Duration', items: ['Full curriculum redesign using AI tools', 'School-wide automation architecture', 'Training other teachers as AI champions', 'Institutional AI governance framework'] },
                            ].map((t, i) => (
                                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ display: 'inline-block', background: t.color, color: 'white', padding: '4px 14px', borderRadius: 99, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 20, alignSelf: 'flex-start' }}>{t.badge}</span>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 4 }}>{t.title}</h3>
                                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{t.duration}</p>
                                    {t.items.map((it, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                                            <ChevronRight size={13} color={t.color} style={{ marginTop: 3, flexShrink: 0 }} /> {it}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* What They'll Learn */}
                        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 24px', marginBottom: 48 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 24 }}>What Teachers Will Master</h3>
                            <div className="stack-on-mobile" style={{ gap: 0 }}>
                                {['Prompt engineering — crafting instructions that get the best AI output', 'AI grading tools — automated marking with personalized feedback', 'Content generation — lesson plans, worksheets, exams in minutes', 'Student analytics — interpreting AI-generated performance data', 'Ethics in AI — teaching responsible AI usage to students', 'Workflow automation — connecting tools for seamless classroom management'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)' }}>
                                        <CheckCircle size={14} color="#2563EB" style={{ marginTop: 3, flexShrink: 0 }} /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20would%20like%20to%20book%20an%20AI%20Teacher%20Training%20Workshop%20for%20our%20school%2Finstitution.%20Please%20send%20me%20the%20available%20dates%2C%20pricing%2C%20and%20curriculum%20details.%20Thank%20you!" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                                Book Teacher Training <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div key="students" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        {/* Student Hero Banner */}
                        <div className="stack-on-mobile" style={{ marginBottom: 48, alignItems: 'center' }}>
                            <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.08))', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 20, padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 900, marginBottom: 16 }}>Become Irreplaceable. Learn AI Now.</h2>
                                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>Don't let technology replace your future. Partner with OWA to build real AI skills, earn certifications, and launch your career in the new digital economy.</p>
                            </div>
                            <div style={{ borderRadius: 20, overflow: 'hidden', height: 400, border: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
                                <KenBurnsSlideshow
                                    interval={6500}
                                    seed={4}
                                    images={[
                                        { src: '/assets/blog/african_student_ai_learning_high_tech.png', alt: 'AI Learning' },
                                        { src: '/assets/blog/sekai_moyo_teacher_ai.png', alt: 'AI Class Session' },
                                        { src: '/assets/owa_blogs/Students_on_laptop_(1).jpg', alt: 'Students Collaborating' },
                                        { src: '/assets/owa_blogs/pupilsatthec.jpg', alt: 'School Excellence' }
                                    ]}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,9,26,0.4), transparent)', pointerEvents: 'none' }} />
                            </div>
                        </div>

                        {/* Problems Solved */}
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#f87171', textTransform: 'uppercase' as const, marginBottom: 24 }}>🔴 Challenges Students Face Today</h3>
                        <div className="stack-on-mobile" style={{ marginBottom: 48 }}>
                            {['Falling behind global peers — African students lack access to cutting-edge tech training', 'Limited career-ready skills — traditional education doesn\'t teach AI, automation, or digital tools', 'No practical tech exposure — theory without hands-on building leads to unemployable graduates', 'Expensive education — quality tech training priced out of reach for most families', 'No clear career pathway — confusion about what AI jobs exist and how to get them', 'Fear of AI — misconception that AI will replace them rather than empower them'].map((p, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '20px 24px', background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.12)', borderRadius: 12, fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                                    <span style={{ color: '#f87171', fontSize: '1.1rem', marginTop: -2, flexShrink: 0 }}>✖</span> {p}
                                </div>
                            ))}
                        </div>

                        {/* Benefits */}
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#4ade80', textTransform: 'uppercase' as const, marginBottom: 24 }}>✅ What OWA Gives Students</h3>
                        <div className="stack-on-tablet" style={{ marginBottom: 48 }}>
                            <InfoCard icon={<Rocket size={20} />} title="Future-Proof Skills" items={['Learn AI tools used by top global companies', 'Build real automation projects, not just theory', 'Understand prompt engineering & AI architecture']} accent="#a78bfa" />
                            <InfoCard icon={<TrendingUp size={20} />} title="Earn While Learning" items={['OWA internship pipeline for top students', 'Freelance AI project opportunities', 'Referral commissions for student ambassadors']} accent="#4ade80" />
                            <InfoCard icon={<Award size={20} />} title="Portfolio & Recognition" items={['Build a real AI project portfolio', 'OWA completion certificates', 'Network access to global tech community']} accent="#f59e0b" />
                        </div>

                        {/* Training Tracks */}
                        <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#60a5fa', textTransform: 'uppercase' as const, marginBottom: 24 }}>🎓 Student Learning Tracks</h3>
                        <div className="stack-on-tablet" style={{ marginBottom: 48 }}>
                            {[
                                { badge: 'BEGINNER', color: '#2563EB', title: 'AI Foundations', duration: 'Free Introduction', items: ['What is AI and how does it work?', 'Using AI tools for school projects', 'Introduction to prompt engineering', 'Career paths in AI explained'] },
                                { badge: 'INTERMEDIATE', color: '#0891b2', title: 'Automation Builder', duration: '2-Week Program', items: ['Build your first chatbot', 'Create automated workflows (n8n/Make)', 'WhatsApp bot development basics', 'Team collaboration on AI projects'] },
                                { badge: 'ADVANCED', color: '#7c3aed', title: 'Architecture Masterclass', duration: '1:1 with LYKART06', items: ['Full-stack AI system design', 'CRM & API deep integrations', 'Enterprise automation architecture', 'Ethical AI governance & leadership'] },
                            ].map((t, i) => (
                                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ display: 'inline-block', background: t.color, color: 'white', padding: '4px 14px', borderRadius: 99, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 20, alignSelf: 'flex-start' }}>{t.badge}</span>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 4 }}>{t.title}</h3>
                                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{t.duration}</p>
                                    {t.items.map((it, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                                            <ChevronRight size={13} color={t.color} style={{ marginTop: 3, flexShrink: 0 }} /> {it}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Path to Employment */}
                        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 24px', marginBottom: 48 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 24 }}>Your Path to Employment</h3>
                            <div className="stack-on-tablet">
                                {[
                                    { step: '01', title: 'Learn', desc: 'Complete OWA Foundation or Advanced track' },
                                    { step: '02', title: 'Build', desc: 'Create real AI projects for your portfolio' },
                                    { step: '03', title: 'Intern', desc: 'Join OWA internship pipeline or freelance' },
                                    { step: '04', title: 'Launch', desc: 'Get hired or start your own AI consultancy' },
                                ].map((s, i) => (
                                    <div key={i} style={{ textAlign: 'center', padding: '24px 16px' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(37,99,235,0.3)', marginBottom: 12 }}>{s.step}</div>
                                        <h4 style={{ fontWeight: 800, marginBottom: 8 }}>{s.title}</h4>
                                        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20a%20student%2Fyoung%20professional%20interested%20in%20joining%20the%20OWA%20AI%20Academy.%20Please%20share%20the%20enrollment%20details%2C%20available%20courses%2C%20and%20start%20dates.%20Thank%20you!" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                                Join the Academy <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </PageOverlay>
    );
};

// ════════════════════════════════════════════════════════════════
// 2. PARTNERS PAGE
// ════════════════════════════════════════════════════════════════
export const PartnersPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero badge="Strategic Partnership Ecosystem" title="Unlocking Global Pathways<br/><span style='color:#60a5fa'>From Local Roots</span>" sub="OWA Technologies builds high-impact collaborations with aligned leaders and visionary anchors. Every partnership is selected for its ability to expand opportunity and deliver real-world outcomes." />
        <div className={wrapClass}>

            {/* ── Hero Image Grid ─────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: smoothEasing }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 60 }}
            >
                {[
                    {
                        images: [
                            '/assets/owa_blogs/business-partnership-handshake.jpg',
                            '/ARTGALZIM/artgalzim_building.jpg',
                            '/ARTGALZIM/artgalzim_logo.jpg'
                        ],
                        label: 'Strategic Alignment'
                    },
                    {
                        images: [
                            '/assets/owa_blogs/partnership_1.jpg',
                            '/assets/owa_blogs/1231752731-AdobeStock_594956182_satellite_IoT_earth_Space_1200x630.jpeg',
                            '/assets/owa_blogs/UAE-Ranks-First-Globally-in-AI-Adoption-Fueled-by-Government-Support.jpg'
                        ],
                        label: 'Global Network'
                    },
                    {
                        images: [
                            '/assets/owa_blogs/img_proficiencies_small.png',
                            '/assets/owa_blogs/ZHfo1O8H8PpzDiRGQexDwPBtZpA.png',
                            '/assets/owa_blogs/71Vk8zrWFXL.jpg'
                        ],
                        label: 'Tech Excellence'
                    },
                    {
                        images: [
                            '/assets/owa_blogs/Innovative-Fintech-Offices-Banner.jpg',
                            '/assets/owa_blogs/Office_Branding.jpg',
                            '/assets/owa_blogs/photo-1528901166007-3784c7dd3653.jpg'
                        ],
                        label: 'OWA Hub'
                    },
                ].map((img, i) => (
                    <PartnerGridItem key={i} images={img.images} label={img.label} delay={i * 0.12} />
                ))}
            </motion.div>

            {/* ── Section Title ─────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: smoothEasing }}
                style={{ marginBottom: 40 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.35)' }} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' as const }}>Strategic Partnerships</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>Our Ecosystem Partners</h2>
            </motion.div>

            {/* ── Artgalzim Center ─────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: smoothEasing }}
                className="stack-on-mobile res-p-side-20"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '32px 24px', marginBottom: 32, alignItems: 'center' }}
            >
                <div className="mobile-breakout res-h-350" style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 400 }}>
                    <KenBurnsSlideshow
                        interval={6500}
                        seed={5}
                        images={[
                            { src: "/ARTGALZIM/artgalzim_logo.jpg", alt: 'Artgalzim Identity' },
                            { src: "/ARTGALZIM/artgalzim_building.jpg", alt: 'Art Gallery Center' },
                            { src: "/ARTGALZIM/artgalzim_sunrise.jpg", alt: 'Domboshava Creative Landscape' }
                        ]}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,9,26,0.85), transparent)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f97316', textTransform: 'uppercase' as const }}>Artgalzim Center</span>
                        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Contemporary Arts & Mentorship</p>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 52, height: 52, borderRadius: 12, background: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(249,115,22,0.1))', border: '1px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}>
                            <Palette size={22} />
                        </div>
                        <div>
                            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f97316', textTransform: 'uppercase' as const, display: 'block' }}>Art & Cultural Partner · Zimbabwe</span>
                            <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Artgalzim Center</h2>
                        </div>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 16 }}>
                        Artgalzim Center, officially launched in March 2026, is a prominent creative hub and art gallery located at the Mverechena Business Center in Domboshava. Founded by acclaimed artist Keith Zenda, the center serves as a specialized space for nurturing emerging talent, preserving cultural heritage, and promoting contemporary Zimbabwean art on a global scale.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {['Contemporary African Art', 'Artist Mentorship', 'Cultural Heritage', 'Visual Arts', 'Creative Hub'].map((t, i) => (
                            <span key={i} style={{ padding: '5px 14px', borderRadius: 99, fontSize: '0.72rem', fontWeight: 600, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', color: '#f97316' }}>{t}</span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ── Blessed Be Faith College ─────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: smoothEasing }}
                className="res-p-side-20"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '48px 40px', marginBottom: 32 }}
            >
                <div className="stack-on-mobile" style={{ marginBottom: 40, alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                            <div style={{ width: 52, height: 52, borderRadius: 12, background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(16,185,129,0.1))', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ade80' }}>
                                <GraduationCap size={22} />
                            </div>
                            <div>
                                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: '#4ade80', textTransform: 'uppercase' as const, display: 'block' }}>Education Partner · Zimbabwe</span>
                                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Blessed Be Faith College</h2>
                            </div>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 16 }}>
                            Blessed Be Faith College is a leading institution in Zimbabwe dedicated to equipping students with practical, industry-grade skills in hospitality, hotel management, and catering. OWA Technologies partners with Blessed Be Faith to integrate digital skills and AI literacy directly into their curriculum.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                            {['Hotel & Catering', 'Hospitality Training', 'AI Literacy', 'Community Training', 'Government Programs'].map((t, i) => (
                                <span key={i} style={{ padding: '5px 14px', borderRadius: 99, fontSize: '0.72rem', fontWeight: 600, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#4ade80' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mobile-breakout">
                        <VideoPlayer src="/BBF PICS/VID-20240924-WA0005.mp4" />
                    </div>
                </div>
            </motion.div>

            {/* Master pool of all BBF images to rotate through cinematic frame */}
            {(() => {
                const bbfAllImages = [
                    { src: "/BBF%20PICS/IMG-20230128-WA0004.jpg", alt: "Catering Class" },
                    { src: "/BBF%20PICS/IMG-20230128-WA0005.jpg", alt: "Student Practice" },
                    { src: "/BBF%20PICS/IMG-20230719-WA0043.jpg", alt: "Kitchen Training" },
                    { src: "/BBF%20PICS/IMG-20230719-WA0044.jpg", alt: "Student Graduation" },
                    { src: "/BBF%20PICS/IMG-20230719-WA0045.jpg", alt: "Certificate Award" },
                    { src: "/BBF%20PICS/IMG-20240728-WA0039.jpg", alt: "Hospitality Training" },
                    { src: "/BBF%20PICS/IMG-20240728-WA0040.jpg", alt: "Culinary Skills" },
                    { src: "/BBF%20PICS/IMG-20240728-WA0125.jpg", alt: "Practical Session" },
                    { src: "/BBF%20PICS/IMG-20240728-WA0128.jpg", alt: "Field Practice" },
                    { src: "/BBF%20PICS/IMG-20240728-WA0129.jpg", alt: "Workshop" },
                    { src: "/BBF%20PICS/IMG-20240729-WA0013.jpg", alt: "Vocational Skills" },
                    { src: "/BBF%20PICS/IMG-20240811-WA0004.jpg", alt: "Practitioners" },
                    { src: "/BBF%20PICS/IMG-20240811-WA0006.jpg", alt: "Training Session" },
                    { src: "/BBF%20PICS/IMG-20260221-WA0005.jpg", alt: "BBF Students" },
                    { src: "/BBF%20PICS/WhatsApp%20Image%202026-03-02%20at%2017.44.46%20(1).jpeg", alt: "Event Coverage" },
                    { src: "/BBF%20PICS/WhatsApp%20Image%202026-03-02%20at%2017.44.47%20(1).jpeg", alt: "Skills Development" },
                    { src: "/BBF%20PICS/WhatsApp%20Image%202026-03-02%20at%2017.44.47.jpeg", alt: "Group Activity" }
                ];

                return (
                    <div className="stack-on-mobile" style={{ marginBottom: 48, alignItems: 'center' }}>
                        <div className="mobile-breakout res-h-350" style={{ height: 400, borderRadius: 16, overflow: 'hidden' }}>
                            <KenBurnsSlideshow images={bbfAllImages.slice(0, 9)} interval={7000} seed={1} />
                        </div>
                        <div className="mobile-breakout res-h-340" style={{ height: 340, borderRadius: 16, overflow: 'hidden', boxShadow: '0 16px 32px rgba(0,0,0,0.4)' }}>
                            <HorizontalSlideshow images={bbfAllImages.slice(9, 17)} interval={5500} seed={3} />
                        </div>
                    </div>
                );
            })()}

            {/* ── PaiVepo Domboshava ───────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: smoothEasing }}
                className="stack-on-mobile res-p-side-20"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '32px 24px', marginBottom: 32, alignItems: 'center' }}
            >
                <div className="mobile-breakout res-h-350" style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 400 }}>
                    <KenBurnsSlideshow
                        interval={6500}
                        seed={3}
                        images={[
                            { src: "/PAIVEPO/469519677_552317860927782_4686474807741102978_n.jpg", alt: 'PaiVepo Domboshava' },
                            { src: "/PAIVEPO/476249544_595226256636942_3277987789476881716_n.jpg", alt: 'Eco-Tourism' },
                            { src: "/PAIVEPO/476278681_595239183302316_7350128413608806885_n.jpg", alt: 'Local Heritage' },
                            { src: "/PAIVEPO/476834980_595848043241430_8001515002219144569_n.jpg", alt: 'Domboshava Nature' },
                            { src: "/PAIVEPO/476846916_595236769969224_1684375241510906542_n.jpg", alt: 'Sustainable Tourism' },
                            { src: "/PAIVEPO/480686289_605497398943161_452631945375857340_n.jpg", alt: 'Scenic Views' },
                            { src: "/PAIVEPO/480694288_605497432276491_4961360373933616664_n.jpg", alt: 'African Hospitality' },
                            { src: "/PAIVEPO/482004118_610977468395154_2259091242149512423_n.jpg", alt: 'Eco-Digital Tourism' },
                            { src: "/PAIVEPO/WhatsApp Image 2026-03-02 at 17.44.45.jpeg", alt: 'Local Destination' },
                            { src: "/PAIVEPO/WhatsApp Image 2026-03-02 at 17.44.48.jpeg", alt: 'PaiVepo Experiences' }
                        ]}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,9,26,0.85), transparent)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f59e0b', textTransform: 'uppercase' as const }}>PaiVepo Domboshava</span>
                        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Eco-Tourism & Local Heritage</p>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 52, height: 52, borderRadius: 12, background: 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(245,158,11,0.1))', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
                            <Globe size={22} />
                        </div>
                        <div>
                            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f59e0b', textTransform: 'uppercase' as const, display: 'block' }}>Eco-Tourism Partner · Domboshava</span>
                            <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>PaiVepo Domboshava</h2>
                        </div>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 20 }}>
                        As the first enterprise-ready eco-tourism destination in the Domboshava region, PaiVepo Domboshava is transforming local natural heritage and hospitality into globally connected experiences. OWA Technologies provides the digital infrastructure enabling digital booking, AI-powered guest experiences, and international marketing reach.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: 24 }}>
                        This strategic partnership integrates digital reservation systems, smart hospitality tooling, and sustainable tourism development for the Domboshava corridor — a model for eco-digital tourism across Africa.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {['Eco-Tourism', 'Digital Hospitality', 'Local Heritage', 'Sustainable Travel', 'AI Integration'].map((t, i) => (
                            <span key={i} style={{ padding: '5px 14px', borderRadius: 99, fontSize: '0.72rem', fontWeight: 600, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#f59e0b' }}>{t}</span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ── Strategic Pathways ───────────────────────────── */}
            <div style={{ marginBottom: 52 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                    <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.35)' }} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' as const }}>Partnership Pathways</span>
                </div>
                <div className="stack-on-tablet">
                    {[
                        {
                            num: 'PATHWAY 01', accent: '#4ade80',
                            title: 'Real Placements',
                            desc: 'Blessed Be Faith graduates receive direct job placement pathways into partner hotels, lodges, resorts, and the UK hospitality industry through our active network.',
                            stats: ['118 Placements', 'UK Connections'],
                        },
                        {
                            num: 'PATHWAY 02', accent: '#60a5fa',
                            title: 'Hospitality Training',
                            desc: 'Where AI meets hospitality. OWA equips all students with digital tools, AI-powered reservation systems, and AI guest experience management.',
                            stats: ['3 Training Tiers', 'AI-Integrated'],
                        },
                        {
                            num: 'PATHWAY 03', accent: '#f59e0b',
                            title: 'Eco-Tourism Development',
                            desc: 'Powering local heritage while connecting it to global booking and sustainable development. Domboshava leads as the model for African eco-digital tourism.',
                            stats: ['Domboshava Hub', 'Sustainable Model'],
                        },
                    ].map((pw, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, borderColor: pw.accent, background: 'rgba(255,255,255,0.04)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px', transition: 'border-color 0.3s, background 0.3s' }}
                        >
                            <span style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.16em', color: pw.accent, textTransform: 'uppercase' as const, opacity: 0.8, display: 'block', marginBottom: 16 }}>{pw.num}</span>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: 16 }}>{pw.title}</h3>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 20 }}>{pw.desc}</p>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                {pw.stats.map((s, j) => (
                                    <span key={j} style={{ padding: '4px 12px', borderRadius: 99, fontSize: '0.68rem', fontWeight: 700, background: `${pw.accent}15`, border: `1px solid ${pw.accent}30`, color: pw.accent }}>{s}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Oppah's Home and Deco */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="stack-on-mobile res-p-side-20"
                style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.05), rgba(249,115,22,0.02))', border: '1px solid rgba(249,115,22,0.15)', borderRadius: 24, padding: 'clamp(24px, 5vw, 52px) clamp(20px, 4vw, 44px)', marginBottom: 48, display: 'grid', gap: 'clamp(24px, 5vw, 48px)', alignItems: 'center' }}
            >
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 52, height: 52, borderRadius: 12, background: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(249,115,22,0.1))', border: '1px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}><Home size={22} /></div>
                        <div><span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f97316', textTransform: 'uppercase' as const }}>Home & Living Partner</span><h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Oppah's Home and Deco</h2></div>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 20 }}>Your trusted partner for beautiful home furnishings, interior decor, and stylish living solutions. Oppah's Home and Deco brings warmth and elegance to every home with their curated collection of quality home products.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                        {['Home Furnishings', 'Interior Decor', 'Quality Bedding', 'Curtains & Blinds', 'Home Accessories'].map((t, i) => (
                            <span key={i} style={{ padding: '5px 14px', borderRadius: 99, fontSize: '0.72rem', fontWeight: 600, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', color: '#f97316' }}>{t}</span>
                        ))}
                    </div>
                    <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20services." target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(to right, #f97316, #ea580c)', border: 'none', padding: '12px 28px', fontSize: '0.85rem' }}>
                        View Full Collection <ExternalLink size={14} style={{ marginLeft: 6 }} />
                    </a>
                </div>
                <div className="mobile-breakout res-h-350" style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 460, border: '1px solid rgba(249,115,22,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                    {/* Floating Decorative Badge */}
                    <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 10, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: 12 }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Premium Home Collection</span>
                    </div>
                    <KenBurnsSlideshow
                        interval={7500}
                        seed={4}
                        images={[
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251124-WA0000.jpg", alt: 'Oppah Home Collection' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251124-WA0001.jpg", alt: 'Home Decor' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251115-WA0001.jpg", alt: 'Furniture' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251115-WA0005.jpg", alt: 'Interior Design' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251118-WA0006.jpg", alt: 'Home Styling' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251118-WA0009.jpg", alt: 'Quality Home Products' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251123-WA0003.jpg", alt: 'Home Accessories' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251128-WA0001.jpg", alt: 'Living Room' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251128-WA0002.jpg", alt: 'Bedroom Collection' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251128-WA0003.jpeg", alt: 'Home Elegance' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251128-WA0005.jpeg", alt: 'Modern Decor' },
                            { src: "/OPPAH'S HOME AND DECO/IMG-20251128-WA0006.jpg", alt: 'Quality Furnishings' }
                        ]}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,9,26,0.85), transparent)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: 20, left: 24 }}>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: '#f97316', textTransform: 'uppercase' as const }}>Oppah's Home and Deco</span>
                        <p style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>Beautiful Homes, Beautiful Living</p>
                    </div>
                </div>
            </motion.div>

            {/* Become a Partner */}
            <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(16,185,129,0.1))', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 20, padding: '48px 40px', marginBottom: 32 }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: 16, textAlign: 'center' }}>Become an OWA Partner</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.8 }}>We are always looking for strategic partners who share our vision for African digital sovereignty. If your company offers complementary services, let's explore collaboration.</p>
                <div className="stack-on-tablet" style={{ marginBottom: 36 }}>
                    {[
                        { icon: <Handshake size={20} />, title: 'Strategic Alliances', desc: 'Joint service delivery and mutual referrals across Africa.' },
                        { icon: <TrendingUp size={20} />, title: 'Referral Partners', desc: 'Earn 5%–15% commission on every referred client.' },
                        { icon: <Globe size={20} />, title: 'Technology Partners', desc: 'Integrate your platform with OWA\'s automation infrastructure.' },
                    ].map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8, background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(37,99,235,0.3)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{ background: 'rgba(0,0,0,0.2)', borderRadius: 12, padding: '28px 24px', textAlign: 'center', border: '1px solid transparent', transition: 'all 0.3s' }}
                        >
                            <div style={{ marginBottom: 16, color: '#60a5fa' }}>{p.icon}</div>
                            <h4 style={{ fontWeight: 800, marginBottom: 8, fontSize: '0.95rem' }}>{p.title}</h4>
                            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20services." target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '14px 40px' }}>Apply for Partnership <ArrowRight size={16} /></a>
                </div>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 3. ABOUT OWA PAGE (Intelligence Repository — from screenshots)
// ════════════════════════════════════════════════════════════════
const DocSection: React.FC<{ num: string; title: string; cards: { heading: string; text: string }[] }> = ({ num, title, cards }) => (
    <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', fontSize: '0.82rem', fontWeight: 900 }}>{num}</div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#60a5fa' }}>{title}</h2>
        </div>
        <div className="feature-grid-2">
            {cards.map((c, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16, borderBottom: '2px solid #2563EB', display: 'inline-block', paddingBottom: 4 }}>{c.heading}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>{c.text}</p>
                </div>
            ))}
        </div>
    </div>
);

export const AboutOWAPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero badge="Institutional Documentation Hub" title="INTELLIGENCE<br/><span style='color:#60a5fa'>REPOSITORY</span>" sub="Authorized Strategic Command by LYKART06 and Senior OWA Consultants." />
        <div className={wrapClass}>
            {/* Visionary Hero Image - Products Showcase */}
            <div style={{ height: 450, width: '100%', position: 'relative', borderRadius: 24, overflow: 'hidden', marginBottom: 60, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Slideshow images={[
                    { src: '/assets/owa_blogs/The 2025 ROG Strix Series gaming laptops lineup, from the left to right - SCAR 16, SCAR 18, G16, G18 (G814).jpg', alt: 'Premium Laptops' },
                    { src: '/assets/owa_blogs/ITAD_AFRICA_NEW_LAPTOPS-958345_1200x800.jpg', alt: 'Business Workstations' },
                    { src: '/assets/owa_blogs/TEC-Newest-Microsoft-Xbox-Series-X-Gaming-Console-1TB-SSD-Black-X-Version-with-Disc-Drive_43d7b21e-03f3-42d8-abba-b7e55c2bbf1b.cf7b735bd6b97713e0d44873b048b3a4.jpeg', alt: 'Gaming Consoles' },
                    { src: '/assets/owa_blogs/68875c62276b2cb6970c19da-starlink-v2-satellite-dish-kit-with.webp', alt: 'Starlink Connectivity' }
                ]} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #04091a, transparent)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 40, left: 40 }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 8 }}>VIBRANT. STRATEGIC. IRREPLACEABLE.</h2>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', maxWidth: 500 }}>Architecting the future of African digital sovereignty from the heart of Harare.</p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                style={{
                    display: 'flex',
                    gap: 14,
                    flexWrap: 'wrap',
                    marginTop: -28,
                    marginBottom: 44,
                    justifyContent: 'center'
                }}
            >
                <a
                    href="/OWA_Strategic_Manifesto_2026.pdf"
                    download
                    className="btn"
                    style={{
                        background: 'linear-gradient(135deg, #1d4ed8, #2563EB)',
                        color: '#fff',
                        padding: '12px 20px',
                        borderRadius: 999,
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase' as const,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        border: '1px solid rgba(255,255,255,0.18)'
                    }}
                >
                    Download OWA Manifesto <Download size={14} />
                </a>

                <a
                    href="/OWA_Official_Pricing_2026.pdf"
                    download
                    className="btn"
                    style={{
                        background: 'rgba(255,255,255,0.06)',
                        color: '#fff',
                        padding: '12px 20px',
                        borderRadius: 999,
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase' as const,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}
                >
                    Download Official Pricing <FileText size={14} />
                </a>
            </motion.div>
            
            <div className="hide-on-mobile">

            <DocSection num="01" title="Company Overview & Mandate" cards={[
                { heading: 'Institutional Foundations', text: 'OWA Technologies is a strategic neural architecture hub headquartered in Harare, Zimbabwe. Founded as a direct response to the critical digital divide, OWA exists to empower African enterprises with high-fidelity intelligent systems. We are not merely a software vendor; we are a solutions architect dedicated to reclaiming technical sovereignty for local industries.' },
                { heading: 'Economic Equalization', text: 'We solve the pervasive friction of legacy models — eliminating response latency and administrative overhead. We serve scalable startups and established institutions seeking global-tier technical standards. Our mandate is to transform complexity into clarity through precision architecture, ensuring every business node operates at maximum potential.' },
            ]} />
            <DocSection num="02" title="Vision Statement & The 2030 Roadmap" cards={[
                { heading: 'The Neural Goal', text: 'Our vision is an Africa where high-speed neural logic is integrated into every workflow, creating a frictionless economy. We envision African industries as dominant architects, not just consumers, of the new digital era. We are building the infrastructure of 2030 today, utilizing localized intelligence to solve global-scale problems.' },
                { heading: 'Phenomenally Great Standard', text: 'At OWA, we believe that everyone is PHENOMENALLY GREAT at particular skills. This is why we are determined to provide PHENOMENALLY GREAT results that match the unique potential of our clients. We do not settle for average output; our architecture is designed for those who demand excellence and irreplaceable market value.' },
            ]} />
            <DocSection num="03" title="Mission Statement & Daily Protocol" cards={[
                { heading: 'Democratic Automation', text: 'Our mission is to democratize access to enterprise-grade automation through practical execution. OWA does not force people; we operate on democracy policies where your understanding and consent are paramount to the architecture\'s success. We strip away the complexity associated with AI, providing clean systems that empower founders.' },
                { heading: 'Technical Vanguard', text: 'We cultivate deep relationships with our clients, acting as their vanguard as they navigate the global economy. OWA Technologies ensures your business stays ahead of the curve through discipline, constant innovation, and a refusal to lag behind Western hyper-automation standards. We are your primary tactical advantage.' },
            ]} />
            <DocSection num="04" title="History & Spiritual Foundation" cards={[
                { heading: 'The Founder & AI Consulting Lead', text: 'OWA Technologies was pioneered by LYKART OSIX, officially known in AI consulting as LYKART06. Starting this journey at the age of 19, his perseverance serves as proof that vision paired with neural logic can overcome any obstacle. For all AI-specific strategic consultations, LYKART06 leads the architecture alongside a team of High Consultants at OWA.' },
                { heading: 'Habakkuk 2:2 & Gratitude', text: 'LYKART OSIX extends his deepest gratitude to the Almighty God for the wisdom to build this architecture, and to all supporters who provided strength along the way. Bible Verse Habakkuk 2:2: "Write the vision and make it plain on tablets, that he may run who reads it." This means vision must be documented with such clarity that any architect can execute it with effortless speed.' },
            ]} />
            <DocSection num="05" title="Core Values & Institutional Discipline" cards={[
                { heading: 'Absolute Transparency', text: 'Every partner must understand the how and why of their automation. We operate with an open-logic policy, demystifying the black box of AI to ensure our partners are always in command of their digital destiny. We believe that informed leadership is the only path to sustainable enterprise growth.' },
                { heading: 'Student & Team Value', text: 'We value our team and students as the primary nodes of our expansion. We invest heavily in their technical growth because a strong human core is necessary to manage a strong digital core. Parents can entrust their children to us without hesitation, knowing we provide personalized, disciplined mentorship for the future.' },
            ]} />
            <DocSection num="06" title="Security Architecture & Hacker Protection" cards={[
                { heading: 'Neural Defense Systems', text: 'Security is our baseline. OWA protects client systems from external hacker friction using proprietary neural encryption layers. We ensure that your business intelligence remains your own, shielded from breaches and unauthorized access with proactive surveillance protocols. We stand as a firewall against digital instability.' },
                { heading: 'Data Sovereignty', text: 'We employ a Privacy-First architecture. User data is never sold or utilized for third-party training. Our presence as a security-focused hub is mandatory for the survival of the digital enterprise in the new era. We protect the integrity of African data against global exploitation with military-grade precision.' },
            ]} />
            <DocSection num="07" title="Trust & Verification Protocol" cards={[
                { heading: 'Official OWA Verification', text: 'In the real world, no individual can claim affiliation with OWA Technologies without presenting an Official Company ID and receiving direct confirmation from LYKART OSIX (LYKART06 – Node Verification Only). This protocol protects our partners from fraudulent representations and ensures institutional integrity at all times.' },
                { heading: 'Cognitive Confidence', text: 'Clients work with OWA because our processes are rooted in professional accountability. We provide exhaustive pre-deployment documentation for every strategic node to ensure zero friction and maximum trust. Every architect in our network is vetted to ensure alignment with OWA\'s Phenomenally Great standards.' },
            ]} />
            <DocSection num="08" title="Inclusivity & Mastery for Everyone" cards={[
                { heading: 'Multiply Your Skills', text: 'OWA is not just for the youth; it is for everyone with the enthusiasm to learn. We welcome professionals looking to enhance their current jobs with AI skills to work smarter and individuals wanting to learn from scratch. Partner with OWA to multiply your skills and become irreplaceable.' },
                { heading: 'Irreplaceable Skills Quote', text: 'LYKART06 and the OWA team work in conjunction with high-tech consultants across the world. Don\'t just let Technology or AI replace your job; partner with OWA to multiply your skills and be irreplaceable. Everyone is phenomenally great at something; we help you find that niche.' },
            ]} />
            <DocSection num="09" title="Transparency & The Demo Mandate" cards={[
                { heading: 'The Demo Project Rule', text: 'OWA Technologies operates on a strict Trust Mandate: NO FEES ARE TO BE PAID until the client has been shown and approved a demo review. This policy is what differentiates us from our competitors and is the foundation of OWA\'s culture. We provide absolute technical clarity before any financial commitment.' },
                { heading: 'Philosophical Clarity', text: 'We prioritize the client\'s confidence over immediate profit. At OWA Academy and in our consultancy, every transaction is preceded by a demonstration of value, ensuring that trust is earned before it is expected. We empower you to decide with absolute technical clarity if we are the right fit.' },
            ]} />
            <DocSection num="10" title="Monetization & Global Connectivity" cards={[
                { heading: 'Global Revenue Blueprints', text: 'There are multiple ways to make money and use technology effectively. From global consultancy to building bespoke automation nodes for international clients, OWA provides the blueprint for high-value revenue generation and financial independence in the new digital economy.' },
                { heading: 'Strategic Follow Protocol', text: 'Do follow us on our social platforms or establish direct contact for further clarification, booking, OWA recruitment, and services. We are here to architect your future with phenomenally great results. Join the movement and lead the African technical renaissance today.' },
            ]} />
            </div>

            {/* CTA */}
            <div style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563EB)', borderRadius: 20, padding: '60px 40px', textAlign: 'center', marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 16 }}>INITIALIZE STRATEGIC PARTNERSHIP</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 32px', fontStyle: 'italic' }}>"Don't let technology replace you; partner with OWA to multiply your skills and lead your industry."</p>
                <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20interested%20in%20initiating%20a%20strategic%20partnership%20or%20collaboration%20with%20OWA.%20Please%20share%20details%20on%20how%20we%20can%20work%20together.%20Thank%20you!" target="_blank" rel="noreferrer" className="btn" style={{ background: 'white', color: '#2563EB', fontWeight: 800, padding: '14px 40px', borderRadius: 99, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    Uplink to Executive Hub <ArrowRight size={16} />
                </a>
            </div>

            {/* Product Showcase - Stripe Style */}
            <div style={{ marginTop: 80, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 60 }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 40, letterSpacing: '-0.02em' }}>Our Solutions</h2>
                <div className="stack-on-tablet">
                    {[
                        { title: 'AI Automation', desc: 'Intelligent systems that handle tasks automatically', icon: '🤖', color: '#60a5fa' },
                        { title: 'Web Development', desc: 'Modern websites built with cutting-edge tech', icon: '🌐', color: '#8b5cf6' },
                        { title: 'Cloud Solutions', desc: 'Scalable infrastructure for your business', icon: '☁️', color: '#22c55e' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                borderRadius: 20,
                                padding: '32px',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: 20 }}>{item.icon}</div>
                            <h3 style={{ fontWeight: 800, marginBottom: 12, color: item.color }}>{item.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 4. REFERRAL PAGE (unique — not a duplicate of Pricing)
// ════════════════════════════════════════════════════════════════
export const ReferralPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero
            badge="Marketplace & Growth"
            title="Earn Up to <span style='color:#4ade80'>40% Commission</span>"
            sub="Join the OWA Unified Movement. We offer the highest referral rates in the industry plus up to 50% loyalty discounts for our returning partners and organizations."
        />

        <div className={wrapClass} style={{ paddingTop: 20 }}>
            {/* Cinematic Proof Slideshow */}
            <div style={{ borderRadius: 24, overflow: 'hidden', height: 400, marginBottom: 60, border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                <KenBurnsSlideshow
                    images={[
                        { src: "/OSIX/hands-holding-neon-sign.jpg", alt: "Unified Movement" },
                        { src: "/OSIX/people-working-with-ai-operated-devices.jpg", alt: "Collaboration" },
                        { src: "/OSIX/ChatGPT Image Mar 3, 2026, 10_32_22 AM.png", alt: "Global Reach" },
                        { src: "/OSIX/hands-holding-neon-sign (1).jpg", alt: "Tech Partners" }
                    ]}
                    seed={101}
                    interval={8000}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', alignItems: 'flex-end', padding: 40 }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: 8 }}>Bridging the Digital Divide</h3>
                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', maxWidth: 600 }}>Our agenda is to empower African youth by providing a marketplace where high-demand tech skills meet international opportunities.</p>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 32 }}>How the Movement Works</h3>
            <div className="stack-on-desktop" style={{ marginBottom: 52 }}>
                {[
                    { step: '01', title: 'Refer a Network', desc: 'Connect businesses, schools, or developers to OWA\'s world-class AI ecosystem.' },
                    { step: '02', title: 'Strategy Sync', desc: 'Our experts identify the best monetization or automation path for the lead.' },
                    { step: '03', title: 'Direct Impact', desc: 'Projects launch, creating revenue for the client and high-value work for our community.' },
                    { step: '04', title: 'Collective Payout', desc: 'Receive your industry-leading commission. We grow as one unified Africa.' },
                ].map((s, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '28px 24px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(37,99,235,0.3)', marginBottom: 12 }}>{s.step}</div>
                        <h4 style={{ fontWeight: 800, marginBottom: 8 }}>{s.title}</h4>
                        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                ))}
            </div>

            {/* Commission Rates */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 'clamp(24px, 5vw, 40px)', marginBottom: 40 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <TrendingUp size={20} color="#4ade80" /> Industry-Leading Commissions
                </h3>
                {[
                    { tier: 'Marketplace Advocate', rate: '10% Commission', desc: 'Standard referral for web, digital branding, or training.' },
                    { tier: 'Strategic Growth Partner', rate: '25% Commission', desc: 'For successful enterprise automation or multiple school signups.' },
                    { tier: 'Master Ecosystem Architect', rate: 'Up to 40%', desc: 'For dedicated partners driving the OWA movement across regions.' },
                ].map((r, i) => (
                    <div key={i} className="commission-grid">
                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>{r.tier}</span>
                        <span style={{ fontWeight: 900, color: '#4ade80', fontSize: '1.1rem', letterSpacing: '0.02em' }}>{r.rate}</span>
                        <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{r.desc}</span>
                    </div>
                ))}
            </div>

            {/* Loyalty Discounts */}
            <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(0,0,0,0.4))', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 20, padding: 'clamp(24px, 5vw, 40px)', marginBottom: 40 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Shield size={20} color="#60a5fa" /> Loyalty & Organization Discounts
                </h3>
                {[
                    { tier: 'Partner Expansion', discount: '15% Off', desc: 'Discounts on second-phase projects for existing clients.' },
                    { tier: 'Educational Rollout', discount: '30% Off', desc: 'For schools and colleges deploying AI across multiple departments.' },
                    { tier: 'Unified Enterprise Alliance', discount: 'Up to 50% Off', desc: 'For long-term organizational hubs and multi-year training retentions.' },
                ].map((r, i) => (
                    <div key={i} className="commission-grid" style={{ borderColor: 'rgba(37,99,235,0.1)' }}>
                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>{r.tier}</span>
                        <span style={{ fontWeight: 900, color: '#60a5fa', fontSize: '1.1rem', letterSpacing: '0.02em' }}>{r.discount}</span>
                        <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{r.desc}</span>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center' }}>
                <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20would%20like%20to%20apply%20for%20a%20partnership%20with%20OWA.%20Please%20share%20information%20on%20partner%20benefits%2C%20requirements%2C%20and%20the%20onboarding%20process.%20Thank%20you!" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                    Apply for Partnership <ArrowRight size={16} />
                </a>
            </div>

            {/* Partner Showcase */}
            <div style={{ marginTop: 60, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 40 }}>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: 32 }}>Collective Movement Advantages</h2>
                <div className="feature-grid-2">
                    {[
                        { title: '40% Commissions', desc: 'Unmatched earning potential in the African tech sector.', icon: '📈' },
                        { title: '50% Rewards', desc: 'Loyalty discounts that help your business scale efficiently.', icon: '💎' },
                        { title: 'Global Opportunities', desc: 'Connect with international clients and market demand.', icon: '🌍' },
                        { title: 'Marketplace Access', desc: 'Monetize high-demand technical skills instantly.', icon: '🚀' }
                    ].map((item, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                            <span style={{ fontSize: '2.2rem' }}>{item.icon}</span>
                            <div>
                                <h4 style={{ fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 5. WEB DEVELOPMENT PAGE
// ════════════════════════════════════════════════════════════════
export const WebDevPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero badge="Digital Architecture" title="High-Performance<br/><span style='color:#60a5fa'>Web Development</span>" sub="We don't just build websites; we architect digital assets integrated with neural logic and conversion-focused design." />
        <div className={wrapClass}>
            <div className="stack-on-tablet" style={{ marginBottom: 52 }}>
                <InfoCard icon={<Palette size={20} />} title="Creative Design" items={['UI/UX Research', 'Glassmorphic Styles', 'Micro-Animations']} accent="#a78bfa" />
                <InfoCard icon={<Rocket size={20} />} title="Performance" items={['Vite/Next.js Speed', 'SEO Optimization', 'Cloud Hosting']} accent="#4ade80" />
                <InfoCard icon={<Zap size={20} />} title="High-Fidelity UI" items={['Interactive 3D Elements', 'Custom Component Library', 'Premium Glassmorphism']} accent="#a78bfa" />
            </div>

            <div className="img-res-h" style={{ borderRadius: 24, overflow: 'hidden', marginBottom: 52, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Slideshow images={[
                    { src: '/assets/owa_blogs/Innovative-Fintech-Offices-Banner.jpg', alt: 'Web Development Office' },
                    { src: '/assets/owa_blogs/img_proficiencies_small.png', alt: 'Technical Proficiencies' }
                ]} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 32 }}>Development Tiers</h3>
            <div className="stack-on-tablet" style={{ marginBottom: 48 }}>
                {[
                    { title: 'Standard Presence', price: '$499', features: ['Responsive Design', 'Contact Forms', 'SEO Setup', '1 month support'], icon: <Globe size={20} />, note: 'Ideal for small businesses' },
                    { title: 'Business Pro', price: '$1,299', features: ['AI Chatbot Integration', 'CMS Control Panel', 'Analytics Dashboard', 'Speed Optimization'], icon: <Zap size={20} />, note: 'Our most popular plan', premium: true },
                    { title: 'Enterprise Hub', price: 'Custom', features: ['Full Neural Integration', 'Custom CRM/API', 'Dedicated Server', 'Priority Support'], icon: <Cpu size={20} />, note: 'For large organizations' },
                ].map((tier, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10, borderColor: tier.premium ? '#60a5fa' : 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.04)' }}
                        style={{
                            background: tier.premium ? 'rgba(37,99,235,0.05)' : 'rgba(255,255,255,0.02)',
                            border: `1px solid ${tier.premium ? 'rgba(37,99,235,0.3)' : 'rgba(255,255,255,0.07)'}`,
                            borderRadius: 20, padding: '40px 32px',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {tier.premium && (
                            <div style={{ position: 'absolute', top: 12, right: -30, background: '#2563EB', color: '#fff', fontSize: '0.65rem', fontWeight: 900, padding: '4px 40px', transform: 'rotate(45deg)', letterSpacing: '0.1em', zIndex: 10 }}>POPULAR</div>
                        )}
                        <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', marginBottom: 24 }}>
                            {tier.icon}
                        </div>
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: tier.premium ? '#fff' : '#60a5fa', marginBottom: 4 }}>{tier.title}</h4>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: 24, fontWeight: 600 }}>{tier.note}</p>
                        <div style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: 32, display: 'flex', alignItems: 'baseline', gap: 4 }}>
                            {tier.price} <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>{tier.price !== 'Custom' ? '/ project' : ''}</span>
                        </div>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24 }}>
                            {tier.features.map((f, j) => (
                                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
                                    <CheckCircle size={16} color="#4ade80" /> {f}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ textAlign: 'center' }}>
                <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20would%20like%20to%20start%20a%20web%20development%20project.%20Please%20share%20your%20available%20services%2C%20timelines%2C%20and%20pricing%20so%20we%20can%20discuss%20my%20requirements.%20Thank%20you!" target="_blank" rel="noreferrer" className="btn btn-primary">Start Your Project</a>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 6. AI AGENTS & AUTOMATION PAGE
// ════════════════════════════════════════════════════════════════
export const AIAgentsPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero badge="Neural Automation" title="AI Agents &<br/><span style='color:#60a5fa'>Intelligent Workflows</span>" sub="Scale your business horizontally without increasing headcount. Our AI agents handle sales, support, and operations while you sleep." />
        <div className={wrapClass}>
            <div style={{ background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: 20, padding: '40px', marginBottom: 52 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 24, textAlign: 'center' }}>Agent Complexity Levels</h3>
                <div className="stack-on-tablet">
                    {[
                        { level: 'L1', title: 'Task Bots', desc: 'Handles simple repetitive tasks like data entry, scheduling, and basic replies.' },
                        { level: 'L2', title: 'Neural Assistants', desc: 'Processes natural language to handle lead qualification, quoting, and customer support.' },
                        { level: 'L3', title: 'Autonomous Systems', desc: 'End-to-end business logic execution, API orchestration, and decision-making modules.' },
                    ].map((lvl, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(37,99,235,0.2)', marginBottom: 8 }}>{lvl.level}</div>
                            <h4 style={{ fontWeight: 800, marginBottom: 12 }}>{lvl.title}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{lvl.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="stack-on-mobile" style={{ marginBottom: 52 }}>
                <InfoCard icon={<Zap size={20} />} title="WhatsApp Automation" items={['24/7 Intelligent Chatbot', 'Automated Catalog & Sales', 'Multi-agent CRM Dashboard']} accent="#22c55e" />
                <InfoCard icon={<Target size={20} />} title="Lead Generation" items={['Automated LinkedIn Outreach', 'Email Personalization at Scale', 'Smart CRM Lead Scoring']} accent="#60a5fa" />
            </div>

            <div className="img-res-h" style={{ borderRadius: 24, overflow: 'hidden', marginBottom: 52, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Slideshow images={[
                    { src: '/assets/owa_blogs/UAE-Ranks-First-Globally-in-AI-Adoption-Fueled-by-Government-Support.jpg', alt: 'AI Adoption' },
                    { src: '/assets/owa_blogs/potential-threats-automated-factories-Blog-1024x598-1.png', alt: 'Automation Factory' }
                ]} />
            </div>

            <div style={{ textAlign: 'center' }}>
                <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20interested%20in%20requesting%20a%20free%20AI%20Automation%20Audit%20for%20my%20business.%20I%20would%20like%20to%20explore%20how%20AI%20Agents%20can%20streamline%20my%20operations.%20Please%20schedule%20a%20consultation.%20Thank%20you!" target="_blank" rel="noreferrer" className="btn btn-primary">Request Automation Audit</a>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 7. STARLINK CONNECTIVITY PAGE
// ════════════════════════════════════════════════════════════════
export const StarlinkPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero badge="Authorized Reseller" title="High-Speed<br/><span style='color:#60a5fa'>Starlink Internet</span>" sub="SpaceX Starlink hardware and professional installation for homes, farms, and businesses across Zimbabwe." />
        <div className={wrapClass}>
            <div className="stack-on-mobile" style={{ marginBottom: 48, alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '40px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 20 }}>Why OWA for Starlink?</h3>
                    {[
                        'Professional Mounting & Alignment',
                        'Network Optimization & Mesh Setup',
                        'Zimbabwe-Wide Installation Support',
                        'Hardware Warranty & After-Sales Service',
                        'Enterprise/Business Tier Configuration',
                        'Solar-Powered Internet Solutions',
                    ].map((idx, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)' }}>
                            <CheckCircle size={16} color="#60a5fa" /> {idx}
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Wifi size={80} color="#60a5fa" style={{ marginBottom: 24, opacity: 0.8 }} />
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 12 }}>Ready for Uplink?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>We handle the technical setup so you can enjoy world-class speeds without the friction.</p>
                    <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20interested%20in%20booking%20a%20Starlink%20installation.%20Please%20share%20available%20packages%2C%20pricing%2C%20and%20installation%20timelines%20for%20my%20location.%20Thank%20you!" target="_blank" rel="noreferrer" className="btn btn-primary">Book Installation</a>
                </div>
            </div>

            <div className="stack-on-tablet" style={{ marginBottom: 52 }}>
                {[
                    { src: '/assets/owa_blogs/Starlink.jpeg', alt: 'Starlink Dish' },
                    { src: '/assets/owa_blogs/1231752731-AdobeStock_594956182_satellite_IoT_earth_Space_1200x630.jpeg', alt: 'Satellite IoT' },
                    { src: '/assets/owa_blogs/68875c62276b2cb6970c19da-starlink-v2-satellite-dish-kit-with.webp', alt: 'Starlink Kit' }
                ].map((img, i) => (
                    <div key={i} className="res-h-200" style={{ height: 200, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                ))}
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 8. CORPORATE IDENTITY PAGE
// ════════════════════════════════════════════════════════════════
export const CorporatePage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero badge="Visual Sovereignty" title="Corporate Identity<br/><span style='color:#a78bfa'>& Branding</span>" sub="In partnership with GANDS ARTS MEDIA. We architect premium professional identities that command respect in the global market." />
        <div className={wrapClass}>
            <div className="stack-on-tablet" style={{ marginBottom: 52 }}>
                <InfoCard icon={<Palette size={20} />} title="Graphic Design" items={['High-End Logo Design', 'Brand Manuals', 'Pitch Decks']} accent="#a78bfa" />
                <InfoCard icon={<Rocket size={20} />} title="Media Assets" items={['Professional Photography', 'AI Video Adverts', 'Social Media Tiers']} accent="#f472b6" />
                <InfoCard icon={<Handshake size={20} />} title="Legal Docs" items={['Company Profiles', 'Business Cards', 'Digital Letterheads']} accent="#60a5fa" />
            </div>

            <div className="stack-on-mobile" style={{ marginBottom: 52, alignItems: 'center' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', height: 340, border: '1px solid rgba(255,255,255,0.08)', width: '100%' }} className="res-h-340">
                    <Slideshow images={[
                        { src: '/assets/owa_blogs/Office_Branding.jpg', alt: 'Office Branding' },
                        { src: '/assets/owa_blogs/10919666506709.5b1830b6ddbef.png', alt: 'Design Mockup' }
                    ]} />
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '32px 24px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 20 }}>Complete Identity Packages</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>Empower your business with a visual strategy designed for the AI era.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20would%20like%20to%20view%20your%20corporate%20branding%20and%20media%20portfolio..." target="_blank" rel="noreferrer" className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '10px 16px' }}>View Portfolio</a>
                        <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20requesting%20a%20quote..." target="_blank" rel="noreferrer" className="btn btn-primary" style={{ background: '#a78bfa', borderColor: '#a78bfa', fontSize: '0.75rem', padding: '10px 16px' }}>Request Quote</a>
                    </div>
                </div>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 9. GADGET SALES PAGE
// ════════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════════
// GADGETS CAROUSEL COMPONENT (Stripe-style)
// ════════════════════════════════════════════════════════════════
const GadgetCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const gadgets = [
        {
            id: 1,
            title: 'ROG Strix G18',
            subtitle: 'Ultimate Gaming Powerhouse',
            description: 'Dominate any game with the latest Intel Core i9 processor and NVIDIA RTX 4090 graphics. Designed for serious gamers who demand the absolute best performance.',
            price: 'Affordable Prices',
            image: '/assets/owa_blogs/The 2025 ROG Strix Series gaming laptops lineup, from the left to right - SCAR 16, SCAR 18, G16, G18 (G814).jpg',
            specs: ['Intel Core i9-13980HX', 'NVIDIA RTX 4090', '32GB DDR5 RAM', '2TB NVMe SSD', '18" 240Hz Display'],
            color: '#ff4d4d'
        },
        {
            id: 2,
            title: 'Enterprise Workstations',
            subtitle: 'Build Your Empire',
            description: 'Professional-grade workstations engineered for content creators, architects, and data scientists.',
            price: 'Affordable Prices',
            image: '/assets/owa_blogs/ITAD_AFRICA_NEW_LAPTOPS-958345_1200x800.jpg',
            specs: ['Intel Xeon / AMD Threadripper', 'NVIDIA RTX A6000', '64GB+ ECC RAM', '4TB RAID Storage'],
            color: '#60a5fa'
        },
        {
            id: 3,
            title: 'Xbox Series X',
            subtitle: 'Next-Gen Gaming',
            description: 'Experience true 4K gaming with the most powerful Xbox ever.',
            price: 'Affordable Prices',
            image: '/assets/owa_blogs/TEC-Newest-Microsoft-Xbox-Series-X-Gaming-Console-1TB-SSD-Black-X-Version-with-Disc-Drive_43d7b21e-03f3-42d8-abba-b7e55c2bbf1b.cf7b735bd6b97713e0d44873b048b3a4.jpeg',
            specs: ['1TB SSD', '4K @ 120fps', 'Quick Resume', 'Ray Tracing'],
            color: '#22c55e'
        },
        {
            id: 4,
            title: 'Business Laptops',
            subtitle: 'Professional Productivity',
            description: 'Sleek, secure, and reliable laptops designed for business professionals.',
            price: 'Affordable Prices',
            image: '/assets/owa_blogs/african-woman-studying-laptop.jpg',
            specs: ['Intel Core i7 / Ryzen 7', '16GB RAM', '512GB SSD', 'Fingerprint Reader'],
            color: '#8b5cf6'
        },
        {
            id: 5,
            title: 'Starlink Kit',
            subtitle: 'Global Connectivity',
            description: 'High-speed, low-latency internet access anywhere on Earth.',
            price: 'Affordable Prices',
            image: '/assets/owa_blogs/68875c62276b2cb6970c19da-starlink-v2-satellite-dish-kit-with.webp',
            specs: ['50-200 Mbps download', '20-40ms latency', 'Weather resistant', 'Easy setup'],
            color: '#f59e0b'
        },
        {
            id: 6,
            title: 'Smart Displays',
            subtitle: 'Interactive Screens',
            description: 'Transform any space with stunning 4K displays for digital signage and presentations.',
            price: 'Affordable Prices',
            image: '/assets/owa_blogs/000_1923u1.d927e160435.w640.webp',
            specs: ['4K Ultra HD', 'Touch enabled', 'Built-in speakers', 'Wireless casting'],
            color: '#06b6d4'
        },
        {
            id: 7,
            title: 'Premium Headphones',
            subtitle: 'Audio Excellence',
            description: 'Immersive high-fidelity audio with active noise cancellation for professionals.',
            price: 'Affordable Prices',
            image: '/assets/owa_blogs/71Vk8zrWFXL.jpg',
            specs: ['Active Noise Cancellation', '40mm drivers', '30hr battery life', 'Premium comfort'],
            color: '#ec4899'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % gadgets.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [gadgets.length]);

    const activeGadget = gadgets[activeIndex];

    return (
        <div style={{ marginBottom: 60 }}>
            <div className="stack-on-mobile" style={{ gap: 48, minHeight: 400, alignItems: 'center', marginBottom: 40 }}>
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', height: 320, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', width: '100%' }}
                >
                    <img src={activeGadget.image} alt={activeGadget.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 20, left: 20, background: activeGadget.color, padding: '8px 16px', borderRadius: 8, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {activeGadget.subtitle}
                    </div>
                </motion.div>
                <motion.div
                    key={`details-${activeIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                >
                    <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8, color: activeGadget.color }}>
                        {activeGadget.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
                        {activeGadget.subtitle}
                    </p>
                    <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                        {activeGadget.description}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginBottom: 32 }}>
                        {activeGadget.specs.slice(0, 4).map((spec, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
                                <CheckCircle size={14} color={activeGadget.color} />
                                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>{spec}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                            {activeGadget.price}
                        </span>
                        <a href={`https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(activeGadget.title)}...`} target="_blank" rel="noreferrer" style={{ padding: '12px 24px', background: activeGadget.color, color: '#fff', borderRadius: 12, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
                            Inquire Now
                        </a>
                    </div>
                </motion.div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                {gadgets.map((gadget, i) => (
                    <button key={gadget.id} onClick={() => setActiveIndex(i)} style={{ width: activeIndex === i ? 32 : 10, height: 10, borderRadius: 5, border: 'none', background: activeIndex === i ? gadget.color : 'rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
                ))}
            </div>
        </div>
    );
};

export const GadgetPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero badge="Premium Hardware" title="Tech Gadgets<br/><span style='color:#60a5fa'>& Workstations</span>" sub="Explore our curated collection of high-performance laptops, gaming consoles, and cutting-edge technology." />
        <div className={wrapClass}>
            <GadgetCarousel />

            {/* Quick Stats */}
            <div className="stack-on-desktop" style={{ marginBottom: 48, padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                {[
                    { value: '50+', label: 'Products Available' },
                    { value: '12', label: 'Month Warranty' },
                    { value: '24/7', label: 'Support' },
                    { value: 'Free', label: 'Delivery' }
                ].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 900, color: '#60a5fa', marginBottom: 8 }}>{stat.value}</div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center' }}>
                <a href="https://wa.me/263772479492?text=Hello%20OWA%20Technologies%2C%20I%20would%20like%20to%20browse%20your%20full%20tech%20gadgets%20catalog%20-%20including%20laptops%2C%20gaming%20consoles%2C%20and%20accessories.%20Please%20share%20your%20current%20stock%20and%20pricing.%20Thank%20you!" target="_blank" rel="noreferrer" className="btn btn-primary">View Full Catalog</a>
            </div>
        </div>
    </PageOverlay>
);

// ════════════════════════════════════════════════════════════════
// 9. OWA TECHNOLOGIES MANIFEST
// ════════════════════════════════════════════════════════════════
export const OWATechPage: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
    <PageOverlay open={open} onClose={onClose}>
        <PageHero badge="The OWA Manifesto" title="OWATECH AI<br/><span style='color:#60a5fa'>PHENOMENALLY GREAT</span>" sub="OWA Technologies is a unified digital organization with multiple branches working as one powerful ecosystem, founded and visioned by LYKART OSIX (LYKART06)." />
        <div className={wrapClass}>
            <div style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, letterSpacing: '-0.02em' }}>Beyond a Company. A Movement.</h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 32 }}>
                    OWA is not just a company. OWA is a community, a movement, and a digital solution designed to empower people across Zimbabwe, Africa, Europe, and the global community.
                </p>
                <div className="stack-on-mobile" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 40 }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                            <Target size={24} color="#60a5fa" />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Our Vision</h3>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                            OWA Technologies exists to ensure that no one is left behind in the age of Artificial Intelligence and Technology, regardless of background, education level, nationality, or starting point.
                        </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                            <Rocket size={24} color="#60a5fa" />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Our Mission</h3>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                            To make Artificial Intelligence, automation, and digital innovation accessible, practical, and impactful for youth, students, businesses, and developers across the continent.
                        </p>
                    </div>
                </div>
            </div>

            <div className="img-res-h" style={{ borderRadius: 24, overflow: 'hidden', marginBottom: 60, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Slideshow images={[
                    { src: '/assets/owa_blogs/000_1923u1.d927e160435.w640.webp', alt: 'OWA Visionary History' },
                    { src: '/assets/owa_blogs/img_proficiencies_small.png', alt: 'Technical Mastery' }
                ]} />
            </div>

            <div style={{ background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: 24, padding: '48px', marginBottom: 60 }}>
                <blockquote style={{ margin: 0 }}>
                    <p style={{ fontSize: '1.4rem', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.6, color: '#fff', marginBottom: 24 }}>
                        “Do not wait for AI and technology to replace you or take your job. Instead, multiply your skills and become undisputed.”
                    </p>
                    <footer style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '0.8rem' }}>L06</div>
                        <div>
                            <span style={{ display: 'block', fontWeight: 800, fontSize: '0.9rem' }}>LYKART OSIX (LYKART06)</span>
                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Founder & Visionary</span>
                        </div>
                    </footer>
                </blockquote>
            </div>

            <DocSection num="01" title="What OWA Technologies Does" cards={[
                { heading: 'AAA — AI Automation Agency', text: 'We are an AI Automation Agency focused on delivering modern digital solutions that produce measurable results. From intelligent chatbots to lead generation, we architect the future of business operations.' },
                { heading: 'Efficiency Optimization', text: 'We help businesses increase efficiency up to 98% through AI-powered websites, voice assistants, and automated customer support systems that never leave customers unattended.' }
            ]} />

                <div className="stack-on-tablet" style={{ marginBottom: 60 }}>
                    {[
                        { title: 'Businesses', desc: 'Auto-booking, Voice Bots, WhatsApp automation, and Lead conversion systems.', icon: <Zap size={20} /> },
                        { title: 'Education', desc: 'AI adoption programs for schools, teacher workshops, and localized AI tutorials.', icon: <BookOpen size={20} /> },
                        { title: 'Youth & Students', desc: 'Mentorship to build SaaS, freelance globally, and gain real-world digital skills.', icon: <Users size={20} /> },
                        { title: 'Developers', desc: 'Localized tools for African markets and ethical, secure technology development.', icon: <Cpu size={20} /> },
                        { title: 'Creators', desc: 'Scaling content production through AI-driven automation and identity systems.', icon: <Palette size={20} /> },
                        { title: 'Community', desc: 'Bridging the gap between theory and execution for institutions across borders.', icon: <Globe size={20} /> },
                    ].map((item, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '32px 28px' }}>
                            <div style={{ color: '#60a5fa', marginBottom: 16 }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 12 }}>{item.title}</h3>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

            <DocSection num="03" title="Partnerships & Opportunities" cards={[
                { heading: 'Strategic Alliances', text: 'Our key partner, Blessed Be Faith College, unlocks placement opportunities in major hotels, catering, and hospitality environments globally.' },
                { heading: 'Business Growth', text: 'OWA partners benefit from brand exposure, automated revenue growth, and high-visibility marketing within the OWA ecosystem.' }
            ]} />

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 'clamp(24px, 5vw, 48px)', marginBottom: 60 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', fontSize: '0.82rem', fontWeight: 900 }}>04</div>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#60a5fa' }}>Founder’s Credibility</h2>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32, lineHeight: 1.8 }}>
                    The Founder of OWA Technologies, LYKART OSIX (LYKART06), is a published author in The Herald, Zimbabwe’s leading national newspaper. His early advocacy for ICT and youth empowerment is documented in national archives.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <a href="https://www.heraldonline.co.zw/taking-advantage-of-ict-in-schools/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', color: '#fff', textDecoration: 'none' }}>
                        <FileText size={18} color="#60a5fa" />
                        <div style={{ flex: 1 }}>
                            <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700 }}>Taking Advantage of ICT in Schools</span>
                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>The Herald · National Publication</span>
                        </div>
                        <ExternalLink size={14} color="rgba(255,255,255,0.3)" />
                    </a>
                    <a href="https://www.heraldonline.co.zw/my-experience-of-a-lifetime-2/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)', color: '#fff', textDecoration: 'none' }}>
                        <FileText size={18} color="#60a5fa" />
                        <div style={{ flex: 1 }}>
                            <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700 }}>My Experience of a Lifetime – Herald House</span>
                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>The Herald · National Publication</span>
                        </div>
                        <ExternalLink size={14} color="rgba(255,255,255,0.3)" />
                    </a>
                </div>
            </div>

            <div className="stack-on-mobile" style={{ marginBottom: 60 }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <Heart size={24} color="#f87171" />
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Values & Faith</h3>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Guided by humanity, integrity, mercy, unity, and love. OWA operates with a God-given vision, prioritizing service to people and ethical responsibility above profit.
                    </p>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <Shield size={24} color="#4ade80" />
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Community Conduct</h3>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                        OWA is a democratic and inclusive community where every voice matters. Knowledge is shared freely, and hate speech or misuse of technology is strictly prohibited.
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 60, paddingBottom: 60 }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 16 }}>Final Message</span>
                <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: 32 }}>Success is determined by your daily agenda.</h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', maxWidth: 700, margin: '0 auto 48px', lineHeight: 1.8 }}>
                    OWA Technologies does not promise instant jobs or handouts. Instead, it offers knowledge, skills, community, and direction so that opportunities find you, or you create them yourself.
                </p>

                {/* Featured Products */}
                <div className="stack-on-desktop" style={{ marginTop: 40 }}>
                    {[
                        { icon: '💻', title: 'Laptops', desc: 'High-performance' },
                        { icon: '🎮', title: 'Gaming', desc: 'Next-gen' },
                        { icon: '📡', title: 'Starlink', desc: 'Global Internet' },
                        { icon: '🤖', title: 'AI Agents', desc: 'Automation' }
                    ].map((item, i) => (
                        <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <div style={{ fontSize: '2rem', marginBottom: 12 }}>{item.icon}</div>
                            <h4 style={{ fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', letterSpacing: '0.05em', marginTop: 60 }}>
                    YOU ARE <span style={{ color: '#2563EB' }}>PHENOMENALLY GREAT.</span>
                </div>
            </div>
        </div>
    </PageOverlay>
);


