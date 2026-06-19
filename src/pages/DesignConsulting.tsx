import React from 'react';
import { Lightbulb, Home, Building2, Eye, Palette, Leaf } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const DesignConsulting = () => {
  const services = [
    {
      icon: Home,
      title: 'Architectural & Interior Design',
      description: 'Full-scope design services for residential estates, commercial offices, retail environments, and hospitality venues.'
    },
    {
      icon: Building2,
      title: 'Space Planning',
      description: 'Strategic layout design critical for office buildings, healthcare facilities, and mixed-use developments to maximize function and flow.'
    },
    {
      icon: Eye,
      title: '3D Visualization',
      description: 'Photorealistic renderings that allow clients to walk through their space before a single wall is built.'
    },
    {
      icon: Palette,
      title: 'Material Selection',
      description: "Expert curation of finishes, fixtures, and materials aligned with the project's aesthetic and budget."
    },
    {
      icon: Leaf,
      title: 'Sustainability Consulting',
      description: 'Integration of green building standards, energy-efficient systems, and eco-friendly materials.'
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead 
        title="Design Consulting Services - IKON Construction Group Miami"
        description="Comprehensive design consulting services including architectural design, interior design, space planning, 3D visualization, and material selection from concept to completion."
        keywords="design consulting Miami, architectural design, interior design, space planning, 3D visualization, material selection"
        url="https://ikoncg.com/design-consulting"
      />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="h-16 w-16 text-orange-500 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              Design Consulting
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            IKON Construction provides a comprehensive design consulting service that positions us as a true end-to-end construction partner — from the very first concept sketch to the final walkthrough.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-orange-500 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final implementation, our design consulting process ensures every detail aligns with your vision and functional requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Concept Development',
                description: 'Understanding your vision, requirements, and aesthetic preferences to create initial design concepts.'
              },
              {
                step: '02',
                title: 'Design Planning',
                description: 'Detailed space planning, material selection, and 3D visualization to refine the design.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Seamless integration of design elements during the construction phase with quality oversight.'
              },
              {
                step: '04',
                title: 'Final Styling',
                description: 'Final touches, styling, and walkthrough to ensure every detail meets your expectations.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your design needs and discover how our comprehensive design consulting can transform your space.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Start Your Design Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default DesignConsulting;