import { useEffect, useState } from 'react';
import { FaTimes, FaTrash, FaPaperPlane } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const contactNumber = '+255683186987';

const CartModal = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity,
    cartCount
  } = useCart();

  const [cartProducts, setCartProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Mini chat state
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const whatsappURL = `https://wa.me/${contactNumber.replace(/\+/g,'')}?text=Hello! I want to order my cart items.`;
  const smsURL = `sms:${contactNumber}?body=Hello! I want to order my cart items.`;
  const callURL = `tel:${contactNumber}`;

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : '';
  }, [isCartOpen]);

  useEffect(() => {
    const cartItems = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    }).filter(Boolean);

    setCartProducts(cartItems);

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [cart]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages(prev => [...prev, { sender: 'user', text: newMessage }]);
    setNewMessage('');

    // Simulate mhudumu reply (for demo purposes)
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'staff', text: 'Thank you! We received your message.' }]);
    }, 1000);
  };

  if (!isCartOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setIsCartOpen(false)}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] mx-4 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {cartCount > 0 ? 'Your Cart' : 'Cart is Empty'}
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {cartCount === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Your cart is empty.
              </p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartProducts.map(item => (
                <div 
                  key={item.id}
                  className="flex items-center gap-4 p-3 border-b border-gray-200 dark:border-gray-700"
                >
                  <img 
                    src={item.imageSrc} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md max-h-[80px]"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-green-600 dark:text-green-400">
                      Tsh {(item.price * 2600).toFixed(0)} {item.unit}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md"
                    >-</button>
                    <span className="w-10 text-center dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md"
                    >+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 p-2 dark:text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Subtotal */}
        {cartCount > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-2">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-gray-700 dark:text-gray-300">Subtotal:</span>
              <span className="font-bold text-gray-900 dark:text-white">
                Tsh {(subtotal * 2600).toFixed(0)}
              </span>
            </div>

            {/* Order / Contact Buttons */}
            <div className="flex flex-col gap-2">
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-md text-center">Order via WhatsApp</a>
              <a href={smsURL} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md text-center">Order via SMS</a>
              <a href={callURL} className="w-full bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-md text-center">Call Us</a>
            </div>

            {/* Mini Chat */}
            <div className="mt-4 border-t pt-2">
              <h3 className="font-medium text-gray-800 dark:text-white mb-2">Chat with us</h3>
              <div className="h-40 overflow-y-auto bg-gray-100 dark:bg-gray-700 p-2 rounded-md space-y-1">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`p-1 rounded ${msg.sender === 'user' ? 'bg-green-200 dark:bg-green-600 text-gray-800' : 'bg-gray-300 dark:bg-gray-600 text-gray-900'} max-w-xs`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button onClick={handleSendMessage} className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-md flex items-center justify-center">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
