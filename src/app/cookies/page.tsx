'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Cookie, Settings, BarChart3, Target, Shield, ToggleLeft } from 'lucide-react';

export default function CookiePolicyPage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-tertiary/20 rounded-full mb-8">
              <Cookie className="h-5 w-5 text-accent-tertiary mr-2" />
              <span className="text-accent-tertiary font-body font-medium text-sm">
                Cookie Usage & Tracking
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-dark-50 mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg sm:text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
              Learn how we use cookies and similar technologies to improve your experience on our website.
            </p>
            <p className="text-sm font-body text-dark-300 mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-800/50 backdrop-blur border border-dark-500/20 rounded-3xl p-6 sm:p-8 lg:p-12 space-y-12">
              
              {/* What Are Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Cookie className="h-6 w-6 text-accent-primary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">What Are Cookies?</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and improving site functionality.</p>
                  <p>We use both first-party cookies (set by our website) and third-party cookies (set by external services we use to enhance our website functionality).</p>
                </div>
              </motion.div>

              {/* Essential Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-accent-secondary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Essential Cookies</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>These cookies are necessary for our website to function properly and cannot be disabled:</p>
                  <div className="bg-dark-700/50 rounded-2xl p-6 border border-dark-500/20">
                    <ul className="space-y-3">
                      <li><strong>Session Management:</strong> Keep you logged in during your visit</li>
                      <li><strong>Security:</strong> Protect against cross-site request forgery attacks</li>
                      <li><strong>Form Data:</strong> Remember information you&apos;ve entered in contact forms</li>
                      <li><strong>Load Balancing:</strong> Ensure optimal website performance</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Analytics Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-6 w-6 text-accent-tertiary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Analytics Cookies</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>These cookies help us understand how visitors use our website so we can improve user experience:</p>
                  <div className="bg-dark-700/50 rounded-2xl p-6 border border-dark-500/20">
                    <ul className="space-y-3">
                      <li><strong>Google Analytics:</strong> Track page views, session duration, and user behavior</li>
                      <li><strong>Heatmap Tools:</strong> Understand how users interact with our pages</li>
                      <li><strong>Performance Monitoring:</strong> Identify and fix website issues</li>
                      <li><strong>A/B Testing:</strong> Test different versions of pages to improve user experience</li>
                    </ul>
                  </div>
                  <p className="text-sm text-dark-300">Note: All analytics data is anonymized and cannot be used to identify individual users.</p>
                </div>
              </motion.div>

              {/* Marketing Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Target className="h-6 w-6 text-accent-purple mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Marketing Cookies</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>These cookies help us show you relevant content and advertisements:</p>
                  <div className="bg-dark-700/50 rounded-2xl p-6 border border-dark-500/20">
                    <ul className="space-y-3">
                      <li><strong>Social Media Pixels:</strong> Facebook, Instagram, and LinkedIn tracking for ad targeting</li>
                      <li><strong>Retargeting:</strong> Show relevant ads to previous visitors</li>
                      <li><strong>Conversion Tracking:</strong> Measure the effectiveness of our advertising campaigns</li>
                      <li><strong>Interest-Based Advertising:</strong> Display content relevant to your design interests</li>
                    </ul>
                  </div>
                  <p className="text-sm text-dark-300">You can opt out of marketing cookies through your browser settings or our cookie preferences.</p>
                </div>
              </motion.div>

              {/* Functional Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Settings className="h-6 w-6 text-accent-primary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Functional Cookies</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>These cookies enhance your experience by remembering your preferences:</p>
                  <div className="bg-dark-700/50 rounded-2xl p-6 border border-dark-500/20">
                    <ul className="space-y-3">
                      <li><strong>Language Settings:</strong> Remember your preferred language</li>
                      <li><strong>Dark/Light Mode:</strong> Save your theme preference</li>
                      <li><strong>Portfolio Filters:</strong> Remember your project category preferences</li>
                      <li><strong>Contact Form:</strong> Remember your details for faster form completion</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Managing Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <ToggleLeft className="h-6 w-6 text-accent-secondary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Managing Your Cookie Preferences</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>You have several options for managing cookies:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-dark-700/50 rounded-2xl p-6 border border-dark-500/20">
                      <h4 className="text-lg font-heading font-semibold text-dark-50 mb-3">Browser Settings</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Block all cookies</li>
                        <li>• Block third-party cookies only</li>
                        <li>• Delete existing cookies</li>
                        <li>• Set cookie expiration preferences</li>
                      </ul>
                    </div>
                    
                    <div className="bg-dark-700/50 rounded-2xl p-6 border border-dark-500/20">
                      <h4 className="text-lg font-heading font-semibold text-dark-50 mb-3">Third-Party Opt-Outs</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Google Analytics opt-out</li>
                        <li>• Facebook pixel opt-out</li>
                        <li>• LinkedIn insight tag opt-out</li>
                        <li>• Industry opt-out tools</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-2xl p-6 mt-6">
                    <p className="text-accent-primary font-semibold mb-2">⚠️ Please Note:</p>
                    <p className="text-dark-200">Disabling certain cookies may impact your experience on our website. Some features may not work properly without functional and essential cookies.</p>
                  </div>
                </div>
              </motion.div>

              {/* Third-Party Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-accent-tertiary mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50">Third-Party Services</h2>
                </div>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>We use the following third-party services that may set cookies:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-dark-700/50 rounded-xl p-4 border border-dark-500/20 text-center">
                      <h4 className="font-semibold text-dark-50 mb-2">Google Analytics</h4>
                      <p className="text-sm text-dark-300">Website analytics and user behavior tracking</p>
                    </div>
                    <div className="bg-dark-700/50 rounded-xl p-4 border border-dark-500/20 text-center">
                      <h4 className="font-semibold text-dark-50 mb-2">Facebook Pixel</h4>
                      <p className="text-sm text-dark-300">Social media advertising and retargeting</p>
                    </div>
                    <div className="bg-dark-700/50 rounded-xl p-4 border border-dark-500/20 text-center">
                      <h4 className="font-semibold text-dark-50 mb-2">LinkedIn Insight</h4>
                      <p className="text-sm text-dark-300">Professional network advertising</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="border-t border-dark-500/20 pt-8"
              >
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-50 mb-6">Questions About Cookies?</h2>
                <div className="space-y-4 text-dark-200 font-body leading-relaxed">
                  <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
                  <div className="bg-dark-700/50 rounded-2xl p-6 border border-dark-500/20">
                    <p><strong>Email:</strong> hello@origami-design.co</p>
                    <p><strong>Phone:</strong> +27 78 190 0107</p>
                    <p><strong>Address:</strong> Bushwillow Park, Greenstone Hill, Johannesburg, South Africa</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
