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
    Star
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
        <section className="relative pt-20 pb-8 lg:pt-32 lg:pb-12 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-100/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                    
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-lakshya-blue/20 shadow-sm mb-4 animate-fade-in-up">
                            <ShieldCheck className="w-4 h-4 text-lakshya-teal" />
                            <span className="text-xs font-bold text-lakshya-blue tracking-wide uppercase">ACCA Approved Platinum Partner</span>
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-lakshya-blue leading-tight mb-4">
                            ACCA Dip IFRS Course: <br/>
                            <span className="text-lakshya-skyblue">Master IFRS. Elevate Your Career.</span>
                        </h1>
                        
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4 font-heading text-sm sm:text-base">
                            <div className="bg-white/80 px-4 py-2 rounded-md border border-gray-200 shadow-sm text-gray-800 flex flex-col">
                                <span className="text-gray-500 text-[10px] uppercase tracking-wider">Earning Potential</span>
                                <span className="font-bold text-lakshya-blue">Up to ₹ 15 LPA</span>
                            </div>
                            <div className="bg-white/80 px-4 py-2 rounded-md border border-gray-200 shadow-sm text-gray-800 flex flex-col">
                                <span className="text-gray-500 text-[10px] uppercase tracking-wider">Duration</span>
                                <span className="font-bold text-lakshya-blue">3 - 6 Months</span>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-start mb-6">
                            <CountdownTimer mode="micro" />
                        </div>

                        <p className="text-base md:text-lg text-gray-600 mb-6 font-serif leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Join 50,000+ alumni who have transformed their careers with IIC Lakshya. Learn from industry experts and master IFRS standards globally.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <div className="flex items-center gap-2 text-gray-700 bg-white/50 px-3 py-1 rounded-full">
                                <Globe size={18} className="text-lakshya-teal" />
                                <span className="font-semibold text-sm">Accepted in 140 Countries</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 bg-white/50 px-3 py-1 rounded-full">
                                <TrendingUp size={18} className="text-lakshya-teal" />
                                <span className="font-semibold text-sm">Avg. 50% Salary Hike</span>
                            </div>
                        </div>

                        {/* CTA - Check Eligibility */}
                        <div className="flex flex-col items-center lg:items-start">
                            <Button onClick={onOpenForm} variant="primary" className="shadow-xl shadow-yellow-200 w-full sm:w-auto px-8">
                                Check Eligibility
                            </Button>
                            <span className="text-[10px] text-gray-500 font-medium mt-2">Free Profile Assessment</span>
                        </div>
                    </div>

                    {/* Right Content - Lead Form (Desktop Inline, Hidden Mobile) */}
                    <div className="hidden lg:block relative" id="lead-form-desktop">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white rounded-full opacity-40 blur-3xl -z-10"></div>
                        <LeadForm embedded className="transform hover:-translate-y-1 transition-transform duration-300" title="Enquire for Admissions" />
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
            <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
                <h3 className="text-lg font-heading font-semibold text-gray-500 uppercase tracking-widest">
                    Our Alumni Work At
                </h3>
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
            content: "The exam is a 3-hour 15-minute written paper held twice a year (June and December). It consists of four questions appearing in two sections, requiring a mix of calculations and explanations."
        },
        {
            title: "Can I do DipIFR along with my job?",
            content: "Yes, absolutely. The course is designed for working professionals with flexible weekend batches and online learning options."
        },
        {
            title: "Is IIC Lakshya an approved learning partner?",
            content: "Yes, IIC Lakshya is an ACCA Approved Platinum Learning Partner, ensuring the highest standards of tuition and student support."
        },
        {
            title: "Does IIC Lakshya provide placement assistance?",
            content: "Yes, we have a dedicated placement cell that connects our DipIFR graduates with top audit firms and MNCs. Our strong alumni network in Big 4 firms is a major advantage."
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                                    Start Your Journey to Becoming a Global Accountant
                                </h2>
                                <p className="text-blue-100 mb-8 text-lg font-sans leading-relaxed">
                                    Don't miss out on the opportunity to elevate your career with ACCA DipIFR. Join the next batch at IIC Lakshya.
                                </p>
                                <div className="hidden lg:block">
                                     <CountdownTimer />
                                </div>
                                {/* Mobile Button */}
                                 <div className="lg:hidden">
                                    <Button variant="primary" onClick={() => openModal("Start Application")} fullWidth>
                                        Apply Now
                                    </Button>
                                     <CountdownTimer className="mt-6" />
                                </div>
                            </div>
                            
                            {/* Desktop Form */}
                            <div className="hidden lg:block bg-white rounded-xl shadow-2xl p-1">
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