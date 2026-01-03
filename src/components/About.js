import React from 'react';

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-slate-200/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-widest text-slate-600 uppercase bg-slate-100 rounded-full">
            Our Story
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-6">
            About EL KESAH
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-300 via-slate-900 to-slate-300 mx-auto rounded-full"></div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:-rotate-1 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/90 text-lg font-light italic">"Style is a way to say who you are without having to speak."</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Crafting Distinctive Streetwear
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              EL KESAH brings distinctive streetwear that combines urban culture with premium craftsmanship. Born from a passion for authentic self-expression, our brand represents more than just clothing, it's a lifestyle.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Each piece in our collection tells a story, blending contemporary design with timeless quality. We believe fashion should empower you to express your unique identity.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-slate-900">500+</span>
                <span className="text-sm text-slate-500">Happy Customers</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-slate-900">50+</span>
                <span className="text-sm text-slate-500">Unique Designs</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-slate-900">100%</span>
                <span className="text-sm text-slate-500">Quality Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
