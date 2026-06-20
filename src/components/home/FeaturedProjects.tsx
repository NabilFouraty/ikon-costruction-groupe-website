import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Skylake Aventura',
      location: 'North Miami',
      year: '2025',
      category: 'New construction',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-1.jpeg',
      description: 'Skylake Aventura – a modern ground-up residential project, currently 85% complete.'
    },
    {
      id: 2,
      title: 'Bal Harbour Tower Residence',
      location: 'Bal Harbour, Miami',
      year: '2024',
      category: 'Luxury condo',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-2.jpeg',
      description: 'A 5,000 sq. ft. Bal Harbour Tower condo transformed with open living, wraparound balconies, Thassos marble...'
    },
    {
      id: 3,
      title: 'Palm Island Mansion',
      location: 'Palm Island, Miami Beach',
      year: 'February 2012',
      category: 'New layout & Addition',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-miami-beach-exterior-1.jpg',
      description: 'Originally built in 1929, this Palm Island estate was fully transformed by IKON Construction Group and architect Ralph Choeff.'
    },
    {
      id: 4,
      title: 'The Shelborne Hotel',
      location: 'Miami Beach, FL',
      year: '2010–2012',
      category: 'Hotel Renovation',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Shelborne%20Hotel%20.jpg',
      description: 'Complete renovation of common areas including a 12,000 sq. ft. pool deck, new infinity pool, contemporary lobby, gym/spa, banquet hall, 50 hotel rooms, and 12 cabanas.'
    },
    {
      id: 5,
      title: 'Lakeside Towers',
      location: 'Kendall, FL',
      year: '2005–2007',
      category: 'Large Commercial',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/ba94ee9f7a67836a59685889354d2943-cc_ft_960.jpg',
      description: 'Full exterior renovation of a 13-acre commercial complex with 8 mid-rise buildings, including new landscaping, paving, a 2,400 sq. ft. clubhouse addition, and a new guard house.'
    },
    {
      id: 6,
      title: 'Obba Sushi Miami',
      location: '200 SE 15th Rd, Miami, FL',
      year: '2012',
      category: 'Restaurant Renovation',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-8.webp',
      description: 'New addition and complete Japanese modern renovation of the existing Obba Sushi restaurant. '
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional construction projects that showcase 
            our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-center px-4">
                        [Photo: {project.title} — upload here]
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;