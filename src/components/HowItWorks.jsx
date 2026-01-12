import React from 'react';
import { ClipboardList, UserCheck, Calculator } from 'lucide-react';

const steps = [
    {
        icon: ClipboardList,
        title: "1. Tell us your project details",
        desc: "Fill out the simple form with what you need (windows, doors, glass, etc.) and your location."
    },
    {
        icon: UserCheck,
        title: "2. We match you with a fabricator",
        desc: "We review your request and route it to a verified Sharjah-based supplier who matches your budget."
    },
    {
        icon: Calculator,
        title: "3. You receive a quote",
        desc: "The supplier will contact you within 24 hours to discuss details, visit the site, or provide a direct quote."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-white" id="how-it-works">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
                    <p className="text-slate-600">Get 3 easy steps to your best price.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line for Desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center relative bg-white md:bg-transparent p-4 md:p-0 rounded-lg">
                            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl shadow-inner">
                                    {idx + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
