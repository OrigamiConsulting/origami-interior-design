'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Calendar, ArrowRight, Filter, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered E-Design Preview',
    location: 'Remote Design Studio',
    category: 'E-Design',
    service: 'AI-Powered E-Design',
    date: '2025',
    description: 'Experience our signature remote design process: AI-generated concepts, high-fidelity digital mock-ups, comprehensive shopping lists, and step-by-step styling guides—all delivered in 2-3 days.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center',
    featured: true,
    accent: 'accent-primary',
    isPlaceholder: true,
  },
  {
    id: 2,
    title: 'Complete Interior Design Concept',
    location: 'Full-Service Design',
    category: 'Interior Design',
    service: 'Full Interior Design',
    date: '2025',
    description: 'From concept to completion—comprehensive interior design services including space planning, custom furniture selection, styling, and project management for residential and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop&crop=center',
    featured: true,
    accent: 'accent-secondary',
    isPlaceholder: true,
  },
  {
    id: 3,
    title: 'House Flipping & Renovation Preview',
    location: 'Renovation Concept',
    category: 'Renovation',
    service: 'House Flipping & Renovation',
    date: '2025',
    description: 'Strategic property transformations that maximize ROI through smart design choices, sustainable materials, and market-focused aesthetics. Perfect for investors and homeowners.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center',
    featured: false,
    accent: 'accent-tertiary',
    isPlaceholder: true,
  },
  {
    id: 4,
    title: 'Bespoke Furniture Design Preview',
    location: 'Design Workshop',
    category: 'Furniture',
    service: 'Bespoke Furniture',
    date: '2025',
    description: 'Custom furniture painting and restoration services featuring innovative techniques, premium finishes, and timeless designs that transform ordinary pieces into statement artworks.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    featured: false,
    accent: 'accent-purple',
    isPlaceholder: true,
  },
  {
    id: 5,
    title: 'Hospitality Spaces Concept',
    location: 'Hospitality Design',
    category: 'Hospitality',
    service: 'Hospitality Spaces',
    date: '2025',
    description: 'Curated hospitality environments that blend local culture with contemporary comfort—from intimate guesthouses to upscale dining experiences and boutique accommodations.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&crop=center',
    featured: false,
    accent: 'accent-primary',
    isPlaceholder: true,
  },
];

// Filter by service offering rather than property type
const services = [
  'All',
  'AI-Powered E-Design',
  'Full Interior Design',
  'House Flipping & Renovation',
  'Bespoke Furniture',
  'Hospitality Spaces',
];

