import React from 'react';
import { MapPin, Clock, DollarSign, Users, Heart, Award, Target, Lightbulb } from 'lucide-react';

const Careers = () => {
  const positions = [
    {
      title: 'Senior Project Manager',
      department: 'Operations',
      location: 'Downtown Office',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$80,000 - $100,000',
      description: 'Lead complex construction projects from inception to completion, managing teams, budgets, and client relationships.',
      requirements: [
        'Bachelor\'s degree in Construction Management or related field',
        '5+ years of project management experience',
        'PMP certification preferred',
        'Strong leadership and communication skills',
        'Proficiency in project management software'
      ]
    },
    {
      title: 'Construction Superintendent',
      department: 'Field Operations',
      location: 'Various Sites',
      type: 'Full-time',
      experience: '8+ years',
      salary: '$70,000 - $90,000',
      description: 'Oversee day-to-day construction activities, ensure safety compliance, and coordinate with subcontractors and trades.',
      requirements: [
        '8+ years of construction field experience',
        'Strong knowledge of building codes and regulations',
        'OSHA 30 certification required',
        'Excellent problem-solving abilities',
        'Experience with residential and commercial projects'
      ]
    },
    {
      title: 'Estimator',
      department: 'Pre-Construction',
      location: 'Downtown Office',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$60,000 - $75,000',
      description: 'Analyze project requirements and prepare accurate cost estimates for construction projects.',
      requirements: [
        'Bachelor\'s degree in Construction Management, Engineering, or related field',
        '3+ years of construction estimating experience',
        'Proficiency in estimating software (Bluebeam, PlanSwift)',
        'Strong analytical and mathematical skills',
        'Knowledge of construction materials and methods'
      ]
    },
    {
      title: 'Safety Coordinator',
      department: 'Safety & Compliance',
      location: 'Various Sites',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$55,000 - $70,000',
      description: 'Implement and monitor safety protocols across all construction sites to ensure compliance with regulations.',
      requirements: [
        'Associate degree in Safety Management or related field',
        'OSHA 30 certification required',
        '2+ years of construction safety experience',
        'Strong knowledge of safety regulations',
        'Excellent communication and training skills'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance with company contribution to HSA'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Competitive salaries with performance bonuses and annual reviews'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and generous paid time off policy'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Professional development opportunities and tuition reimbursement programs'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Employee recognition programs and performance-based advancement'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with team building events and company outings'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Success through collaboration and mutual support'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new ideas and technologies to improve our work'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through honest and ethical practices'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Build Your Career
                <span className="text-orange-500 block">With Us</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Join IKON Construction and be part of a team that's shaping the future 
                of construction. We offer rewarding careers with opportunities for growth, 
                competitive benefits, and a collaborative work environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-500">100+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">25+</div>
                  <div className="text-gray-300">Years of Growth</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Ikon-team.jpeg"
                alt="Construction team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our company culture is built on core values that guide how we work together 
              and serve our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in investing in our people. Here are just some of the benefits 
              of joining the IKON Construction team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4">
                    <benefit.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions 
     <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect role to advance your career.
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{position.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-gray-600 space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-orange-500 mb-1">{position.salary}</div>
                        <div className="text-sm text-gray-600">Annual Salary Range</div>
                      </div>
                      <div className="text-center text-sm text-gray-600 mb-6">
                        Experience: {position.experience}
                      </div>
                      <a
                        href="/contact"
                        className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 text-center block"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for talented professionals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Submit Your Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;