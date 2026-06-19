import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, ArrowRight } from 'lucide-react';

const DesignConsultingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 p-3 rounded-xl mr-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Design Consulting</h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              From architectural design to 3D visualization, our comprehensive design consulting services take your project from initial concept through to final completion. Experience the IKON difference with our end-to-end design partnership.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Architectural & Interior Design',
                'Space Planning',
                '3D Visualization',
                'Material Selection'
              ].map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                  <span className="text-gray-300">{service}</span>
                </div>
              ))}
            </div>
            <Link
              to="/design-consulting"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Design Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gray-700 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="h-4 bg-orange-500 rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="h-20 bg-gray-600 rounded"></div>
                  <div className="h-20 bg-gray-600 rounded"></div>
                </div>
                <div className="h-4 bg-orange-500 rounded w-2/3 mt-6"></div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignConsultingCTA;