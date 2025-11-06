'use client';

import { useState } from 'react';
import Image from 'next/image'; // ✅ Import Next.js Image component

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-line' },
    { id: 'enrollment', label: 'Enrollment', icon: 'ri-user-add-line' },
    { id: 'capture', label: 'Live Capture', icon: 'ri-camera-line' },
    { id: 'reports', label: 'Reports', icon: 'ri-file-chart-line' },
    { id: 'settings', label: 'Settings', icon: 'ri-settings-line' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-xl border-b border-gray-800">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left section (Logo + Title) */}
          <div className="flex items-center space-x-3">
            {/* ✅ Replace the gradient box with your actual logo */}
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png" // Path from /public/logo.png
                alt="AttendEye Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">AttendEye</h1>
              <p className="text-sm text-gray-400 hidden sm:block">
                AI Face Recognition System
              </p>
            </div>
          </div>

          {/* Right side navigation (desktop) */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span className="font-medium hidden lg:block">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            <i className="ri-menu-line text-xl text-gray-300"></i>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 cursor-pointer ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
