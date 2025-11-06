'use client';

import { useEffect, useState } from 'react';
import FlightSearchForm from './FlightSearchForm';
import Image from 'next/image';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen h-screen overflow-hidden">
      {/* ✅ Local background image from /public */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/dark-hero-bg.jpg')`, // ✅ Local path
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-purple-900/70" />

      {/* Particle Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animation: `rain ${3 + Math.random() * 2}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center pt-16 sm:pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your Journey
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Awaits
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Discover the world with SkySwift. Book flights to over 1,000 destinations worldwide with our seamless booking experience and unbeatable prices.
            </p>
          </div>

          <FlightSearchForm />
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center cursor-pointer">
          <i className="ri-arrow-down-line text-white/60 text-lg"></i>
        </div>
      </div>

      <style jsx>{`
        @keyframes rain {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

