import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Wrench, FileCheck, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and residential developments built to the highest standards.',
      features: ['Custom Home Building', 'Home Renovations', 'Additions & Extensions', 'Interior Remodeling']
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes designed for business success.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Mixed-Use Developments']
    },
    {
      icon: Wrench,
      title: 'Renovation Services',
      description: 'Transform existing spaces with our comprehensive renovation and remodeling services.',
      features: ['Kitchen Remodeling', 'Bathroom Upgrades', 'Basement Finishing', 'Whole Home Renovations']
    },
    {
      icon: FileCheck,
      title: 'Project Management',
      description: 'Complete project oversight from planning to completion, ensuring quality and timeline adherence.',
      features: ['Project Planning', 'Timeline Management', 'Quality Control', 'Budget Management']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Design-build Comprehensive Construction Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we provide end-to-end construction solutions 
            tailored to meet your specific needs and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;