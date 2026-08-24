'use client';

import React, { useState } from 'react';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import { Send, CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneCode: '+1',
    phoneNumber: '',
    country: '',
    message: '',
    services: [],
    budget: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: null,
    message: ''
  });

  const availableServices = [
    'Branding & Persona Development',
    'Graphic Designing',
    'Digital Marketing & SEO',
    'Video Editing',
    'E-Commerce & Shopify'
  ];

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    // Format WhatsApp message with form details
    const formattedMessage = [
      `*New Inquiry from Brandhive Website*`,
      ``,
      `*Name:* ${formData.firstName} ${formData.lastName}`.trim(),
      `*Email:* ${formData.email}`,
      formData.company ? `*Company:* ${formData.company}` : null,
      formData.phoneNumber ? `*Phone:* ${formData.phoneCode} ${formData.phoneNumber}` : null,
      formData.country ? `*Country:* ${formData.country}` : null,
      formData.services && formData.services.length > 0 ? `*Services:* ${formData.services.join(', ')}` : null,
      formData.budget ? `*Budget:* ${formData.budget}` : null,
      formData.message ? `*Message:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappNumber = '923206835781';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    try {
      // Also send inquiry to API route
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          phone: `${formData.phoneCode} ${formData.phoneNumber}`.trim(),
          country: formData.country,
          message: formData.message,
          services: formData.services,
          budget: formData.budget
        })
      });

      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');

      setStatus({
        type: 'success',
        message: 'Thank you! Redirecting to WhatsApp with your request details...'
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phoneCode: '+1',
        phoneNumber: '',
        country: '',
        message: '',
        services: [],
        budget: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      // Even if API fails, still open WhatsApp
      window.open(whatsappUrl, '_blank');
      setStatus({
        type: 'success',
        message: 'Opening WhatsApp to send your request...'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 md:pt-36 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 md:mb-28">
        
        {/* Contact Layout: Left Info & Right Form with Scroll-Up Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Dark Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-36"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-zinc-900 leading-[1.1] mb-4">
              Get in <br />
              touch with us.
            </h1>

            {/* Subtext description */}
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm mb-8">
              Have a project in mind or need guidance? Reach out to our team and let's explore how we can help bring your vision to life.
            </p>

            {/* Dark Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] bg-[#09090b] text-white shadow-xl relative overflow-hidden border border-zinc-800">
              {/* Dot grid texture */}
              <div className="absolute inset-0 opacity-15 pointer-events-none hero-dot-pattern" />

              <div className="relative z-10 space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-zinc-400 block text-xs mb-1">Email:</span>
                  <a
                    href="mailto:brandhive.creatives@gmail.com"
                    className="font-bold text-white underline hover:text-[#F6C53C] transition-colors"
                  >
                    brandhive.creatives@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-zinc-400 block text-xs mb-1">Phone / WhatsApp:</span>
                  <a
                    href="https://wa.me/923206835781"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white underline hover:text-[#F6C53C] transition-colors"
                  >
                    +92 320 6835781
                  </a>
                </div>

                <div>
                  <span className="text-zinc-400 block text-xs mb-1">Address:</span>
                  <span className="font-medium text-zinc-200 block">
                    Office No 9, 236 Badar Block, Allama Iqbal Town, Lahore
                  </span>
                </div>

                <div className="pt-4 border-t border-white/10 text-[11px] text-zinc-400 font-normal">
                  Available from Monday to Friday, 9 AM – 6 PM PKT
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Complete White Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[32px] sm:rounded-[40px] border border-zinc-200/90 p-6 sm:p-8 md:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.04)]">
              
              {/* Status Message Notification */}
              {status.type && (
                <div
                  className={`mb-6 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm transition-all ${
                    status.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      className="w-full bg-[#f4f5f7] border border-transparent focus:border-zinc-300 focus:bg-white rounded-2xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full bg-[#f4f5f7] border border-transparent focus:border-zinc-300 focus:bg-white rounded-2xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@domain.com"
                    className="w-full bg-[#f4f5f7] border border-transparent focus:border-zinc-300 focus:bg-white rounded-2xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-all"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="QuicklyResults"
                    className="w-full bg-[#f4f5f7] border border-transparent focus:border-zinc-300 focus:bg-white rounded-2xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-all"
                  />
                </div>

                {/* Phone with Country Code Selector */}
                <div>
                  <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <select
                        value={formData.phoneCode}
                        onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                        className="appearance-none bg-[#f4f5f7] border border-transparent focus:border-zinc-300 focus:bg-white rounded-2xl pl-3 pr-7 py-3 text-xs sm:text-sm font-medium text-zinc-800 focus:outline-none cursor-pointer transition-all"
                      >
                        <option value="+1">US +1</option>
                        <option value="+44">UK +44</option>
                        <option value="+1">CA +1</option>
                        <option value="+49">DE +49</option>
                        <option value="+92">PK +92</option>
                        <option value="+91">IN +91</option>
                        <option value="+971">AE +971</option>
                        <option value="+61">AU +61</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="123 45 67 89"
                      className="flex-1 bg-[#f4f5f7] border border-transparent focus:border-zinc-300 focus:bg-white rounded-2xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Country Dropdown */}
                <div>
                  <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full appearance-none bg-[#f4f5f7] border border-transparent focus:border-zinc-300 focus:bg-white rounded-2xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none cursor-pointer transition-all"
                    >
                      <option value="">e.g. Denmark</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Germany">Germany</option>
                      <option value="Australia">Australia</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                    How can we help you?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Leave a message..."
                    className="w-full bg-[#f4f5f7] border border-transparent focus:border-zinc-300 focus:bg-white rounded-2xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="text-xs font-semibold text-zinc-700 block mb-2">
                    Services
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableServices.map((service) => {
                      const isSelected = formData.services.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all flex items-center gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-[#F6C53C] border-[#F6C53C] text-black shadow-sm'
                              : 'bg-[#f4f5f7] border-transparent text-zinc-700 hover:border-[#F6C53C]/80 hover:bg-white'
                          }`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border transition-colors ${
                              isSelected
                                ? 'border-black bg-black text-[#F6C53C]'
                                : 'border-zinc-300 bg-white'
                            }`}
                          >
                            {isSelected && (
                              <svg className="w-2.5 h-2.5 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>
                          <span>{service}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Dropdown */}
                <div>
                  <label className="text-xs font-semibold text-zinc-700 block mb-1.5">
                    Budget
                  </label>
                  <div className="relative">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full appearance-none bg-[#f4f5f7] border border-transparent focus:border-[#F6C53C] focus:bg-white rounded-2xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none cursor-pointer transition-all"
                    >
                      <option value="">Select a budget</option>
                      <option value="<$5k">&lt; $5,000</option>
                      <option value="$5k - $10k">$5,000 – $10,000</option>
                      <option value="$10k - $25k">$10,000 – $25,000</option>
                      <option value="$25k+">$25,000+</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Submit & Secondary Action Buttons */}
                <div className="pt-2 flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-black hover:bg-[#F6C53C] hover:text-black text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <Link
                    href="/pricing"
                    className="w-full py-3 rounded-full bg-white hover:bg-[#F6C53C]/15 hover:border-[#F6C53C]/80 border border-zinc-200 text-zinc-800 text-xs sm:text-sm font-semibold flex items-center justify-center transition-all shadow-sm active:scale-[0.98]"
                  >
                    <span>View Pricing & Plans</span>
                  </Link>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
