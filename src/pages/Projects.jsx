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
import PartnersMarquee from '../components/PartnersMarquee';

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
            bgColor: "bg-white"
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
            bgColor: "bg-white"
        }
    ];

    const clients = ["Interface", "Eduvacty", "Twistone"];

    return (
        <div className="overflow-hidden">
            {/* --- Page Header --- */}
            <Section bg="primary" className="!py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary skew-y-3 pointer-events-none" />
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Our <span className="text-secondary">Experience</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
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
                            className={`${area.bgColor} p-10 rounded-[2.5rem] border-2 border-secondary transition-all duration-500 group relative overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 p-8 text-primary">
                                {React.cloneElement(area.icon, { className: "w-32 h-32 text-primary" })}
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white border-2 border-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:border-white group-hover:text-white transition-colors">
                                    {React.cloneElement(area.icon, { className: "w-8 h-8 group-hover:text-white" })}
                                </div>
                                <h3 className="text-2xl font-black text-primary mb-6 group-hover:text-secondary transition-colors uppercase tracking-tight">
                                    {area.title}
                                </h3>
                                <p className="text-primary text-lg leading-relaxed mb-8">
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
            <Section bg="white" className="!py-24">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-video rounded-3xl bg-primary border-4 border-secondary overflow-hidden flex items-center justify-center">
                            <Globe size={100} className="text-white" />
                            <div className="absolute inset-0 bg-primary p-10 flex flex-col justify-end border-t border-secondary">
                                <span className="text-secondary font-black text-xs tracking-[.3em] uppercase mb-2">Regional Impact</span>
                                <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Strategic Execution Excellence</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tighter uppercase">Beyond Delivery</h2>
                        <p className="text-lg text-primary mb-8 leading-relaxed">
                            Our experience spans diverse high-growth sectors where we combine strategic thinking with hands-on operational support. We don't just plan—we implement and monitor to ensure every project meets its intended impact.
                        </p>
                        <ul className="space-y-4">
                            {["Custom Execution Frameworks", "Evidence-Based Insights", "Scalable Growth Models"].map((point, idx) => (
                                <li key={idx} className="flex items-center space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 size={14} className="text-white" />
                                    </div>
                                    <span className="font-bold text-primary">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* --- Partners Marquee Section --- */}
            <PartnersMarquee />

            {/* Final CTA */}
            <Section bg="primary" className="text-center !py-16">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter">LEVERAGE OUR EXPERIENCE</h3>
                <a href="mailto:info@epipy.com" className="inline-block text-center px-12 py-5 bg-secondary text-white font-black rounded-xl border border-white hover:bg-white hover:text-primary transition-all transform hover:scale-105">
                    PARTNER WITH US
                </a>
            </Section>
        </div>
    );
};

export default Projects;
