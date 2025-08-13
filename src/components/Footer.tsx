'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI-Powered E-Design', href: '/services#e-design' },
      { name: 'Full Interior Design', href: '/services#interior-design' },
      { name: 'House Flipping & Renovation', href: '/services#house-flipping' },
      { name: 'Bespoke Furniture', href: '/services#furniture-painting' },
      { name: 'Hospitality Spaces', href: '/services#hospitality' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Free Consultation', href: '/contact' },
      { name: 'Project Process', href: '/about#process' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-dark-800 border-t border-dark-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center">
                  <span className="font-display text-2xl font-bold" style={{ color: '#EF6351' }}>O</span>
                </div>
                <span className="text-3xl font-display font-bold text-dark-50">
                  Origami Interior Design
                </span>
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-dark-50 mb-4">
                Transformative Design Unfolded.
              </h3>
              
              <p className="text-dark-200 font-body text-lg leading-relaxed mb-8 max-w-md">
                We blend creative intelligence with human expertise to deliver stunning, 
                precision-crafted spaces for home renovations, house flips, and bespoke furniture restoration and painting.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-dark-200 hover:text-dark-50 transition-colors">
                  <Phone className="h-5 w-5 text-accent-primary" />
                  <span className="font-body">+27 78 190 0107</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-200 hover:text-dark-50 transition-colors">
                  <Mail className="h-5 w-5 text-accent-primary" />
                  <span className="font-body">hello@origami-design.co.za</span>
                </div>
                <div className="flex items-start space-x-3 text-dark-200">
                  <MapPin className="h-5 w-5 text-accent-primary mt-0.5" />
                  <div className="font-body">
                    <p>Bushwillow Park, Greenstone Hill</p>
                    <p className="text-dark-300">Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-dark-700 hover:bg-accent-primary rounded-xl flex items-center justify-center text-dark-200 hover:text-white transition-all duration-200 group"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-heading font-semibold text-dark-50 mb-6">Services</h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-200 hover:text-accent-primary font-body transition-colors duration-200 group flex items-center"
                      >
                        {link.name}
                        <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-heading font-semibold text-dark-50 mb-6">Company</h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-200 hover:text-accent-primary font-body transition-colors duration-200 group flex items-center"
                      >
                        {link.name}
                        <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-heading font-semibold text-dark-50 mb-6">Support</h4>
                <ul className="space-y-4">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-dark-200 hover:text-accent-primary font-body transition-colors duration-200 group flex items-center"
                      >
                        {link.name}
                        <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-dark-500/20 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-300 font-body text-sm">
              © {currentYear} Origami Interior Design. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-dark-300 hover:text-dark-100 font-body transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-dark-300 hover:text-dark-100 font-body transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-dark-300 hover:text-dark-100 font-body transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;