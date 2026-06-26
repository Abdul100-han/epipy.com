import React from 'react';
import { User } from 'lucide-react';
import Section from '../components/Section';
import mubarakAminu from '../assets/team/Mubarak Aminu.jpeg';
import toheedOlaitan from '../assets/team/Aliyu Toheeb Olaitan.jpeg';
import abdulsalamMuhammad from '../assets/team/Abdulsalam Muhammad.jpeg';
import ummaMohammed from '../assets/team/Umma Mohammed Abdullahi.jpeg';
import matthew from '../assets/team/mathew.jpeg';

const Team = () => {
    const teamMembers = [
        {
            name: "Mubarak Aminu",
            role: "Founder & Lead Strategist",
            image: mubarakAminu
        },
        {
            name: "Muthew Copeland",
            role: "Research & Development Lead",
            image: matthew
        },
        {
            name: "Toheed Olaitan",
            role: "Operations & Project Lead",
            // bio: "Leads research, planning, and delivery of projects with data-driven insights.",
            image: toheedOlaitan
        },

        {
            name: "Umma Mohammed Abdullahi",
            role: "Partnerships & Growth Lead",
             image: ummaMohammed
        },
        {
            name: "Abdulsalam Muhammad",
            role: "Software Engineer & Technical Lead",
            image: abdulsalamMuhammad
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* --- Page Header --- */}
            <Section bg="primary" className="!py-24 relative overflow-hidden">
                <div className="absolute inset-0 border border-secondary pointer-events-none">
                    <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 border-4 border-secondary rounded-full translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                        Our <span className="text-secondary">Team</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                        "Practical learning experiences designed for individuals and organizations."
                    </p>
                </div>
            </Section>

            {/* --- Team Grid --- */}
            <Section bg="white" className="!py-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 xl:gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group flex flex-col items-center text-center">
                            {/* Profile Image */}
                            <div className="relative mb-8">
                                <div className="w-48 h-48 rounded-full bg-white border-4 border-secondary overflow-hidden transition-all duration-500 group-hover:border-primary">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Decorative badge */}
                                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-secondary group-hover:bg-primary transition-colors duration-500">
                                    <User size={20} className="text-secondary group-hover:text-white transition-colors duration-500" />
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-white text-sm font-bold uppercase tracking-widest bg-secondary inline-block px-4 py-1.5 rounded-full border border-white">
                                    {member.role}
                                </p>
                                <p className="text-primary text-sm leading-relaxed max-w-[250px] mx-auto mt-4 px-2 italic">
                                    "{member.bio}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- Join Us Section --- */}
            <Section bg="white" className="!py-20">
                <div className="max-w-4xl mx-auto text-center border-t border-b border-secondary py-16">
                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Want to Join Our Ecosystem?</h2>
                    <p className="text-lg text-primary max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        We are always looking for visionary talent and strategic partners to join our mission of driving operational excellence across African markets.
                    </p>
                    <button className="px-10 py-4 bg-primary text-white font-bold rounded-full border border-white hover:bg-secondary hover:text-white transition-all transform hover:scale-105">
                        EXPLORE OPPORTUNITIES
                    </button>
                </div>
            </Section>
        </div>
    );
};

export default Team;