export default function PortfolioPage() {
  const [activeService, setActiveService] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (service: string) => {
    setActiveService(service);
    if (service === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.service === service));
    }
  };

  // Helper function to create service-specific contact URLs
  const getServiceContactUrl = (service: string, action: 'enquire' | 'request') => {
    const serviceSlug = service.toLowerCase().replace(/[\s&]/g, '-').replace(/--+/g, '-');
    return `/contact?service=${serviceSlug}&action=${action}`;
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden flex items-center">
        {/* Enhanced Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
              rotate: [90, 0, 90]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl"
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,196,167,0.3) 1px, transparent 0)`,
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
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-dark-700/60 to-dark-600/60 backdrop-blur-md border border-accent-tertiary/30 rounded-full mb-8 shadow-lg hover:shadow-accent-tertiary/20"
            >
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Eye className="h-5 w-5 text-accent-tertiary mr-3" />
              </motion.div>
              <span className="text-accent-tertiary font-body font-semibold text-sm tracking-wide">
                Service-Led Showcase
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              <span className="text-dark-50">Work, by </span>
              <span className="text-accent-primary">
                Service
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl font-body text-dark-200 leading-relaxed max-w-3xl mx-auto"
            >
              We're building our portfolio. In the meantime, preview the kind of outcomes we deliver for each service—from AI-powered E‑Design concepts to full renovations. 
              <span className="text-accent-primary font-semibold"> See something you like? Request a tailored concept.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-dark-800 border-b border-dark-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center text-dark-300 font-body mr-6 mb-4 lg:mb-0"
            >
              <Filter className="h-5 w-5 mr-2 text-accent-primary" />
              <span className="font-semibold">Filter by service:</span>
            </motion.div>
            {services.map((service, index) => (
              <motion.button
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 + index * 0.1
                }}
                viewport={{ once: true }}
                onClick={() => handleFilterChange(service)}
                className={`px-6 py-3 rounded-xl font-body font-semibold transition-all duration-300 shadow-lg ${
                  activeService === service
                    ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-accent-primary/25 border border-accent-primary/30'
                    : 'bg-dark-700/70 backdrop-blur border border-dark-500/30 text-dark-200 hover:text-white hover:border-accent-primary/40 hover:bg-dark-600/70 hover:shadow-xl'
                }`}
              >
                {service}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <div className="bg-dark-700/50 backdrop-blur border border-dark-500/20 hover:border-accent-primary/30 hover:bg-dark-700/70 rounded-2xl overflow-hidden transition-all duration-500 h-full shadow-lg hover:shadow-2xl hover:shadow-accent-primary/10">
                  {/* Project Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className={`absolute top-4 left-4 ${
                        project.accent === 'accent-primary' ? 'bg-accent-primary/10 border-accent-primary/20 text-accent-primary' :
                        project.accent === 'accent-secondary' ? 'bg-accent-secondary/10 border-accent-secondary/20 text-accent-secondary' :
                        project.accent === 'accent-tertiary' ? 'bg-accent-tertiary/10 border-accent-tertiary/20 text-accent-tertiary' :
                        'bg-accent-purple/10 border-accent-purple/20 text-accent-purple'
                      } px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur border transition-all duration-300 hover:bg-opacity-20`}>
                      {project.service}
                    </motion.div>
                    
                    {project.featured && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute top-4 right-4 bg-gradient-to-r from-accent-primary/80 to-accent-secondary/80 backdrop-blur border border-accent-primary/30 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg"
                      >
                        ★ Featured
                      </motion.div>
                    )}
                    {project.isPlaceholder && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute top-4 right-4 bg-dark-700/90 backdrop-blur border border-dark-500/30 text-dark-50 px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg"
                      >
                        ✨ Coming Soon
                      </motion.div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                      <Link href={project.isPlaceholder ? getServiceContactUrl(project.service, 'request') : "/contact"}>
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                          {project.isPlaceholder ? '✨ Request a Concept' : 'View Project'}
                        </motion.div>
                      </Link>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className="text-2xl font-heading font-semibold text-dark-50 mb-4 group-hover:text-accent-primary transition-colors duration-300"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-dark-200 font-body mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-dark-300 font-body mb-6">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-accent-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-accent-secondary" />
                        {project.date}
                      </div>
                    </div>
                    
                    <Link href={project.isPlaceholder ? getServiceContactUrl(project.service, 'enquire') : "/contact"}>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center text-accent-primary hover:text-accent-secondary font-body font-medium transition-colors duration-200 group/link cursor-pointer"
                      >
                        <span>{project.isPlaceholder ? 'Enquire About This Service' : 'View Details'}</span>
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-2" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl font-body text-dark-300 mb-3">
                No projects found in this service yet.
              </p>
              <p className="text-dark-200 font-body mb-6">We're actively building our portfolio. Want to see what we can do for you?</p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-xl font-heading font-semibold">
                Request a Free Concept
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-800">
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
                backgroundImage: `radial-gradient(circle at 20px 20px, rgba(0,196,167,0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl font-body text-dark-200 mb-10">
                Let's create something extraordinary together. Contact us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-tertiary to-accent-purple hover:from-accent-tertiary/90 hover:to-accent-purple/90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-accent-tertiary/25 text-lg group"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-4 border-2 border-dark-500 hover:border-accent-tertiary text-dark-50 hover:text-accent-tertiary font-body font-semibold rounded-xl transition-all duration-200 text-lg"
                  >
                    View Our Services
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