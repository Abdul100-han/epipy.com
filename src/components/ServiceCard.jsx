import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard = ({ icon, title, description, offerings }) => {
    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                {React.cloneElement(icon, { className: "w-7 h-7" })}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
            <p className="text-primary/70 text-sm mb-6 leading-relaxed flex-grow">
                {description}
            </p>
            <div className="space-y-3 pt-6 border-t border-gray-50 mt-auto">
                {offerings.map((offering, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-primary/80">
                        <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{offering}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCard;
