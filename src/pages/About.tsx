import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, maintaining the highest standards of quality and craftsmanship.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, architects, and partners to ensure successful project outcomes.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace new technologies and construction methods to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through honest communication, transparent processes, and ethical business practices.'
    }
  ];

  const team = [
    {
      name: 'David Richardson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '35+ years of construction experience with a passion for innovative building solutions.'
    },
    {
      name: 'Maria Santos',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in large-scale project coordination and client relationship management.'
    },
    {
      name: 'James Wilson',
      role: 'Lead Architect',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Award-winning architect specializing in sustainable and modern design principles.'
    },
    {
      name: 'Lisa Chen',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Ensures smooth operations and quality control across all construction projects.'
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead 
        title="About IKON Construction Group - 35+ Years of Excellence in Miami"
        description="Learn about IKON Construction Group's 35+ year history in Miami construction. Meet founder Gil Suissa and discover our values of excellence, collaboration, innovation, and integrity."
        keywords="IKON Construction history, Gil Suissa founder, Miami construction company, construction experience, luxury construction Miami"
        url="https://ikoncg.com/about"
      />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Building Excellence for
                <span className="text-orange-500 block">Over 25 Years</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                IKON Construction Group has been at the forefront of innovative construction 
                solutions, delivering exceptional projects that stand the test of time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">25+</div>
                  <div className="text-gray-300">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Ikon-team.jpeg"
                alt="Gil Suissa, Founder of IKON Construction Group"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Visionary Construction Led by Gil Suissa</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-center leading-relaxed">
                With over 35+ years of industry experience and a portfolio of more than 500+ successfully delivered projects, Gil Suissa has established IKON Construction Group as a premier force in South Florida's real estate development. Widely respected as one of the most sought-after, visionary, and contemporary general contractors in the industry, Gil is celebrated for bringing an unparalleled design vision and an innovative edge to every space he touches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large-Scale & Commercial Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Large-Scale & Commercial Expertise</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-center leading-relaxed">
                While Gil is highly regarded for his luxury custom homes, his extensive capabilities truly shine in the commercial sector. Backed by an expert team of over 100+ skilled professionals, Gil seamlessly executes complex, large-scale commercial constructions. His expertise spans state-of-the-art office buildings, retail spaces, industrial facilities, healthcare buildings, and sprawling mixed-use developments. From end-to-end project management to stringent budget and timeline oversight, Gil creates commercial spaces that are specifically designed to enhance business operations and inspire success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iconic Restoration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">The Iconic Restoration of Miami Beach</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-center leading-relaxed">
                Gil's work is woven into the very fabric of South Florida's architectural heritage. He has been a pivotal figure in the iconic restoration of Miami Beach, drawing on his expertise in historic restoration to breathe new life into older structures. This experience is perfectly reflected in his masterful transformation of a historic 1929 Palm Island estate, where he successfully preserved the property's historic charm while seamlessly integrating sleek, modern design and contemporary, open-concept waterfront living. 
              </p>
              <p className="text-center leading-relaxed">
This same dedication to historic preservation is reflected in  IKON's restoration of The Mantel, a landmark Art Deco building  in Miami Beach, where a complete historical tile and terrazzo restoration preserved the building's original character for future generations. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contemporary General Contractor Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">A Contemporary General Contractor with Unmatched Vision</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-center leading-relaxed">
                Today's developers and business owners demand more than just a builder — they need a visionary partner. Gil bridges the gap between raw construction and high-end design, offering comprehensive design consulting that includes architectural and interior design, 3D visualization, and intricate space planning. Whether he is crafting a Zen-inspired modern estate, a ground-up contemporary commercial facility, or leading a complex historical renovation, Gil Suissa remains the definitive, go-to contractor for clients who demand innovative solutions, exceptional craftsmanship, and absolute perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Notable Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Decoplage (1993–1994)',
                'The Shelborne Hotel (1993–94 & 2010–2012)',
                'The Aventura Beach Club',
                'Obba Sushi Miami',
                'Blue Glue Bikini (Lincoln Rd.)',
                'Buena Vista Project (2025–26)'
              ].map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-gray-700 font-medium">{project}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure that every project 
              reflects our commitment to excellence.
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

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Gil-Suiss-Founder-Innovator.jpeg"
                  alt="Gil - Founder & CEO"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">35+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">500+</div>
                    <div className="text-sm text-gray-600">Projects Led</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full opacity-60" />
              <div className="absolute top-1/3 -right-6 w-16 h-16 bg-orange-500 rounded-full opacity-20" />
            </div>

            {/* Founder Story */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Founder & Innovator
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Meet Gil
                  <span className="text-orange-500 block">The Mind Behind IKON</span>
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="space-y-6 text-gray-700 leading-relaxed mb-6">
                  Gil Suissa is the CEO and Founder of IKON Construction Group, a Miami-based design-build and general contracting firm specializing in luxury residential and commercial projects. With more than 30 years of experience, Gil began his career in the 1990s focusing on interior and exterior renovations, tile, marble, pavers, waterproofing, and stone fabrication for some of Miami Beach’s most iconic buildings. His early projects included condo towers such as the Decoplage and Shelborne, as well as historic landmarks like the Hampton, the Mantell, and the Casablanca, where he upgraded lobbies, pool decks, and common areas while respecting the character of each property.
                  
                </p>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    In 1999, Gil expanded to Chicago and founded Skyline Remodeling, managing large-scale residential renovations including a complete 252-unit condominium building. Working with renowned designers and architects, he embraced modern design principles for the first time, marking a pivotal shift in his approach to architecture and construction.

                  </p>
                  
                  <p>
                    In 2001, Gil returned to Miami and established IKON Construction Group, focusing on contemporary design-build projects. One of his early signature developments was his own contemporary residence in Keystone Point, which helped set the tone for the neighborhood’s modern transformation. Since then, he has completed exclusive projects across South Florida, from oceanfront luxury condos in Bal Harbour to a 7,000-square-foot penthouse in Bellamar, Williams Island, luxury homes in Aventura, Golden Beach, and Miami Beach, and commercial spaces including Wynwood buildings and the stylish restaurant Obba in Brickell.

                  </p>

                  <p>
                    Known for his attention to detail, craftsmanship, and discretion, Gil is trusted by South Florida’s most discerning clients to deliver projects that combine timeless quality with modern design innovation.

                  </p>
                </div>
              </div>
              
              {/* Philosophy Quote */}
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-orange-500">
                <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                  "Every project is an opportunity to combine innovation with integrity, ensuring 
                  clients receive not just a finished structure, but a lasting investment built 
                  to the highest standards."
                </blockquote>
                <cite className="block mt-4 text-orange-600 font-semibold">— Gil, Founder & CEO</cite>
              </div>
              
              {/* Timeline Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-orange-500 font-bold text-lg">1990</div>
                  <div className="text-sm text-gray-600">Started at Crescent Heights</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-orange-500 font-bold text-lg">1993</div>
                  <div className="text-sm text-gray-600">Founded Presidential Marble & Tile</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-orange-500 font-bold text-lg">2000</div>
                  <div className="text-sm text-gray-600">Skyline Remodeling in Chicago</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-orange-500 font-bold text-lg">2001</div>
                  <div className="text-sm text-gray-600">Established IKON Construction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the IKON difference. Let's discuss your next construction project 
            and how we can bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;