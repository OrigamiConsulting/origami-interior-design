'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Paintbrush, Wrench, CheckCircle, ArrowRight, Sparkles, MessageSquare, Building2 } from 'lucide-react';

const services = [
  {
    id: 'e-design',
    icon: MessageSquare,
    title: 'AI-Powered Consultation (E-Design)',
    subtitle: 'Virtual Concepts, Real Results',
    description: 'Efficient, virtual consultation for clients seeking design ideas, mood boards, high-fidelity mock-ups, and actionable plans—without a full-service commitment.',
    features: [
      'AI-generated design concepts',
      'High-fidelity mockups & mood boards',
      'Detailed shopping lists with links',
      'Step-by-step implementation guide',
      'Video consultation (60 mins)',
      'Any design style - modern to traditional',
      '2-3 day turnaround'
    ],
    process: [
      'Share photos and style goals',
      'Virtual consultation and brief',
      'AI-enhanced concepts and refinements',
      'Delivery of your design package'
    ],
    gradient: 'from-accent-primary to-accent-secondary',
    iconBg: 'bg-accent-primary/10',
    iconColor: 'text-accent-primary',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'interior-design',
    icon: Paintbrush,
    title: 'Full Interior Design & Decorating',
    subtitle: 'Comprehensive Space Design',
    description: 'From space planning to final styling, we combine human creativity and AI precision to deliver beautiful, functional interiors. Ideal for room makeovers and full home renovations.',
    features: [
      'Personalized design consultations',
      'AI-enhanced space planning',
      'High-fidelity mock-ups',
      'Custom furniture selection',
      'Lighting and ambiance design',
      'Project coordination and installation'
    ],
    process: [
      'Initial consultation and needs assessment',
      'Concept development and AI modeling',
      'Design refinement and approval',
      'Implementation and final styling'
    ],
    gradient: 'from-accent-secondary to-accent-tertiary',
    iconBg: 'bg-accent-secondary/10',
    iconColor: 'text-accent-secondary',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'house-flipping',
    icon: Home,
    title: 'House Flipping & Renovation',
    subtitle: 'Turnkey Transformations',
    description: 'Buy, renovate, and sell—seamlessly. For investors and homeowners, our AI-driven strategy plans the right renovations for maximum impact and value, including full home renovation where needed.',
    features: [
      'Market analysis and property assessment',
      'AI-optimized renovation planning',
      'Complete project management & contractor coordination',
      'Quality materials and finishes',
      'Full home renovation planning and oversight',
      'Staging and marketing support',
      'ROI optimization strategies'
    ],
    process: [
      'Property evaluation and feasibility study',
      'Design planning with AI insights',
      'Renovation execution and monitoring',
      'Final staging and market preparation'
    ],
    gradient: 'from-accent-primary to-accent-secondary',
    iconBg: 'bg-accent-primary/10',
    iconColor: 'text-accent-primary',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'furniture-painting',
    icon: Wrench,
    title: 'Bespoke Furniture',
    subtitle: 'Restoration & Hand-Painted Finishes',
    description: 'Breathe new life into your furniture with expert restoration and hand-painted finishes. From vintage to modern pieces, we craft unique designs that complement your space.',
    features: [
      'Professional furniture assessment',
      'Custom color matching and design',
      'High-quality paint and finishes',
      'Decorative techniques and patterns',
      'Protective coatings and sealers',
      'Pickup and delivery service'
    ],
    process: [
      'Furniture evaluation and consultation',
      'Design planning and color selection',
      'Preparation and painting process',
      'Quality check and delivery'
    ],
    gradient: 'from-accent-tertiary to-accent-purple',
    iconBg: 'bg-accent-tertiary/10',
    iconColor: 'text-accent-tertiary',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 'hospitality',
    icon: Building2,
    title: 'Hospitality Spaces',
    subtitle: 'Boutique & Tourism Interiors',
    description: 'Concept-to-completion design for boutique hotels, guesthouses, and lodges. Create memorable guest experiences with durable, on-brand interiors.',
    features: [
      'Concept development and brand alignment',
      'Space planning for guest flow and durability',
      'Material and furniture specifications',
      'Lighting and acoustic design',
      'Staging and photography',
      'Ongoing refresh and maintenance plans'
    ],
    process: [
      'Brand and experience discovery',
      'Concept and layout development',
      'Specification and procurement',
      'Installation, staging, and handover'
    ],
    gradient: 'from-accent-secondary to-accent-tertiary',
    iconBg: 'bg-accent-secondary/10',
    iconColor: 'text-accent-secondary',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop&crop=center'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,107,53,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-primary/20 rounded-full mb-8"
            >
              <Sparkles className="h-5 w-5 text-accent-primary mr-2" />
              <span className="text-accent-primary font-body font-medium text-sm">
                Professional Services
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
              <span className="text-dark-50">Our Services</span>
            </h1>
            <p className="text-xl md:text-2xl font-body text-dark-200 leading-relaxed">
              We blend AI-driven creativity with human expertise to deliver transparent, modern services—
              from E-Design and full interior design to house flipping, full home renovation, bespoke furniture, and hospitality spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div className={`inline-flex p-4 ${service.iconBg} border border-${service.iconColor.replace('text-', '')}/20 rounded-2xl`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                  </div>
                  
                  <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-4">
                      {service.title}
                    </h2>
                    
                    <h3 className="text-xl font-heading text-dark-200 mb-6">
                      {service.subtitle}
                    </h3>
                    
                    <p className="text-lg font-body text-dark-200 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="bg-dark-700/50 backdrop-blur border border-dark-500/20 rounded-2xl p-8">
                    <h4 className="text-xl font-heading font-semibold text-dark-50 mb-6">
                      What's Included:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <CheckCircle className="h-5 w-5 text-accent-tertiary mr-3 flex-shrink-0" />
                          <span className="font-body text-dark-200">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg text-lg group`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>

                {/* Visual/Process */}
                <div className="flex-1">
                  <div className="relative">
                    {/* Main image */}
                    <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-dark-700 to-dark-600 rounded-3xl overflow-hidden border border-dark-500/20 shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Process overlay */}
                    <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-dark-800/90 backdrop-blur-md rounded-2xl p-4 lg:p-6 max-w-xs lg:max-w-sm shadow-xl border border-dark-500/30">
                      <h4 className="text-lg font-heading font-semibold text-white mb-4">Our Process</h4>
                      <div className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start text-sm">
                            <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-xs font-semibold text-white">{stepIndex + 1}</span>
                            </div>
                            <p className="font-body text-white/90">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-dark-700 via-dark-700 to-dark-600 rounded-3xl p-12 border border-dark-500/20 overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,107,53,0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl font-body text-dark-200 mb-10">
                Let's discuss your project and create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-accent-primary/25 text-lg group"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center px-8 py-4 border-2 border-dark-500 hover:border-accent-primary text-dark-50 hover:text-accent-primary font-body font-semibold rounded-xl transition-all duration-200 text-lg"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}