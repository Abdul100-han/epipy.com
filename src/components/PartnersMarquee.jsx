import React from 'react';
import p1 from '../assets/partners/1.jpeg';
import p2 from '../assets/partners/2.jpeg';
import p3 from '../assets/partners/3.jpeg';
import p4 from '../assets/partners/4.jpeg';
import p5 from '../assets/partners/5.jpeg';
import p6 from '../assets/partners/6.jpeg';
import p7 from '../assets/partners/7.jpeg';
import p8 from '../assets/partners/8.jpeg';

const PartnersMarquee = () => {
    const logos = [p1, p2, p3, p4, p5, p6, p7, p8];
    // Double the array for seamless loops
    const extendedLogos = [...logos, ...logos];

    return (
        <div className="w-full bg-white py-12 overflow-hidden border-y border-primary">
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <h2 className="text-xl font-bold text-primary tracking-[.3em] uppercase text-center">
                    Strategic Partners & Collaborations
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-scroll whitespace-nowrap group">
                    {extendedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center w-[250px] px-10 cursor-default"
                        >
                            <img
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                className="h-12 md:h-16 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}
                </div>

                {/* Second track for seamlessness */}
                <div className="absolute top-0 flex animate-scroll whitespace-nowrap group pointer-events-none">
                    {extendedLogos.map((logo, index) => (
                        <div
                            key={`clone-${index}`}
                            className="inline-flex items-center justify-center w-[250px] px-10"
                        >
                            <img
                                src={logo}
                                alt=""
                                className="h-12 md:h-16 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .animate-scroll {
                    display: flex;
                    width: calc(250px * 16);
                    animation: scroll 30s linear infinite;
                }
                .group:hover .animate-scroll {
                    animation-play-state: paused;
                }
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-250px * 8)); }
                }
            `}} />
        </div>
    );
};

export default PartnersMarquee;
