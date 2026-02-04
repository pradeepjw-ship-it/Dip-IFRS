import React from 'react';

export interface FeatureProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface TestimonialProps {
    name: string;
    role: string;
    quote: string;
    image: string;
}

export enum FormStatus {
    IDLE = 'IDLE',
    DETAILS_INPUT = 'DETAILS_INPUT',
    SUBMITTING = 'SUBMITTING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export const ExperienceLevels = [
    "Class 11 Student",
    "Class 12 Student",
    "Pursuing Graduation",
    "Pursuing Post-Graduation",
    "Graduate and Above - No Experience",
    "0-1 Yr Experience",
    "2-5 Yrs Experience",
    "5+ Yrs Experience"
] as const;

export type ExperienceLevel = typeof ExperienceLevels[number];