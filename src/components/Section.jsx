import React from 'react';

const Section = ({
    children,
    className = "",
    id = "",
    bg = "white", // white, primary
    noPadding = false
}) => {
    const bgStyles = {
        white: "bg-white text-primary",
        primary: "bg-primary text-white"
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
