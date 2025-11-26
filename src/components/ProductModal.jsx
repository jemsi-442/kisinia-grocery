import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductModal = () => {
  const { 
    isProductModalOpen, 
    setIsProductModalOpen, 
    currentProduct,
    addToCart
  } = useCart();
  
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isProductModalOpen ? 'hidden' : '';
  }, [isProductModalOpen]);

  if (!isProductModalOpen || !currentProduct) return null;

  const handleAddToCart = () => {
    addToCart(currentProduct.id);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm"
      onClick={() => setIsProductModalOpen(false)}
    >
      <div 
        className="relative bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button 
          onClick={() => setIsProductModalOpen(false)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-orange-100 dark:bg-gray-700 text-orange-700 dark:text-gray-300 hover:bg-orange-200 dark:hover:bg-gray-600 transition"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 overflow-y-auto">
          
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src={currentProduct.imageSrc} 
              alt={currentProduct.name}
              className="w-full max-w-md max-h-[350px] md:max-h-[420px] rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Content */}
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-wide">
              {currentProduct.name}
            </h2>

            {/* Price */}
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">
              ${currentProduct.price.toFixed(2)}
              {currentProduct.unit && (
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                  {currentProduct.unit}
                </span>
              )}
            </p>

            {/* Category Badge */}
            <p className="inline-block bg-orange-100 dark:bg-orange-700/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium mb-3">
              {currentProduct.category}
            </p>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {currentProduct.description}
            </p>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`w-full py-3 px-6 rounded-full font-semibold text-white transition duration-300 shadow-md ${
                addedToCart
                  ? 'bg-orange-700'
                  : 'bg-orange-600 hover:bg-orange-700'
              }`}
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
