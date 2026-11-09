import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    total,
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [diningOption, setDiningOption] = useState<'dine-in' | 'pre-order'>('dine-in');
  const [tableNumber, setTableNumber] = useState('Table 7 (Salon)');
  const [specialNote, setSpecialNote] = useState('');

  if (!isCartOpen) return null;

  const handleProceedCheckout = () => {
    setCheckoutModalOpen(true);
  };

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex w-full sm:w-auto">
        <div className="w-full sm:w-screen sm:max-w-md bg-[#141414] subtle-border border-r-0 shadow-2xl flex flex-col justify-between pt-safe pb-safe">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[rgba(207,143,77,0.25)] flex items-center justify-between bg-[#181818] shrink-0">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#D98739]" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F1EC]">
                Your Dining Order
              </h3>
              <span className="text-xs bg-[#242424] px-2 py-0.5 rounded text-[#E6AF68] font-bold">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-[#858079] hover:text-[#F5F1EC] rounded-full hover:bg-[#242424] transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 rounded-full bg-[#1e1c1b] subtle-border flex items-center justify-center text-[#858079] mb-3">
                  <Utensils className="w-7 h-7 text-[#D98739]/50" />
                </div>
                <h4 className="font-serif text-lg text-[#F5F1EC] mb-1">Your order is empty</h4>
                <p className="text-xs text-[#858079] max-w-xs mb-5">
                  Explore our curated seasonal collection and add exquisite creations to your table.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 bg-[#1e1c1b] subtle-border hover:border-[#D98739] text-[#E6AF68] text-xs font-semibold uppercase tracking-wider rounded-full transition-colors min-h-[44px]"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.dish.id}
                  className="flex gap-3 p-3 rounded-xl bg-[#1b1918] subtle-border items-center"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.dish.image}
                    alt={item.dish.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg bg-[#242424] shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-xs sm:text-sm font-bold text-[#F5F1EC] truncate">
                      {item.dish.name}
                    </h5>
                    <p className="text-xs text-[#E6AF68] font-medium mt-0.5 tabular-nums">
                      ₹{item.dish.price.toLocaleString('en-IN')}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 sm:gap-3 mt-2">
                      <div className="flex items-center gap-1.5 bg-[#141414] subtle-border rounded-md px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#858079] hover:text-[#F5F1EC] active:scale-95"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-[#F5F1EC] w-4 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#858079] hover:text-[#F5F1EC] active:scale-95"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.dish.id)}
                        className="w-8 h-8 flex items-center justify-center text-[#858079] hover:text-red-400 active:scale-95"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal per item */}
                  <div className="text-right shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-[#F5F1EC] tabular-nums">
                      ₹{(item.dish.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Calculations */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[rgba(207,143,77,0.25)] bg-[#181818] space-y-3.5 shrink-0">
              <div className="space-y-1.5 text-xs text-[#B7B0A8]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums text-[#F5F1EC]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Luxury Dining GST (5%)</span>
                  <span className="tabular-nums text-[#F5F1EC]">
                    ₹{tax.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[rgba(207,143,77,0.15)] text-sm font-bold text-[#F5F1EC]">
                  <span>Total Due</span>
                  <span className="text-base text-[#E6AF68] tabular-nums">
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleProceedCheckout}
                className="w-full py-4 bg-gradient-to-r from-[#D98739] via-[#E6AF68] to-[#D98739] text-[#090909] font-bold text-xs uppercase tracking-widest rounded-xl hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg min-h-[48px]"
              >
                <span>PROCEED TO TABLE SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Demo Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#141414] subtle-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => {
                setCheckoutModalOpen(false);
                setOrderPlaced(false);
              }}
              className="absolute top-4 right-4 text-[#858079] hover:text-[#F5F1EC] w-10 h-10 flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!orderPlaced ? (
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#D98739] font-semibold block mb-1">
                  Service Dispatch
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1EC] mb-1.5">
                  Complete Table Order
                </h3>
                <p className="text-xs text-[#B7B0A8] mb-4 sm:mb-6">
                  Select your table or dining preference for this session.
                </p>

                <div className="space-y-3.5 mb-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B7B0A8] mb-1.5 font-medium">
                      Order Service Type
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setDiningOption('dine-in')}
                        className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors min-h-[44px] flex items-center justify-center ${
                          diningOption === 'dine-in'
                            ? 'bg-[#D98739] text-[#090909]'
                            : 'bg-[#1b1918] subtle-border text-[#B7B0A8]'
                        }`}
                      >
                        Table Dining
                      </button>
                      <button
                        type="button"
                        onClick={() => setDiningOption('pre-order')}
                        className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors min-h-[44px] flex items-center justify-center ${
                          diningOption === 'pre-order'
                            ? 'bg-[#D98739] text-[#090909]'
                            : 'bg-[#1b1918] subtle-border text-[#B7B0A8]'
                        }`}
                      >
                        Course Pre-Order
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B7B0A8] mb-1.5 font-medium">
                      Table / Booth Designation
                    </label>
                    <input
                      type="text"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-2.5 text-base sm:text-xs text-[#F5F1EC] focus:outline-none focus:border-[#D98739] min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B7B0A8] mb-1.5 font-medium">
                      Kitchen / Sommelier Instructions
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Serve truffle pasta first, medium-rare steak"
                      value={specialNote}
                      onChange={(e) => setSpecialNote(e.target.value)}
                      className="w-full bg-[#1e1c1b] subtle-border rounded-xl px-4 py-2.5 text-base sm:text-xs text-[#F5F1EC] focus:outline-none focus:border-[#D98739] min-h-[44px]"
                    />
                  </div>

                  <div className="bg-[#1b1918] subtle-border rounded-xl p-3 text-xs space-y-1.5 text-[#B7B0A8]">
                    <div className="flex justify-between">
                      <span>Items Count:</span>
                      <span className="text-[#F5F1EC]">{cart.reduce((s, i) => s + i.quantity, 0)} courses</span>
                    </div>
                    <div className="flex justify-between font-bold text-[#E6AF68]">
                      <span>Grand Total:</span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 bg-[#242424]/60 rounded-lg text-[10px] text-[#858079] mb-5">
                  * Demonstration Notice: This order simulates culinary kitchen ticket routing for test verification.
                </div>

                <button
                  type="button"
                  onClick={handleConfirmOrder}
                  className="w-full py-3.5 bg-gradient-to-r from-[#D98739] to-[#E6AF68] text-[#090909] font-bold text-xs uppercase tracking-widest rounded-xl hover:brightness-110 active:scale-98 transition-all min-h-[48px]"
                >
                  CONFIRM &amp; DISPATCH TO KITCHEN
                </button>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-[#1e1c1b] subtle-border text-[#E6AF68] mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8 text-[#D98739]" />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1EC] mb-1">
                  Ticket Sent to Kitchen
                </h4>
                <p className="text-xs text-[#B7B0A8] mb-3">
                  Executive Chef Jean-Luc&apos;s brigade has received ticket for {tableNumber}.
                </p>
                <p className="text-[11px] text-[#858079] mb-5">
                  Estimated course arrival: 18&ndash;22 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    setIsCartOpen(false);
                    setOrderPlaced(false);
                  }}
                  className="px-8 py-3 bg-[#1e1c1b] subtle-border hover:border-[#D98739] text-[#E6AF68] text-xs font-semibold uppercase tracking-wider rounded-full transition-colors min-h-[44px]"
                >
                  Return to Table
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
