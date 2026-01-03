import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200 mt-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h4 className="text-lg font-serif font-bold text-slate-900">EL KESAH</h4>
          <p className="mt-4 text-sm text-slate-600 max-w-sm leading-relaxed">Streetwear engineered for cold climates.</p>
        </div>
        <div className="flex gap-12 md:gap-16">
          <div>
            <h5 className="font-semibold text-sm text-slate-900 uppercase tracking-wide">Social</h5>
            <a className="block text-slate-600 hover:text-slate-900 text-sm mt-4 transition-colors" href="#">Instagram</a>
            <a className="block text-slate-600 hover:text-slate-900 text-sm mt-3 transition-colors" href="#">Facebook</a>
            <a className="block text-slate-600 hover:text-slate-900 text-sm mt-3 transition-colors" href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between text-xs text-slate-500 border-t border-slate-200">
        <span>© 2026 EL KESAH</span>
        <span>POWERED BY HYDROLIC STATION</span>
      </div>
    </footer>
  );
}

export default Footer;
