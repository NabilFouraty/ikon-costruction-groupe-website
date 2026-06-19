import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              
              <span className="text-xl font-bold">IKON Construction</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building exceptional spaces with innovative design and superior craftsmanship. 
              Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100090858847803" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/ikonconstructiongroup?igsh=eHhvcGRvNGMyM2N2" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Design Consulting', href: '/design-consulting' },
                { name: 'Careers', href: '/careers' },
                { name: 'FAQ', href: '/faq' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                'Residential Construction',
                'Commercial Building',
                'Renovations',
                'Project Management',
                'Design Consulting',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  3029 NE 188TH ST,<br />
                  Aventura, FL, United States, Florida
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">305-319-0155</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">gil@ikoncg.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2025 IKON Construction Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;