import React from 'react';
import { Mail, Phone, MapPin, Send, Building2 } from 'lucide-react';
import Section from '../components/Section';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Building2 className="w-6 h-6 text-secondary" />,
            title: "Company Name",
            value: "Epipy Nigeria Limited"
        },
        {
            icon: <MapPin className="w-6 h-6 text-secondary" />,
            title: "Location",
            value: "High-rise Office Complex, Victoria Island, Lagos, Nigeria"
        },
        {
            icon: <Mail className="w-6 h-6 text-secondary" />,
            title: "Email",
            value: "info@epipy.ng"
        },
        {
            icon: <Phone className="w-6 h-6 text-secondary" />,
            title: "Phone",
            value: "+234 XXX XXX XXXX"
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* --- Page Header --- */}
            <Section bg="primary" className="!py-24 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                        Contact <span className="text-secondary">Us</span>
                    </h1>
                    <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                    <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed italic">
                        "Let’s discuss how we can support your organization."
                    </p>
                </div>
            </Section>

            {/* --- Contact Info Grid --- */}
            <Section bg="white" className="!py-28">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:bg-white group">
                                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mr-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-secondary uppercase tracking-[.2em] mb-1">{info.title}</p>
                                    <p className="text-lg font-bold text-primary">{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- CTA Section --- */}
                    <div className="mt-20 text-center bg-primary rounded-[2.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Send size={150} className="text-white" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Start a Conversation</h2>
                            <p className="text-gray-400 mb-10 text-lg">We are ready to partner with you for strategic growth and impact.</p>
                            <a
                                href="mailto:info@epipy.ng"
                                className="inline-flex items-center space-x-3 px-12 py-5 bg-secondary text-primary-dark font-black rounded-xl hover:bg-white transition-all transform hover:scale-105 shadow-xl"
                            >
                                <span>WORK WITH EPIPY</span>
                                <Send size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Simple Map Placeholder */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center border-t border-gray-200 grayscale opacity-40">
                <div className="text-center">
                    <MapPin className="w-10 h-10 text-primary/30 mx-auto mb-2" />
                    <p className="text-primary/30 font-bold uppercase tracking-widest text-xs">Victoria Island, Lagos</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
