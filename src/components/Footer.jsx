import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-6">
                    <span className="text-xl font-bold text-white tracking-tight">SHARJAH<span className="text-blue-500">FAB</span></span>
                    <p className="text-sm mt-2">Connecting Sharjah buyers with aluminum & glass fabricators.</p>
                </div>

                <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
                    <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
                    <a href="#quote-form" className="hover:text-white transition-colors">Request Quote</a>
                    <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                </div>

                <div className="text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} Sharjah Aluminum & Glass Quotes. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
