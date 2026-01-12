import React from 'react';
import { Home, Store, Building, Warehouse, Frame, Grip } from 'lucide-react';

const projectTypes = [
    { icon: Home, title: "Villa / Home Renovation", desc: "Windows, doors, pergolas, and glass replacement." },
    { icon: Frame, title: "New Construction", desc: "Complete aluminum & glass packages for new builds." },
    { icon: Store, title: "Shopfront / Storefront", desc: "Glass facades, automatic doors, and signage glass." },
    { icon: Warehouse, title: "Office / Commercial Fitout", desc: "Glass partitions, office doors, and aluminum cladding." },
    { icon: Building, title: "Building / Apartment", desc: "Balcony glass, maintenance, and large-scale projects." },
    { icon: Grip, title: "Curtain Wall / Facade", desc: "Structural glazing and aluminum composite panels." },
];

export default function ProjectTypes() {
    return (
        <section className="py-16 md:py-20 bg-slate-50" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">What type of project is this for?</h2>
                    <p className="text-slate-600">We connect you with specialists for every scale, from small home repairs to large commercial towers.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectTypes.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
