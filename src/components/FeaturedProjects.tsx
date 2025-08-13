'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Johannesburg Penthouse',
    location: 'Sandton, Johannesburg',
    category: 'Interior Design',
    date: '2024',
    description: 'Complete interior transformation of a luxury penthouse with AI-optimized space planning.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb4?w=600&h=400&fit=crop&crop=center',
    accent: 'accent-primary',
  },
  {
    id: 2,
    title: 'Cape Town Victorian Flip',
    location: 'Observatory, Cape Town',
    category: 'House Flipping',
    date: '2024',
    description: 'Heritage home restoration combining traditional architecture with modern functionality.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center',
    accent: 'accent-secondary',
  },
  {
    id: 3,
    title: 'Artisan Furniture Collection',
    location: 'Johannesburg',
    category: 'Furniture Painting',
    date: '2024',
    description: 'Custom painted furniture pieces with hand-crafted details and modern finishes.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center',
    accent: 'accent-tertiary',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-dark-900">
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
            <Eye className="h-4 w-4 text-accent-primary mr-2" />
            <span className="text-accent-primary font-body font-medium text-sm">
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
            Latest <span className="text-dark-50">Projects</span>
          </h2>
          <p className="text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
            Explore our recent transformations that showcase the perfect blend of 
            creative vision and technological innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-dark-700/50 backdrop-blur border border-dark-500/20 hover:border-accent-primary/30 rounded-2xl overflow-hidden transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 ${
                    project.accent === 'accent-primary' ? 'bg-accent-primary/10 border-accent-primary/20 text-accent-primary' :
                    project.accent === 'accent-secondary' ? 'bg-accent-secondary/10 border-accent-secondary/20 text-accent-secondary' :
                    'bg-accent-tertiary/10 border-accent-tertiary/20 text-accent-tertiary'
                  } px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur`}>
                    {project.category}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-3 rounded-xl font-semibold group-hover:scale-105 transition-transform duration-200"
                    >
                      View Project
                    </motion.div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-dark-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border border-dark-500/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-4 group-hover:text-accent-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  
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
                  
                  <div className="flex items-center text-accent-primary hover:text-accent-secondary font-body font-medium transition-colors duration-200 group/link">
                    <span>View Details</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </div>
                </div>
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
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-tertiary to-accent-purple hover:from-accent-tertiary/90 hover:to-accent-purple/90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-accent-tertiary/25 text-lg group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;