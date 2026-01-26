import React from 'react';
import { Link } from 'react-router-dom';
import {
    Users,
    Sprout,
    Cpu,
    Layout,
    Check,
    ArrowUpRight,
    Monitor,
    Home
} from 'lucide-react';
import Section from '../components/Section';

const Training = () => {
    const corePrograms = [
        {
            title: "Corporate Training",
            icon: <Users className="w-8 h-8 text-secondary" />,
            offerings: [
                "Leadership & management development",
                "Business operations & systems",
                "Strategy execution workshops"
            ],
            description: "Empowering organizational leaders with the tools to navigate complex business landscapes."
        },
        {
            title: "Agritech Capacity Building",
            icon: <Sprout className="w-8 h-8 text-secondary" />,
            offerings: [
                "Agricultural innovation programs",
                "Agribusiness skills development",
                "Value chain training"
            ],
            description: "Modernizing the agricultural sector through skill-based innovation and value chain optimization."
        },
        {
            title: "Emerging Tech & Future of Work",
            icon: <Cpu className="w-8 h-8 text-secondary" />,
            offerings: [
                "Digital skills & technology adoption",
                "Innovation & entrepreneurship",
                "Future-ready workforce programs"
            ],
            description: "Preparing your workforce for the digital era with cutting-edge technological adoption strategies."
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* --- Page Header --- */}
            <Section bg="primary" className="!py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Training & <span className="text-secondary">Programs</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed italic">
                        "Practical learning experiences designed for individuals and organizations."
                    </p>
                </div>
            </Section>

            {/* --- Training Offerings Grid --- */}
            <Section bg="white" className="!py-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {corePrograms.map((program, index) => (
                        <div key={index} className="flex flex-col bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                                {program.icon}
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors uppercase tracking-tight">
                                {program.title}
                            </h3>
                            <p className="text-accent-dark/60 text-sm mb-8 leading-relaxed">
                                {program.description}
                            </p>

                            <div className="space-y-3 mt-auto pt-6 border-t border-gray-100">
                                {program.offerings.map((item, i) => (
                                    <div key={i} className="flex items-start space-x-3 text-sm text-accent-dark/80 font-medium">
                                        <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- Custom Training Solutions Section --- */}
            <Section bg="primary-dark" className="relative group overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Layout size={300} className="text-white" />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-3/5">
                        <div className="inline-block px-4 py-1.5 bg-secondary/20 border border-secondary/30 rounded-lg text-secondary font-black text-xs uppercase tracking-[0.3em] mb-6">
                            Tailored Excellence
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
                            Custom Training <br className="hidden md:block" /> Solutions
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                            We design needs-based curricula that align perfectly with your organizational goals, whether delivered on-site at your headquarters or through immersive virtual platforms.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
                            <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                                    <Home className="w-6 h-6 text-secondary" />
                                </div>
                                <span className="text-white font-bold">On-Site Delivery</span>
                            </div>
                            <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                                    <Monitor className="w-6 h-6 text-secondary" />
                                </div>
                                <span className="text-white font-bold">Virtual Platform</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/5">
                        <div className="p-8 md:p-12 bg-white rounded-[2.5rem] shadow-2xl relative">
                            <h4 className="text-2xl font-black text-primary mb-6 uppercase tracking-tight">Our Process</h4>
                            <ul className="space-y-6">
                                {[
                                    { t: "Needs Assessment", d: "Detailed analysis of skill gaps." },
                                    { t: "Curriculum Design", d: "Tailoring content to your objectives." },
                                    { t: "Execution & Delivery", d: "Expert-led practical sessions." }
                                ].map((step, idx) => (
                                    <li key={idx} className="flex space-x-4">
                                        <div className="text-secondary font-black text-lg">0{idx + 1}.</div>
                                        <div>
                                            <p className="text-primary font-bold">{step.t}</p>
                                            <p className="text-accent text-sm">{step.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Final CTA Section */}
            <Section bg="white" className="!py-24 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 tracking-tighter uppercase">Ready to Empower Your Team?</h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center space-x-3 px-12 py-5 bg-secondary text-primary-dark font-black rounded-xl hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-2xl"
                    >
                        <span>REQUEST A TRAINING PROGRAM</span>
                        <ArrowUpRight size={24} />
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default Training;
