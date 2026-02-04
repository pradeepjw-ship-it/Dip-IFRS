import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
    mode?: 'default' | 'micro';
    className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ mode = 'default', className = '' }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const nextSunday = new Date(now);
            nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7);
            nextSunday.setHours(23, 59, 59, 999);
            
            // If it's currently Sunday, set to next Sunday (handle reset case)
            if (now.getDay() === 0 && now.getHours() < 23) {
                 // It is Sunday, keep target as today end of day
            } else if (now.getDay() === 0) {
                 nextSunday.setDate(now.getDate() + 7);
            }

            const difference = nextSunday.getTime() - now.getTime();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, []);

    if (mode === 'micro') {
        return (
            <div className={`flex flex-wrap items-center justify-center gap-1.5 text-[10px] sm:text-xs font-semibold text-red-600 bg-red-50 px-3 py-1.5 rounded-full w-fit max-w-full animate-pulse ${className}`}>
                <Clock size={12} className="flex-shrink-0" />
                <span className="text-center">
                    Applications closing for the next batch closes in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                </span>
            </div>
        );
    }

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-2 sm:mx-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 min-w-[3rem] sm:min-w-[4rem] text-center border border-white/30">
                <span className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-[10px] sm:text-xs text-blue-100 mt-1 uppercase tracking-wider">{label}</span>
        </div>
    );

    return (
        <div className={`mt-8 ${className}`}>
            <div className="flex items-center justify-center gap-2 text-white/90 mb-4 text-sm font-medium animate-pulse">
                <Clock size={16} />
                <span>Applications closing for this batch in:</span>
            </div>
            <div className="flex justify-center flex-wrap">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Mins" />
                <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>
        </div>
    );
};