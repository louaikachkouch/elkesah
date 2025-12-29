import React, { useState } from 'react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a className="text-lg font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors" href="#">EL KESAH</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#shop" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Shop</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-t border-slate-200">
          <div className="px-6 py-4 space-y-2">
            <a href="#shop" className="block text-sm font-medium text-slate-700 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors">Shop</a>
            <a href="#about" className="block text-sm font-medium text-slate-700 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors">About</a>
            <a href="#contact" className="block text-base font-medium text-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
