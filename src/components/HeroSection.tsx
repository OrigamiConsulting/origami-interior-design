'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Sparkles, Play, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-accent-tertiary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,107,53,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-primary/20 rounded-full mb-8"
            >
              <Sparkles className="h-5 w-5 text-accent-primary mr-2" />
              <span className="text-accent-primary font-body font-medium text-sm">
                AI-Powered Creative Intelligence
              </span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-[0.9]"
            >
              <span className="text-dark-50">Transformative Design</span>
              <br />
              <span className="text-dark-50">Unfolded.</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-body text-dark-200 mb-12 leading-relaxed max-w-2xl"
            >
              We blend creative intelligence with human expertise to deliver stunning, precision-crafted spaces for home renovations, house flips, and bespoke furniture restoration and painting.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-accent-primary/25 text-lg group"
                >
                  Book E-Design Session
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 border-2 border-dark-500 hover:border-accent-primary text-dark-50 hover:text-accent-primary font-body font-semibold rounded-xl transition-all duration-200 text-lg group"
                >
                  <Play className="mr-3 h-5 w-5" />
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-3xl font-display font-bold text-accent-primary mb-1">Fresh</div>
                <div className="text-sm font-body text-dark-300">Creative Vision</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent-secondary mb-1">100%</div>
                <div className="text-sm font-body text-dark-300">Passion Driven</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-accent-tertiary mb-1">AI</div>
                <div className="text-sm font-body text-dark-300">Enhanced Design</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] bg-gradient-to-br from-dark-700 to-dark-800 rounded-3xl overflow-hidden border border-dark-500/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=700&fit=crop&crop=center" 
                alt="Modern interior showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 bg-dark-700/80 backdrop-blur border border-accent-primary/20 text-accent-primary px-4 py-2 rounded-full text-sm font-semibold"
              >
                AI Enhanced
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-8 bg-dark-700/80 backdrop-blur border border-accent-secondary/20 text-accent-secondary px-4 py-2 rounded-full text-sm font-semibold"
              >
                Creating Award-Winning Spaces
              </motion.div>

              {/* Geometric overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent-primary rotate-45"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-accent-secondary rotate-12"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-dark-300"
          >
            <span className="text-sm font-body mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;