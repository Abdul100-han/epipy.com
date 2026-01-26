import React from 'react';
import {
    Briefcase,
    BarChart3,
    Lightbulb,
    GraduationCap,
    Globe,
    CheckCircle2
} from 'lucide-react';
import Section from '../components/Section';

const Projects = () => {
    const experienceAreas = [
        {
            title: "Business Development Projects",
            description: "Supporting market entry, partnerships, and growth initiatives for evolving enterprises.",
            icon: <Briefcase className="w-8 h-8 text-secondary" />,
            bgColor: "bg-white"
        },
        {
            title: "Strategy & Operations Execution",
            description: "Delivering structured strategies and operational improvements that drive measurable efficiency.",
            icon: <BarChart3 className="w-8 h-8 text-secondary" />,
            bgColor: "bg-gray-50"
        },
        {
            title: "Agritech & Innovation Initiatives",
            description: "Implementing agritech solutions and innovation-driven programs across the agricultural value chain.",
            icon: <Lightbulb className="w-8 h-8 text-secondary" />,
            bgColor: "bg-white"
        },
        {
            title: "Training & Capacity-Building Programs",
            description: "Designing and delivering practical learning programs for corporate teams and startups.",
            icon: <GraduationCap className="w-8 h-8 text-secondary" />,
            bgColor: "bg-gray-50"
        }
    ];

    const clients = ["Interface", "Eduvacty", "Twistone"];

    return (
        <div className="overflow-hidden">
            {/* --- Page Header --- */}
            <Section bg="primary" className="!py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/5 skew-y-3 pointer-events-none" />
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Our <span className="text-secondary">Experience</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed italic">
                        "A snapshot of the work we’ve delivered across sectors and ecosystems."
                    </p>
                </div>
            </Section>

            {/* --- Experience Areas --- */}
            <Section bg="white" className="!py-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {experienceAreas.map((area, index) => (
                        <div
                            key={index}
                            className={`${area.bgColor} p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                {React.cloneElement(area.icon, { className: "w-32 h-32" })}
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-primary/5 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {area.icon}
                                </div>
                                <h3 className="text-2xl font-black text-primary mb-6 group-hover:text-secondary transition-colors uppercase tracking-tight">
                                    {area.title}
                                </h3>
                                <p className="text-accent-dark/70 text-lg leading-relaxed mb-8">
                                    {area.description}
                                </p>
                                <div className="flex items-center space-x-2 text-secondary font-bold text-sm tracking-widest uppercase">
                                    <CheckCircle2 size={16} />
                                    <span>Track Record of Delivery</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- Case Studies / Detailed Narrative Section --- */}
            <Section bg="gray" className="!py-24">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-video rounded-3xl bg-primary-dark overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white">
                            <Globe size={100} className="text-white opacity-20 animate-pulse" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent p-10 flex flex-col justify-end">
                                <span className="text-secondary font-black text-xs tracking-[.3em] uppercase mb-2">Regional Impact</span>
                                <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Strategic Execution Excellence</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tighter uppercase">Beyond Delivery</h2>
                        <p className="text-lg text-accent-dark/80 mb-8 leading-relaxed">
                            Our experience spans diverse high-growth sectors where we combine strategic thinking with hands-on operational support. We don't just plan—we implement and monitor to ensure every project meets its intended impact.
                        </p>
                        <ul className="space-y-4">
                            {["Custom Execution Frameworks", "Evidence-Based Insights", "Scalable Growth Models"].map((point, idx) => (
                                <li key={idx} className="flex items-center space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={14} className="text-primary-dark" />
                                    </div>
                                    <span className="font-bold text-primary">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* --- Clients Grayscale Section --- */}
            <Section bg="white" className="!py-20">
                <div className="text-center mb-16">
                    <h2 className="text-xl font-black text-primary/40 tracking-[.5em] uppercase mb-4">Trusted By</h2>
                    <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                    {clients.map((client, index) => (
                        <div key={index} className="flex items-center justify-center p-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-default">
                            <div className="text-3xl font-black tracking-tighter text-gray-500 uppercase flex items-center">
                                <span className="text-accent-dark">{client}</span>
                                <span className="text-secondary ml-1 mt-1 font-bold text-sm">.</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center max-w-2xl mx-auto px-6 py-4 bg-gray-50 rounded-full border border-gray-100">
                    <p className="text-accent text-sm font-medium">
                        Organizations we’ve worked with include <span className="text-primary font-bold">Interface</span>, <span className="text-primary font-bold">Eduvacty</span>, <span className="text-primary font-bold">Twistone</span>, and others.
                    </p>
                </div>
            </Section>

            {/* Final CTA */}
            <Section bg="primary" className="text-center !py-16">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter">LEVERAGE OUR EXPERIENCE</h3>
                <button className="px-12 py-5 bg-secondary text-primary-dark font-black rounded-xl hover:bg-white transition-all transform hover:scale-105 shadow-2xl">
                    PARTNER WITH US
                </button>
            </Section>
        </div>
    );
};

export default Projects;
