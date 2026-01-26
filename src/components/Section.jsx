import React from 'react';

const Section = ({
    children,
    className = "",
    id = "",
    bg = "white", // white, gray, primary, accent
    noPadding = false
}) => {
    const bgStyles = {
        white: "bg-white",
        gray: "bg-gray-50",
        primary: "bg-primary text-white",
        accent: "bg-accent-light text-primary",
        dark: "bg-primary-dark text-white"
    };

    return (
        <section
            id={id}
            className={`py-12 md:py-24 ${bgStyles[bg] || bg} ${noPadding ? '!py-0' : ''} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
