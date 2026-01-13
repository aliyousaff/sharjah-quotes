import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const Hero = () => {
    const scrollToForm = () => {
        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        trackEvent('whatsapp_click', { source: 'hero_cta' });
        window.open('https://wa.me/923217176329?text=Hi,%20I%20need%20a%20quote%20for%20aluminum/glass%20work', '_blank');
    };

    return (
        <section className="relative bg-slate-50 py-12 md:py-20 lg:py-24 overflow-hidden">
            {/* Background pattern or subtle gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container relative mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Serving All Sharjah Areas</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                        Get a Quote for <span className="text-blue-800">Aluminum Windows, Doors & Glass Works</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Request pricing from vetted Sharjah fabricators for villas, buildings, shops, and commercial projects. <span className="font-semibold text-slate-900">Fast response within 24 hours.</span>
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
                        <div className="flex items-center gap-2 text-slate-700 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-sm text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span>Sharjah-based suppliers</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-sm text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span>Budget & timeline filtering</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-sm text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span>Residential & Commercial</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                        <button
                            onClick={scrollToForm}
                            className="w-full sm:w-auto bg-blue-800 hover:bg-blue-900 text-white text-lg px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            Request a Quote
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <button
                            onClick={openWhatsApp}
                            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Chat with Coordinator
                        </button>
                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                        No spam. We only use your details to send your quote request to the right supplier.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
