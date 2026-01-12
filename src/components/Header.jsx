import React from 'react';
import { Phone, Menu } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-black text-slate-900 tracking-tight">SHARJAH<span className="text-blue-700">FAB</span></span>
                        <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">Aluminum & Glass Quotes</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">
                        How it works
                    </a>
                    <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors">
                        FAQ
                    </a>
                    <a href="#quote-form" className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded font-semibold transition-colors shadow-sm text-sm">
                        Get a Quote
                    </a>
                </div>

                {/* Mobile Menu Button - Just a link to form for now to keep it conversion focused */}
                <a href="#quote-form" className="md:hidden bg-blue-800 text-white px-4 py-2 rounded text-sm font-bold">
                    Get Quote
                </a>
            </div>
        </header>
    );
}
