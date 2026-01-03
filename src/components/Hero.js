import React from 'react';

function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-widest text-white/80 uppercase border border-white/30 rounded-full backdrop-blur-sm">
            Premium Collection
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-wide drop-shadow-2xl">
            EL KESAH
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            Born to be a Kesah
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#shop" 
              className="inline-block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Shop Now
            </a>
            <a 
              href="#about" 
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
