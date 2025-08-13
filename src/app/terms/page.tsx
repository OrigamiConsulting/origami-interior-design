'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText, HandShake, AlertTriangle, Gavel, CreditCard, Shield } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Back Button */}
      <div className="bg-dark-800 border-b border-dark-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-dark-200 hover:text-accent-primary font-body transition-colors duration-200 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-secondary/20 rounded-full mb-8">
              <FileText className="h-5 w-5 text-accent-secondary mr-2" />
              <span className="text-accent-secondary font-body font-medium text-sm">
                Legal Terms & Conditions
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-dark-50 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of our services and website. Please read them carefully.
            </p>
            <p className="text-sm font-body text-dark-300 mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-800/50 backdrop-blur border border-dark-500/20 rounded-3xl p-6 sm:p-8 lg:p-12 space-y-12">
              
              {/* Acceptance of Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <HandShake className="h-6 w-6 text-accent-primary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>By accessing and using the Origami Interior Design website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                  <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.</p>
                </div>
              </motion.div>

              {/* Services Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <FileText className="h-6 w-6 text-accent-secondary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Our Services</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>Origami Interior Design provides the following services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>AI-Powered E-Design:</strong> Virtual design consultations and digital design packages</li>
                    <li><strong>Full Interior Design & Decorating:</strong> Comprehensive interior design services from concept to completion</li>
                    <li><strong>House Flipping & Renovation:</strong> Design and renovation services for property investment</li>
                    <li><strong>Bespoke Furniture:</strong> Custom furniture restoration and hand-painted finishes</li>
                    <li><strong>Hospitality Spaces:</strong> Commercial design services for boutique and tourism properties</li>
                  </ul>
                </div>
              </motion.div>

              {/* Client Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-accent-tertiary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Client Responsibilities</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>As our client, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information about your project requirements</li>
                    <li>Make timely payments according to the agreed payment schedule</li>
                    <li>Respond promptly to requests for feedback and approvals</li>
                    <li>Ensure safe access to your property for our team when required</li>
                    <li>Obtain necessary permits and approvals for construction or renovation work</li>
                    <li>Respect our intellectual property rights in all design work</li>
                  </ul>
                </div>
              </motion.div>

              {/* Payment Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <CreditCard className="h-6 w-6 text-accent-purple mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Payment Terms</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p><strong>E-Design Services:</strong> Payment is due in full before delivery of design package.</p>
                  <p><strong>Full Design Services:</strong> 50% deposit required to commence work, with remaining balance due upon completion.</p>
                  <p><strong>House Flipping Projects:</strong> Custom payment schedule based on project milestones.</p>
                  <p><strong>Late Payments:</strong> Interest may be charged on overdue amounts at 2% per month.</p>
                  <p><strong>Cancellation:</strong> Deposits are non-refundable except in cases of our inability to provide services.</p>
                </div>
              </motion.div>

              {/* Intellectual Property */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Gavel className="h-6 w-6 text-accent-primary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>All design concepts, plans, and creative work remain the property of Origami Interior Design until full payment is received. Upon full payment:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You receive usage rights for the intended project only</li>
                    <li>We retain the right to use images and designs for marketing purposes</li>
                    <li>You may not reproduce or distribute our designs without written permission</li>
                    <li>We reserve the right to showcase completed projects in our portfolio</li>
                  </ul>
                </div>
              </motion.div>

              {/* Limitations and Disclaimers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-accent-secondary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Limitations and Disclaimers</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p><strong>Service Delivery:</strong> While we strive to meet all deadlines, delivery times are estimates and may vary due to circumstances beyond our control.</p>
                  <p><strong>Third-Party Services:</strong> We are not responsible for the performance, quality, or delivery of third-party contractors, suppliers, or services.</p>
                  <p><strong>Property Damage:</strong> Our liability is limited to the value of our design services. We recommend adequate insurance coverage for your property.</p>
                  <p><strong>Accuracy:</strong> While our AI-enhanced designs are highly accurate, final measurements and specifications should be verified on-site.</p>
                </div>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-accent-tertiary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Termination</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>Either party may terminate services with written notice. In case of termination:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Payment is due for all work completed to date</li>
                    <li>You receive rights to completed portions of the project</li>
                    <li>Ongoing work may be completed at an additional cost</li>
                    <li>We reserve the right to retain all design materials until full payment</li>
                  </ul>
                </div>
              </motion.div>

              {/* Governing Law */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="border-t border-dark-500/20 pt-8"
              >
                <div className="flex items-center mb-6">
                  <Gavel className="h-6 w-6 text-accent-purple mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Governing Law</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>These terms are governed by the laws of South Africa. Any disputes will be resolved through the courts of Johannesburg, South Africa.</p>
                  <p>If you have questions about these terms, please contact us at hello@origami-design.co.za or +27 78 190 0107.</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
