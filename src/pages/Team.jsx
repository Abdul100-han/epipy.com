import React from 'react';
import { User } from 'lucide-react';
import Section from '../components/Section';

const Team = () => {
    const teamMembers = [
        {
            name: "Mubarak Aminu",
            role: "Founder & Lead Strategist",
            bio: "Focuses on business strategy, partnerships, and execution leadership across sectors.",
            initials: "MA"
        },
        {
            name: "Toheed Olaitan",
            role: "Project & Research Lead",
            bio: "Leads research, planning, and delivery of projects with data-driven insights.",
            initials: "TO"
        },
        {
            name: "Haris Kris",
            role: "Marketing & Content Lead",
            bio: "Drives brand storytelling, communications, and market positioning.",
            initials: "HK"
        },
        {
            name: "Umma",
            role: "Partnerships & Stakeholder Relations Lead",
            bio: "Manages partnerships, stakeholder engagement, and collaborative initiatives.",
            initials: "U"
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* --- Page Header --- */}
            <Section bg="primary" className="!py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Our <span className="text-secondary text-stroke-white">Team</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
                        A multidisciplinary team driving strategy, execution, and impact.
                    </p>
                </div>
            </Section>

            {/* --- Team Grid --- */}
            <Section bg="white" className="!py-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group flex flex-col items-center text-center">
                            {/* Profile Image Placeholder */}
                            <div className="relative mb-8">
                                <div className="w-48 h-48 rounded-full bg-gray-50 border-2 border-gray-100 flex items-center justify-center p-2 transition-all duration-500 group-hover:border-secondary overflow-hidden shadow-lg group-hover:shadow-secondary/20">
                                    <div className="w-full h-full rounded-full bg-primary/5 flex items-center justify-center text-primary-dark group-hover:bg-secondary transition-all duration-500">
                                        <span className="text-4xl font-black group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                            {member.initials}
                                        </span>
                                    </div>
                                </div>
                                {/* Decorative badge */}
                                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 group-hover:bg-primary transition-colors duration-500">
                                    <User size={20} className="text-secondary group-hover:text-white transition-colors duration-500" />
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-secondary text-sm font-bold uppercase tracking-widest bg-secondary/5 inline-block px-3 py-1 rounded-full">
                                    {member.role}
                                </p>
                                <p className="text-primary/70 text-sm leading-relaxed max-w-[250px] mx-auto mt-4 px-2 italic">
                                    "{member.bio}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- Join Us Section --- */}
            <Section bg="gray" className="!py-20">
                <div className="max-w-4xl mx-auto text-center border-t border-b border-gray-200 py-16">
                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Want to Join Our Ecosystem?</h2>
                    <p className="text-lg text-accent max-w-2xl mx-auto mb-10 leading-relaxed">
                        We are always looking for visionary talent and strategic partners to join our mission of driving operational excellence across African markets.
                    </p>
                    <button className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary hover:text-primary-dark transition-all transform hover:scale-105 shadow-xl">
                        EXPLORE OPPORTUNITIES
                    </button>
                </div>
            </Section>
        </div>
    );
};

export default Team;
