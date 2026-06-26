import React from 'react';
import { Link } from 'react-router-dom';
import {
    TrendingUp,
    Settings,
    Cpu,
    Megaphone,
    Sprout,
    GraduationCap,
    Truck,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import Section from '../components/Section';

const Home = () => {
    const services = [
        {
            title: "Business Development & Growth Strategy",
            icon: <TrendingUp className="w-8 h-8 text-secondary" />,
            description: "Designing winning strategies tailored for scale and sustainability."
        },
        {
            title: "Project Management & Execution",
            icon: <Settings className="w-8 h-8 text-secondary" />,
            description: "Turning complex plans into high-impact reality with precision."
        },
        {
            title: "Digital Transformation & Systems Support",
            icon: <Cpu className="w-8 h-8 text-secondary" />,
            description: "Building efficient digital infrastructure for the modern age."
        },
        // {
        //     title: "Marketing, Communications & Growth",
        //     icon: <Megaphone className="w-8 h-8 text-secondary" />,
        //     description: "Amplifying your voice and driving measurable market presence."
        // },
        {
            title: "Agritech & Innovation Support",
            icon: <Sprout className="w-8 h-8 text-secondary" />,
            description: "Modernizing agriculture through technology and strategic innovation."
        },
        {
            title: "Training & Capacity Building",
            icon: <GraduationCap className="w-8 h-8 text-secondary" />,
            description: "Empowering teams with the skills to lead in their industries."
        },
        {
            title: "Contract Supply & Business Support",
            icon: <Truck className="w-8 h-8 text-secondary" />,
            description: "Reliable logistics and operational support for seamless growth."
        }
    ];

    const sectors = [
        "Technology & Digital Businesses",
        "Agriculture & Agritech",
        "SMEs & Startups",
        "Corporate Organizations",
        "Development & Innovation Programs",
        "Education & Training Institutions"
    ];

    return (
        <div className="overflow-hidden">
            {/* --- Section 1: Hero Section --- */}
            <Section bg="white" className="relative !py-0 overflow-visible min-h-[85vh] flex items-center">
                {/* Content area starts here */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left pt-10 lg:pt-0">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-secondary mb-6">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">Excellence in Execution</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                            Driving Growth Through <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Strategy, Systems & Execution</span>
                        </h1>
                        <p className="text-lg text-primary mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Epipy Limited helps organizations design winning strategies, build efficient systems, and execute high-impact projects across business, technology, agriculture, and innovation ecosystems.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all transform hover:-translate-y-1"
                            >
                                Work With Us
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-bold hover:bg-secondary hover:text-white transition-all flex items-center justify-center space-x-2"
                            >
                                <span>Explore Our Services</span>
                                <ArrowRight size={18} className="text-primary" />
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="hidden lg:block relative">
                        <div className="w-full aspect-square rounded-3xl bg-primary flex items-center justify-center border border-secondary relative overflow-hidden group">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white rounded-t-3xl border-t border-secondary z-10 p-8 flex flex-col justify-end">
                                <span className="text-secondary font-bold text-sm tracking-widest mb-2">OPERATIONAL SUCCESS</span>
                                <h3 className="text-2xl font-bold text-primary">Strategic Systems for Growth</h3>
                            </div>
                            <div className="w-3/4 h-3/4 rounded-2xl bg-white border border-secondary flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-105">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white border border-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                        <TrendingUp size={40} className="text-primary" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 w-32 bg-secondary rounded-full mx-auto" />
                                        <div className="h-2 w-24 bg-primary rounded-full mx-auto" />
                                        <div className="h-2 w-28 bg-secondary rounded-full mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating Stat Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl border border-secondary animate-slide-down">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white border border-secondary rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={24} className="text-secondary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-primary">100%</p>
                                    <p className="text-xs text-primary font-medium uppercase tracking-tighter">Project Success Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- Section 2: Who We Are (Snapshot) --- */}
            <Section bg="white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-secondary text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                        <h2 className="text-3xl font-bold mb-6">Sustainable Growth for Every Enterprise</h2>
                        <p className="text-lg text-primary leading-relaxed italic">
                            "Epipy Limited is a business development and project execution company supporting startups, SMEs, corporates, and institutions to grow sustainably. We combine strategy, operations, innovation, and partnerships to deliver measurable results."
                        </p>
                    </div>
                </div>
            </Section>

            {/* --- Section 3: Core Services --- */}
            <Section bg="white" id="services">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4">Our Core Expertise</h2>
                    <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl border border-secondary transition-all duration-300 hover:bg-secondary group ${index === services.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="w-16 h-16 rounded-xl bg-white border border-primary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                {React.cloneElement(service.icon, { className: "w-8 h-8 text-secondary group-hover:text-white" })}
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                            <p className="text-primary text-sm leading-relaxed group-hover:text-white">{service.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- Section 4: Why Choose Epipy --- */}
            <Section bg="primary" className="relative group overflow-hidden">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold text-white mb-8">Why Strategic Partners <span className="text-secondary">Choose Us</span></h2>
                        <p className="text-white mb-10 text-lg">We don't just advise; we execute. Our approach is built on a deep understanding of business landscape and global best practices.</p>

                        <div className="space-y-6">
                            {[
                                "Strategy + Execution in one partner",
                                "Cross-sector experience (Tech, Agritech, Corporate)",
                                "Strong partnerships & stakeholder access",
                                "Practical, results-driven approach",
                                "Agile and scalable team"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                                        <CheckCircle2 size={16} className="text-white" />
                                    </div>
                                    <span className="text-white font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-center">
                        <div className="w-80 h-80 rounded-full border-2 border-secondary flex items-center justify-center animate-pulse">
                            <div className="w-64 h-64 rounded-full border-2 border-secondary flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full bg-secondary flex items-center justify-center">
                                    <span className="text-primary text-6xl font-black">E!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- Section 5: Sectors We Serve --- */}
            <Section bg="white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Sectors We Empower</h2>
                    <p className="text-primary max-w-2xl mx-auto">Providing specialized support across diverse high-growth sectors in the regional economy.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl bg-white border border-secondary flex items-center justify-center text-center font-bold text-primary hover:bg-secondary hover:text-white transition-all cursor-default"
                        >
                            {sector}
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section bg="primary" className="!py-16 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to Scale Your Impact?</h2>
                <Link
                    to="/contact"
                    className="inline-block px-10 py-5 bg-secondary text-primary rounded-full text-xl font-black hover:bg-white transition-all transform hover:scale-105"
                >
                    TALK TO AN EXPERT
                </Link>
            </Section>
        </div>
    );
};

export default Home;
