import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { openProductModal } = useCart();

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to order ${product.name} priced at TSh ${product.price.toFixed(2)}${product.unit || ''}.`
  );
  const whatsappURL = `https://wa.me/255683186987?text=${whatsappMessage}`;

  return (
    <div
      className="
        bg-[#FFF9F3] dark:bg-[#1E1A17]
        rounded-2xl overflow-hidden
        shadow-md hover:shadow-xl
        transition-all duration-300 hover:scale-105 cursor-pointer
        border border-[#F5E6D3] dark:border-[#3A2F29]
      "
      onClick={() => openProductModal(product)}
    >
      <div className="h-48 overflow-hidden rounded-t-2xl">
        <img 
          src={product.imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#D35400] dark:text-[#F39C12] mb-1">
          {product.name}
        </h3>

        <p className="text-[#E67E22] dark:text-[#F39C12] font-bold">
          TSh {product.price.toFixed(2)}
          {product.unit && (
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
              {product.unit}
            </span>
          )}
        </p>

        {/* WhatsApp Order Button */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-3 inline-block
            bg-[#D35400] hover:bg-[#E67E22]
            text-white font-bold
            py-2 px-4 rounded-lg text-sm
            shadow-md
          "
          onClick={(e) => e.stopPropagation()}
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
