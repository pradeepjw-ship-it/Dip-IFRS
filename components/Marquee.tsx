import React from 'react';

interface MarqueeProps {
    children: React.ReactNode;
}

export const Marquee: React.FC<MarqueeProps> = ({ children }) => {
    return (
        <div className="relative flex overflow-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-12 items-center py-4 px-6">
                {children}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 items-center py-4 px-6">
                {children}
            </div>
        </div>
    );
};