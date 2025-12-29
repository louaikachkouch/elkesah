import React from 'react';

function ProductCard({ product, onClick }) {
  const formatPrice = (n) => `${n.toFixed(2)} DT`;

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();
  };

  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
      <a href="#" onClick={handleClick} className="block">
        <div className="w-full h-48 sm:h-56 bg-slate-100 overflow-hidden">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-5">
          <span className="inline-block bg-slate-200 text-slate-700 font-semibold text-xs px-3 py-1.5 rounded-full">{product.tag}</span>
          <div className="mt-4 text-base font-serif font-bold text-slate-900">{product.name}</div>
          <div className="mt-3 text-sm text-slate-600 font-semibold">{formatPrice(product.price)}</div>
        </div>
      </a>
    </article>
  );
}

export default ProductCard;
