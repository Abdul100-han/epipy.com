import React from 'react';
import {
    TrendingUp,
    Settings,
    Cpu,
    Megaphone,
    Sprout,
    GraduationCap,
    Truck
} from 'lucide-react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const servicesData = [
        {
            title: "Business Development & Strategy",
            icon: <TrendingUp />,
            description: "We help you identify new markets, source high-value opportunities, and structure your business for long-term growth and expansion.",
            offerings: [
                "Market entry & expansion support",
                "Opportunity sourcing & proposal development",
                "Business structuring & growth planning",
                "Partnership development"
            ]
        },
        {
            title: "Project Management & Execution",
            icon: <Settings />,
            description: "From concept to delivery, we provide the systems and coordination needed to ensure your projects are executed with excellence on time and within scope.",
            offerings: [
                "End-to-end project coordination",
                "Operations & systems implementation",
                "Monitoring, reporting & delivery assurance"
            ]
        },
        {
            title: "Digital Transformation Support",
            icon: <Cpu />,
            description: "Modernize your operations with tailored technology advice and process digitization that automates workflows and increases efficiency.",
            offerings: [
                "Process digitization",
                "Technology adoption advisory",
                "Workflow automation support"
            ]
        },
        {
            title: "Marketing & Growth Support",
            icon: <Megaphone />,
            description: "Build a brand that resonates. We combine research and creative strategy to position your business for maximum market impact.",
            offerings: [
                "Brand strategy & positioning",
                "Content & communication development",
                "Market research & insights"
            ]
        },
        {
            title: "Agritech & Innovation",
            icon: <Sprout />,
            description: "Driving food security and value chain efficiency through innovation engagement and specialized agritech project support.",
            offerings: [
                "Agritech project support",
                "Agricultural value chain development",
                "Innovation ecosystem engagement"
            ]
        },
        {
            title: "Training & Capacity Building",
            icon: <GraduationCap />,
            description: "Empowering your workforce with corporate programs focused on emerging technologies and efficient business operations.",
            offerings: [
                "Corporate training programs",
                "Emerging technologies & future of work",
                "Business systems & operations training"
            ]
        },
        {
            title: "Contract Supply & Business Support",
            icon: <Truck />,
            description: "Reliable procurement and general business services that support the seamless execution of your core operations.",
            offerings: [
                "Procurement & supply of goods",
                "Contract execution support",
                "General business services"
            ]
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* --- Page Header --- */}
            <Section bg="primary" className="!py-28 relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
                        Our <span className="text-secondary">Services</span>
                    </h1>
                    <div className="w-24 h-2 bg-secondary mx-auto mb-10 rounded-full" />
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                        Practical solutions designed to help organizations grow, operate efficiently, and deliver impact across diverse sectors.
                    </p>
                </div>
            </Section>

            {/* --- Services Grid --- */}
            <Section bg="white" className="!py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {servicesData.map((service, index) => (
                        <div key={index} className={index === servicesData.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                offerings={service.offerings}
                            />
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- Bottom CTA --- */}
            <Section bg="gray" className="!py-20">
                <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <TrendingUp size={200} className="text-white" />
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to transform your operations?</h2>
                        <p className="text-white mb-12 text-lg">Our team of experts is ready to help you implement strategic systems that drive results.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="px-12 py-5 bg-secondary text-primary-dark font-black rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl">
                                SCHEDULE A CONSULTATION
                            </button>
                            <button className="px-12 py-5 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                                VIEW CASE STUDIES
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Services;
