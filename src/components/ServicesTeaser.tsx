'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Paintbrush, Wrench, ArrowRight, MessageSquare, Building2, Hammer } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI-Powered E-Design',
    description: 'Virtual, fast, and precise. Mood boards, high-fidelity mock-ups, and a clear plan—delivered remotely.',
    href: '/services#e-design',
    gradient: 'from-accent-primary to-accent-secondary',
    iconBg: 'bg-accent-primary/10',
    iconColor: 'text-accent-primary',
  },
  {
    icon: Home,
    title: 'House Flipping & Renovation',
    description: 'Turnkey transformations for investors and homeowners—design to market-ready reality.',
    href: '/services#house-flipping',
    gradient: 'from-accent-primary to-accent-secondary',
    iconBg: 'bg-accent-primary/10',
    iconColor: 'text-accent-primary',
  },
  {
    icon: Paintbrush,
    title: 'Full Interior Design & Decorating',
    description: 'Precision-crafted interiors from concept to completion with AI-enhanced creativity.',
    href: '/services#interior-design',
    gradient: 'from-accent-secondary to-accent-tertiary',
    iconBg: 'bg-accent-secondary/10',
    iconColor: 'text-accent-secondary',
  },
  {
    icon: Wrench,
    title: 'Bespoke Furniture',
    description: 'Restoration and hand-painted finishes that give treasured pieces a new story.',
    href: '/services#furniture-painting',
    gradient: 'from-accent-tertiary to-accent-purple',
    iconBg: 'bg-accent-tertiary/10',
    iconColor: 'text-accent-tertiary',
  },
  {
    icon: Building2,
    title: 'Hospitality Spaces',
    description: 'Concept-to-completion design for boutique stays, lodges, and hospitality experiences.',
    href: '/services#hospitality',
    gradient: 'from-accent-secondary to-accent-tertiary',
    iconBg: 'bg-accent-secondary/10',
    iconColor: 'text-accent-secondary',
  },
  {
    icon: Hammer,
    title: 'Full Home Renovation',
    description: 'Comprehensive planning and design for whole-home transformations with clear, transparent steps.',
    href: '/services#house-flipping',
    gradient: 'from-accent-primary to-accent-secondary',
    iconBg: 'bg-accent-primary/10',
    iconColor: 'text-accent-primary',
  },
];

const ServicesTeaser = () => {
  return (
    <section className="py-24 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-primary/20 rounded-full mb-6"
          >
            <span className="text-accent-primary font-body font-medium text-sm">
              Our Expertise
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
            Expert <span className="text-dark-50">Services</span>
          </h2>
          <p className="text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
            From complete house flips to custom interior design and furniture restoration, 
            we bring innovation and artistry to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-dark-700/50 backdrop-blur border border-dark-500/20 hover:border-accent-primary/30 p-8 rounded-2xl transition-all duration-300 h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 ${service.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-4 group-hover:text-accent-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-dark-200 font-body mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-accent-primary hover:text-accent-secondary font-body font-medium transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 border border-dark-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-dark-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-accent-primary/25 text-lg group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTeaser;