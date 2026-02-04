import React, { useState } from 'react';
import { Button } from './Button';
import { FormStatus, ExperienceLevels } from '../types';
import { CheckCircle, Lock, User, Mail, Briefcase } from 'lucide-react';

interface LeadFormProps {
    title?: string;
    subtitle?: string;
    className?: string;
    ctaText?: string;
    onSuccess?: () => void;
    embedded?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({ 
    title = "Get Course Brochure", 
    subtitle = "Start your journey today",
    className = "",
    ctaText = "Next",
    onSuccess,
    embedded = false
}) => {
    const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: ExperienceLevels[4]
    });

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Skip OTP, go directly to details
        setStatus(FormStatus.DETAILS_INPUT);
    };

    const handleSubmitDetails = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(FormStatus.SUBMITTING);
        // Simulate API call
        setTimeout(() => {
            setStatus(FormStatus.SUCCESS);
            if (onSuccess) onSuccess();
        }, 1500);
    };

    if (status === FormStatus.SUCCESS) {
        return (
            <div className={`bg-white p-8 rounded-lg ${!embedded ? 'shadow-none' : 'shadow-xl'} text-center ${embedded ? 'border-t-4 border-lakshya-teal' : ''} ${className}`}>
                <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-lakshya-teal" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-lakshya-blue mb-2">Thank You!</h3>
                <p className="text-gray-600 font-sans">We have sent the brochure to your email.</p>
                <p className="text-sm text-gray-500 mt-2">Our academic counselor will call you shortly.</p>
            </div>
        );
    }

    return (
        <div className={`bg-white ${!embedded ? 'p-6' : 'p-6 sm:p-8 rounded-lg shadow-xl border-t-4 border-lakshya-yellow'} ${className}`}>
            <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-lakshya-blue mb-2">
                    {status === FormStatus.DETAILS_INPUT ? "Complete Your Profile" : title}
                </h3>
                <p className="text-sm text-gray-500 font-sans">
                    {status === FormStatus.DETAILS_INPUT 
                        ? "Please provide your details to download the brochure." 
                        : subtitle
                    }
                </p>
            </div>

            {status === FormStatus.IDLE && (
                <form onSubmit={handlePhoneSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                +91
                            </span>
                            <input
                                type="tel"
                                id="phone"
                                required
                                pattern="[0-9]{10}"
                                className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-lakshya-blue focus:border-transparent outline-none transition-all"
                                placeholder="98765 43210"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>
                    <Button 
                        type="submit" 
                        fullWidth 
                        variant="primary"
                    >
                        {ctaText}
                    </Button>
                    <p className="text-[10px] text-gray-400 text-center mt-2 flex items-center justify-center gap-1">
                        <Lock size={10} /> Your data is safe with us
                    </p>
                </form>
            )}

            {(status === FormStatus.DETAILS_INPUT || status === FormStatus.SUBMITTING) && (
                <form onSubmit={handleSubmitDetails} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User size={16} className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lakshya-blue focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail size={16} className="text-gray-400" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lakshya-blue focus:border-transparent outline-none transition-all"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Current Status / Work Experience</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Briefcase size={16} className="text-gray-400" />
                            </div>
                            <select
                                id="experience"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lakshya-blue focus:border-transparent outline-none transition-all bg-white"
                                value={formData.experience}
                                onChange={(e) => setFormData({...formData, experience: e.target.value as any})}
                            >
                                {ExperienceLevels.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <Button 
                        type="submit" 
                        fullWidth 
                        variant="primary"
                        disabled={status === FormStatus.SUBMITTING}
                        className="mt-2"
                    >
                        {status === FormStatus.SUBMITTING ? 'Submitting...' : 'Submit Application'}
                    </Button>

                    <p className="text-xs text-gray-400 text-center mt-3">
                        By submitting, you agree to receive career updates via Whatsapp/SMS/Call.
                    </p>
                </form>
            )}
        </div>
    );
};