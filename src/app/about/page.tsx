'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, Heart, Award, Users, Zap, Target, ArrowRight, Cpu } from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We embrace cutting-edge AI technology to push the boundaries of interior design and create spaces that are both beautiful and intelligent.',
    color: 'accent-primary',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for design drives us to craft spaces that truly reflect our clients\' personalities and enhance their daily lives.',
    color: 'accent-secondary',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in every project, from initial concept to final execution, ensuring exceptional results.',
    color: 'accent-tertiary',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients, understanding their vision and bringing it to life through transparent communication.',
    color: 'accent-purple',
  },
];

const stats = [
  { number: '24/7', label: 'Creative Inspiration', color: 'accent-primary' },
  { number: '∞', label: 'Design Possibilities', color: 'accent-secondary' },
  { number: '2-3', label: 'Days to Mock-ups', color: 'accent-tertiary' },
  { number: '100%', label: 'AI-Enhanced Process', color: 'accent-purple' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,92,246,0.3) 1px, transparent 0)`,
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
              className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-purple/20 rounded-full mb-8"
            >
              <Cpu className="h-5 w-5 text-accent-purple mr-2" />
              <span className="text-accent-purple font-body font-medium text-sm">
                Our Story
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
              <span className="text-dark-50">About Origami Interior Design</span>
            </h1>
            <p className="text-xl md:text-2xl font-body text-dark-200 leading-relaxed">
              Where creative vision meets artificial intelligence to craft extraordinary spaces 
              that transform how you live and work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-8">
                Our Mission
              </h2>
              <p className="text-lg font-body text-dark-200 mb-6 leading-relaxed">
                At Origami Interior Design, we believe that every space has the potential to be 
                extraordinary. Our mission is to transform ordinary environments into inspiring 
                spaces that enhance the way people live, work, and connect.
              </p>
              <p className="text-lg font-body text-dark-200 mb-8 leading-relaxed">
                Founded on the principle that great design is both an art and a science, we combine 
                human creativity with artificial intelligence to deliver precision-crafted solutions 
                that exceed expectations.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg text-lg group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden border border-dark-500/20 shadow-2xl">
                <img 
                  src="/images/about_us.webp" 
                  alt="About Origami Interior Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-dark-700/80 backdrop-blur border border-accent-primary/20 text-dark-50 px-4 py-2 rounded-xl">
                  <span className="text-sm font-semibold">✨ Fresh Vision, Bold Ideas</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Approach */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
              AI-Enhanced Design Process
            </h2>
            <p className="text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
              We've revolutionized interior design by integrating artificial intelligence 
              into every step of our creative process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-accent-primary/10 border border-accent-primary/20 text-accent-primary p-4 rounded-2xl mr-6 flex-shrink-0">
                    <Zap className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-3">
                      Smart Space Analysis
                    </h3>
                    <p className="font-body text-dark-200 leading-relaxed">
                      AI algorithms analyze room dimensions, lighting conditions, and traffic 
                      patterns to optimize space utilization and functionality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary p-4 rounded-2xl mr-6 flex-shrink-0">
                    <Target className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-3">
                      Predictive Design Modeling
                    </h3>
                    <p className="font-body text-dark-200 leading-relaxed">
                      Machine learning models predict how design choices will impact daily life, 
                      ensuring both beauty and practicality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-tertiary/10 border border-accent-tertiary/20 text-accent-tertiary p-4 rounded-2xl mr-6 flex-shrink-0">
                    <Brain className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-3">
                      Intelligent Material Selection
                    </h3>
                    <p className="font-body text-dark-200 leading-relaxed">
                      AI assists in selecting materials and finishes that complement your lifestyle, 
                      budget, and maintenance preferences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-dark-700 via-dark-700 to-dark-600 rounded-3xl p-8 border border-dark-500/20 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, rgba(0,196,167,0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 bg-gradient-to-br from-accent-tertiary to-accent-purple rounded-2xl flex items-center justify-center mx-auto mb-8"
                  >
                    <Brain className="h-10 w-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-display font-bold text-dark-50 mb-6 text-center">
                    Why AI + Human Creativity?
                  </h3>
                  
                  <p className="font-body text-dark-200 mb-6 leading-relaxed">
                    While AI provides data-driven insights and optimization, our human designers 
                    bring emotional intelligence, cultural understanding, and artistic vision 
                    to create spaces that truly resonate with you.
                  </p>
                  
                  <p className="font-body text-dark-200 leading-relaxed">
                    This unique combination ensures that every project is not only functionally 
                    perfect but also emotionally compelling and personally meaningful.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
              Our Values
            </h2>
            <p className="text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
              These core principles guide every decision we make and every space we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex p-6 rounded-2xl mb-8 transition-all duration-300 ${
                    value.color === 'accent-primary' ? 'bg-accent-primary/10 border-accent-primary/20 group-hover:bg-accent-primary/20' :
                    value.color === 'accent-secondary' ? 'bg-accent-secondary/10 border-accent-secondary/20 group-hover:bg-accent-secondary/20' :
                    value.color === 'accent-tertiary' ? 'bg-accent-tertiary/10 border-accent-tertiary/20 group-hover:bg-accent-tertiary/20' :
                    'bg-accent-purple/10 border-accent-purple/20 group-hover:bg-accent-purple/20'
                  } border`}
                >
                  <value.icon className={`h-10 w-10 ${
                    value.color === 'accent-primary' ? 'text-accent-primary' :
                    value.color === 'accent-secondary' ? 'text-accent-secondary' :
                    value.color === 'accent-tertiary' ? 'text-accent-tertiary' :
                    'text-accent-purple'
                  }`} />
                </motion.div>
                
                <h3 className="text-xl font-heading font-semibold text-dark-50 mb-4 group-hover:text-accent-primary transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-dark-200 font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`text-5xl md:text-6xl font-display font-bold mb-3 ${
                  stat.color === 'accent-primary' ? 'text-accent-primary' :
                  stat.color === 'accent-secondary' ? 'text-accent-secondary' :
                  stat.color === 'accent-tertiary' ? 'text-accent-tertiary' :
                  'text-accent-purple'
                }`}>
                  {stat.number}
                </div>
                <div className="text-lg font-body text-dark-200 group-hover:text-dark-50 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                backgroundImage: `radial-gradient(circle at 20px 20px, rgba(139,92,246,0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl font-body text-dark-200 mb-10">
                Let's discuss your vision and create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-primary hover:from-accent-purple/90 hover:to-accent-primary/90 text-white font-body font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-accent-purple/25 text-lg group"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center px-8 py-4 border-2 border-dark-500 hover:border-accent-purple text-dark-50 hover:text-accent-purple font-body font-semibold rounded-xl transition-all duration-200 text-lg"
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