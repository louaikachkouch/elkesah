import React, { useState, useRef } from 'react';

// IMPORTANT: Replace this with your actual email address
const YOUR_EMAIL = 'elkesah.brand@gmail.com';

function ProductModal({ product, onClose }) {
  const [mainImage, setMainImage] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const orderFormRef = useRef(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState(null);
  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    size: 'M',
    quantity: 1
  });

  if (!product) return null;

  const formatPrice = (n) => `${n.toFixed(2)} DT`;

  // Additional product images for the gallery
  const additionalImages = product.images || [
    product.image,
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=1000&auto=format&fit=crop"
  ];

  // Use mainImage if set, otherwise use first image
  const displayImage = mainImage || additionalImages[0];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOrderChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setOrderLoading(true);
    setOrderError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Order - ${product.name} - EL KESAH`,
          product: product.name,
          price: formatPrice(product.price),
          name: orderData.name,
          email: orderData.email,
          phone: orderData.phone,
          address: orderData.address,
          size: orderData.size,
          quantity: orderData.quantity,
          total: formatPrice(product.price * orderData.quantity)
        })
      });

      if (response.ok) {
        setOrderSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Failed to submit order');
      }
    } catch (err) {
      setOrderError('Failed to submit order. Please try again.');
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close button */}
        <div className="sticky top-0 bg-white z-10 flex justify-end p-4 border-b border-slate-100">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <svg className="h-6 w-6 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="w-full h-64 md:h-80 bg-slate-100 rounded-xl overflow-hidden">
                <img 
                  src={displayImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-3">
                {additionalImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`h-20 md:h-24 bg-slate-100 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${displayImage === img ? 'border-slate-900' : 'border-transparent hover:border-slate-400'}`}
                    onClick={() => setMainImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <span className="inline-block bg-slate-200 text-slate-700 font-semibold text-xs px-3 py-1.5 rounded-full w-fit">
                {product.tag}
              </span>
              
              <h2 className="mt-4 text-3xl font-serif font-bold text-slate-900">
                {product.name}
              </h2>
              
              <p className="mt-2 text-2xl font-semibold text-slate-800">
                {formatPrice(product.price)}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Description</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {product.description || `Premium quality ${product.name.toLowerCase()} from our ${product.category} collection. Crafted with attention to detail and designed for comfort in cold climates. Features durable construction and a modern streetwear aesthetic that stands out.`}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Category</h3>
                <p className="mt-2 text-slate-600">{product.category}</p>
              </div>

              {/* Order Button or Form */}
              {!showOrderForm ? (
                <button 
                  onClick={() => {
                    setShowOrderForm(true);
                    setTimeout(() => {
                      orderFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="mt-8 w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Order Now
                </button>
              ) : (
                <div ref={orderFormRef} className="mt-6 border-t border-slate-200 pt-6">
                  {orderSubmitted ? (
                    <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center">
                      <p className="font-semibold">Order Submitted Successfully!</p>
                      <p className="text-sm mt-1">We'll contact you soon to confirm your order.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleOrderSubmit} className="space-y-3">
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Order Details</h3>
                      
                      {orderError && (
                        <div className="p-3 bg-red-100 text-red-800 rounded-lg text-sm">
                          {orderError}
                        </div>
                      )}

                      <input
                        type="text"
                        name="name"
                        value={orderData.name}
                        onChange={handleOrderChange}
                        required
                        placeholder="Full Name"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-sm"
                      />
                      
                      <input
                        type="email"
                        name="email"
                        value={orderData.email}
                        onChange={handleOrderChange}
                        required
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-sm"
                      />
                      
                      <input
                        type="tel"
                        name="phone"
                        value={orderData.phone}
                        onChange={handleOrderChange}
                        required
                        placeholder="Phone Number"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-sm"
                      />
                      
                      <textarea
                        name="address"
                        value={orderData.address}
                        onChange={handleOrderChange}
                        required
                        placeholder="Shipping Address"
                        rows="2"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-sm resize-none"
                      />
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-slate-600 mb-1">Size</label>
                          <select
                            name="size"
                            value={orderData.size}
                            onChange={handleOrderChange}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-sm"
                          >
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-slate-600 mb-1">Quantity</label>
                          <input
                            type="number"
                            name="quantity"
                            value={orderData.quantity}
                            onChange={handleOrderChange}
                            min="1"
                            max="10"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div className="pt-2 flex gap-3">
                        <button
                          type="button"
                          onClick={() => setShowOrderForm(false)}
                          disabled={orderLoading}
                          className="flex-1 py-3 px-4 border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={orderLoading}
                          className="flex-1 bg-slate-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {orderLoading ? 'Submitting...' : 'Submit Order'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
