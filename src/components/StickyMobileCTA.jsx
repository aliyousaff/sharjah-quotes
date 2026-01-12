import React, { useEffect, useState } from 'react';
import { Phone, MessageSquareQuote } from 'lucide-react';

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(true);

    // Hide when at the very bottom or when form is in view? 
    // For landing pages, usually keep it visible until form.
    // But simplistic approach: always visible on mobile.

    const scrollToForm = (e) => {
        e.preventDefault();
        const el = document.getElementById('quote-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden flex gap-3">
            <a
                href="https://wa.me/923217176329"
                className="flex-1 bg-green-600 active:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm"
            >
                <Phone className="w-5 h-5" />
                <span className="text-sm">Chat with Coordinator</span>
            </a>
            <button
                onClick={scrollToForm}
                className="flex-1 bg-blue-800 active:bg-blue-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm"
            >
                <MessageSquareQuote className="w-5 h-5" />
                <span>Get Quote</span>
            </button>
        </div>
    );
}
