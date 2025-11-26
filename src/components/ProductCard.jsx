import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { openProductModal } = useCart();

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order ${product.name} priced at TSh ${product.price.toFixed(2)}${product.unit || ''}.`
  );
  const whatsappURL = `https://wa.me/255683186987?text=${whatsappMessage}`;

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={() => openProductModal(product)}
    >
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img 
          src={product.imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          {product.name}
        </h3>

        <p className="text-green-600 dark:text-green-400 font-bold">
          TSh {product.price.toFixed(2)}
          {product.unit && (
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              {product.unit}
            </span>
          )}
        </p>

        {/* WhatsApp Order Button */}
        <a 
          href={whatsappURL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-3 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm"
          onClick={(e) => e.stopPropagation()} // prevents opening modal when clicking button
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
