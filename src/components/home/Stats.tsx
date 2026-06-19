import React from 'react';
import { TrendingUp, Clock, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '500+',
      label: 'Projects Delivered',
      description: 'Successfully delivered across residential and commercial sectors',
    },
    {
      icon: Clock,
      number: '35+',
      label: 'Years Experience',
      description: 'Decades of expertise in construction and project management',
    },
    {
      icon: Users,
      number: '100+',
      label: 'Expert Team',
      description: 'Skilled professionals dedicated to quality construction',
    },
  ];

  return (
    <section className="py-16 bg-white flex justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-500 rounded-full mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
