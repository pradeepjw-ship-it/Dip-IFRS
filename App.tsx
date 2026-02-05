import React, { useEffect, useState } from 'react';
import { 
    BookOpen, 
    Globe, 
    TrendingUp, 
    Award, 
    Users, 
    Phone, 
    Check, 
    Menu, 
    X,
    Briefcase,
    Calendar,
    MapPin,
    Monitor,
    Video,
    ShieldCheck,
    Star,
    ArrowRight
} from 'lucide-react';
import { Button } from './components/Button';
import { LeadForm } from './components/LeadForm';
import { Accordion } from './components/Accordion';
import { Modal } from './components/Modal';
import { Marquee } from './components/Marquee';
import { CountdownTimer } from './components/CountdownTimer';

// --- Components ---

const Navbar = ({ onEnquire }: { onEnquire: () => void }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleAction = () => {
        onEnquire();
        setIsMenuOpen(false);
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="flex items-center gap-2">
                        <div className="text-lakshya-blue font-heading font-bold text-xl sm:text-2xl leading-tight">
                            IIC Lakshya
                            <span className="block text-[10px] font-normal text-gray-500 uppercase tracking-widest">Indian Institute of Commerce</span>
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="text-gray-700 hover:text-lakshya-blue font-medium transition-colors">About Course</a>
                    <a href="#curriculum" className="text-gray-700 hover:text-lakshya-blue font-medium transition-colors">Curriculum</a>
                    <a href="#why-us" className="text-gray-700 hover:text-lakshya-blue font-medium transition-colors">Why Lakshya</a>
                    <Button variant="primary" onClick={onEnquire} className="py-2 px-6 text-sm">
                        Enquire Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
                    <a href="#about" className="text-gray-700 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About Course</a>
                    <a href="#curriculum" className="text-gray-700 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Curriculum</a>
                    <a href="#why-us" className="text-gray-700 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Why Lakshya</a>
                    <Button variant="primary" fullWidth onClick={handleAction}>
                        Get Brochure
                    </Button>
                </div>
            )}
        </nav>
    );
};

