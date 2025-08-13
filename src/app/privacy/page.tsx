'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Database, Users, Lock, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-primary/20 rounded-full mb-8">
              <Shield className="h-5 w-5 text-accent-primary mr-2" />
              <span className="text-accent-primary font-body font-medium text-sm">
                Privacy & Data Protection
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-dark-50 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm font-body text-dark-300 mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-800/50 backdrop-blur border border-dark-500/20 rounded-3xl p-6 sm:p-8 lg:p-12 space-y-12">
              
              {/* Information We Collect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Eye className="h-6 w-6 text-accent-primary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p><strong>Personal Information:</strong> When you contact us or request our services, we may collect your name, email address, phone number, and project details.</p>
                  <p><strong>Usage Data:</strong> We collect information about how you interact with our website, including pages visited, time spent, and technical information about your device.</p>
                  <p><strong>Communications:</strong> We keep records of our communications with you, including emails, phone calls, and consultation notes.</p>
                </div>
              </motion.div>

              {/* How We Use Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Database className="h-6 w-6 text-accent-secondary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our interior design and consultation services</li>
                    <li>Communicate with you about your projects and our services</li>
                    <li>Send you relevant updates and design inspiration (with your consent)</li>
                    <li>Analyze website usage to improve user experience</li>
                    <li>Comply with legal obligations and protect our business interests</li>
                  </ul>
                </div>
              </motion.div>

              {/* Information Sharing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Users className="h-6 w-6 text-accent-tertiary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Information Sharing</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in these limited circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> Trusted contractors, suppliers, or other professionals involved in your project</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>
              </motion.div>

              {/* Data Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Lock className="h-6 w-6 text-accent-purple mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Data Security</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  <p>However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
                </div>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-accent-primary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Your Rights</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and review the personal information we hold about you</li>
                    <li>Request correction of any inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information (subject to legal obligations)</li>
                    <li>Withdraw consent for marketing communications at any time</li>
                    <li>File a complaint with relevant data protection authorities</li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 text-accent-secondary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Contact Us</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                  <div className="bg-dark-700/50 rounded-2xl p-6 border border-dark-500/20">
                    <p><strong>Email:</strong> hello@origami-design.co.za</p>
                    <p><strong>Phone:</strong> +27 78 190 0107</p>
                    <p><strong>Address:</strong> Bushwillow Park, Greenstone Hill, Johannesburg, South Africa</p>
                  </div>
                </div>
              </motion.div>

              {/* Updates to Policy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="border-t border-dark-500/20 pt-8"
              >
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50 mb-6">Updates to This Policy</h2>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
