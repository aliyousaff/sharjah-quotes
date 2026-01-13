
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { useUTM } from '../hooks/useUTM';
import { trackEvent } from '../lib/analytics';

export default function QuoteForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const utm = useUTM();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const submissionData = { ...data, ...utm };

        try {
            await fetch('https://script.google.com/macros/s/AKfycbzbTZXtOKfFKfJKl3jm95zAZRQpufKk1fbcm6vTRhNS1BenahuGjQ7O4EORFr_wDpiX/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData)
            });

            // Track Conversion
            trackEvent('form_submit', {
                project_type: data.projectType,
                location: data.location
            });

            setIsSubmitting(false);
            setIsSuccess(true);
        } catch (error) {
            console.error('Submission Error:', error);
            alert('Something went wrong. Please check your connection.');
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <section id="quote-form" className="py-16 md:py-24 bg-blue-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-in fade-in zoom-in duration-300">
                            <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Received!</h2>
                        <p className="text-blue-100 text-lg mb-8">
                            We'll analyze your project details and connect you with the best fabricator within 24 hours.
                        </p>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <p className="font-semibold mb-4 text-white">Want a faster response?</p>
                            <button
                                onClick={() => {
                                    trackEvent('whatsapp_click', { source: 'success_screen' });
                                    window.open('https://wa.me/923217176329', '_blank');
                                }}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Chat with Coordinator
                            </button>
                            <p className="text-xs text-blue-200 mt-2">Mention your name and project type for priority.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="quote-form" className="py-16 md:py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="bg-blue-900 p-6 md:p-8 text-white text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Request a Quote (Sharjah)</h2>
                        <p className="text-blue-100">Fill this in — we’ll connect you to a suitable supplier within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Full Name */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
                            <input
                                {...register("fullName", { required: "Name is required" })}
                                className={cn("w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all", errors.fullName ? "border-red-500 focus:ring-red-200" : "border-slate-300")}
                                placeholder="Your Name"
                            />
                            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                            <input
                                {...register("phone", { required: "Phone number is required" })}
                                type="tel"
                                className={cn("w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all", errors.phone ? "border-red-500 focus:ring-red-200" : "border-slate-300")}
                                placeholder="050 123 4567"
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Email <span className="text-slate-400 font-normal">(Optional)</span></label>
                            <input
                                {...register("email")}
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Project Type */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Project Type *</label>
                            <select
                                {...register("projectType", { required: "Please select a project type" })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                            >
                                <option value="">Select Type...</option>
                                <option value="Villa / Home Renovation">Villa / Home Renovation</option>
                                <option value="New Construction">New Construction</option>
                                <option value="Shopfront / Storefront">Shopfront / Storefront</option>
                                <option value="Office / Commercial Fitout">Office / Commercial Fitout</option>
                                <option value="Building / Apartment">Building / Apartment</option>
                                <option value="Curtain Wall / Facade">Curtain Wall / Facade</option>
                            </select>
                            {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Location in Sharjah *</label>
                            <select
                                {...register("location", { required: "Please select a location" })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                            >
                                <option value="">Select Location...</option>
                                <option value="Industrial Area">Industrial Area</option>
                                <option value="Al Nahda">Al Nahda</option>
                                <option value="Al Majaz">Al Majaz</option>
                                <option value="Al Qasimia">Al Qasimia</option>
                                <option value="Muwaileh">Muwaileh</option>
                                <option value="Al Khan">Al Khan</option>
                                <option value="Rolla">Rolla</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                        </div>

                        {/* Needs Checkboxes */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">What do you need? *</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {['Aluminum Windows', 'Aluminum Doors', 'Glass Partitions', 'Shower Glass', 'Shopfront Glass', 'Curtain Wall', 'Skylight / Pergola', 'Other'].map((item) => (
                                    <label key={item} className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer p-2 border rounded hover:bg-slate-50">
                                        <input
                                            type="checkbox"
                                            value={item}
                                            {...register("needs", { required: "Select at least one" })}
                                            className="rounded text-blue-600 focus:ring-blue-500"
                                        />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.needs && <p className="text-red-500 text-xs mt-1">{errors.needs.message}</p>}
                        </div>

                        {/* Estimated Area */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Estimated Area / Quantity *</label>
                            <input
                                {...register("quantity", { required: "Quantity is required" })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="e.g., 12 windows, or 20 m²"
                            />
                            {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
                        </div>

                        {/* Budget */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Budget Range *</label>
                            <select
                                {...register("budget", { required: "Please select a budget range" })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                            >
                                <option value="">Select Range...</option>
                                <option value="Under AED 3,000">Under AED 3,000</option>
                                <option value="AED 3,000–7,000">AED 3,000–7,000</option>
                                <option value="AED 7,000–15,000">AED 7,000–15,000</option>
                                <option value="AED 15,000–30,000">AED 15,000–30,000</option>
                                <option value="AED 30,000+">AED 30,000+</option>
                            </select>
                            {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>}
                        </div>

                        {/* Timeline */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Timeline *</label>
                            <select
                                {...register("timeline", { required: "Please select a timeline" })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                            >
                                <option value="">Select Timeline...</option>
                                <option value="Urgent (0–7 days)">Urgent (0–7 days)</option>
                                <option value="1–2 weeks">1–2 weeks</option>
                                <option value="2–4 weeks">2–4 weeks</option>
                                <option value="1–2 months">1–2 months</option>
                                <option value="Flexible / planning">Flexible / planning</option>
                            </select>
                            {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline.message}</p>}
                        </div>



                        {/* Additional Notes */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Additional Notes</label>
                            <textarea
                                {...register("notes")}
                                rows={3}
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="Any specific details or questions..."
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2 mt-4">
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin mr-2" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Request Quotes Now
                                        <Send className="w-5 h-5 ml-2" />
                                    </>
                                )}
                            </button>
                            <p className="text-center text-xs text-slate-500 mt-4">
                                By submitting, you agree to be contacted about your quote request.
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
