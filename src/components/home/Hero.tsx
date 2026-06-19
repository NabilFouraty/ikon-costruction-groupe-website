import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'Palm Island Mansion',
      subtitle: 'Palm Island, Miami Beach',
      description: 'Originally built in 1929, this Palm Island estate was fully transformed, blending historic charm with sleek, modern design, open layouts, and stunning waterfront living.',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-miami-beach-exterior-1.png',
      category: 'residential'
    },
    {
      id: 2,
      title: 'Skylake Aventura',
      subtitle: 'Zen-Inspired Modern Estate',
      description: 'A five-bedroom, six-bath contemporary retreat blending naturalism and minimalism for a serene living experience.',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-3.jpeg',
      category: 'residential'
    },
    {
      id: 3,
      title: 'Keystone Point Renovation',
      subtitle: 'Waterfront Modern Sanctuary',
      description: 'A North Miami home reimagined from three bedrooms into a five-bedroom, four-bath modern retreat with seamless indoor–outdoor living.',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-pool-exterior-2.jpeg',
      category: 'Residential'
    },
    {
      id: 4,
      title: 'Keystone Point Modern',
      subtitle: "IKON's First Ground-Up Modern Home",
      description: 'A four-bedroom, four-bath residence blending contemporary design with subtle Art Deco touches, crafted with limestone, ipe wood, and custom details.',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-home-front.jpeg',
      category: 'Residential'
    },
    {
      id: 5,
      title: 'Bal Harbour Tower Residence',
      subtitle: 'Modern Luxury with Ocean Views',
      description: 'A 5,000 sq. ft. condominium reimagined as a modern retreat with open living areas, wraparound balconies, Thassos marble, a custom kitchen, and spa-like bathrooms.',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-2.jpeg',
      category: 'Residential'
    },
    {
      id: 6,
      title: 'Highland Oaks Residence',
      subtitle: 'Modern Renovation in North Miami Beach',
      description: 'Five-bedroom, three-bath home reimagined with French oak floors, a custom kitchen, new master suite, and indoor–outdoor living.',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-2.jpeg',
      category: 'Renovation'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${slide.image}")` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

            {/* Content — z-20 so it always sits above the z-10 arrows */}
            <div className="relative h-full flex items-center z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  {/* Category Badge */}
                  <div className={`inline-block mb-4 transform transition-all duration-700 delay-300 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-orange-500/30">
                      {slide.category} Project
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight transform transition-all duration-700 delay-500 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className={`text-xl md:text-2xl lg:text-3xl text-orange-400 font-semibold mb-6 transform transition-all duration-700 delay-700 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className={`text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl transform transition-all duration-700 delay-900 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-1100 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                      to="/projects"
                      className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows — z-10, pushed to screen edges so they don't overlap buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white p-3 transition-all duration-300 hover:scale-110 z-10 md:left-8 md:rounded-full"
        aria-label="Previous slide"
        style={{ touchAction: 'manipulation' }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-3 transition-all duration-300 hover:scale-110 z-10 md:right-8 md:rounded-full"
        aria-label="Next slide"
        style={{ touchAction: 'manipulation' }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-500 scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30 z-10">
        <div
          className="h-full bg-orange-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-20 right-4 md:right-8 bg-black/40 backdrop-blur-sm rounded-xl p-6 text-white z-10 hidden lg:block">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-orange-400">500+</div>
            <div className="text-xs text-gray-300">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">35+</div>
            <div className="text-xs text-gray-300">Years</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">100%</div>
            <div className="text-xs text-gray-300">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;