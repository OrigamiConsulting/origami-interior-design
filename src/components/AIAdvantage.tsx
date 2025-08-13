'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, Zap, Target, Cpu, ArrowRight } from 'lucide-react';

const advantages = [
  {
    icon: Brain,
    title: 'AI-Accelerated Ideation',
    description: 'Explore design possibilities you never imagined with intelligent concepts tailored to your brief.',
    color: 'accent-primary',
  },
  {
    icon: Zap,
    title: 'Seamless House Flipping',
    description: 'From initial concept to market-ready reality with ROI-focused planning and execution.',
    color: 'accent-secondary',
  },
  {
    icon: Target,
    title: 'Bespoke Furniture Restoration and Painting',
    description: 'Unique, hand-painted pieces that tell a story—restored and finished to perfection.',
    color: 'accent-tertiary',
  },
];

const AIAdvantage = () => {
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
            <Cpu className="h-4 w-4 text-accent-primary mr-2" />
            <span className="text-accent-primary font-body font-medium text-sm">
              AI Technology
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
            The <span className="text-dark-50">AI Advantage</span>
          </h2>
          <p className="text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
            Discover how cutting-edge AI technology accelerates our design process, unlocking unlimited creative possibilities 
            while maintaining the personal touch and craftsmanship that makes each project uniquely yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`inline-flex p-6 rounded-2xl mb-8 transition-all duration-300 ${
                  advantage.color === 'accent-primary' ? 'bg-accent-primary/10 border-accent-primary/20 group-hover:bg-accent-primary/20' :
                  advantage.color === 'accent-secondary' ? 'bg-accent-secondary/10 border-accent-secondary/20 group-hover:bg-accent-secondary/20' :
                  'bg-accent-tertiary/10 border-accent-tertiary/20 group-hover:bg-accent-tertiary/20'
                } border`}
              >
                <advantage.icon className={`h-12 w-12 ${
                  advantage.color === 'accent-primary' ? 'text-accent-primary' :
                  advantage.color === 'accent-secondary' ? 'text-accent-secondary' :
                  'text-accent-tertiary'
                }`} />
              </motion.div>
              
              <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-4 group-hover:text-accent-primary transition-colors duration-300">
                {advantage.title}
              </h3>
              
              <p className="text-dark-200 font-body leading-relaxed max-w-sm mx-auto">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-dark-700 via-dark-700 to-dark-600 rounded-3xl p-12 border border-dark-500/20 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,107,53,0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Floating elements */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-16 h-16 bg-accent-primary/10 rounded-full border border-accent-primary/20"
            ></motion.div>
            <motion.div 
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-8 w-12 h-12 bg-accent-secondary/10 rounded-full border border-accent-secondary/20"
            ></motion.div>
            {/* Interactive magnifying circle */}
            <motion.div 
              animate={{ 
                x: [-10, 10, -5, 15, -10],
                y: [-5, 8, -8, 5, -5],
                scale: [1, 1.2, 0.9, 1.1, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-1/2 left-1/4 w-8 h-8 bg-accent-tertiary/20 rounded-full border-2 border-accent-tertiary/40 backdrop-blur-sm"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 70%, transparent 100%)',
                boxShadow: '0 0 20px rgba(255, 107, 53, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            ></motion.div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center mx-auto mb-8"
              >
                <Brain className="h-10 w-10 text-white" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-dark-50 mb-6">
                Ready to Experience AI-Enhanced Design?
              </h3>
              
              <p className="text-xl font-body text-dark-200 mb-10 leading-relaxed">
                Let us show you how technology and creativity come together to transform your space 
                into something extraordinary.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-accent-primary/25 text-lg group"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-8 py-4 border-2 border-dark-500 hover:border-accent-primary text-dark-50 hover:text-accent-primary font-body font-semibold rounded-xl transition-all duration-200 text-lg"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAdvantage;