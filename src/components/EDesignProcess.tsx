'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Camera, MessageSquare, Palette, Download, CheckCircle, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    icon: Camera,
    title: 'Share Your Space',
    description: 'Share photos of your room with us and tell us about your vision, style preferences, and budget through our simple consultation process.',
    color: 'accent-primary',
  },
  {
    id: 2,
    icon: MessageSquare,
    title: 'Virtual Consultation',
    description: 'We conduct a detailed video call to understand your lifestyle, needs, and design goals.',
    color: 'accent-secondary',
  },
  {
    id: 3,
    icon: Palette,
    title: 'AI-Powered Design',
    description: 'Our team creates stunning design concepts using advanced AI tools, ensuring every detail is perfectly tailored.',
    color: 'accent-tertiary',
  },
  {
    id: 4,
    icon: Download,
    title: 'Receive Your Design',
    description: 'Get a comprehensive design package with hi-fidelity mockups, shopping lists, and step-by-step implementation guides.',
    color: 'accent-purple',
  },
];

const benefits = [
  'Professional design expertise with modern, innovative approaches',
  'No travel time or scheduling constraints',
  'AI-enhanced creativity and precision',
  'Affordable alternative to traditional design',
  'Complete design package in 2-3 business days',
  'Ongoing support via email and video calls',
];

const EDesignProcess = () => {
  return (
    <section className="py-24 bg-dark-800">
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
            className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-primary/20 rounded-full mb-8"
          >
            <MessageSquare className="h-5 w-5 text-accent-primary mr-2" />
            <span className="text-accent-primary font-body font-medium text-sm">
              How E-Design Works
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
            Professional Design <span className="text-dark-50">Remotely</span>
          </h2>
          <p className="text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
            Get expert interior design consultation and stunning visualizations without leaving your home in Johannesburg, Cape Town, or anywhere in Zimbabwe. 
            Our streamlined E-Design process brings professional creativity directly to you.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const colorClass = step.color === 'accent-primary' ? 'bg-accent-primary' :
                              step.color === 'accent-secondary' ? 'bg-accent-secondary' :
                              step.color === 'accent-tertiary' ? 'bg-accent-tertiary' : 'bg-accent-purple';
            
            const borderColorClass = step.color === 'accent-primary' ? 'border-accent-primary/20' :
                                   step.color === 'accent-secondary' ? 'border-accent-secondary/20' :
                                   step.color === 'accent-tertiary' ? 'border-accent-tertiary/20' : 'border-accent-purple/20';
            
            const circleBorderClass = step.color === 'accent-primary' ? 'border-accent-primary/30' :
                                    step.color === 'accent-secondary' ? 'border-accent-secondary/30' :
                                    step.color === 'accent-tertiary' ? 'border-accent-tertiary/30' : 'border-accent-purple/30';
            
            const circleTextClass = step.color === 'accent-primary' ? 'text-accent-primary' :
                                  step.color === 'accent-secondary' ? 'text-accent-secondary' :
                                  step.color === 'accent-tertiary' ? 'text-accent-tertiary' : 'text-accent-purple';

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`bg-dark-700/50 backdrop-blur border ${borderColorClass} hover:border-opacity-40 rounded-2xl p-8 h-full transition-all duration-300`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 bg-dark-700/90 backdrop-blur-md border-2 ${circleBorderClass} rounded-full flex items-center justify-center shadow-xl`}>
                    <span className={`${circleTextClass} font-heading font-bold text-lg`}>{step.id}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-dark-50 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-dark-200 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-accent-primary" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-dark-50 mb-8">
              Why Choose E-Design?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-6 w-6 text-accent-tertiary mr-4 flex-shrink-0" />
                  <span className="text-dark-200 font-body">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-tertiary rounded-3xl p-8 text-white"
          >
            <h4 className="text-2xl font-display font-bold mb-4">
              Ready to Transform Your Space?
            </h4>
            <p className="font-body mb-6 text-white/90">
              Book your E-Design consultation today and see your space transformed with professional expertise and AI-powered creativity.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-white/80" />
                <span className="font-body text-white/90">Starting from R2,500</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-white/80" />
                <span className="font-body text-white/90">2-3 day turnaround</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-white/80" />
                <span className="font-body text-white/90">Satisfaction guaranteed</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-accent-primary/25"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EDesignProcess;
