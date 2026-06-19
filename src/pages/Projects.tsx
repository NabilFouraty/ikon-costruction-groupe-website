import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Projects = () => {
  const projects = [
    {
      id: 10,
      title: 'Buena Vista Project',
      category: 'Commercial Renovation',
      location: '4501 NW 2nd Ave., Miami, FL 33127',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project--.jpg',
      description: 'Complete renovation and redevelopment of a 5,000 SF commercial building. Full interior demolition, structural restoration, all-new mechanical, electrical, and plumbing systems, framing, and drywall. Construction of new bathrooms and janitorial facilities. Exterior improvements including landscaping, roofing, stucco, painting, paving, irrigation, and windows and doors. The project delivered a fully renewed commercial shell ready for tenant buildout.',
    },
    {
      id: 12,
      title: 'Obba Sushi Miami',
      category: 'Restaurant Renovation',
      location: '200 SE 15th Rd., Miami, FL',
      client: 'Obba Sushi',
      value: '',
      duration: '6 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-8.webp',
      description: 'New addition and complete Japanese modern renovation of the existing Obba Sushi restaurant.',
    },
    {
      id: 11,
      title: 'Blue Glue Bikini',
      category: 'Retail Renovation',
      location: '609 Lincoln Rd, Miami Beach, FL',
      client: 'Francky Ribaut',
      value: '',
      duration: '4 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Blue%20Glue%20Bikini%20-1.png',
      description: 'Complete contemporary renovation of the flagship U.S. store on Lincoln Road for Blue Glue Bikinis, an international brand from Bali, Indonesia.',
    },
    {
      id: 13,
      title: 'The Shelborne Hotel',
      category: 'Hotel Renovation',
      location: '1801 Collins Avenue, Miami Beach, FL',
      client: 'The Shelborne Hotel',
      value: '',
      duration: '14 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Shelborne%20Hotel%20.jpg',
      description: 'Complete renovation of common areas and partial hotel rooms. Scope included: 12,000 sq. ft. fully redesigned pool deck with new infinity edge pool, contemporary lobby, new front entrance, all new corridors throughout the building, new gym/spa, office center, banquet hall, 2 new lounges, 50 hotel rooms, 12 cabanas, low-voltage/Cat 6 wiring throughout, and new fire alarm system.',
    },
    {
      id: 14,
      title: 'The Bentley Hotel',
      category: 'Hotel Renovation',
      location: '510 Ocean Dr., Miami Beach, FL 33139',
      client: 'The Bentley Hotel',
      value: '',
      duration: '8 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%20.webp',
      description: 'Full renovation of hotel rooms and suites across the entire property.',
    },
    {
      id: 15,
      title: 'Lakeside Towers',
      category: 'Large Commercial',
      location: '7595–7995 SW 152nd Ave., Kendall, FL',
      client: 'Lakeside Towers',
      value: '',
      duration: '24 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/ba94ee9f7a67836a59685889354d2943-cc_ft_960.jpg',
      description: 'Lakeside Towers is a 13-acre residential apartment community consisting of eight 8-story mid-rise buildings. IKON Construction Group completed a full exterior and site renovation including roofing, waterproofing, exterior painting, architectural canopies, sidewalks, roadway resurfacing, parking reconfiguration, and extensive landscaping with a new irrigation system supplied from the lake. Additional improvements included a new 2,400 SF clubhouse, 2,400 SF open-air barbecue gazebo, and a new security gatehouse at the main entrance.',
    },
    {
      id: 16,
      title: 'The Metropolitan at the Park',
      category: 'Commercial Renovation',
      location: '5320 N. Sheridan Rd., Chicago, IL',
      client: 'Metropolitan Development',
      value: '',
      duration: '18 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Metropolitan%20at%20the%20Park-1.jpg',
      description: 'Complete interior and exterior renovation of a 280-unit residential building.',
    },
    {
      id: 17,
      title: 'The Sea-Air Tower',
      category: 'Pool & Lobby Renovation',
      location: '3525 South Ocean Drive, Hollywood, FL',
      client: 'Sea-Air Tower',
      value: '',
      duration: '6 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Sea-Air_Tower.jpg',
      description: '35,000 sq. ft. of pool deck and driveway waterproofing, installation of new pavers, removal of all plants, and waterproofing of all planters. Installation of marble in lobby with all custom fabrications.',
    },
    {
      id: 18,
      title: 'The Aventura Beach Club',
      category: 'Hotel Renovation',
      location: '19201 Collins Avenue, Aventura, FL',
      client: 'Aventura Beach Club',
      value: '',
      duration: '12 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Aventura%20Beach%20Club.jpg',
      description: '25,000 sq. ft. of pool deck and driveway renovation — installation of pavers, complete pool rehabilitation, marble lobby installation with all custom fabrications, and full tile installation across all 560 rooms.',
    },
    {
      id: 19,
      title: 'The Casablanca',
      category: 'Hotel Renovation',
      location: '6345 Collins Avenue, Miami Beach, FL',
      client: 'The Casablanca',
      value: '',
      duration: '12 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-1.jpg',
      description: '25,000 sq. ft. of pool deck and driveway renovation — installation of pavers, complete pool rehabilitation, marble lobby installation with all custom fabrications, and full tile installation across all 280 rooms.',
    },
    {
      id: 20,
      title: 'The Pavilion',
      category: 'Pool Deck & Penthouse Renovation',
      location: '5601 Collins Avenue, Miami Beach, FL',
      client: 'The Pavilion',
      value: '',
      duration: '8 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Pavilion.jpg',
      description: '40,000 sq. ft. of pool deck — installation of pavers set in mortar and complete pool rehabilitation. Full 10,000 sq. ft. penthouse rehabilitation including all structural work.',
    },
    {
      id: 21,
      title: 'The Mantel',
      category: 'Historical Restoration',
      location: '255 W. 24th Street, Miami Beach, FL',
      client: 'The Mantel',
      value: '',
      duration: '12 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Mantel.jpg',
      description: 'Complete historical tile and terrazzo restoration of a 100-unit Art Deco residential building in Miami Beach.',
    },
    {
      id: 22,
      title: 'The Continental',
      category: 'Historical Restoration',
      location: '4000 Collins Avenue, Miami Beach, FL',
      client: 'The Continental',
      value: '',
      duration: '10 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Continental.jpg',
      description: 'Complete tile, marble, and terrazzo installation including all custom fabrications across a 100-unit building.',
    },
    {
      id: 24,
      title: 'The Decoplage',
      category: 'Historical Restoration',
      location: '100 Lincoln Road, Miami Beach, FL',
      client: 'The Decoplage',
      value: '',
      duration: '14 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Decoplage.jpg',
      description: '55,000 sq. ft. of pool deck, upper deck, and driveway waterproofing — installation of new pavers, removal of all plants, waterproofing of all planters, marble lobby installation with all custom fabrications.',
    },
    {
      id: 1,
      title: 'Skylake Aventura',
      category: 'New Construction',
      location: 'Skylake, North Miami Beach',
      client: 'Private Client',
      value: '',
      duration: '18 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-1.jpeg',
      description: 'A five-bedroom, six-bath contemporary estate that blends naturalism with modern minimalism, redefining luxury living in Skylake.',
    },
    {
      id: 2,
      title: 'Bal Harbour Tower Residence',
      category: 'Luxury Condo',
      location: 'Bal Harbour, Miami',
      client: 'Private Client',
      value: '',
      duration: '14 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-2.jpeg',
      description: 'A 5,000 sq. ft. Bal Harbour Tower condo transformed with open living, wraparound balconies, Thassos marble, and bespoke finishes for a modern retreat.',
    },
    {
      id: 3,
      title: 'Highland Oaks Residence',
      category: 'New Layout & Addition',
      location: 'Highland Oaks, North Miami Beach, FL',
      client: 'Private Client',
      value: '',
      duration: '8 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-1.jpeg',
      description: 'Highland Oaks Residence is a modern 5-bedroom, 3-bath luxury home in North Miami Beach. Originally a 3-bedroom, 2-bath property, it was fully renovated with an open floor plan, French oak floors, a custom kitchen.',
    },
    {
      id: 4,
      title: 'Keystone Point Renovation',
      category: 'New Layout & Addition',
      location: 'North Miami, FL',
      client: 'Private Client',
      value: '',
      duration: '7 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-pool-exterior-2.jpeg',
      description: 'This North Miami waterfront home underwent a complete transformation, evolving from a three-bedroom residence into a five-bedroom, four-bath modern sanctuary.',
    },
    {
      id: 5,
      title: 'Keystone Point Modern',
      category: 'New Construction',
      location: 'North Miami, FL',
      client: 'Private Client',
      value: '',
      duration: '8 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-home-front.jpeg',
      description: 'Discover Keystone Point Modern, a four-bedroom, four-bath luxury home in Miami. Modern design, Portuguese limestone floors, ipe wood bedrooms, and custom architectural details by IKON.',
    },
    {
      id: 6,
      title: 'Keystone Point Residence (Unbuilt)',
      category: 'New Construction',
      location: 'North Miami, FL',
      client: 'Private Client',
      value: '',
      duration: 'Design Phase',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-residence-front-facade-miami.jpg',
      description: 'Although never built, Keystone Point Residence represents IKON\'s forward-thinking design approach.',
    },
    {
      id: 7,
      title: 'Lighthouse Point (Unbuilt)',
      category: 'New Construction',
      location: 'North Miami, FL',
      client: 'Private Client',
      value: '',
      duration: 'Design Phase',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/lighthouse-point-miami-waterfront-residence-front-elevation-1.jpeg',
      description: 'Lighthouse Point was envisioned as a modern Miami waterfront residence, blending bold coastal design with open layouts and timeless elegance.',
    },
    {
      id: 8,
      title: 'Palm Island Mansion',
      category: 'Historical Renovation',
      location: 'Palm Island, Miami Beach',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-miami-beach-exterior-2.jpg',
      description: 'A historic 1929 Palm Island estate reimagined by IKON and Ralph Choeff into a sleek contemporary Miami Beach waterfront mansion, blending history with modern luxury.',
    },
    {
      id: 9,
      title: 'Beach Penthouse',
      category: 'Luxury Condo',
      location: 'Miami Beach, FL',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-mexican-shell-stone-floor-penthouse-2.jpg',
      description: 'A Miami Beach penthouse by Keith Powel Interiors and IKON Construction Group, blending natural materials into a serene, luxurious retreat.',
    },
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Construction Projects Portfolio - Miami Luxury Homes & Commercial | IKON"
        description="Explore IKON Construction's portfolio of luxury residential and commercial projects in Miami. From custom homes to high-end renovations and commercial buildings."
        keywords="Miami construction projects, luxury homes Miami, custom home portfolio, commercial construction projects, Miami Beach construction, Aventura construction"
        url="https://ikoncg.com/projects"
      />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured & Notable
            <span className="text-orange-500 block">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A selection of residential, commercial, and renovation projects that showcase
            our commitment to quality, innovation, and client satisfaction. We have completed
            many more projects across South Florida and beyond.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    {project.location}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Duration: {project.duration}
                    </div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
                      onClick={() => sessionStorage.setItem('projectsScrollPosition', window.scrollY.toString())}
                    >
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us bring your construction vision to life with the same dedication
            and quality showcased in our portfolio.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;