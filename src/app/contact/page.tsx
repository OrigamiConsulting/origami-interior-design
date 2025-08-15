'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Service-specific placeholder messages
  const servicePlaceholders = {
    'ai-powered-e-design': 'I\'m interested in your AI-Powered E-Design service. Please share details about the process, timeline, and pricing. I\'d like to know more about the high-fidelity mock-ups and styling guides you provide.',
    'full-interior-design': 'I\'m interested in your Full Interior Design service. Please provide information about your comprehensive design process, from concept to completion. I\'d like to discuss space planning, furniture selection, and project management.',
    'house-flipping-renovation': 'I\'m interested in your House Flipping & Renovation service. Please share details about your strategic approach to property transformations, ROI optimization, and sustainable materials.',
    'bespoke-furniture': 'I\'m interested in your Bespoke Furniture service. Please provide information about custom furniture painting, restoration techniques, and premium finishes available.',
    'hospitality-spaces': 'I\'m interested in your Hospitality Spaces service. Please share details about designing boutique accommodations, dining experiences, and hospitality environments that blend local culture with contemporary comfort.',
  };

  // Pre-fill form based on URL parameters
  useEffect(() => {
    const service = searchParams.get('service');
    const action = searchParams.get('action');
    
    if (service && action === 'enquire') {
      const placeholderMessage = servicePlaceholders[service as keyof typeof servicePlaceholders] || '';
      setFormData(prev => ({
        ...prev,
        service: service,
        message: placeholderMessage
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+27 78 190 0107',
      description: 'Mon-Fri 8AM-6PM',
      color: 'accent-primary',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@origami-design.co',
      description: 'We reply within 24 hours',
      color: 'accent-secondary',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Bushwillow Park, Greenstone Hill',
      description: 'Johannesburg, South Africa',
      color: 'accent-tertiary',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-6PM',
      description: 'Sat: 9AM-2PM',
      color: 'accent-purple',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-tertiary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(247,147,30,0.3) 1px, transparent 0)`,
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
              className="inline-flex items-center px-4 py-2 bg-dark-700/50 border border-accent-secondary/20 rounded-full mb-8"
            >
              <MessageSquare className="h-5 w-5 text-accent-secondary mr-2" />
              <span className="text-accent-secondary font-body font-medium text-sm">
                Let's Connect
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
              <span className="text-dark-50">Get In Touch</span>
            </h1>
            <p className="text-xl md:text-2xl font-body text-dark-200 leading-relaxed">
              Ready to transform your space? Let's discuss your vision and bring it to life 
              with our AI-enhanced design approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-700/50 backdrop-blur border border-dark-500/20 rounded-3xl p-8">
                <h2 className="text-3xl font-display font-bold text-dark-50 mb-8">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-accent-tertiary/10 border border-accent-tertiary/20 rounded-2xl p-8 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-accent-tertiary mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold text-accent-tertiary mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-dark-200 font-body">
                      Thank you for your inquiry. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-body font-medium text-dark-200 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all font-body text-dark-50 placeholder-dark-300"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-body font-medium text-dark-200 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all font-body text-dark-50 placeholder-dark-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-body font-medium text-dark-200 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all font-body text-dark-50 placeholder-dark-300"
                          placeholder="+27 11 123 4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-body font-medium text-dark-200 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all font-body text-dark-50"
                        >
                          <option value="">Select a service</option>
                          <option value="ai-powered-e-design">AI-Powered E-Design</option>
                          <option value="full-interior-design">Full Interior Design</option>
                          <option value="house-flipping-renovation">House Flipping & Renovation</option>
                          <option value="bespoke-furniture">Bespoke Furniture</option>
                          <option value="hospitality-spaces">Hospitality Spaces</option>
                          <option value="consultation">Free Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-body font-medium text-dark-200 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-xl focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all font-body text-dark-50 placeholder-dark-300 resize-none"
                        placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-body font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg text-lg"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-dark-50 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark-700/50 backdrop-blur border border-dark-500/20 rounded-2xl p-6 hover:border-accent-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start">
                      <div className={`p-3 rounded-xl mr-4 flex-shrink-0 ${
                        info.color === 'accent-primary' ? 'bg-accent-primary/10 border-accent-primary/20 text-accent-primary' :
                        info.color === 'accent-secondary' ? 'bg-accent-secondary/10 border-accent-secondary/20 text-accent-secondary' :
                        info.color === 'accent-tertiary' ? 'bg-accent-tertiary/10 border-accent-tertiary/20 text-accent-tertiary' :
                        'bg-accent-purple/10 border-accent-purple/20 text-accent-purple'
                      } border`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-dark-50 mb-1 group-hover:text-accent-primary transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="font-body text-dark-100 mb-1 font-medium">
                          {info.details}
                        </p>
                        <p className="font-body text-dark-300 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-br from-dark-700 via-dark-700 to-dark-600 rounded-2xl p-8 border border-dark-500/20">
                <h3 className="text-xl font-heading font-semibold text-dark-50 mb-6">
                  Our Commitment to You
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-tertiary mr-3 flex-shrink-0" />
                    <span className="font-body text-dark-200">Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-tertiary mr-3 flex-shrink-0" />
                    <span className="font-body text-dark-200">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-tertiary mr-3 flex-shrink-0" />
                    <span className="font-body text-dark-200">Transparent pricing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent-tertiary mr-3 flex-shrink-0" />
                    <span className="font-body text-dark-200">Detailed project proposals</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-50 mb-6">
              Our Service Areas
            </h2>
            <p className="text-xl font-body text-dark-200 max-w-3xl mx-auto leading-relaxed">
              We proudly serve clients in Johannesburg, Cape Town, and Harare, Zimbabwe, plus nationwide through our E-Design service, bringing 
              innovative design solutions directly to your home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-700/50 backdrop-blur border border-dark-500/20 rounded-2xl p-8 text-center group hover:border-accent-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-4 group-hover:text-accent-primary transition-colors duration-300">
                  Johannesburg
                </h3>
                <p className="font-body text-dark-200 mb-6">
                  Premium interior design and AI-enhanced consultation services
                </p>
                <div className="bg-dark-600 h-48 rounded-xl flex items-center justify-center border border-dark-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=300&fit=crop&crop=center" 
                    alt="Johannesburg cityscape"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              
              <div className="bg-dark-700/50 backdrop-blur border border-dark-500/20 rounded-2xl p-8 text-center group hover:border-accent-secondary/30 transition-all duration-300">
                <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-4 group-hover:text-accent-secondary transition-colors duration-300">
                  Cape Town
                </h3>
                <p className="font-body text-dark-200 mb-6">
                  Coastal-inspired design solutions and modern space transformations
                </p>
                <div className="bg-dark-600 h-48 rounded-xl flex items-center justify-center border border-dark-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=300&fit=crop&crop=center" 
                    alt="Cape Town cityscape"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="bg-dark-700/50 backdrop-blur border border-dark-500/20 rounded-2xl p-8 text-center group hover:border-accent-tertiary/30 transition-all duration-300">
                <h3 className="text-2xl font-heading font-semibold text-dark-50 mb-4 group-hover:text-accent-tertiary transition-colors duration-300">
                  Harare, Zimbabwe
                </h3>
                <p className="font-body text-dark-200 mb-6">
                  International design expertise with local cultural understanding
                </p>
                <div className="bg-dark-600 h-48 rounded-xl flex items-center justify-center border border-dark-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center" 
                    alt="Harare cityscape"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}