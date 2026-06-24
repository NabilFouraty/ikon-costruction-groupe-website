import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Calendar } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import DesignConsultingCTA from '../components/home/DesignConsultingCTA';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div className="pt-16">
      <SEOHead 
        title="IKON Construction Group - Premier Construction Services in Miami"
        description="IKON Construction Group delivers exceptional residential and commercial construction services in Miami. 35+ years of experience in custom homes, renovations, and commercial buildings."
        keywords="construction Miami, custom homes Miami, commercial construction, residential construction, home renovation, Miami contractors, luxury construction"
        url="https://ikoncg.com"
      />
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <DesignConsultingCTA />
      <CTA />
    </div>
  );
};

export default Home;