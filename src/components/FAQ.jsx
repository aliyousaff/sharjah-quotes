import React from 'react';

const faqs = [
    { q: "Is this service free?", a: "Yes, requesting a quote is free. You only pay your chosen supplier for the work." },
    { q: "Do you cover all of Sharjah?", a: "Yes — including Industrial Areas, Al Nahda, Al Majaz, Muwaileh, and more." },
    { q: "How fast will I get a response?", a: "Typically within 24 hours. Urgent projects may be responded to sooner." },
    { q: "Residential or commercial?", a: "Both. Villas, apartments, shopfronts, offices, buildings, and curtain walls." },
    { q: "Do you share my details publicly?", a: "No. Your details are used only to coordinate your quote request." },
];

export default function FAQ() {
    return (
        <section className="py-16 bg-slate-50" id="faq">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
                            <p className="text-slate-600">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
