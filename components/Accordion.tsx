import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                className="w-full py-4 px-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={`font-heading font-semibold text-lg ${isOpen ? 'text-lakshya-blue' : 'text-gray-800'}`}>
                    {title}
                </span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-lakshya-blue" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="p-6 pt-0 text-gray-600 font-sans leading-relaxed">
                    {content}
                </div>
            </div>
        </div>
    );
};

export const Accordion: React.FC<{ items: { title: string; content: React.ReactNode }[] }> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleItemClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};