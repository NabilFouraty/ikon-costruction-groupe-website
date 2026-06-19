import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlueprintLanding = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const stages = [
      { delay: 200, stage: 1 }, // Start drawing logo elements
      { delay: 1200, stage: 2 }, // Draw IKON text
      { delay: 2200, stage: 3 }, // Draw Construction Group text
      { delay: 3200, stage: 4 }, // Transform to modern and move to header
      { delay: 4000, stage: 5 }, // Navigate to homepage
    ];

    stages.forEach(({ delay, stage }) => {
      setTimeout(() => {
        setAnimationStage(stage);
        if (stage === 5) {
          navigate('/');
        }
      }, delay);
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative flex items-center justify-center">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Construction Lines and Annotations */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        animationStage >= 1 ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Scale annotation */}
        <div className="absolute top-20 right-20 text-xs text-gray-400 font-mono transform rotate-12">
          SCALE 1:1
        </div>
        <div className="absolute top-32 right-16 text-xs text-gray-400 font-mono transform rotate-12">
          IKON - MAIN LOGO
        </div>
        
        {/* Construction lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <pattern id="hatch" patternUnits="userSpaceOnUse" width="4" height="4">
              <path d="M 0,4 l 4,-4 M -1,1 l 2,-2 M 3,5 l 2,-2" stroke="#D1D5DB" strokeWidth="0.5"/>
            </pattern>
          </defs>
          
          {/* Dimension lines */}
          <line x1="200" y1="150" x2="600" y2="150" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1="200" y1="145" x2="200" y2="155" stroke="#9CA3AF" strokeWidth="0.5" />
          <line x1="600" y1="145" x2="600" y2="155" stroke="#9CA3AF" strokeWidth="0.5" />
          <text x="400" y="140" textAnchor="middle" className="text-xs fill-gray-400 font-mono">400mm</text>
        </svg>
      </div>

      {/* Main Logo Animation Container */}
      <div className={`relative transition-all duration-1000 ${
        animationStage >= 4 ? 'transform scale-50 -translate-y-96 -translate-x-96' : 'transform scale-100'
      }`}>
        
        {/* IKON Logo SVG */}
        <div className="relative flex flex-col items-center justify-center">
          <svg 
            width="400" 
            height="120" 
            viewBox="0 0 400 120" 
            className="w-full max-w-lg"
          >
            {/* Logo Elements */}
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              
              {/* First Triangle (Orange) */}
              <path 
                d="M 20 20 L 60 20 L 60 60 L 20 60 Z M 20 20 L 60 60"
                fill={animationStage >= 1 ? '#F97316' : 'none'}
                stroke={animationStage >= 1 ? '#6B7280' : 'transparent'}
                strokeWidth="1"
                className={`transition-all duration-800 ${
                  animationStage >= 1 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: animationStage >= 1 ? 'none' : '200',
                  strokeDashoffset: animationStage >= 1 ? '0' : '200',
                  animation: animationStage >= 1 ? 'drawPath 0.8s ease-in-out' : 'none'
                }}
              />
              
              {/* Second Triangle (Gray) */}
              <path 
                d="M 60 20 L 100 20 L 60 60 Z"
                fill={animationStage >= 1 ? '#6B7280' : 'none'}
                stroke={animationStage >= 1 ? '#6B7280' : 'transparent'}
                strokeWidth="1"
                className={`transition-all duration-800 delay-200 ${
                  animationStage >= 1 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: animationStage >= 1 ? 'none' : '120',
                  strokeDashoffset: animationStage >= 1 ? '0' : '120',
                  animation: animationStage >= 1 ? 'drawPath 0.6s ease-in-out 0.2s both' : 'none'
                }}
              />
              
              {/* Third Triangle (Orange) */}
              <path 
                d="M 100 20 L 140 20 L 100 60 Z"
                fill={animationStage >= 1 ? '#F97316' : 'none'}
                stroke={animationStage >= 1 ? '#6B7280' : 'transparent'}
                strokeWidth="1"
                className={`transition-all duration-800 delay-400 ${
                  animationStage >= 1 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: animationStage >= 1 ? 'none' : '120',
                  strokeDashoffset: animationStage >= 1 ? '0' : '120',
                  animation: animationStage >= 1 ? 'drawPath 0.6s ease-in-out 0.4s both' : 'none'
                }}
              />
              
              {/* Bottom Triangle (Gray) */}
              <path 
                d="M 20 60 L 60 60 L 20 100 Z"
                fill={animationStage >= 1 ? '#6B7280' : 'none'}
                stroke={animationStage >= 1 ? '#6B7280' : 'transparent'}
                strokeWidth="1"
                className={`transition-all duration-800 delay-300 ${
                  animationStage >= 1 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: animationStage >= 1 ? 'none' : '120',
                  strokeDashoffset: animationStage >= 1 ? '0' : '120',
                  animation: animationStage >= 1 ? 'drawPath 0.6s ease-in-out 0.3s both' : 'none'
                }}
              />
            </g>

            {/* IKON Text */}
            <g fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              
              {/* I */}
              <path 
                d="M 160 30 L 160 70 M 150 30 L 170 30 M 150 70 L 170 70"
                className={`transition-all duration-600 ${
                  animationStage >= 2 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: animationStage >= 2 ? 'none' : '100',
                  strokeDashoffset: animationStage >= 2 ? '0' : '100',
                  animation: animationStage >= 2 ? 'drawPath 0.5s ease-in-out' : 'none'
                }}
              />
              
              {/* K */}
              <path 
                d="M 190 30 L 190 70 M 190 50 L 210 30 M 190 50 L 210 70"
                className={`transition-all duration-600 delay-100 ${
                  animationStage >= 2 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: animationStage >= 2 ? 'none' : '120',
                  strokeDashoffset: animationStage >= 2 ? '0' : '120',
                  animation: animationStage >= 2 ? 'drawPath 0.5s ease-in-out 0.1s both' : 'none'
                }}
              />
              
              {/* O */}
              <circle 
                cx="240" cy="50" r="20"
                className={`transition-all duration-600 delay-200 ${
                  animationStage >= 2 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: animationStage >= 2 ? 'none' : '126',
                  strokeDashoffset: animationStage >= 2 ? '0' : '126',
                  animation: animationStage >= 2 ? 'drawCircle 0.5s ease-in-out 0.2s both' : 'none'
                }}
              />
              
              {/* N */}
              <path 
                d="M 280 30 L 280 70 M 280 30 L 300 70 M 300 30 L 300 70"
                className={`transition-all duration-600 delay-300 ${
                  animationStage >= 2 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  strokeDasharray: animationStage >= 2 ? 'none' : '140',
                  strokeDashoffset: animationStage >= 2 ? '0' : '140',
                  animation: animationStage >= 2 ? 'drawPath 0.5s ease-in-out 0.3s both' : 'none'
                }}
              />
            </g>
          </svg>

          {/* Construction Group Text */}
          <div className={`mt-4 text-center transition-all duration-600 ${
            animationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-lg font-serif text-gray-600 tracking-[0.2em] uppercase">
              Construction Group Inc
            </h2>
          </div>
        </div>

        {/* Modern Logo Overlay (appears during transition) */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          animationStage >= 4 ? 'opacity-100' : 'opacity-0'
        }`}>
          <img
            src="https://saquyjoebxqmtkmubwyd.supabase.co/storage/v1/object/sign/homepage/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MWFlYjlmOS0xNjdiLTRmMDUtYTE2Yi1jNzM5MmRhMjQ5NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJob21lcGFnZS9sb2dvLnBuZyIsImlhdCI6MTc1NzUzMDMwMywiZXhwIjoxNzg5MDY2MzAzfQ.jCECA1w4SNCKzU8NTRk8P36repMrnN1Q-evhl4-ey00"
            alt="IKON Construction Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => navigate('/')}
        className={`absolute top-8 right-8 text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm ${
          animationStage >= 5 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        Skip Animation
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes drawPath {
          from {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
          }
          to {
            stroke-dasharray: 200;
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes drawCircle {
          from {
            stroke-dasharray: 126;
            stroke-dashoffset: 126;
          }
          to {
            stroke-dasharray: 126;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BlueprintLanding;