import React from 'react';
import { Home, Building2, Wrench, FileCheck, Lightbulb, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom luxury home builds and high-end renovations tailored to the client\'s vision. IKON integrates smart home technology and sustainable building practices into every residence to meet modern aesthetic and functional demands.',
      features: [
        'Custom Home Building',
        'Residential Developments',
        'Home Additions',
        'Luxury Renovations',
        'Smart Home Integration',
        'Sustainable Building'
      ],
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/lighthouse-point-miami-waterfront-residence-front-elevation.jpeg'
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'From office buildings and retail spaces to industrial facilities, healthcare buildings, and mixed-use developments, IKON delivers large-scale commercial projects on time and on budget. Every commercial project benefits from rigorous project management, structural expertise, and full regulatory compliance.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Industrial Facilities',
        'Healthcare Buildings',
        'Educational Facilities',
        'Mixed-Use Developments'
      ],
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'IKON has been a key contributor to the restoration of Miami Beach\'s iconic architectural heritage. The team preserves the historic character of older structures while integrating contemporary design and modern systems seamlessly.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Upgrades',
        'Basement Finishing',
        'Whole Home Renovations',
        'Commercial Renovations',
        'Historical Restorations'
      ],
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Renovation%20&%20Remodeling-2.webp'
    },
    {
      icon: FileCheck,
      title: 'Project Management',
      description: 'End-to-end oversight of every project phase, from permitting and scheduling to subcontractor coordination and final inspection, ensuring strict adherence to budget, timeline, and safety regulations.',
      features: [
        'Project Planning & Scheduling',
        'Budget Management',
        'Quality Control',
        'Permit & Regulatory Compliance',
        'Vendor Coordination',
        'Progress Reporting'
      ],
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      icon: Lightbulb,
      title: 'Design Consulting',
      description: 'A full-service design consulting offering that covers architectural and interior design, space planning, 3D visualization, and material selection — taking projects from initial concept through to final completion.',
      features: [
        'Architectural Design',
        'Interior Design',
        'Space Planning',
        'Material Selection',
        '3D Visualization',
        'Sustainability Consulting'
      ],
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Design%20Consulting.jpg'
    },
    {
      icon: Shield,
      title: 'Sustainable Building',
      description: 'IKON incorporates eco-friendly materials, energy-efficient systems, and green building practices across residential and commercial projects to meet the demands of today\'s environmentally conscious clients.',
      features: [
        'Eco-Friendly Materials',
        'Energy-Efficient Systems',
        'Green Building Standards',
        'Smart Home Technology',
        'Sustainable Design',
        'Environmental Compliance'
      ],
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Modern-Luxury-Home-Featuring-Integrated-Solar-and-Green-Roofing-Innovations-1.jpg'
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead 
        title="Construction Services Miami - Residential & Commercial | IKON Construction"
        description="Comprehensive construction services in Miami including residential construction, commercial buildings, renovations, project management, and design consulting. Get your free quote today."
        keywords="construction services Miami, residential construction, commercial construction, home renovation Miami, project management, design consulting"
        url="https://ikoncg.com/services"
      />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Construction
            <span className="text-orange-500 block">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From initial concept to final completion, IKON Construction provides end-to-end 
            construction solutions tailored to meet your specific needs and exceed expectations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery 
              from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Understanding your vision, requirements, and budget to create a tailored solution.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning including design, timeline, and resource allocation.'
              },
              {
                step: '03',
                title: 'Construction',
                description: 'Expert execution with constant quality control and progress monitoring.'
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final inspection, handover, and ongoing support to ensure your satisfaction.'
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our construction services and processes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How does IKON Construction integrate sustainability into its building projects?',
                answer: 'IKON incorporates eco-friendly materials, energy-efficient systems, and smart-home technology across both residential and commercial projects. From the initial design phase, the team evaluates green building standards and sustainable practices that reduce environmental impact without compromising quality or aesthetics.'
              },
              {
                question: 'What specialized renovation services are available for historical or commercial properties?',
                answer: 'IKON has decades of experience in historical restoration, having worked on landmark Miami Beach properties since the early 1990s. Services include structural restoration, period-accurate material matching, terrazzo and tile rehabilitation, and seamless integration of modern systems into historic structures.'
              },
              {
                question: 'How does the project management process ensure quality and budget compliance?',
                answer: 'Every IKON project is managed end-to-end by an experienced project manager who oversees permitting, scheduling, subcontractor coordination, and inspections. Regular client updates, strict budget tracking, and proactive issue resolution ensure every project is delivered on time and within scope.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and discover how 
            IKON Construction can bring your project to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;