'use client';

import React, { useState } from 'react';

interface ProductItem {
  id: string;
  name: string;
  price: number;
  subtitle: string;
  colorGrad: string;
}

export function SellOnline() {
  const [cart, setCart] = useState<{ [key: string]: number }>({
    'prod-1': 1,
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const products: ProductItem[] = [
    {
      id: 'prod-1',
      name: 'Handcrafted Ceramic Vessel',
      price: 699,
      subtitle: 'Studio-glazed clay & stoneware',
      colorGrad: 'from-[#4a3b2c] to-[#2e241b]',
    },
    {
      id: 'prod-2',
      name: 'Single-Origin Reserve Blend',
      price: 849,
      subtitle: 'Micro-lot roasted beans, 250g',
      colorGrad: 'from-[#2b3528] to-[#1a2318]',
    },
    {
      id: 'prod-3',
      name: 'Minimalist Leather Journal',
      price: 1199,
      subtitle: 'Full-grain vegetable tanned hide',
      colorGrad: 'from-[#3a2830] to-[#25171e]',
    },
  ];

  const addToCart = (product: ProductItem) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
    setToastMessage(`Added "${product.name}" to cart!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const subtotal = Object.entries(cart).reduce((sum, [id, count]) => {
    const prod = products.find((p) => p.id === id);
    return sum + (prod ? prod.price * count : 0);
  }, 0);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F1] text-[#221D15] overflow-hidden" id="sell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#221D15]/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0FA88F]" />
            <span className="font-label text-xs font-semibold tracking-wider text-[#221D15] uppercase">
              Ecommerce
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#221D15] tracking-tight">
            Sell online.{' '}
            <span className="italic font-normal text-[#6B7D50]">Really</span> sell.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#221D15]/75 mt-4">
            A full store that sells while you sleep — where every sale, every customer, and every rupee is 100% yours.
          </p>
        </div>

        {/* Interactive Mini Storefront Stage */}
        <div className="max-w-4xl mx-auto bg-white border border-[#221D15]/15 rounded-2xl shadow-xl overflow-hidden relative">
          {/* Store Header Bar */}
          <div className="px-6 py-4 bg-[#FBF8F2] border-b border-[#221D15]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold text-[#221D15]">
                Artisan Atelier Store
              </span>
              <span className="text-[11px] font-label bg-[#0FA88F]/15 text-[#0FA88F] font-bold px-2 py-0.5 rounded-full">
                Live Store Demo
              </span>
            </div>

            {/* Cart Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#FAF7F1] hover:bg-white border border-[#221D15]/15 px-4 py-1.5 rounded-full font-label text-xs font-semibold text-[#221D15] transition-colors shadow-sm"
            >
              <span>🛒 Cart</span>
              <span className="w-5 h-5 rounded-full bg-[#6B7D50] text-white flex items-center justify-center text-[11px] font-bold">
                {totalItems}
              </span>
            </button>
          </div>

          {/* Product Showcase Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-[#FAF7F1] border border-[#221D15]/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#6B7D50]/40 transition-all duration-200"
              >
                <div>
                  <div
                    className={`h-36 rounded-lg bg-gradient-to-tr ${prod.colorGrad} flex items-center justify-center p-3 text-white text-center shadow-inner`}
                  >
                    <span className="font-label text-xs font-medium tracking-wide uppercase opacity-80">
                      Signature Product
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-semibold text-[#221D15] mt-3">
                    {prod.name}
                  </h4>
                  <p className="font-body text-xs text-[#221D15]/65 mt-0.5">
                    {prod.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#221D15]/10 flex items-center justify-between">
                  <span className="font-mono text-base font-bold text-[#221D15]">
                    ₹{prod.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => addToCart(prod)}
                    className="bg-[#6B7D50] hover:bg-[#5A6B42] text-white text-xs font-label font-semibold px-3.5 py-1.5 rounded-full transition-all active:scale-95 shadow-sm"
                  >
                    Add to Cart +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Value Badges Banner */}
          <div className="px-6 py-4 bg-[#FAF7F1] border-t border-[#221D15]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="space-y-0.5">
              <div className="font-label text-xs font-bold text-[#6B7D50]">0% Cut</div>
              <div className="font-body text-[11px] text-[#221D15]/65">No platform transaction fees</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-label text-xs font-bold text-[#6B7D50]">Instant UPI</div>
              <div className="font-body text-[11px] text-[#221D15]/65">Direct payment to your account</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-label text-xs font-bold text-[#6B7D50]">WhatsApp Routing</div>
              <div className="font-body text-[11px] text-[#221D15]/65">Orders land straight in chat</div>
            </div>
            <div className="space-y-0.5">
              <div className="font-label text-xs font-bold text-[#6B7D50]">Sub-Second Speed</div>
              <div className="font-body text-[11px] text-[#221D15]/65">Zero abandonment lag</div>
            </div>
          </div>
        </div>

        {/* Interactive Slide-Over Cart Drawer */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-fade-in">
            <div className="bg-[#FAF7F1] w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#221D15]/15">
              <div>
                <div className="flex items-center justify-between border-b border-[#221D15]/10 pb-4">
                  <h3 className="font-heading text-xl font-bold text-[#221D15]">
                    Your Shopping Cart ({totalItems})
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="p-1.5 text-[#221D15]/60 hover:text-[#221D15] rounded-full hover:bg-black/5"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto">
                  {Object.entries(cart).map(([id, count]) => {
                    const prod = products.find((p) => p.id === id);
                    if (!prod) return null;
                    return (
                      <div
                        key={id}
                        className="bg-white border border-[#221D15]/10 rounded-xl p-3.5 flex items-center justify-between"
                      >
                        <div>
                          <div className="font-heading text-sm font-semibold text-[#221D15]">
                            {prod.name}
                          </div>
                          <div className="font-mono text-xs text-[#6B7D50] font-bold">
                            ₹{prod.price} each
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => removeFromCart(id)}
                            className="w-7 h-7 rounded-full bg-[#FAF7F1] border border-[#221D15]/15 text-xs font-bold flex items-center justify-center hover:bg-[#F2F5ED]"
                          >
                            -
                          </button>
                          <span className="font-mono text-sm font-semibold w-4 text-center">
                            {count}
                          </span>
                          <button
                            type="button"
                            onClick={() => addToCart(prod)}
                            className="w-7 h-7 rounded-full bg-[#FAF7F1] border border-[#221D15]/15 text-xs font-bold flex items-center justify-center hover:bg-[#F2F5ED]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {totalItems === 0 && (
                    <div className="text-center py-12 text-sm text-[#221D15]/60 font-body">
                      Your cart is currently empty. Add a product above!
                    </div>
                  )}
                </div>
              </div>

              {/* Cart Footer */}
              <div className="border-t border-[#221D15]/10 pt-4 space-y-3">
                <div className="flex items-center justify-between text-base font-heading font-bold text-[#221D15]">
                  <span>Subtotal</span>
                  <span className="font-mono text-lg">₹{subtotal}</span>
                </div>
                <div className="text-xs text-[#221D15]/60 font-body">
                  Taxes and instant shipping calculated at checkout.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    alert(`Demo Checkout: Direct order for ₹${subtotal} routed to WhatsApp Business.`);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-sm py-3.5 rounded-full shadow-md transition-colors text-center flex items-center justify-center gap-2"
                >
                  <span>Order via WhatsApp &amp; UPI →</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#151913] text-white px-4 py-2.5 rounded-xl shadow-2xl border border-white/10 font-body text-xs flex items-center gap-2 animate-slide-up">
            <span className="text-[#2BD4BD]">✓</span>
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
}
