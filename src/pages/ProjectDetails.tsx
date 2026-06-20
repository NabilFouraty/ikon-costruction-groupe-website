import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Clock, ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Skylake Aventura',
      category: 'New Construction',
      location: 'Skylake North Miami Beach',
      client: 'Private Client',
      duration: '10 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-3.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-4.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-5.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-6.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-7.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Skylake%20Aventura-8.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/WhatsApp%20Image%202026-04-22%20at%2019.33.09.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/WhatsApp%20Image%202026-04-22%20at%2019.33.10%20(1).jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/WhatsApp%20Image%202026-04-22%20at%2019.33.10%20(2).jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/WhatsApp%20Image%202026-04-22%20at%2019.33.10%20(3).jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/WhatsApp%20Image%202026-04-22%20at%2019.33.10%20(5).jpeg',
      ],
      description: 'Skylake Residence is a ground-up contemporary estate envisioned and delivered by IKON. Designed as a private five-bedroom, six-bath retreat, the home blends naturalism and minimalism to create a serene, Zen-inspired living experience. Every detail was considered to balance warmth, openness, and modern sophistication—setting a new benchmark for luxury living in Skylake.',
      challenge: 'The challenge was to create a home that seamlessly integrates modern technology with timeless natural design. The client envisioned a residence that would feel open and peaceful, yet fully equipped with the latest smart-home systems and contemporary comforts. Achieving this harmony required precision in both design and construction.',
      solution: 'IKON approached the project with a philosophy of balance. Wide-plank French oak floors, concealed headers, and floor-to-ceiling impact glass bring warmth, texture, and natural light into the home. Italian-designed finishes and centralized lighting systems deliver modern refinement, while a fully integrated smart home platform ensures effortless control. To elevate the interiors further, level-five wall finishes were applied for a seamless, gallery-like atmosphere.',
      features: [
        '5 bedrooms and 6 bathrooms',
        'Wide-plank French oak flooring',
        'Floor-to-ceiling impact glass windows',
        'Italian-crafted finishes throughout',
        'Fully integrated smart home system',
        'Centralized lighting and automation',
        'Level-five interior wall finishes',
        'Custom contemporary architectural design'
      ],
      testimonial: {
        quote: "IKON delivered a residence that exceeded expectations in both design and execution. Their ability to blend natural warmth with cutting-edge technology truly sets this home apart.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 2,
      title: 'Bal Harbour Tower Residence',
      category: 'Luxury Condo',
      location: 'Bal Harbour, Miami',
      client: 'Private Client',
      value: '',
      duration: '14 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence3-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-3.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-4.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-5.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-6.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-7.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Bal%20Harbour%20Tower%20Residence-8.jpeg',
      ],
      description: 'The Bal Harbour Tower Residence is a 5,000 sq. ft. condominium reimagined as a modern luxury retreat. An open layout, expansive living areas, and wraparound balconies showcase sweeping ocean views. Interiors feature 36x36 Thassos marble, a custom kitchen with a massive island, bespoke closets, and spa-like bathrooms. Every system and finish was rebuilt, blending timeless elegance with contemporary comfort.',
      challenge: 'The primary challenge was transforming an older condominium shell into a modern luxury residence while adhering to stringent building regulations, structural constraints, and the expectations of a discerning client seeking a complete reinvention of the space.',
      solution: 'IKON approached the project with a ground-up methodology, reconfiguring the layout to maximize openness, natural light, and flow. Mechanical, electrical, plumbing, and fire protection systems were fully replaced to meet modern standards. Premium finishes such as Thassos marble, custom millwork, and tailored storage solutions elevated the space into a bespoke contemporary residence.',
      features: [
        '5,000 sq. ft. luxury redesign',
        'Wraparound balconies with ocean views',
        '36x36 Thassos marble flooring',
        'Custom kitchen with island & floating stone table',
        'Bespoke closets & storage solutions',
        'Spa-inspired marble bathrooms',
        'Brand-new MEP & fire systems',
        'Open plan with added full bath'
      ],
      testimonial: {
        quote: "IKON exceeded our expectations, delivering a timeless, extraordinary home.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 3,
      title: 'Highland Oaks Residence',
      category: 'New Layout & Addition',
      location: 'Highland Oaks, North Miami Beach, FL',
      client: 'Private Client',
      value: '',
      duration: '14 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-1-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-1-3.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-1-4.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-3.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-4.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-5.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-6.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-7.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-8.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-10.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-11.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-12.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-13.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-16.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-17.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-18.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-20.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Highland%20Oaks%20Residence-21.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/highland-oaks-residence-bathroom-5%20(1).jpeg',
      ],
      description: 'Highland Oaks Residence is a modern 5-bedroom, 3-bath luxury home in North Miami Beach. Originally a 3-bedroom, 2-bath property, it was fully renovated with an open floor plan, French oak floors, a custom kitchen, new master suite, and seamless indoor\u2013outdoor living with patio and pool.',
      challenge: 'Expanding the home\u2019s space and functionality while enhancing natural light and indoor\u2013outdoor flow within the existing structure.',
      solution: 'IKON reconfigured the layout to add bedrooms and a bathroom, optimized window placements, and upgraded finishes, creating a modern Miami luxury home with resort-style indoor\u2013outdoor living.',
      features: [
        '5 bedrooms, 3 bathrooms',
        'Custom open floor plan',
        'French oak flooring throughout',
        'Modern kitchen with integrated appliances',
        'New master suite',
        'Patio and pool for indoor\u2013outdoor living',
        'Contemporary Miami luxury renovation',
        'Modern patio and pool integration'
      ],
      testimonial: {
        quote: "IKON transformed our Highland Oaks home into a modern luxury retreat. The new layout, finishes, and indoor\u2013outdoor living make it perfect for Miami's lifestyle.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 4,
      title: 'Keystone Point Renovation & Additions',
      category: 'New Layout & Addition',
      location: 'North Miami, FL',
      client: 'Private Client',
      value: '',
      duration: '7 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-pool-exterior-3.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-pool-exterior-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-pool-exterior-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-patio-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-patio.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-patio-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-living-room-5.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-living-room-3.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-living-room-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-living-room-4.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-kitchen.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-kitchen-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-bedroom.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-bathroom-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-renovation-bathroom-3.jpeg',
      ],
      description: 'This North Miami waterfront home underwent a complete transformation, evolving from a three-bedroom residence into a five-bedroom, four-bath modern sanctuary. The renovation included both front and rear additions, expanding the living space while maintaining seamless indoor-outdoor flow.',
      challenge: 'The client sought to modernize the home, optimize ocean access, and create a serene yet functional living environment without compromising the property\u2019s original charm.',
      solution: 'The redesigned pool features clean, squared edges, while the patio was enhanced with tongue-and-groove wood ceilings for a warm, Zen-inspired aesthetic. Inside, each bathroom was finished with distinctive 8x8 hand-painted Spanish tiles, offering a bold and eclectic contrast to the contemporary interiors.',
      features: [
        'Five bedrooms, four baths',
        'Redesigned pool with squared edges',
        'Outdoor patio with wood ceilings',
        'Hand-painted Spanish tile bathrooms',
        'Modern layout with ocean views',
        'Seamless indoor-outdoor flow',
        'Custom architectural details',
        'Zen-inspired, eclectic design'
      ],
      testimonial: {
        quote: "IKON renovated and sold this home, transforming it into a modern retreat with exceptional attention to detail and style.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 5,
      title: 'Keystone Point Modern',
      category: 'New Construction',
      location: 'North Miami, FL',
      client: 'Private Client',
      value: '',
      duration: '8 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-home-front.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-exterior.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-living-room-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-living-room.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-interior-details.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-bedroom.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-kitchen-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-bathroom-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-modern-bathroom-2.jpeg',
      ],
      description: 'Keystone Point Modern is IKON\u2019s first ground-up modern residence in Miami. This four-bedroom, four-bath home blends contemporary design with subtle nods to Miami\u2019s Art Deco heritage. Featuring Portuguese limestone floors, ipe wood bedrooms, and custom elements like a waterfall island and rare wood vanities, the project showcases precision, craftsmanship, and timeless modern style.',
      challenge: 'Creating a modern luxury home that balanced sleek contemporary lines with warmth and subtle references to Miami\u2019s historic Art Deco style, while maximizing functional living spaces.',
      solution: 'IKON used high-quality materials and innovative layouts, integrating Portuguese limestone, ipe wood floors, and custom architectural details to achieve a sophisticated, balanced modern home that respects Miami\u2019s design heritage.',
      features: [
        '4 bedrooms and 4 bathrooms',
        'Portuguese limestone floors',
        'Ipe wood bedroom flooring',
        'Custom waterfall kitchen island',
        'Rare wood vanities',
        'Miami Art Deco design accents',
        'Ground-up modern build',
        'Open-concept living areas'
      ],
      testimonial: {
        quote: "IKON's attention to detail and design innovation made Keystone Point Modern a landmark project in Miami's luxury home market.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 6,
      title: 'Keystone Point Residence (Unbuilt)',
      category: 'New Construction',
      location: 'North Miami, FL',
      client: 'Private Client',
      value: '',
      duration: 'Design Phase',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-residence-front-facade-miami.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-residence-driveway-exterior-miami.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-residence-luxury-living-badroom%20.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-residence-luxury-living-kitchen.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-residence-luxury-living-room-miami-1.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-residence-luxury-living-room-miami-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/keystone-point-residence-luxury-living-room-miami-3.jpg',
      ],
      description: 'Although never built, Keystone Point Residence represents IKON\u2019s forward-thinking design approach. The contemporary concept envisioned a modern Miami estate with bold geometric forms, floor-to-ceiling glass, and seamless indoor\u2013outdoor living centered around a resort-style pool and landscaped terraces.',
      challenge: 'The challenge was to design a groundbreaking modern residence that balanced striking architectural lines with livable, comfortable spaces for a waterfront Miami lifestyle.',
      solution: 'IKON developed complete architectural plans and detailed renderings, integrating expansive glass, open layouts, and luxury finishes to demonstrate how contemporary design could transform Keystone Point living.',
      features: [
        'Unbuilt residential concept',
        'Contemporary geometric architecture',
        'Floor-to-ceiling glass walls',
        'Expansive open living areas',
        'Resort-style pool with outdoor lounge',
        'Integrated indoor\u2013outdoor living',
        'Luxury modern finishes',
        'Comprehensive architectural renderings'
      ],
      testimonial: {
        quote: "Keystone Point Residence reflects IKON's vision for the future of Miami modern living.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 7,
      title: 'Lighthouse Point (Unbuilt)',
      category: 'New Construction',
      location: 'North Miami, FL',
      client: 'Private Client',
      value: '',
      duration: 'Design Phase',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/lighthouse-point-miami-waterfront-residence-front-elevation-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/lighthouse-point-miami-waterfront-residence-front-elevation.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/lighthouse-point-miami-waterfront-living-room-render.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/lighthouse-point-miami-modern-luxury-interior.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/lighthouse-point-miami-waterfront-residence-front-elevation.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/lighthouse-point-miami-modern-coastal-home-exterior.jpeg',
      ],
      description: 'Lighthouse Point was envisioned as a contemporary Miami waterfront residence, blending bold coastal architecture with open layouts and expansive glass walls. Though never built, the project highlights IKON\u2019s forward-thinking design approach to luxury living in South Florida.',
      challenge: 'Creating a Miami waterfront residence that maximized ocean views while ensuring privacy and incorporating sustainable, marine-grade materials.',
      solution: 'IKON designed elevated volumes, open layouts, and floor-to-ceiling glass to capture natural light and scenery, while strategic landscaping and durable finishes provided both privacy and long-term resilience.',
      features: [
        'Miami waterfront design',
        'Expansive glass walls',
        'Indoor\u2013outdoor living',
        'Marine-resistant materials',
        'Elevated volumes for privacy',
        'Coastal architecture style',
        'Full plans & 3D renderings',
        'Luxury-focused layout'
      ],
      testimonial: {
        quote: "Even as an unbuilt vision, Lighthouse Point reflects IKON's ability to anticipate client needs and set new standards for Miami waterfront living.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 8,
      title: 'Palm Island Mansion',
      category: 'Historical Renovation',
      location: 'Palm Island, Miami Beach',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-miami-beach-exterior-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-pool-view-estate-ikon-construction-group-inc.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-waterfront-balcony.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/home-design%20(4).jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-waterfront-view-estate-ikon-construction-group-inc-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/home-design%20(6).jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-floor-to-ceiling-glass-estate-ikon-construction-group-inc.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-floor-to-ceiling-glass-estate-ikon-construction-group-inc-1.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-waterfront-view-estate-ikon-construction-group-inc.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/miami-beach-estate-ikon-construction-group-inc-palm-island-mansion-living-room.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-living-room-estate-ikon-construction-group-inc.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-living-room-ikon-construction-group-inc.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-kitchen-luxury-estate-ikon-construction-group-inc-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-kitchen-luxury-estate-ikon-construction-group-inc-3.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-kitchen-luxury-estate-ikon-construction-group-inc.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/miami-palm-island-mansion-master-living-estate-ikon-construction-group-inc-.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/miami-palm-island-mansion-master-bedroom-estate-ikon-construction-group-inc-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/miami-palm-island-mansion-master-bedroom-estate-ikon-construction-group-inc-.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/miami-beach-bath-roomestate-ikon-construction-group-inc-.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/miami-beach-estate-ikon-construction-group-inc-.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/miami-beach-estate-ikon-construction-group-inc-3.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/miami-beach-sport-room-estate-ikon-construction-group-inc-i.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-miami-beach-front.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/palm-island-mansion-miami-beach-exterior.jpg',
      ],
      description: (
        <>
          Originally built in 1929, this Palm Island estate was fully transformed by IKON Construction Group and architect{' '}
          <a href="https://clfarchitects.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Ralph Choeff</a>.
          {' '}The renovation preserves its historic charm while introducing sleek, modern design, open layouts, and waterfront living. Expansive glass walls frame stunning bay views, blending luxury, comfort, and functionality. Today, it stands as a contemporary Miami Beach masterpiece.
        </>
      ),
      challenge: 'The main challenge was preserving elements of the home\u2019s historic character while upgrading it into a modern luxury estate that met today\u2019s standards for design, comfort, and technology.',
      solution: 'IKON approached the renovation with a balance of respect and innovation. The team restructured the home\u2019s layout for openness, introduced floor-to-ceiling glass to frame waterfront views, and integrated modern finishes with state-of-the-art systems\u2014all while maintaining subtle nods to its historic past.',
      features: [
        'Miami Beach bayfront',
        'Open, modern floor plan',
        'Floor-to-ceiling glass with water views',
        'Luxury kitchen and finishes',
        'Indoor\u2013outdoor living',
        'Designed with Ralph Choeff',
        'Historic home, modernized',
        'Smart, high-efficiency systems'
      ],
      testimonial: {
        quote: "IKON flawlessly balanced history and modernity, transforming a century-old estate into a contemporary Miami Beach masterpiece. Their vision and craftsmanship are truly unmatched.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 9,
      title: 'Beach Penthouse',
      category: 'Luxury Condo',
      location: 'Miami Beach, FL',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-mexican-shell-stone-floor-penthouse-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-mexican-shell-stone-floor.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-mexican-shell-stone-floor-penthouse-1.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-mexican-shell-stone-floor-penthouse-3.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-living-room-1.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-interior.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-kitchen-teak-white-oak.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-living-room.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-open-layout.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-bedroom.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-bedroom-natural-materials.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-bathroom.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-bathroom-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-waterfront.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-modern-miami-beach-penthouse-view-ikon-construction-group-inc.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/hollywood-beach-penthouse-ikon-construction-group-inc-modern-miami-beach-penthouse-view.jpg',
      ],
      description: (
        <>
          This Miami Beach penthouse, designed by Keith Powel of{' '}
          <a href="https://www.akpinterior.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Keith Powel Interiors</a>{' '}
          and built by IKON Construction Group, embodies organic elegance and serene coastal living. The design fuses natural materials\u2014Mexican shell stone floors, Brazilian forest granite, teak and white oak doors, cork walls, and organic wallpapers\u2014creating a warm, sophisticated retreat that feels both luxurious and deeply connected to nature.
        </>
      ),
      challenge: 'The challenge was to harmonize a wide variety of organic materials while maintaining a refined, cohesive aesthetic suited for a luxury penthouse.',
      solution: 'IKON\u2019s team worked closely with the designer to integrate diverse textures and finishes with precision craftsmanship, ensuring every element complemented the next. The result is a seamless, calming environment that highlights natural beauty without sacrificing modern comfort.',
      features: [
        'Mexican shell stone flooring',
        'Brazilian forest granite countertops',
        'Teak and white oak custom doors',
        'Cork feature walls',
        'Organic wallpaper finishes',
        'Warm, nature-inspired color palette',
        'Open-plan luxury penthouse layout',
        'Collaboration with Keith Powel Interiors'
      ],
      testimonial: {
        quote: "IKON delivered flawless execution of our organic vision. Their craftsmanship and attention to natural detail made this penthouse a true sanctuary in Miami Beach.",
        author: "Private Client",
        role: "Homeowner"
      }
    },
    {
      id: 11,
      title: 'Blue Glue Bikini',
      category: 'Retail Renovation',
      location: '609 Lincoln Rd, Miami Beach, FL',
      client: 'Francky Ribaut',
      value: '',
      duration: '4 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Blue%20Glue%20Bikini%20-1.png',
      ],
      description: 'Complete contemporary renovation of the flagship U.S. store on Lincoln Road for Blue Glue Bikinis, an international brand from Bali, Indonesia. The project transformed the retail space into a sleek, brand-aligned environment befitting one of Miami Beach\u2019s most iconic shopping destinations.',
      challenge: 'Delivering a high-end contemporary retail renovation on Lincoln Road \u2014 one of Miami Beach\u2019s busiest pedestrian corridors \u2014 required tight scheduling, minimal disruption, and a design execution that matched the brand\u2019s international aesthetic.',
      solution: 'IKON completed a full contemporary renovation of the space, coordinating all finishes, fixtures, and buildout details to deliver a flagship retail environment that reflected the brand\u2019s identity and met the expectations of an international clientele on Lincoln Road.',
      features: [
        'Full contemporary retail renovation',
        'Flagship U.S. store for international brand',
        'Lincoln Road, Miami Beach location',
        'Brand-aligned interior design execution',
        'High-end finishes and fixtures',
        'Delivered on tight retail schedule'
      ],
      testimonial: {
        quote: 'IKON delivered a stunning contemporary renovation for our flagship store on Lincoln Road, perfectly capturing the spirit of our brand.',
        author: 'Francky Ribaut',
        role: 'Owner, Blue Glue Bikini'
      }
    },
    {
      id: 14,
      title: 'The Bentley Hotel',
      category: 'Hotel Renovation',
      location: '510 Ocean Dr, Miami Beach, FL 33139',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%20.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-1.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-10.avif',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-11.avif',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-2.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-3.avif',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-4.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-6.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-7.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-8.avif',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011-9.avif',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Bentley%20Hotel%202011.webp',
      ],
      description: 'Full renovation of hotel rooms and suites across the entire property at 510 Ocean Drive on the iconic Miami Beach boardwalk. The project delivered a complete transformation of all guest rooms and suites with upgraded finishes, fixtures, and modern hospitality-grade construction.',
      challenge: 'Renovating an active hospitality property on iconic Ocean Drive required careful phasing and coordination to minimize disruption while delivering a full transformation of all rooms and suites to a high hospitality standard.',
      solution: 'IKON managed a phased renovation schedule, systematically completing rooms and suites with premium finishes and modern fixtures while maintaining the hotel\'s operational continuity and protecting the building\'s character on Ocean Drive throughout the project.',
      features: [
        'Full renovation of all hotel rooms',
        'Complete suite redesign and upgrade',
        'New fixtures and finishes throughout',
        'Hospitality-grade materials and construction',
        'Phased delivery to maintain hotel operations',
        'Ocean Drive landmark property',
      ],
      testimonial: {
        quote: 'IKON delivered a full hotel renovation with professionalism and precision, transforming every room and suite while keeping our operations running smoothly.',
        author: 'Private Client',
        role: 'Hotel Owner'
      }
    },
    {
      id: 10,
      title: 'Buena Vista Project',
      category: 'Commercial Renovation',
      location: '4501 NW 2nd Ave, Miami, FL 33127',
      client: 'Private Client',
      value: '',
      duration: '18 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project--.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project-10.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project-2.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project-3.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project-4.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project-6.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project-8.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project-9.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Buena%20Vista%20Project-11.jpeg',
      ],
      description: 'Complete renovation and redevelopment of a 5,000 sq. ft. commercial building in the Buena Vista neighborhood of Miami. The project involved full interior demolition, structural restoration, all-new mechanical, electrical, and plumbing systems, framing, and drywall. New bathrooms and janitorial facilities were constructed, and extensive exterior improvements were completed including landscaping, roofing, stucco, painting, paving, irrigation, and windows and doors. The project delivered a fully renewed commercial shell ready for tenant buildout.',
      challenge: 'The challenge was to fully gut and restore a deteriorated commercial building while bringing all systems up to current code, coordinating multiple trades simultaneously, and delivering a clean commercial shell within a strict timeline for tenant delivery.',
      solution: 'IKON executed a comprehensive demolition-to-shell scope, managing structural restoration alongside all-new MEP installations. Exterior and interior work was phased to maintain progress on all fronts, resulting in a code-compliant, tenant-ready commercial space that transformed the property from the ground up.',
      features: [
        '5,000 sq. ft. commercial renovation',
        'Full interior demolition and rebuild',
        'Structural restoration',
        'All-new mechanical, electrical, and plumbing systems',
        'New bathrooms and janitorial facilities',
        'Exterior landscaping, roofing, and stucco',
        'New paving, irrigation, windows, and doors',
        'Delivered as tenant-ready commercial shell'
      ],
      testimonial: {
        quote: 'IKON transformed a deteriorated building into a fully renewed commercial space, handling every phase from demolition to shell completion with expertise and precision.',
        author: 'Private Client',
        role: 'Property Owner'
      }
    },
    {
      id: 13,
      title: 'The Shelborne Hotel',
      category: 'Hotel Renovation',
      location: '1801 Collins Avenue, Miami Beach, FL',
      client: 'Crescent Heights',
      value: '',
      duration: '16 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Shelborne%20Hotel%20.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Shelborne-Hotel-1.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Shelborne%20Hotel-3.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Shelborne%20Hotel%20-5.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Shelborne%20Hotel-6.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Shelborne-South-Beach-Hotel-10.jpg',
      ],
      description: 'Complete renovation of common areas and partial hotel room renovation at the iconic Shelborne Hotel on Collins Avenue. The scope included a 12,000 sq. ft. fully redesigned pool deck with a new infinity edge pool, a complete new contemporary lobby, new front entrance design, all-new corridors and hallways throughout the entire building, a new gym and spa, new office center, new banquet hall, two new lounges, 50 hotel rooms, 12 cabanas, low-voltage and Cat 6 wiring throughout, and new fire alarm systems building-wide.',
      challenge: 'Renovating one of Miami Beach\'s landmark hotels required managing an enormous scope across multiple areas simultaneously \u2014 from the pool deck and lobby to guest rooms and back-of-house systems \u2014 while maintaining the hotel\'s operational continuity and preserving its iconic presence on Collins Avenue.',
      solution: 'IKON coordinated a large team across all renovation areas, phasing the work to keep key hotel functions operational. The result was a fully modernized hospitality environment spanning 12,000 sq. ft. of reimagined outdoor space, a new contemporary lobby, upgraded guest rooms, and completely renewed building systems.',
      features: [
        '12,000 sq. ft. redesigned pool deck',
        'New infinity edge pool',
        'Complete new contemporary lobby',
        'New front entrance design',
        'All-new corridors and hallways throughout',
        'New gym, spa, office center, and banquet hall',
        '2 new lounges and 12 cabanas',
        '50 hotel rooms renovated',
        'Low-voltage and Cat 6 wiring throughout',
        'New fire alarm system building-wide'
      ],
      testimonial: {
        quote: 'IKON delivered an extraordinary renovation of the Shelborne, transforming every corner of the property from the pool deck to the guest rooms with professionalism and exceptional craftsmanship.',
        author: 'Mordi Bitton',
        role: 'Project Manager, Crescent Heights'
      }
    },
    {
      id: 12,
      title: 'Obba Sushi Miami',
      category: 'Restaurant Renovation',
      location: '200 SE 15th Rd, Miami, FL',
      client: 'Tufic Akil',
      value: '',
      duration: '5 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami-1.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami-3.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-4.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-5.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-6.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-7.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-8.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-9.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Obba%20Sushi%20Miami,-11.webp',
      ],
      description: 'New addition and complete Japanese modern renovation of the existing Obba Sushi restaurant. The project transformed the dining space with a full contemporary Japanese aesthetic, combining clean lines, natural materials, and refined detailing to create an immersive dining environment.',
      challenge: 'The challenge was to execute a complete renovation and new addition on an operating restaurant property while delivering an authentic Japanese modern aesthetic that elevated the dining experience and brand identity of Obba Sushi.',
      solution: 'IKON completed both the new addition and the full interior renovation, bringing a cohesive Japanese modern design language throughout the space. Material selection, custom millwork, and lighting were coordinated to deliver a restaurant environment that balanced elegance with functionality.',
      features: [
        'New structural addition to existing building',
        'Complete Japanese modern interior renovation',
        'Custom millwork and finish detailing',
        'Restaurant-grade kitchen and dining buildout',
        'Cohesive contemporary Japanese aesthetic',
        'Lighting and materials curated for ambiance'
      ],
      testimonial: {
        quote: 'IKON completely transformed Obba Sushi with a beautiful Japanese modern renovation. The new addition and redesigned space exceeded all our expectations.',
        author: 'Tufic Akil',
        role: 'Owner, Obba Sushi Miami'
      }
    },
    {
      id: 18,
      title: 'The Aventura Beach Club',
      category: 'Hotel Renovation',
      location: '19201 Collins Avenue, Aventura, FL',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Aventura%20Beach%20Club.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Aventura%20Beach%20Club%20-1.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Aventura_Beach_Club-10.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Aventura_Beach_Club-11.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Aventura_Beach_Club-12.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Aventura_Beach_Club-5.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Aventura_Beach_Club-6.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Aventura_Beach_Club-7.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Aventura_Beach_Club-8.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Aventura_Beach_Club-9.jpg',
      ],
      description: 'Pool, driveway, and lobby renovation including all hotel rooms and common areas. The scope covered 25,000 sq. ft. of pool deck and driveway \u2014 installation of pavers, complete pool rehabilitation \u2014 marble installation in the lobby with all associated custom fabrications, and full tile installation across all 560 rooms.',
      challenge: 'Renovating 560 hotel rooms alongside a 25,000 sq. ft. exterior and lobby renovation required disciplined phasing and trade coordination to deliver the full scope without disrupting hotel operations.',
      solution: 'IKON coordinated exterior paver installation, pool rehabilitation, and lobby marble work in parallel with the systematic room-by-room tile renovation, ensuring all scopes were delivered on time and to hospitality standards.',
      features: [
        '25,000 sq. ft. pool deck and driveway renovation',
        'New paver installation throughout',
        'Complete pool rehabilitation',
        'Marble lobby installation with custom fabrications',
        'Full tile installation across 560 rooms',
        'All common areas renovated'
      ],
      testimonial: {
        quote: 'IKON delivered a complete renovation of the Aventura Beach Club \u2014 from the pool deck and lobby to all 560 rooms \u2014 on time and to the highest standard.',
        author: 'Private Client',
        role: 'Hotel Owner'
      }
    },
    {
      id: 15,
      title: 'Lakeside Towers',
      category: 'Large Commercial',
      location: '7595\u20137995 SW 152nd Ave, Kendall, FL',
      client: 'Private Client',
      value: '',
      duration: '24 months',
      images: ["https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/ba94ee9f7a67836a59685889354d2943-cc_ft_960.jpg",
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/b8d96d8047a1508bffe7ef5161706de15b8fc5a50a49ff393ce7388906f46eb2.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/b8d96d8047a1508bffe7ef5161706de15b8fc5a50a49ff393ce7388906f46eb2.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Lakeside%20Towers%20-4.webp',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Lakeside%20Towers%20-3.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/Lakeside%20Towers%20-2.jpeg',
      ],
      description: 'Lakeside Towers is a 13-acre residential apartment community consisting of eight 8-story mid-rise buildings. IKON Construction Group completed a full exterior and site renovation including roofing, waterproofing, exterior painting, architectural canopies, sidewalks, roadway resurfacing, parking reconfiguration, and extensive landscaping with a new irrigation system supplied from the lake. Additional improvements included a new 2,400 SF clubhouse, 2,400 SF open-air barbecue gazebo, and a new security gatehouse at the main entrance.',
      challenge: 'Managing a full exterior and site renovation across 13 acres and 8 mid-rise buildings required precise coordination of roofing, waterproofing, landscaping, and site improvement trades simultaneously while keeping residents\u2019 access and daily routines uninterrupted throughout the multi-year project.',
      solution: 'IKON implemented a structured phasing plan across all 8 buildings and site zones, coordinating roofing, waterproofing, painting, canopy installation, roadway resurfacing, and landscaping in parallel. The new clubhouse, gazebo, and security gatehouse were delivered as landmark additions that elevated the entire community.',
      features: [
        '13-acre residential community renovation',
        '8 mid-rise buildings \u2014 roofing and waterproofing',
        'Full exterior painting across all buildings',
        'Architectural canopy installation throughout',
        'Sidewalk and roadway resurfacing',
        'Parking reconfiguration',
        'New irrigation system supplied from the lake',
        'Extensive landscaping throughout grounds',
        '2,400 SF clubhouse addition',
        '2,400 SF open-air barbecue gazebo',
        'New security gatehouse at main entrance'
      ],
      testimonial: {
        quote: 'IKON transformed the entire Lakeside Towers complex, delivering a comprehensive exterior renovation across all 8 buildings and grounds with outstanding coordination and quality.',
        author: 'Carolina Mizraji',
        role: 'Project Manager / Architect'
      }
    },
    {
      id: 16,
      title: 'The Metropolitan at the Park',
      category: 'Commercial Renovation',
      location: '5320 N. Sheridan Rd, Chicago, IL',
      client: 'Crescent Heights',
      value: '',
      duration: '18 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Metropolitan%20at%20the%20Park-1.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Metropolitan%20at%20the%20Park-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Metropolitan%20at%20the%20Park-3.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Metropolitan%20at%20the%20Park-4.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Metropolitan%20at%20the%20Park-5.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Metropolitan%20at%20the%20Park-6.jpg',
      ],
      description: 'Complete interior and exterior renovation of a 280-unit residential condo conversion building in Chicago. The project covered all common areas, unit interiors, and exterior envelope, transforming the property into a market-ready condominium development for Crescent Heights.',
      challenge: 'Executing a full interior and exterior renovation of a 280-unit building in Chicago required careful coordination of all building systems, finishes, and exterior work while meeting the standards of a high-profile condo conversion for a major real estate developer.',
      solution: 'IKON delivered a comprehensive renovation covering all interior and exterior scopes, coordinating across all units and common areas to meet the developer\'s timeline and quality standards for the condo conversion launch.',
      features: [
        '280-unit full renovation',
        'Complete interior renovation of all units',
        'Full exterior building renovation',
        'Common area redesign and upgrade',
        'Condo conversion buildout',
        'High-rise building coordination',
        'Chicago market luxury standards'
      ],
      testimonial: {
        quote: 'IKON delivered a flawless renovation of the Metropolitan at the Park, handling the full scope of a 280-unit condo conversion with professionalism and precision.',
        author: 'Mordi Bitton',
        role: 'Project Manager, Crescent Heights'
      }
    },
    {
      id: 17,
      title: 'The Sea-Air Tower',
      category: 'Pool, Driveway & Lobby Renovation',
      location: '3525 South Ocean Drive, Hollywood, FL',
      client: 'Private Client',
      value: '',
      duration: '10 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Sea-Air_Tower.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Sea-Air_Tower-5.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Sea-Air_Tower-7.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Sea-Air_Tower-11.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Sea-Air_Tower-10.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Sea-Air_Tower-8.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The_Sea-Air_Tower-9.jpg',
      ],
      description: '35,000 sq. ft. of pool deck and driveway renovation including waterproofing, installation of new pavers, removal of all plants, and waterproofing of all planters. Full marble installation in the lobby with all associated custom fabrications.',
      challenge: 'Waterproofing and repaving 35,000 sq. ft. of pool deck and driveway while simultaneously executing a complete marble lobby renovation required careful sequencing to manage both exterior and interior scopes without conflict.',
      solution: 'IKON phased the exterior waterproofing and paver installation alongside the lobby marble and custom fabrication work, delivering both scopes on schedule and to a high finish standard befitting a luxury oceanfront building.',
      features: [
        '35,000 sq. ft. pool deck and driveway renovation',
        'Full waterproofing of deck and all planters',
        'New paver installation throughout',
        'Complete plant removal and replanting',
        'Marble lobby installation',
        'All custom fabrications associated'
      ],
      testimonial: {
        quote: 'IKON renovated our pool deck, driveway, and lobby to an exceptional standard, completely transforming the arrival experience at Sea-Air Tower.',
        author: 'Private Client',
        role: 'Building Management'
      }
    },
    {
      id: 19,
      title: 'The Casablanca',
      category: 'Hotel Renovation',
      location: '6345 Collins Avenue, Miami Beach, FL',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-10.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-11.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-3.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-5.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-6.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-8.webp',
      ],
      description: 'Pool, driveway, and lobby renovation including all hotel rooms and common areas. The scope covered 25,000 sq. ft. of pool deck and driveway \u2014 installation of pavers and complete pool rehabilitation \u2014 marble installation in the lobby with all associated custom fabrications, and full tile installation across all 280 rooms.',
      challenge: 'Executing a full hotel renovation on Collins Avenue, one of Miami Beach\'s busiest corridors, required careful logistics, phased delivery, and maintaining the quality expected of a Miami Beach hospitality property.',
      solution: 'IKON delivered the full exterior and interior renovation scope, coordinating paver installation, pool rehabilitation, lobby marble work, and room tile installations to transform the Casablanca into a renewed Miami Beach hotel property.',
      features: [
        '25,000 sq. ft. pool deck and driveway renovation',
        'New paver installation throughout',
        'Complete pool rehabilitation',
        'Marble lobby installation with custom fabrications',
        'Full tile installation across 280 rooms',
        'All common areas renovated',
        'Collins Avenue Miami Beach landmark'
      ],
      testimonial: {
        quote: 'IKON renovated the Casablanca from the pool deck to every guest room, delivering a transformation that revitalized the entire property.',
        author: 'Private Client',
        role: 'Hotel Owner'
      }
    },
    {
      id: 20,
      title: 'The Pavilion',
      category: 'Pool Deck & Penthouse Renovation',
      location: '5601 Collins Avenue, Miami Beach, FL',
      client: 'Private Client',
      value: '',
      duration: '8 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-10.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-11.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-2.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-5.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-6.jpeg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Casablanca-8.webp',
      ],
      description: '40,000 sq. ft. of pool deck renovation \u2014 installation of pavers set in mortar and complete pool rehabilitation. Full 10,000 sq. ft. penthouse rehabilitation including all structural work.',
      challenge: 'Combining a large-scale exterior pool deck renovation with a full structural penthouse rehabilitation on a Collins Avenue building required precise coordination between exterior and interior teams working simultaneously.',
      solution: 'IKON managed both scopes in parallel \u2014 executing the 40,000 sq. ft. paver and pool work while simultaneously completing the structural penthouse rehabilitation \u2014 delivering the full project on schedule.',
      features: [
        '40,000 sq. ft. pool deck renovation',
        'Pavers set in mortar throughout',
        'Complete pool rehabilitation',
        '10,000 sq. ft. penthouse rehabilitation',
        'Full structural penthouse work',
        'Collins Avenue Miami Beach property'
      ],
      testimonial: {
        quote: 'IKON handled both our pool deck and penthouse renovation with exceptional skill, delivering a complete transformation of the property.',
        author: 'Private Client',
        role: 'Building Owner'
      }
    },
    {
      id: 21,
      title: 'The Mantel',
      category: 'Historical Restoration',
      location: '255 W. 24th Street, Miami Beach, FL',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Mantel.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Mantel-1.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Mantel-3.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Mantel-4.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Mantel-5.jpg',
      ],
      description: 'Complete historical tile and terrazzo restoration of a 100-unit Art Deco residential building in Miami Beach. The project preserved and restored the original historical finishes throughout the building, requiring specialist craftsmanship in period-accurate tile and terrazzo techniques.',
      challenge: 'Restoring historical tile and terrazzo across a 100-unit Art Deco building required sourcing period-accurate materials and applying specialist restoration techniques to preserve the building\'s historic character while meeting modern durability standards.',
      solution: 'IKON deployed specialist restoration craftsmen to carefully restore all tile and terrazzo finishes throughout the building, matching original materials and patterns to deliver an authentic historical restoration that preserved the property\'s architectural heritage.',
      features: [
        'Historical tile restoration throughout',
        'Terrazzo restoration and repair',
        '100-unit Art Deco residential building',
        'Period-accurate material matching',
        'Specialist historical restoration craftsmanship',
        'Full building scope delivery'
      ],
      testimonial: {
        quote: 'IKON restored the historical tile and terrazzo at The Mantel with extraordinary care and craftsmanship, preserving the building\'s character for future generations.',
        author: 'Private Client',
        role: 'Building Owner'
      }
    },
    {
      id: 22,
      title: 'The Continental',
      category: 'Historical Restoration',
      location: '4000 Collins Avenue, Miami Beach, FL',
      client: 'Private Client',
      value: '',
      duration: '12 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Continental.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Continental-1.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Continental-3.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Continental-4.jpg',
      ],
      description: 'Complete tile, marble, and terrazzo installation including all custom fabrications across a 100-unit building on Collins Avenue, Miami Beach.',
      challenge: 'Installing tile, marble, and terrazzo with all custom fabrications across 100 units required precise coordination of materials, trades, and schedules to deliver a consistent, high-quality finish throughout the entire building.',
      solution: 'IKON coordinated all tile, marble, and terrazzo installation trades across the full building scope, managing custom fabrication work in parallel to deliver a cohesive, high-end finish across all 100 units on schedule.',
      features: [
        'Complete tile installation throughout',
        'Marble installation with custom fabrications',
        'Terrazzo installation across all units',
        '100-unit building full scope',
        'Custom fabrication coordination',
        'Collins Avenue Miami Beach property'
      ],
      testimonial: {
        quote: 'IKON delivered flawless tile, marble, and terrazzo work across all 100 units at The Continental \u2014 a true showcase of their craftsmanship.',
        author: 'Private Client',
        role: 'Building Owner'
      }
    },
    {
      id: 24,
      title: 'The Decoplage',
      category: 'Historical Restoration',
      location: '100 Lincoln Road, Miami Beach, FL',
      client: 'Crescent Heights',
      value: '',
      duration: '14 months',
      images: [
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Decoplage.jpg',
        'https://mxzklspbzbkxvtpyrstl.supabase.co/storage/v1/object/public/website%20photos/The%20Decoplage-1.jpg',
      ],
      description: 'Pool, driveway, and lobby renovation of a landmark condo conversion building on Lincoln Road. The scope included 55,000 sq. ft. of pool deck, upper deck, and driveway waterproofing, installation of new pavers, removal of all plants, waterproofing of all planters, marble installation in the lobby, and all associated custom fabrications.',
      challenge: 'Waterproofing and renovating 55,000 sq. ft. of pool deck, upper deck, and driveway at one of Miami Beach\'s landmark buildings on Lincoln Road required precision in both scope management and execution to protect the building\'s structure and historic character.',
      solution: 'IKON executed a comprehensive waterproofing and renovation scope across all exterior surfaces, coordinating paver installation, planter waterproofing, and the full lobby marble and custom fabrication work to deliver a complete transformation of this Miami Beach landmark.',
      features: [
        '55,000 sq. ft. pool deck, upper deck & driveway',
        'Full waterproofing of all surfaces and planters',
        'New paver installation throughout',
        'Complete plant removal and replanting',
        'Marble lobby installation',
        'All custom fabrications associated',
        'Lincoln Road Miami Beach landmark',
        'Historic condo conversion building'
      ],
      testimonial: {
        quote: 'IKON delivered an exceptional renovation of the Decoplage \u2014 55,000 sq. ft. of waterproofing and paving alongside a stunning lobby transformation on one of Miami Beach\'s most iconic buildings.',
        author: 'Mordi Bitton',
        role: 'Project Manager, Crescent Heights'
      }
    },
  ];

  const currentIndex = projects.findIndex(p => p.id === parseInt(id || '0'));
  const project = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const handleBackToProjects = () => {
    navigate('/projects');
  };

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-orange-500 hover:text-orange-600 font-medium">
            \u2190 Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </button>
        </div>
      </section>

      {/* Project Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium capitalize mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium text-gray-900">{project.location}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-500 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-medium text-gray-900">{project.duration}</div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center md:ml-6">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-900 text-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
            "{project.testimonial.quote}"
          </blockquote>
          <div>
            <div className="font-semibold text-xl">{project.testimonial.author}</div>
            <div className="opacity-90">{project.testimonial.role}</div>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="w-full sm:w-auto">
              {prevProject ? (
                <Link to={`/projects/${prevProject.id}`} className="group flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-200">
                    <ChevronLeft className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Previous Project</div>
                    <div className="text-base font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-200">{prevProject.title}</div>
                  </div>
                </Link>
              ) : (
                <div className="w-full sm:w-48" />
              )}
            </div>
            <div className="hidden sm:block w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
            <div className="w-full sm:w-auto">
              {nextProject ? (
                <Link to={`/projects/${nextProject.id}`} className="group flex items-center gap-4 text-right justify-end">
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Next Project</div>
                    <div className="text-base font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-200">{nextProject.title}</div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-200">
                    <ChevronRight className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors duration-200" />
                  </div>
                </Link>
              ) : (
                <div className="w-full sm:w-48" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us bring your vision to life with the same dedication and quality showcased in this project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;