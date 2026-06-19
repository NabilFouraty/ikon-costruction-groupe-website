import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'Palm Island Mansion',
      location: 'Palm Island, Miami Beach',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-miami-beach-exterior-1.png',
    },
    {
      id: 2,
      title: 'The Metropolitan at the Park',
      location: '280-Unit Condo Conversion',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Metropolitan%20at%20the%20Park-1.jpg',
    },
    {
      id: 3,
      title: 'Skylake Aventura',
      location: 'Zen-Inspired Modern Estate',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-3.jpeg',
    },
    {
      id: 4,
      title: 'The Casablanca',
      location: 'Full Hotel Renovation',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-11.jpg',
    },
    {
      id: 5,
      title: 'Keystone Point Modern',
      location: "IKON's First Ground-Up Home",
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-home-front.jpeg',
    },
    {
      id: 6,
      title: 'The Continental',
      location: '100-Unit Tile & Marble Installation',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Continental-3.jpg',
    },
    {
      id: 7,
      title: 'Highland Oaks Residence',
      location: 'North Miami Beach',
      image: 'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-2.jpeg',
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? prevSlide() : nextSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative h-screen overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-out motion-reduce:transform-none ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
            {/* Bottom scrim protects the caption + CTA */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            {/* Light top scrim protects the fixed headline; middle of the image stays clean */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/55 to-transparent" />
          </div>
        ))}
      </div>

      {/* Fixed brand statement — does not change with the slides */}
      <div className="absolute inset-x-0 top-0 z-10 pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-white/70 text-xs md:text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Luxury Construction &amp; Design-Build
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] max-w-xl">
            Exceptional spaces, built for South Florida.
          </h1>
        </div>
      </div>

      {/* Bottom content: project caption + single CTA */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="relative h-14 overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-orange-400" />
                  <div>
                    <p className="text-white text-base md:text-lg font-medium">{slide.title}</p>
                    <p className="text-white/60 text-xs md:text-sm">{slide.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center self-start md:self-auto border border-white/40 text-white px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Segmented progress indicators — replaces dots + separate progress bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative h-[2px] flex-1 bg-white/20 overflow-hidden"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`absolute inset-y-0 left-0 bg-orange-400 transition-all ease-linear ${
                    index === currentSlide
                      ? isAutoPlaying && !isPaused
                        ? 'w-full duration-[7000ms]'
                        : 'w-full duration-300'
                      : 'w-0 duration-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows — minimal, edge-anchored */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 transition-colors duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-3 transition-colors duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;