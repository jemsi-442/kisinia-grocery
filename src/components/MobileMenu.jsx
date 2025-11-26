import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';

const MobileMenu = ({ isOpen, onClose }) => {
  const { cartCount, setIsCartOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute top-16 right-0 w-64 bg-orange-50 dark:bg-gray-900 shadow-lg rounded-l-lg border border-orange-200 dark:border-orange-600">
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md font-medium ${
                    isActive
                      ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-orange-200 dark:hover:bg-orange-700'
                  } transition-colors`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md font-medium ${
                    isActive
                      ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-orange-200 dark:hover:bg-orange-700'
                  } transition-colors`
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-orange-200 dark:border-orange-600 flex items-center justify-between">
          <button
            onClick={() => {
              setIsCartOpen(true);
              onClose();
            }}
            className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <span>Cart ({cartCount})</span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