const Hero = ({ onOpenForm }: { onOpenForm: () => void }) => {
    return (
        <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* Ambient Light Orbs */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-lakshya-blue/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-lakshya-yellow/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-lakshya-blue mb-6 animate-fade-in-up">
                            <ShieldCheck className="w-4 h-4 fill-current" />
                            <span className="text-[11px] font-bold tracking-wider uppercase">ACCA Approved Platinum Partner</span>
                        </div>
                        
                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            ACCA Dip IFRS <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lakshya-blue to-lakshya-teal">
                                Diploma Course
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl font-medium text-gray-700 mb-6 max-w-xl leading-relaxed">
                             Fast-track your finance career with the globally recognized ACCA DipIFR qualification. Learn from the experts at India's leading commerce institute.
                        </p>
                        
                        {/* Key Stats Cards */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-lakshya-yellow/50 transition-colors group text-left">
                                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Earning Potential</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-gray-900 group-hover:text-lakshya-blue transition-colors">₹30+</span>
                                    <span className="text-lg font-bold text-gray-900">LPA</span>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-lakshya-yellow/50 transition-colors group text-left">
                                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Duration</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-gray-900 group-hover:text-lakshya-blue transition-colors">3-6</span>
                                    <span className="text-sm font-medium text-gray-600">Months</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-gray-600 mb-8 font-serif leading-relaxed max-w-lg">
                            Join 50,000+ alumni who have transformed their careers with IIC Lakshya.
                        </p>
                        
                        {/* Micro Timer */}
                         <div className="mb-8 w-full md:w-auto">
                            <CountdownTimer mode="micro" className="justify-center md:justify-start" />
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button onClick={onOpenForm} variant="primary" className="shadow-lg shadow-yellow-500/20 px-8 py-4 text-base h-14 w-full sm:w-auto">
                                Download Brochure
                            </Button>
                            <Button onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="px-8 py-4 text-base h-14 bg-white/50 backdrop-blur-sm w-full sm:w-auto">
                                View Curriculum
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3 font-medium flex items-center gap-1">
                            <Check className="w-3 h-3 text-green-500" /> Free Profile Assessment included
                        </p>
                    </div>

                    {/* Right Content - Form */}
                    <div className="hidden md:block relative w-full max-w-md mx-auto lg:ml-auto">
                        {/* Decor elements behind form */}
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-lakshya-yellow/20 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-lakshya-blue/10 rounded-full blur-2xl"></div>
                        
                        <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-blue-900/5 border border-white/50 p-2 transform transition-transform hover:-translate-y-1 duration-300">
                             {/* Override embedded styles to fit glassmorphism */}
                             <div className="bg-white rounded-xl overflow-hidden">
                                <LeadForm embedded className="!shadow-none !border-t-0" title="Enquire for Admissions" subtitle="Get brochure & free counselling" />
                             </div>
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center gap-1 animate-[bounce_3s_infinite]">
                             <div className="flex -space-x-2">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center overflow-hidden">
                                        <Users size={14} className="text-gray-400" />
                                    </div>
                                ))}
                             </div>
                             <p className="text-[10px] font-bold text-lakshya-blue whitespace-nowrap">500+ Enrolled</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhoIsThisFor = () => {
    return (
        <section className="py-8 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-lakshya-blue mb-2">
                        Who is this course for?
                    </h2>
                    <p className="text-gray-600 text-sm">Designed for finance professionals aiming for global opportunities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "Qualified Chartered Accountants (CA) looking to update their skills.",
                        "Finance professionals working in MNCs following IFRS.",
                        "Graduates/Post-graduates aspiring to work abroad.",
                        "Auditors and Tax Consultants."
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-lakshya-teal/10 flex items-center justify-center">
                                <Check className="w-4 h-4 text-lakshya-teal" />
                            </div>
                            <p className="text-gray-800 font-medium text-sm leading-snug">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-4 bg-white rounded-xl border-l-4 border-lakshya-yellow shadow-sm text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h4 className="font-heading font-bold text-gray-900 mb-1 text-sm">Eligibility Criteria</h4>
                        <p className="text-xs text-gray-600">
                            2 years relevant experience + Degree OR 3 years relevant experience OR ACCA Affiliate.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                            Verification Required
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Curriculum = ({ onDownload }: { onDownload: () => void }) => {
    const items = [
        { title: "International Sources of Authority", content: "The conceptual framework for financial reporting. The regulatory framework." },
        { title: "Elements of Financial Statements", content: "Revenue recognition (IFRS 15), Property, Plant and Equipment (IAS 16), Leases (IFRS 16), Intangible Assets (IAS 38)." },
        { title: "Presentation & Additional Standards", content: "Presentation of financial statements (IAS 1), Events after reporting period (IAS 10), Fair Value Measurement (IFRS 13)." },
        { title: "Preparation of External Reports", content: "Preparation of consolidated financial statements including subsidiaries and associates." }
    ];

    return (
        <section id="curriculum" className="py-8 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-lakshya-blue mb-3">
                        Course Curriculum
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                        A structured approach to mastering all IAS and IFRS standards.
                    </p>
                    <div className="inline-block bg-lakshya-yellow/10 border border-lakshya-yellow text-lakshya-blue px-4 py-2 rounded-lg text-xs font-semibold">
                        ✨ Bonus: Free access to BPP Learning Material, expert-backed resources & mock exams.
                    </div>
                </div>
                <Accordion items={items} />
                
                <div className="mt-6 text-center flex flex-col items-center">
                    <Button variant="secondary" onClick={onDownload} className="py-3 px-8 shadow-md md:w-auto w-full">
                        Download Detailed Syllabus
                    </Button>
                    <span className="text-[10px] mt-2 text-gray-500 font-medium">Trusted by 50k+ students</span>
                </div>
            </div>
        </section>
    );
};

const LearningModes = ({ onEnquire }: { onEnquire: () => void }) => {
    return (
        <section id="learning-modes" className="py-8 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-lakshya-blue mb-2">
                        Flexible Learning Modes
                    </h2>
                    <p className="text-gray-600 text-sm">Choose the way you want to learn.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center flex flex-col items-center">
                        <div className="w-12 h-12 mx-auto bg-blue-50 text-lakshya-blue rounded-full flex items-center justify-center mb-4">
                            <Monitor size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Live Online</h3>
                        <p className="text-gray-600 text-xs">Interactive live sessions with expert faculty, accessible from anywhere. Real-time doubt clearing.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center flex flex-col items-center">
                        <div className="w-12 h-12 mx-auto bg-blue-50 text-lakshya-blue rounded-full flex items-center justify-center mb-4">
                            <Video size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Hybrid / Recorded</h3>
                        <p className="text-gray-600 text-xs">Flexibility of recorded classes mixed with weekend live doubt clearing sessions.</p>
                    </div>
                </div>

                <div className="mt-6 text-center flex flex-col items-center">
                     <Button variant="primary" onClick={onEnquire} className="py-2 px-6 md:w-auto w-full">
                        Check Batch Timings
                    </Button>
                    <span className="text-[10px] text-gray-500 font-medium mt-2">Weekend & Weekday Batches Available</span>
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-12 bg-lakshya-blue text-white relative overflow-hidden">
             {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                        Why Choose IIC Lakshya for your IFRS Journey?
                    </h2>
                    <p className="text-blue-100 mb-8 text-base md:text-lg font-sans leading-relaxed max-w-2xl">
                        We don't just teach you the standards; we equip you with the practical application skills needed to thrive in the global finance market.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-lakshya-yellow flex items-center justify-center text-lakshya-blue">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Platinum Learning Partner</h4>
                                    <p className="text-xs text-blue-100">ACCA Approved Platinum Partner status ensures the highest quality of education and support.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lakshya-yellow">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Expert Faculty</h4>
                                    <p className="text-xs text-blue-100">Learn from seasoned CAs and industry experts with deep practical IFRS experience.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lakshya-yellow">
                                    <Briefcase size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Placement Support</h4>
                                    <p className="text-xs text-blue-100">Dedicated placement cell connecting you with Big 4s and top MNCs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HiringPartners = () => {
    // Actual logos for hiring partners
    const partners = [
        { name: "Deloitte", url: "https://logo.clearbit.com/deloitte.com" },
        { name: "KPMG", url: "https://logo.clearbit.com/kpmg.com" },
        { name: "EY", url: "https://logo.clearbit.com/ey.com" },
        { name: "PwC", url: "https://logo.clearbit.com/pwc.com" },
        { name: "Grant Thornton", url: "https://logo.clearbit.com/grantthornton.com" },
        { name: "BDO", url: "https://logo.clearbit.com/bdo.com" },
        { name: "Accenture", url: "https://logo.clearbit.com/accenture.com" },
        { name: "Wipro", url: "https://logo.clearbit.com/wipro.com" },
        { name: "Infosys", url: "https://logo.clearbit.com/infosys.com" },
        { name: "IBM", url: "https://logo.clearbit.com/ibm.com" }
    ];

    return (
        <section className="py-8 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                 <h3 className="text-2xl md:text-3xl font-heading font-bold text-lakshya-blue">
                    Our Alumni Work At
                </h3>
                <div className="w-16 h-1 bg-lakshya-yellow mx-auto mt-2 rounded-full"></div>
            </div>
            <Marquee>
                {partners.map((partner, idx) => (
                    <div key={idx} className="flex items-center justify-center min-w-[120px] mx-4">
                        <img 
                            src={partner.url} 
                            alt={partner.name}
                            className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                            onError={(e) => {
                                // Fallback to text if image fails
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerText = partner.name;
                            }}
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

const FAQ = () => {
    const items = [
        {
            title: "What is the format of the DipIFR exam?",
            content: "The exam is a 3-hour 15-minute written paper held twice a year (June and December). It consists of four questions appearing in two sections, requiring a mix of calculations and explanations. The passing mark is 50%."
        },
        {
            title: "Who awards the Diploma?",
            content: "The Diploma is awarded by the Association of Chartered Certified Accountants (ACCA), UK, which is a globally recognized professional accounting body."
        },
        {
            title: "What are the exam fees?",
            content: "The exam fee is approximately £185 (subject to change by ACCA) which is payable directly to ACCA. IIC Lakshya provides full assistance in the registration and payment process."
        },
        {
            title: "What happens if I miss a live class?",
            content: "Don't worry! All live sessions are recorded and uploaded to our state-of-the-art Learning Management System (LMS). You can access these recordings anytime, anywhere for revision."
        },
        {
            title: "How does DipIFR differ from the full ACCA qualification?",
            content: "DipIFR is a specialized, single-exam qualification strictly focused on IFRS standards, designed for professionals who already have a finance background. The full ACCA qualification is a comprehensive program with multiple papers covering various aspects of finance and accounting."
        },
        {
            title: "Is there any exemption for the exam?",
            content: "There are generally no exemptions for the DipIFR exam itself. It is a standalone qualification designed to test your knowledge of IFRS."
        }
    ];

    return (
        <section className="py-10 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-lakshya-blue mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>
                <Accordion items={items} />
            </div>
        </section>
    );
};

const MobileStickyCTA = ({ onDownload, onCounselling }: { onDownload: () => void, onCounselling: () => void }) => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 md:hidden">
            <div className="flex gap-3">
                <button 
                    onClick={onDownload}
                    className="flex-1 bg-white border-2 border-lakshya-blue text-lakshya-blue py-3 rounded-md font-bold text-center text-sm shadow-sm flex flex-col items-center justify-center leading-tight"
                >
                    <span>Download Brochure</span>
                    <span className="text-[9px] font-normal text-gray-500">Get Syllabus PDF</span>
                </button>
                <button 
                    onClick={onCounselling}
                    className="flex-1 bg-lakshya-yellow text-lakshya-blue py-3 rounded-md font-bold shadow-sm text-sm flex flex-col items-center justify-center leading-tight"
                >
                    <span>Get Free Counselling</span>
                    <span className="text-[9px] font-normal text-gray-800">Speak to Expert</span>
                </button>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-lakshya-blue text-white py-8 pb-24 lg:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm text-gray-400">
                    &copy; 2026 IIC Lakshya. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

// --- Main App ---

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Get Course Brochure");

    const openModal = (title: string = "Get Course Brochure") => {
        setModalTitle(title);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white">
            <Navbar onEnquire={() => openModal("Admissions Enquiry")} />
            
            <main>
                <Hero onOpenForm={() => openModal("Get Free Counselling")} />
                
                <WhoIsThisFor />
                <Curriculum onDownload={() => openModal("Download Syllabus")} />
                <LearningModes onEnquire={() => openModal("Check Batch Details")} />
                <HiringPartners />
                <WhyChooseUs />
                <FAQ />
                
                {/* CTA Section */}
                <section className="py-16 bg-lakshya-blue relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                                    Start Your Journey to Becoming a Global Accountant
                                </h2>
                                <p className="text-blue-100 mb-8 text-lg font-sans leading-relaxed">
                                    Don't miss out on the opportunity to elevate your career with ACCA DipIFR. Join the next batch at IIC Lakshya.
                                </p>
                                <div className="hidden md:block">
                                     <CountdownTimer />
                                </div>
                                {/* Mobile Button */}
                                 <div className="md:hidden">
                                    <Button variant="primary" onClick={() => openModal("Start Application")} fullWidth>
                                        Apply Now
                                    </Button>
                                     <CountdownTimer className="mt-6" />
                                </div>
                            </div>
                            
                            {/* Desktop Form */}
                            <div className="hidden md:block bg-white rounded-xl shadow-2xl p-1">
                                 <LeadForm embedded title="Secure Your Spot" subtitle="Fill the form to get started" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
            
            <MobileStickyCTA 
                onDownload={() => openModal("Download Brochure")} 
                onCounselling={() => openModal("Request Free Counselling")} 
            />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <LeadForm 
                    title={modalTitle} 
                    onSuccess={() => {}} 
                />
            </Modal>
        </div>
    );
}