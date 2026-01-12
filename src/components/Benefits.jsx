import React from 'react';
import { Clock, MapPin, Building2, BadgePercent } from 'lucide-react';

const benefits = [
    {
        icon: Clock,
        label: "Fast Quotes (24h)",
        desc: "Quick turnaround time"
    },
    {
        icon: MapPin,
        label: "Sharjah Coverage",
        desc: "All areas served"
    },
    {
        icon: Building2,
        label: "Residential & Commercial",
        desc: "Villas to High-rises"
    },
    {
        icon: BadgePercent,
        label: "Competitive Pricing",
        desc: "Direct from fabricators"
    }
];

export default function Benefits() {
    return (
        <section className="bg-white border-y border-slate-100 shadow-sm relative z-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="p-2.5 bg-blue-50 text-blue-700 rounded-full shrink-0">
                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">{item.label}</h3>
                                <p className="text-xs text-slate-500 hidden sm:block">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
