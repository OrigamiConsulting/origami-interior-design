'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight, Star, Zap, Users, PaintBucket } from 'lucide-react';

const pricingTiers = [
  {
    id: 'e-design',
    name: 'AI-Powered Consultation (E-Design)',
    subtitle: 'Virtual Design Package',
    price: 'R2,500',
    period: 'per room',
    description: 'Perfect for DIY enthusiasts who want remote expert guidance with AI-accelerated ideation.',
    features: [
      'AI-generated design concepts',
      'High-fidelity mockups & mood boards',
      'Detailed shopping lists with links',
      'Step-by-step implementation guide',
      'Video consultation (60 mins)',
      'Any design style - modern to traditional',
      '2-3 day turnaround'
    ],
    highlighted: false,
    icon: Zap,
    color: 'accent-primary',
    savings: null,
  },
  {
    id: 'full-design',
    name: 'Full Interior Design & Decorating',
    subtitle: 'Concept to Completion',
    price: 'Custom Proposal',
    period: 'tailored pricing',
    description: 'Comprehensive service including space planning, sourcing, and project coordination. Ideal for room makeovers and full home renovations.',
    features: [
      'Everything in E-Design package',
      'In-person site visit & measurements',
      'Custom furniture specifications',
      'Professional sourcing & procurement',
      'Project management & coordination',
      'Installation supervision',
      'Quality assurance review',
      'Comprehensive project handover'
    ],
    highlighted: true,
    icon: Users,
    color: 'accent-secondary',
    savings: null,
  },
  {
    id: 'house-flip',
    name: 'House Flipping & Renovation',
    subtitle: 'Turnkey Transformations',
    price: 'Custom Proposal',
    period: 'project-based',
    description: 'Turnkey solution for investors and homeowners—from AI market analysis to renovation planning, staging, and listing readiness.',
    features: [
      'Full property assessment',
      'ROI-focused design strategy',
      'AI market analysis & pricing',
      'Full home renovation planning',
      'Contractor network access',
      'Staging for sale/rent',
      'Marketing photography',
      'Sale/rental price optimization'
    ],
    highlighted: false,
    icon: Star,
    color: 'accent-tertiary',
    savings: null,
  }
];

const addOnServices = [
  {
    name: 'Furniture Painting',
    price: 'from R600',
    period: 'per piece',
    description: 'Transform existing furniture with professional painting',
  },
  {
    name: 'Virtual Staging',
    price: 'R999',
    period: 'per room',
    description: 'AI-powered virtual staging for property marketing',
  },
  {
    name: 'Design Revision',
    price: 'R600',
    period: 'per revision',
    description: 'Additional design concepts and modifications',
  },
];

const TransparentPricing = () => {
  return (
    <section className="py-24 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-secondary/20 rounded-full mb-8"
          >
            <PaintBucket className="h-5 w-5 text-accent-secondary mr-2" />
            <span className="text-accent-secondary font-body font-medium text-sm">
              Transparent Pricing
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
            Clear, <span className="text-dark-50">Honest Pricing</span>
          </h2>
          <p className="text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
            We believe in complete transparency. No hidden fees, no surprise costs, no lengthy consultation processes. 
            Choose the package that fits your budget and needs with confidence.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            const isHighlighted = tier.highlighted;
            
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                  isHighlighted 
                    ? 'bg-gradient-to-br from-accent-secondary/5 to-accent-tertiary/5 border-accent-secondary shadow-xl shadow-accent-secondary/10' 
                    : 'bg-dark-800/50 border-dark-500/20 hover:border-accent-primary/30'
                }`}
              >
                {/* Popular Badge */}
                {tier.savings && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent-secondary to-accent-tertiary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {tier.savings}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  tier.color === 'accent-primary' ? 'bg-accent-primary/10' :
                  tier.color === 'accent-secondary' ? 'bg-accent-secondary/10' :
                  'bg-accent-tertiary/10'
                }`}>
                  <IconComponent className={`h-8 w-8 ${
                    tier.color === 'accent-primary' ? 'text-accent-primary' :
                    tier.color === 'accent-secondary' ? 'text-accent-secondary' :
                    'text-accent-tertiary'
                  }`} />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-dark-50 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-dark-300 font-body text-sm mb-4">
                    {tier.subtitle}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-display font-bold text-dark-50">
                      {tier.price}
                    </span>
                    <span className="text-dark-300 font-body text-sm ml-2">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-dark-200 font-body mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-accent-tertiary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-dark-200 font-body text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 bg-dark-700 hover:bg-accent-primary text-dark-50 hover:text-white border border-dark-500 hover:border-accent-primary"
                  >
                    Get Started
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Add-on Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-dark-700/30 backdrop-blur border border-dark-500/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-heading font-bold text-dark-50 mb-6 text-center">
            Add-On Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-heading font-semibold text-dark-50 mb-1">
                  {service.name}
                </div>
                <div className="text-accent-primary font-display font-bold text-xl mb-2">
                  {service.price} <span className="text-sm text-dark-300">{service.period}</span>
                </div>
                <div className="text-dark-300 font-body text-sm">
                  {service.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-dark-200 font-body mb-6">
            Not sure which package is right for you? Let's discuss your project.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-heading font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-200"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransparentPricing;
