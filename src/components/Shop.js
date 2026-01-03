import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const products = [
  { 
    id: 1, 
    name: "Hoodie", 
    price: 80, 
    category: "Winter", 
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop", 
    tag: "New Arrival",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="shop" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Shop</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Shop;
