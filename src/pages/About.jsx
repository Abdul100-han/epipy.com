import React from 'react';
import {
    Target,
    Rocket,
    Award,
    Lightbulb,
    ShieldCheck,
    BarChart4,
    Users2
} from 'lucide-react';
import Section from '../components/Section';

const About = () => {
    const values = [
        {
            title: "Excellence",
            icon: <Award className="w-6 h-6 text-white" />,
            description: "We maintain the highest standards in every project, ensuring top-tier results for our partners."
        },
        {
            title: "Innovation",
            icon: <Lightbulb className="w-6 h-6 text-white" />,
            description: "We embrace forward-thinking solutions and creative strategies to solve complex challenges."
        },
        {
            title: "Integrity",
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
            description: "Transparency and ethics are at the core of our operations, building lasting trust."
        },
        {
            title: "Impact",
            icon: <BarChart4 className="w-6 h-6 text-white" />,
            description: "Every action we take is designed to deliver measurable, sustainable growth and success."
        },
        {
            title: "Collaboration",
            icon: <Users2 className="w-6 h-6 text-white" />,
            description: "We believe in the power of partnerships and working together to achieve shared goals."
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* --- Section 1: Page Header --- */}
            <Section bg="primary" className="relative !py-20 flex items-center justify-center text-center overflow-hidden">
                {/* Abstract Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-96 h-96 border-[40px] border-white rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 border-[30px] border-secondary rounded-full" />
                </div>

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        About <span className="text-secondary">Epipy</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
                        Building practical strategies and executing solutions that drive sustainable growth.
                    </p>
                </div>
            </Section>

            {/* --- Section 2: Company Overview --- */}
            <Section bg="white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-block px-4 py-1.5 bg-secondary/10 border-l-4 border-secondary text-primary font-bold text-sm mb-6 uppercase tracking-widest">
                            Our Story
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
                            A Forward-Driven Business Development <br className="hidden md:block" />
                            And Project Execution Company.
                        </h2>
                        <div className="space-y-6 text-lg text-accent-dark/70 leading-relaxed">
                            <p>
                                Epipy Nigeria Limited is focused on helping organizations structure operations, unlock opportunities, and implement solutions that deliver impact.
                            </p>
                            <p>
                                We support businesses across strategy design, project execution, innovation adoption, agritech development, training, and systems improvement. Our approach combines deep local market insight with world-class execution standards.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform hover:scale-110" />
                            <div className="relative z-10 space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <Target className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Results-Oriented</h4>
                                        <p className="text-sm text-accent">Focused on measurable outputs and delivery.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                                        <Lightbulb className="text-secondary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Agile Approach</h4>
                                        <p className="text-sm text-accent">Adapting to evolving market demands in real-time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- Section 3: Vision & Mission --- */}
            <Section bg="gray">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="group bg-primary text-white p-10 md:p-14 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-[-20px] right-[-20px] text-white/5 group-hover:text-white/10 transition-colors">
                            <Target size={200} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                                <Rocket className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Vision</h2>
                            <p className="text-xl text-gray-300 leading-relaxed font-medium">
                                To become a trusted African partner for strategic growth, innovation, and execution excellence.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="group bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-[-20px] right-[-20px] text-primary/5 group-hover:text-primary/10 transition-colors">
                            <Rocket size={200} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-black mb-6 text-primary uppercase tracking-tight">Mission</h2>
                            <p className="text-xl text-accent-dark/70 leading-relaxed font-medium">
                                To empower organizations with practical strategies, efficient systems, and expert execution that drive sustainable growth and long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- Section 4: Core Values --- */}
            <Section bg="white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-primary uppercase tracking-tight mb-4">Core Values</h2>
                    <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((val, index) => (
                        <div key={index} className="flex group">
                            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-secondary/20 flex flex-col items-center text-center w-full">
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:bg-secondary group-hover:shadow-secondary/20 transition-all duration-300 transform group-hover:rotate-12">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{val.title}</h3>
                                <p className="text-accent-dark/60 text-sm leading-relaxed">
                                    {val.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Call to Action Box in Grid */}
                    <div className="lg:col-span-1 hidden lg:flex">
                        <div className="p-8 rounded-3xl bg-secondary flex flex-col justify-center items-center text-center w-full shadow-lg shadow-secondary/10">
                            <h3 className="text-2xl font-black text-primary-dark mb-4">Partner with us today.</h3>
                            <button className="bg-primary-dark text-white px-6 py-3 rounded-full font-bold hover:bg-primary transition-all">
                                Join Our Ecosystem
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Join Section */}
            <Section bg="dark" className="!py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-2">Grow with Epipy Excellence</h2>
                        <p className="text-gray-400">Join the list of successful organizations we've empowered.</p>
                    </div>
                    <button className="px-10 py-4 bg-secondary text-primary-dark font-black rounded-full hover:bg-white transition-all transform hover:scale-105">
                        CONTACT OUR STRATEGISTS
                    </button>
                </div>
            </Section>
        </div>
    );
};

export default About;
