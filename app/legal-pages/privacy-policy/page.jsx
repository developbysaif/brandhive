import React from 'react';
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 md:pt-36 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-24">
        
        {/* Go Home Pill Button */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-700 shadow-sm transition-all active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-400 font-normal">
            Jul 11, 2025
          </p>
        </div>

        {/* Legal Policy Content - All 11 Sections matching screenshot */}
        <div className="space-y-8 text-zinc-700 text-xs sm:text-sm leading-relaxed">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              1. Introduction
            </h2>
            <p className="text-zinc-600">
              Welcome to Brandhive Studio. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              2. Information We Collect
            </h2>
            <p className="text-zinc-600 mb-3">
              We collect personal information that you voluntarily provide when using our website or services, including:
            </p>
            <ul className="space-y-1.5 text-zinc-600 pl-4 list-disc mb-3">
              <li>Full name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Billing and payment information</li>
            </ul>
            <p className="text-zinc-600">
              We also collect certain non-personal data such as IP address, browser type, and usage behavior through cookies and analytics tools.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              3. How We Use Your Information
            </h2>
            <p className="text-zinc-600 mb-3">
              We use the information we collect to:
            </p>
            <ul className="space-y-1.5 text-zinc-600 pl-4 list-disc">
              <li>Provide, operate, and improve our services</li>
              <li>Process payments and manage transactions</li>
              <li>Communicate with you about updates, news, or promotions</li>
              <li>Improve user experience and website functionality</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              4. Sharing Your Information
            </h2>
            <p className="text-zinc-600">
              We do not sell your personal information. We may share it with trusted service providers who help us operate our business (e.g., payment processors or hosting services), under strict confidentiality agreements.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              5. Cookies and Tracking
            </h2>
            <p className="text-zinc-600">
              We use cookies and similar tracking technologies to understand how users interact with our site. You can manage or disable cookies through your browser settings.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              6. Data Retention
            </h2>
            <p className="text-zinc-600">
              We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              7. Your Rights
            </h2>
            <p className="text-zinc-600">
              You have the right to access, correct, or delete your data. You may also object to certain uses or request data portability. To exercise your rights, contact us at: <a href="mailto:brandhive.creatives@gmail.com" className="text-[#F6C53C] hover:underline font-bold">brandhive.creatives@gmail.com</a>
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              8. Security
            </h2>
            <p className="text-zinc-600">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              9. Children's Privacy
            </h2>
            <p className="text-zinc-600">
              Our services are not intended for individuals under the age of 16. We do not knowingly collect data from children.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              10. Changes to This Policy
            </h2>
            <p className="text-zinc-600">
              We may update this Privacy Policy periodically. Significant changes will be communicated via email or a notice on our website.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              11. Contact
            </h2>
            <p className="text-zinc-600">
              If you have questions about this Privacy Policy, contact us at: <a href="mailto:brandhive.creatives@gmail.com" className="text-[#F6C53C] hover:underline font-bold">brandhive.creatives@gmail.com</a>
            </p>
          </div>

        </div>

      </div>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
