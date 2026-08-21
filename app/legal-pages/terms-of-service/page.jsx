import React from 'react';
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-xs text-zinc-400 font-normal">
            Jul 11, 2025
          </p>
        </div>

        {/* Legal Terms Content - All 13 Sections matching screenshot */}
        <div className="space-y-8 text-zinc-700 text-xs sm:text-sm leading-relaxed">
          
          {/* Section 1 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              1. Agreement to Terms
            </h2>
            <p className="text-zinc-600">
              By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              2. Services
            </h2>
            <p className="text-zinc-600">
              Lamosa Studio provides design, development, branding, and digital product services. We reserve the right to modify or discontinue any service at any time.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              3. User Responsibilities
            </h2>
            <p className="text-zinc-600">
              You agree to use our services lawfully and not engage in activities that could harm the functionality or reputation of our platform.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              4. Payments
            </h2>
            <p className="text-zinc-600">
              All payments must be made through approved payment gateways. You agree to provide accurate billing details and authorize us to charge for services rendered.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              5. Intellectual Property
            </h2>
            <p className="text-zinc-600">
              All content, templates, and code created by Lamosa Studio are protected by copyright and may not be copied, reused, or redistributed without permission.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              6. User-Submitted Content
            </h2>
            <p className="text-zinc-600">
              Any content or feedback you submit to us may be used in our marketing or service improvements, unless stated otherwise.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              7. Third-Party Links
            </h2>
            <p className="text-zinc-600">
              Our website may contain links to external websites. We are not responsible for their content or privacy practices.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              8. Termination
            </h2>
            <p className="text-zinc-600">
              We reserve the right to suspend or terminate your access to our services for violations of these Terms.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              9. Disclaimers
            </h2>
            <p className="text-zinc-600">
              Our services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or results.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              10. Limitation of Liability
            </h2>
            <p className="text-zinc-600">
              We are not liable for indirect or consequential damages that arise from your use of our services or products.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              11. Governing Law
            </h2>
            <p className="text-zinc-600">
              These Terms are governed by the laws of the country in which Lamosa Studio operates. Any disputes will be resolved in that jurisdiction.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              12. Changes to Terms
            </h2>
            <p className="text-zinc-600">
              We may update these Terms periodically. Continued use of the website after updates constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-sm sm:text-base font-bold text-zinc-900 mb-2">
              13. Contact
            </h2>
            <p className="text-zinc-600">
              If you have questions about these Terms, reach us at: <a href="mailto:legal@lamosa.com" className="text-[#ea580c] hover:underline font-medium">legal@lamosa.com</a>
            </p>
          </div>

        </div>

      </div>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
