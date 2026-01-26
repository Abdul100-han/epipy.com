import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard = ({ icon, title, description, offerings }) => {
    return (
        <div className="bg-white p-8 rounded-3xl border border-secondary transition-all duration-300 flex flex-col h-full group">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                {React.cloneElement(icon, { className: "w-7 h-7 text-white" })}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
            <p className="text-primary text-sm mb-6 leading-relaxed flex-grow">
                {description}
            </p>
            <div className="space-y-3 pt-6 border-t border-primary mt-auto">
                {offerings.map((offering, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-primary">
                        <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{offering}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCard;
